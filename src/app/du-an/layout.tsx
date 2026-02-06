import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dự Án Ống Gió & Hệ Thống Thông Gió | Đại Phong',
  description:
    'Khám phá các dự án ống gió và hệ thống thông gió tiêu biểu của Đại Phong. Chúng tôi tự hào cung cấp ống gió, miệng gió, phụ kiện HVAC chất lượng cao cho các công trình lớn nhỏ trên toàn quốc.',
  keywords:
    'dự án ống gió, dự án HVAC, hệ thống thông gió, công trình ống gió, lắp đặt ống gió, dự án thông gió, ống gió công nghiệp, ống gió thương mại, Đại Phong',
  authors: [{ name: 'Công ty Cổ phần Công nghiệp Đại Phong' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Dự Án Ống Gió & Hệ Thống Thông Gió | Đại Phong',
    description:
      'Khám phá các dự án ống gió và hệ thống thông gió tiêu biểu của Đại Phong. Cung cấp ống gió, miệng gió, phụ kiện HVAC chất lượng cao.',
    type: 'website',
    locale: 'vi_VN',
    url: 'https://www.onggiodaiphong.com/du-an',
    siteName: 'Đại Phong',
    images: [
      {
        url: 'https://www.onggiodaiphong.com/images/banners/banner-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Dự án ống gió - Đại Phong',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dự Án Ống Gió & Hệ Thống Thông Gió | Đại Phong',
    description:
      'Khám phá các dự án ống gió và hệ thống thông gió tiêu biểu của Đại Phong.',
    images: ['https://www.onggiodaiphong.com/images/banners/banner-2.jpg'],
  },
  alternates: {
    canonical: '/du-an',
  },
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
