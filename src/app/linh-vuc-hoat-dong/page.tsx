import ImageWithFallback from '@/components/common/ImageWithFallback';
import { MapSection } from '@/components/feature/homepage';
import { HeroSection } from '@/components/feature/services';
import { servicesData } from '@/data/services';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lĩnh Vực Hoạt Động | Hệ Thống Điện & Cơ Điện | Đại Phong',
  description:
    'Công Ty Cổ Phần Công Nghiệp Đại Phong chuyên cung cấp dịch vụ hệ thống điện, điện nhẹ,điều hòa thông gió, cấp thoát nước và phòng cháy chữa cháy. Giải pháp cơ điện toàn diện cho công trình.',
  keywords:
    'hệ thống điện, điện nhẹ,điều hòa thông gió, cấp thoát nước, phòng cháy chữa cháy, cơ điện, xây dựng, Đại Phong',
  authors: [{ name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Lĩnh Vực Hoạt Động | Hệ Thống Điện & Cơ Điện | Đại Phong',
    description:
      'Công Ty Cổ Phần Công Nghiệp Đại Phong chuyên cung cấp dịch vụ hệ thống điện, điện nhẹ,điều hòa thông gió, cấp thoát nước và phòng cháy chữa cháy. Giải pháp cơ điện toàn diện cho công trình.',
    type: 'website',
    locale: 'vi_VN',
    url: 'https://www.philongcorp.vn/services',
    siteName: 'Đại Phong',
    images: [
      {
        url: '/images/services/hero-section.pngx',
        width: 1200,
        height: 630,
        alt: 'Lĩnh vực hoạt động - Đại Phong',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lĩnh Vực Hoạt Động | Hệ Thống Điện & Cơ Điện | Đại Phong',
    description:
      'Công Ty Cổ Phần Công Nghiệp Đại Phong chuyên cung cấp dịch vụ hệ thống điện, điện nhẹ,điều hòa thông gió, cấp thoát nước và phòng cháy chữa cháy.',
    images: ['/images/services/hero-section.pngx'],
  },
  alternates: {
    canonical: '/services',
  },
};

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
  alternateName: 'Đại Phong',
  url: 'https://www.philongcorp.vn',
  description:
    'Công Ty Cổ Phần Công Nghiệp Đại Phong chuyên cung cấp dịch vụ hệ thống điện, điện nhẹ,điều hòa thông gió, cấp thoát nước và phòng cháy chữa cháy',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'VN',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dịch vụ cơ điện',
    itemListElement: servicesData.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: `Dịch vụ ${service.title.toLowerCase()} chuyên nghiệp`,
        image: service.images[0].url,
        url: `https://www.philongcorp.vn${service.link}`,
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
            <ImageWithFallback
              src="/images/titlebg.jpg"
              alt="Đường viền trang trí tiêu đề"
              width={300}
              height={100}
              className="w-56 h-auto"
              priority
            />
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
