import ImageWithFallback from '@/components/common/ImageWithFallback';
import LineTitle from '@/components/common/line-title';
import {
  CompanyInformationSection,
  HeroSection,
  LetterSection,
  OrganizationalStructureSection,
  Tab,
} from '@/components/feature/about';
import {
  MapSection,
  PartnerSection,
  VisionMissionSection,
} from '@/components/feature/homepage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Giới Thiệu Đại Phong - Nhà Sản Xuất Ống Gió, Miệng Gió, Phụ Kiện HVAC Uy Tín Hàng Đầu',
  description:
    'Đại Phong - Đơn vị sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC chất lượng cao tại Việt Nam. Tầm nhìn: Trở thành đơn vị uy tín hàng đầu. Sứ mệnh: Cung cấp sản phẩm đạt chuẩn, độ chính xác cao. Giá trị cốt lõi: "Ống gió chất lượng – Khởi nguồn không khí sạch"',
  keywords:
    'giới thiệu Đại Phong, nhà sản xuất ống gió, ống gió chất lượng cao, miệng gió, phụ kiện HVAC, van gió, damper, công ty ống gió, sản xuất HVAC, ống gió Việt Nam, nhà máy ống gió, tầm nhìn sứ mệnh',
  openGraph: {
    title: 'Giới Thiệu Đại Phong - Sản Xuất Ống Gió Chất Lượng Cao',
    description:
      'Đơn vị sản xuất ống gió, miệng gió, phụ kiện HVAC uy tín hàng đầu Việt Nam. Ống gió chất lượng – Khởi nguồn không khí sạch.',
    type: 'website',
    locale: 'vi_VN',
    url: 'https://www.onggiodaiphong.com/gioi-thieu',
    images: [
      {
        url: 'https://www.onggiodaiphong.com/images/about/hero-section.jpg',
        width: 1200,
        height: 630,
        alt: 'Giới thiệu Đại Phong - Nhà sản xuất ống gió',
      },
    ],
  },
  alternates: {
    canonical: '/gioi-thieu',
  },
};

export default function About() {
  // Structured data for the organization
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Công ty Cổ phần Công nghiệp Đại Phong',
    alternateName: 'Đại Phong',
    legalName: 'Công ty Cổ phần Công nghiệp Đại Phong',
    description:
      'Đơn vị sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC chất lượng cao tại Việt Nam',
    url: 'https://www.onggiodaiphong.com',
    logo: 'https://www.onggiodaiphong.com/images/logo/logo.png',
    image: 'https://www.onggiodaiphong.com/images/about/hero-section.jpg',
    telephone: '+84888885964',
    email: 'ongiodaiphong@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lô 3.2, Đường số 2, KCN Tân Đông Hiệp A, Phường Dĩ An',
      addressLocality: 'Thành phố Hồ Chí Minh',
      addressCountry: 'VN',
      postalCode: '700000',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Vietnam',
    },
    serviceType: [
      'Sản xuất ống gió tròn',
      'Sản xuất ống gió vuông',
      'Sản xuất miệng gió',
      'Sản xuất phụ kiện HVAC',
      'Gia công ống gió theo yêu cầu',
      'Van gió, damper',
      'Diffuser, grille',
      'Ống gió spiral',
      'Ống gió mềm',
      'Ống gió cách nhiệt',
    ],
    knowsAbout: [
      'Sản xuất ống gió',
      'Gia công HVAC',
      'Hệ thống thông gió',
      'Công nghệ sản xuất tự động',
      'Kiểm soát chất lượng ống gió',
    ],
    slogan: 'Ống gió chất lượng – Khởi nguồn không khí sạch',
    keywords:
      'ống gió, miệng gió, phụ kiện HVAC, ống gió chất lượng, sản xuất ống gió, không khí sạch',
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: 'https://www.onggiodaiphong.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Về chúng tôi',
        item: 'https://www.onggiodaiphong.com/about',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div
        className="w-full"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <HeroSection />

        <Tab currentPath="/gioi-thieu" />

        <LetterSection />

        <VisionMissionSection />

        <OrganizationalStructureSection />

        <CompanyInformationSection />

        <section className="py-5 bg-white" aria-labelledby="license-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-4 flex flex-col items-center justify-center">
              <header className="w-full flex flex-col items-center justify-center">
                <h2
                  id="license-heading"
                  className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center"
                >
                  GIẤY PHÉP
                </h2>
                <LineTitle alt="Đường viền trang trí tiêu đề giấy phép" />
              </header>

              <ImageWithFallback
                src="/images/about/giay-phep.pngx"
                alt="Giấy phép sản xuất ống thông gió chất lượng cao"
                width={400}
                height={600}
                className="w-1/2 h-auto mt-10"
              />
            </div>
          </div>
        </section>

        <PartnerSection />

        <MapSection />
      </div>
    </>
  );
}
