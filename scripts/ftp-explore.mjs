#!/usr/bin/env node
/**
 * FTP debug utility — lists the FTP session's working directory and
 * inspects public_html. Not part of the build/deploy pipeline. Handy
 * to run when the remote structure is unclear or after a deploy fails.
 *
 * Usage: FTP_HOST=... FTP_USER=... FTP_PASS=... node scripts/ftp-explore.mjs
 */
import { Client } from 'basic-ftp';

const client = new Client(30_000);
client.ftp.verbose = false;

try {
  await client.access({
    host: process.env.FTP_HOST,
    port: parseInt(process.env.FTP_PORT || '21', 10),
    user: process.env.FTP_USER,
    password: process.env.FTP_PASS,
    secure: false,
  });

  console.log(`Current working directory: ${await client.pwd()}`);

  console.log('\n=== Root listing ===');
  const rootFiles = await client.list();
  rootFiles.forEach(f => {
    const kind = f.type === 2 ? 'DIR ' : 'FILE';
    console.log(`  ${kind} ${f.size.toString().padStart(10)} ${f.name}`);
  });

  const publicHtml = rootFiles.find(f => f.name === 'public_html');
  if (publicHtml) {
    console.log('\n=== public_html/ listing (first 15) ===');
    await client.cd('public_html');
    const inside = await client.list();
    inside.slice(0, 15).forEach(f => {
      const kind = f.type === 2 ? 'DIR ' : 'FILE';
      console.log(`  ${kind} ${f.size.toString().padStart(10)} ${f.name}`);
    });
    if (inside.length > 15) console.log(`  ...and ${inside.length - 15} more`);
    console.log(`\n  Total: ${inside.length} entries in public_html/`);
  }
} finally {
  client.close();
}
