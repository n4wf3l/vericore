#!/usr/bin/env node
/**
 * FTP deployment script
 *
 * Usage (never hardcode credentials):
 *   FTP_HOST=... FTP_USER=... FTP_PASS=... FTP_REMOTE=/public_html \
 *     node scripts/deploy-ftp.mjs [--dry-run]
 */

import { Client } from 'basic-ftp';
import { existsSync, statSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');

const cfg = {
  host: process.env.FTP_HOST,
  port: parseInt(process.env.FTP_PORT || '21', 10),
  user: process.env.FTP_USER,
  password: process.env.FTP_PASS,
  secure: process.env.FTP_SECURE === 'true',
  remote: process.env.FTP_REMOTE && !process.env.FTP_REMOTE.startsWith('C:') ? process.env.FTP_REMOTE : '.',
};

const missing = Object.entries({
  FTP_HOST: cfg.host,
  FTP_USER: cfg.user,
  FTP_PASS: cfg.password,
}).filter(([, v]) => !v).map(([k]) => k);

if (missing.length) {
  console.error(`❌ Missing env vars: ${missing.join(', ')}`);
  process.exit(1);
}

if (!existsSync(DIST_DIR) || !statSync(DIST_DIR).isDirectory()) {
  console.error(`❌ dist/ not found. Run 'npm run build:seo' first.`);
  process.exit(1);
}

const dryRun = process.argv.includes('--dry-run');
const client = new Client(30_000);
client.ftp.verbose = false;

try {
  console.log(`→ Connecting to ${cfg.host}:${cfg.port} as ${cfg.user}...`);
  await client.access({
    host: cfg.host,
    port: cfg.port,
    user: cfg.user,
    password: cfg.password,
    secure: cfg.secure,
  });
  console.log('✅ Connected.');

  console.log(`→ Checking remote path: ${cfg.remote} (session pwd: ${await client.pwd()})`);
  if (cfg.remote !== '.') await client.ensureDir(cfg.remote);
  const remoteFiles = await client.list();
  console.log(`   Remote contains ${remoteFiles.length} entries at ${cfg.remote}`);
  remoteFiles.slice(0, 10).forEach(f => {
    console.log(`   - ${f.type === 2 ? '[DIR] ' : '      '}${f.name}`);
  });
  if (remoteFiles.length > 10) console.log(`   ...and ${remoteFiles.length - 10} more`);

  if (dryRun) {
    console.log('\n💡 Dry-run mode. Skipping upload.');
    client.close();
    process.exit(0);
  }

  console.log(`\n→ Uploading dist/ to ${cfg.remote}...`);
  const started = Date.now();

  client.trackProgress(info => {
    if (info.name && info.type === 'upload') {
      process.stdout.write(`\r   ${info.name.slice(0, 60).padEnd(60)} ${(info.bytes / 1024).toFixed(1)} KB`);
    }
  });

  await client.uploadFromDir(DIST_DIR, cfg.remote);
  client.trackProgress();

  const elapsed = ((Date.now() - started) / 1000).toFixed(1);
  console.log(`\n\n✅ Upload complete in ${elapsed}s`);
} catch (err) {
  console.error(`\n❌ Deployment failed:`, err.message);
  process.exit(1);
} finally {
  client.close();
}
