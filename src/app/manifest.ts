import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Đại Phong - Công Ty Cổ Phần Công Nghiệp',
    short_name: 'Đại Phong',
    description:
      'Đơn vị hàng đầu trong thi công hệ thống MEP (điện, nước, điều hòa, phòng cháy chữa cháy)',
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
    categories: ['business', 'construction', 'engineering'],
    lang: 'vi',
    dir: 'ltr',
    orientation: 'portrait',
    scope: '/',
    prefer_related_applications: false,
  };
}
