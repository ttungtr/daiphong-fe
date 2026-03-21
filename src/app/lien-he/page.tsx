import { Metadata } from 'next';
import { ContactPageContent } from './ContactPageContent';

export const metadata: Metadata = {
  title:
    'Liên Hệ Đại Phong | Tư Vấn Sản Xuất Ống Gió, Miệng Gió, Phụ Kiện HVAC',
  description:
    'Liên hệ với Đại Phong để được tư vấn miễn phí về sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC. Hotline: 0888885964. Email: ongiodaiphong@gmail.com. Địa chỉ: Lô 3.2, Đường số 2, KCN Tân Đông Hiệp A, Dĩ An, TP.HCM',
  keywords: [
    'liên hệ Đại Phong',
    'tư vấn ống gió',
    'báo giá ống gió',
    'sản xuất ống gió',
    'gia công miệng gió',
    'phụ kiện HVAC',
    'hotline ống gió',
    'đặt hàng ống gió',
    'tư vấn miễn phí',
    'sản xuất theo yêu cầu',
    'ống gió tròn',
    'ống gió vuông',
  ],
  openGraph: {
    title: 'Liên Hệ Đại Phong - Sản Xuất Ống Gió Chất Lượng',
    description:
      'Liên hệ với Đại Phong để được tư vấn miễn phí về sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC chất lượng cao',
    type: 'website',
    locale: 'vi_VN',
    url: 'https://www.onggiodaiphong.com/lien-he',
    siteName: 'Đại Phong',
    images: [
      {
        url: 'https://www.onggiodaiphong.com/images/contact/hero-section.jpg',
        width: 1200,
        height: 630,
        alt: 'Liên hệ Đại Phong',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Liên Hệ Đại Phong',
    description:
      'Liên hệ với Đại Phong để được tư vấn miễn phí về sản xuất ống gió, miệng gió, phụ kiện HVAC',
  },
  alternates: {
    canonical: '/lien-he',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function ContactPage() {
  // Structured data for contact page
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Liên hệ - Đại Phong',
    description:
      'Trang liên hệ của Đại Phong - Đơn vị sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC chất lượng cao',
    url: 'https://www.onggiodaiphong.com/lien-he',
    mainEntity: {
      '@type': 'Organization',
      name: 'Công ty Cổ phần Công Nghiệp Đại Phong VN',
      url: 'https://www.onggiodaiphong.com',
      logo: 'https://www.onggiodaiphong.com/images/logo/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+84888885964',
        contactType: 'sales',
        availableLanguage: 'Vietnamese',
        areaServed: 'VN',
      },
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Công ty Cổ phần Công Nghiệp Đại Phong VN',
    alternateName: 'Đại Phong',
    url: 'https://www.onggiodaiphong.com',
    logo: 'https://www.onggiodaiphong.com/images/logo/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84888885964',
      contactType: 'sales',
      email: 'ongiodaiphong@gmail.com',
      availableLanguage: 'Vietnamese',
      areaServed: 'VN',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lô 3.2, Đường số 2, KCN Tân Đông Hiệp A, Phường Dĩ An',
      addressLocality: 'Thành phố Hồ Chí Minh',
      addressCountry: 'VN',
      postalCode: '700000',
    },
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <ContactPageContent />
    </>
  );
}
