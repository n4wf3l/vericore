export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl?: string;
}

export const partners: Partner[] = [
  {
    id: 'goodkat',
    name: 'GoodKat Take Away',
    logoUrl: '/the-good-kat.png'
  },
  {
    id: 'ragusana',
    name: 'Chez Ragusana',
    logoUrl: '/chez-ragusana.png'
  }
];
