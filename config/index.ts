import type { Metadata } from 'next'

export const siteConfig: Metadata = {
  title: 'OPREMI ME: Umjetno inteligentni dizajner prostorija',
  description: 'Dizajnirajte svoj dom iz snova. Pretvorite svoje ideje u profesionalne dizajne interijera pomoću našeg AI softvera jednostavnog za korištenje.',
  keywords: [
    'sobni oblikovalec',
    'umetna inteligenca',
    'design',
    'dezajn',
    'oblikuj',
    'notranji prostori',
  ] as Array<string>,
  authors: {
    name: 'Prepad d.o.o.',
    url: 'https://prepad.si',
  },
} as const
