export interface CatalogueItem {
  id: string;
  name: string;
  thumbnail: string;
  file: string;
}

export const catalogues: CatalogueItem[] = [
  {
    id: 'c-001',
    name: 'Catalogue Ống gió & Phụ kiện',
    thumbnail: '/images/fields/he-thong-dien-nhe.pngx',
    file: '/pdfs/Phi-Long-BCTC-2024.pdf',
  },
  {
    id: 'c-002',
    name: 'Catalogue Van gió',
    thumbnail: '/images/fields/he-thong-dien.jpeg',
    file: '/pdfs/Phi-Long-BCTC-2023.pdf',
  },
  {
    id: 'c-003',
    name: 'Catalogue Miệng gió',
    thumbnail: '/images/fields/he-thong-cap-thoat-nuoc.pngx',
    file: '/pdfs/Phi-Long-BCTC-2024.pdf',
  },
];
