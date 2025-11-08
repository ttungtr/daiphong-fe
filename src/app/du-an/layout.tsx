import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dự Án | Hệ Thống Điện & Cơ Điện | Đại Phong',
  description:
    'Khám phá các dự án tiêu biểu của Công Ty Cổ Phần Công Nghiệp Đại Phong. Chúng tôi tự hào với các dự án hệ thống điện, điện nhẹ,điều hòa thông gió, cấp thoát nước và phòng cháy chữa cháy.',
  keywords:
    'dự án, hệ thống điện, điện nhẹ,điều hòa thông gió, cấp thoát nước, phòng cháy chữa cháy, cơ điện, xây dựng, Đại Phong',
  authors: [{ name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Dự Án | Hệ Thống Điện & Cơ Điện | Đại Phong',
    description:
      'Khám phá các dự án tiêu biểu của Công Ty Cổ Phần Công Nghiệp Đại Phong. Chúng tôi tự hào với các dự án hệ thống điện, điện nhẹ,điều hòa thông gió, cấp thoát nước và phòng cháy chữa cháy.',
    type: 'website',
    locale: 'vi_VN',
    url: 'https://www.onggiodaiphong.com/du-an',
    siteName: 'Đại Phong',
    images: [
      {
        url: '/images/projects/hero-section.pngx',
        width: 1200,
        height: 630,
        alt: 'Công trình - Đại Phong',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dự Án | Hệ Thống Điện & Cơ Điện | Đại Phong',
    description:
      'Khám phá các dự án tiêu biểu của Công Ty Cổ Phần Công Nghiệp Đại Phong.',
    images: ['/images/projects/hero-section.pngx'],
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
