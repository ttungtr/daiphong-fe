import { Metadata } from 'next';
import { servicesData } from '@/data/services';
import { ServicesPageContent } from './ServicesPageContent';

export const metadata: Metadata = {
  title:
    'Lĩnh Vực Hoạt Động | Sản Xuất Ống Gió, Miệng Gió, Phụ Kiện HVAC | Đại Phong',
  description:
    'Đại Phong chuyên sản xuất và gia công ống gió tròn, ống gió vuông, ống gió spiral, miệng gió, van gió, damper, diffuser, grille và các phụ kiện HVAC. Sản phẩm chất lượng cao, đạt chuẩn, độ chính xác cao cho hệ thống thông gió.',
  keywords:
    'ống gió tròn, ống gió vuông, ống gió spiral, miệng gió, van gió, damper, diffuser, grille, phụ kiện HVAC, ống gió mềm, ống gió cách nhiệt, sản xuất ống gió, gia công ống gió, Đại Phong',
  authors: [{ name: 'Công ty Cổ phần Công Nghiệp Đại Phong VN' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Lĩnh Vực Hoạt Động | Sản Xuất Ống Gió & Phụ Kiện HVAC | Đại Phong',
    description:
      'Đại Phong chuyên sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC chất lượng cao. Ống gió tròn, vuông, spiral, van gió, damper, diffuser và các sản phẩm thông gió chuyên nghiệp.',
    type: 'website',
    locale: 'vi_VN',
    url: 'https://www.onggiodaiphong.com/linh-vuc-hoat-dong',
    siteName: 'Đại Phong',
    images: [
      {
        url: 'https://www.onggiodaiphong.com/images/services/hero-section.jpg',
        width: 1200,
        height: 630,
        alt: 'Lĩnh vực hoạt động - Sản xuất ống gió Đại Phong',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lĩnh Vực Hoạt Động | Sản Xuất Ống Gió & Phụ Kiện HVAC | Đại Phong',
    description:
      'Đại Phong chuyên sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC chất lượng cao.',
    images: ['https://www.onggiodaiphong.com/images/services/hero-section.jpg'],
  },
  alternates: {
    canonical: '/linh-vuc-hoat-dong',
  },
};

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Công ty Cổ phần Công Nghiệp Đại Phong VN',
  alternateName: 'Đại Phong',
  url: 'https://www.onggiodaiphong.com',
  logo: 'https://www.onggiodaiphong.com/images/logo/logo.png',
  description:
    'Đại Phong chuyên sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC chất lượng cao',
  telephone: '+84888885964',
  email: 'ongiodaiphong@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lô 3.2, Đường số 2, KCN Tân Đông Hiệp A, Phường Dĩ An',
    addressLocality: 'Thành phố Hồ Chí Minh',
    addressCountry: 'VN',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sản phẩm ống gió và phụ kiện HVAC',
    itemListElement: servicesData.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: service.title,
        description: `Sản xuất và gia công ${service.title.toLowerCase()} chất lượng cao`,
        image: service.images[0].url,
        url: `https://www.onggiodaiphong.com${service.link}`,
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicesPageContent />
    </>
  );
}
