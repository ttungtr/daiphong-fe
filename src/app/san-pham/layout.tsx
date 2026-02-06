import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sản Phẩm Ống Gió, Miệng Gió, Phụ Kiện HVAC | Đại Phong',
  description:
    'Danh sách sản phẩm ống gió, miệng gió, phụ kiện HVAC chất lượng cao từ Đại Phong. Ống gió tròn, ống gió vuông, ống gió spiral, van gió, damper, diffuser, grille. Sản xuất theo yêu cầu với độ chính xác cao.',
  keywords:
    'sản phẩm ống gió, ống gió tròn, ống gió vuông, ống gió spiral, miệng gió, van gió, damper, diffuser, grille, phụ kiện HVAC, ống gió mềm, ống gió cách nhiệt, sản phẩm thông gió',
  authors: [{ name: 'Công ty Cổ phần Công nghiệp Đại Phong' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Sản Phẩm Ống Gió, Miệng Gió, Phụ Kiện HVAC | Đại Phong',
    description:
      'Danh sách sản phẩm ống gió, miệng gió, phụ kiện HVAC chất lượng cao từ Đại Phong. Sản xuất theo yêu cầu với độ chính xác cao.',
    type: 'website',
    locale: 'vi_VN',
    url: 'https://www.onggiodaiphong.com/san-pham',
    siteName: 'Đại Phong',
    images: [
      {
        url: 'https://www.onggiodaiphong.com/images/products/product-1.png',
        width: 1200,
        height: 630,
        alt: 'Sản phẩm ống gió Đại Phong',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sản Phẩm Ống Gió, Miệng Gió, Phụ Kiện HVAC | Đại Phong',
    description:
      'Danh sách sản phẩm ống gió, miệng gió, phụ kiện HVAC chất lượng cao từ Đại Phong.',
    images: ['https://www.onggiodaiphong.com/images/products/product-1.png'],
  },
  alternates: {
    canonical: '/san-pham',
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

