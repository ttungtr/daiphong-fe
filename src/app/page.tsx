import HomePageClient from '@/components/feature/homepage/HomePageClient';
import { Metadata } from 'next';

// SEO Metadata for homepage
export const metadata: Metadata = {
  title:
    'Đại Phong - Sản Xuất Ống Gió, Miệng Gió, Phụ Kiện HVAC Chất Lượng Hàng Đầu Việt Nam',
  description:
    'Đại Phong - Đơn vị sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC chất lượng cao với công nghệ hiện đại. "Ống gió chất lượng – Khởi nguồn không khí sạch". Sản phẩm đạt chuẩn, độ chính xác cao, đảm bảo tiến độ. Tư vấn miễn phí: 0888885964',
  keywords: [
    'Đại Phong',
    'sản xuất ống gió',
    'ống gió chất lượng',
    'miệng gió',
    'phụ kiện HVAC',
    'ống gió tròn',
    'ống gió vuông',
    'ống gió spiral',
    'van gió',
    'damper',
    'diffuser',
    'grille',
    'thiết bị thông gió',
    'hệ thống thông gió',
    'ống gió mềm',
    'ống gió cách nhiệt',
    'gia công ống gió',
    'nhà máy ống gió',
    'ống gió Việt Nam',
    'không khí sạch',
    'HVAC Vietnam',
  ],
  authors: [{ name: 'Công ty Cổ phần Công nghiệp Đại Phong' }],
  creator: 'Đại Phong',
  publisher: 'Đại Phong',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://www.onggiodaiphong.com',
    title:
      'Đại Phong - Sản Xuất Ống Gió, Miệng Gió, Phụ Kiện HVAC Chất Lượng Cao',
    description:
      'Đơn vị sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC uy tín hàng đầu Việt Nam. Công nghệ hiện đại, chất lượng đảm bảo, độ chính xác cao. "Ống gió chất lượng – Khởi nguồn không khí sạch".',
    images: [
      {
        url: 'https://www.onggiodaiphong.com/images/banners/banner-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Đại Phong - Sản xuất ống gió chất lượng cao',
      },
    ],
    siteName: 'Đại Phong',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@onggiodaiphong',
    creator: '@onggiodaiphong',
    title: 'Đại Phong - Sản Xuất Ống Gió Chất Lượng',
    description:
      'Đơn vị sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC uy tín hàng đầu Việt Nam',
    images: ['https://www.onggiodaiphong.com/images/banners/banner-1.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <HomePageClient />;
}
