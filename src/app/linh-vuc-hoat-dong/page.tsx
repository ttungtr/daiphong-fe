import ImageWithFallback from '@/components/common/ImageWithFallback';
import LineTitle from '@/components/common/line-title';
import { MapSection } from '@/components/feature/homepage';
import { HeroSection } from '@/components/feature/services';
import { servicesData } from '@/data/services';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lĩnh Vực Hoạt Động | Sản Xuất Ống Gió, Miệng Gió, Phụ Kiện HVAC | Đại Phong',
  description:
    'Đại Phong chuyên sản xuất và gia công ống gió tròn, ống gió vuông, ống gió spiral, miệng gió, van gió, damper, diffuser, grille và các phụ kiện HVAC. Sản phẩm chất lượng cao, đạt chuẩn, độ chính xác cao cho hệ thống thông gió.',
  keywords:
    'ống gió tròn, ống gió vuông, ống gió spiral, miệng gió, van gió, damper, diffuser, grille, phụ kiện HVAC, ống gió mềm, ống gió cách nhiệt, sản xuất ống gió, gia công ống gió, Đại Phong',
  authors: [{ name: 'Công ty Cổ phần Công nghiệp Đại Phong' }],
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
  name: 'Công ty Cổ phần Công nghiệp Đại Phong',
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

      <div className="w-full">
        <HeroSection />

        <div className="max-w-7xl mx-auto space-y-4 py-10 px-4 sm:px-6 lg:px-8">
          <header className="w-full flex flex-col items-center justify-center">
            <h1
              id="services-heading"
              className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center"
            >
              LĨNH VỰC HOẠT ĐỘNG
            </h1>
            <LineTitle alt="Đường viền trang trí tiêu đề Lĩnh vực hoạt động" />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {servicesData.map((relatedService) => (
              <Link
                key={relatedService.id}
                href={relatedService.link}
                className="group block bg-white border border-gray-200  overflow-hidden hover:shadow-lg hover:border-primary-blue-1 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              >
                <div className="aspect-w-16 aspect-h-10">
                  <ImageWithFallback
                    src={relatedService.images[0].url}
                    alt={relatedService.images[0].alt}
                    width={300}
                    height={200}
                    className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-blue-1 transition-colors duration-300 mb-2">
                    {relatedService.title.toUpperCase()}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base line-clamp-2">
                    {relatedService.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* <CTASection /> */}
        <MapSection />
        {/* <PartnerSection /> */}
      </div>
    </>
  );
}
