import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Đại Phong - Sản Xuất Ống Gió, Miệng Gió, Phụ Kiện HVAC',
    short_name: 'Đại Phong',
    description:
      'Đơn vị sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC chất lượng cao. Ống gió chất lượng – Khởi nguồn không khí sạch.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/images/logo-192.pngx',
        sizes: '192x192',
        type: 'image/pngx',
      },
      {
        src: '/images/logo-512.pngx',
        sizes: '512x512',
        type: 'image/pngx',
      },
    ],
    categories: ['business', 'manufacturing', 'hvac', 'ventilation'],
    lang: 'vi',
    dir: 'ltr',
    orientation: 'portrait',
    scope: '/',
    prefer_related_applications: false,
  };
}
