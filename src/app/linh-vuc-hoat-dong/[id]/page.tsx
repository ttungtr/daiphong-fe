import ImageWithFallback from '@/components/common/ImageWithFallback';
import LineTitle from '@/components/common/line-title';
import { MapSection } from '@/components/feature/homepage';
import { HeroSection } from '@/components/feature/services/hero-section';
import { servicesData } from '@/data/services';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = servicesData.find((service) => service.id === id);

  if (!service) {
    return {
      title: 'Không tìm thấy dịch vụ | Đại Phong',
    };
  }

  return {
    title: `${service.title} | Công Ty Cổ Phần Công Nghiệp Đại Phong`,
    description: `Dịch vụ ${service.title.toLowerCase()} chuyên nghiệp từ Công Ty Cổ Phần Công Nghiệp Đại Phong. Giải pháp ${service.title.toLowerCase()} hiệu quả cho công trình.`,
    keywords: `${service.title.toLowerCase()}, ${service.keywords?.join(
      ', '
    )}, cơ điện, xây dựng, Đại Phong`,
    authors: [{ name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong' }],
    robots: 'index, follow',
    openGraph: {
      title: `${service.title} | Đại Phong`,
      description: `Dịch vụ ${service.title.toLowerCase()} chuyên nghiệp từ Công Ty Cổ Phần Công Nghiệp Đại Phong.`,
      type: 'website',
      locale: 'vi_VN',
      url: `https://www.onggiodaiphong.com/linh-vuc-hoat-dong/${service.id}`,
      siteName: 'Đại Phong',
      images: [
        {
          url: service.images[0].url,
          width: 1200,
          height: 630,
          alt: service.images[0].alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Đại Phong`,
      description: `Dịch vụ ${service.title.toLowerCase()} chuyên nghiệp từ Công Ty Cổ Phần Công Nghiệp Đại Phong.`,
      images: [service.images[0].url],
    },
    alternates: {
      canonical: `/linh-vuc-hoat-dong/${service.id}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = servicesData.find((service) => service.id === id);

  if (!service) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description:
      service.description ||
      `Dịch vụ ${service.title.toLowerCase()} chuyên nghiệp`,
    image: service.images[0].url,
    provider: {
      '@type': 'Organization',
      name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
      alternateName: 'Đại Phong',
      url: 'https://www.onggiodaiphong.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'VN',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'Vietnam',
    },
    serviceType: service.title,
    url: `https://www.onggiodaiphong.com/linh-vuc-hoat-dong/${service.id}`,
  };

  const breadcrumbStructuredData = {
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
        name: 'Lĩnh vực hoạt động',
        item: 'https://www.onggiodaiphong.com/linh-vuc-hoat-dong',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://www.onggiodaiphong.com/linh-vuc-hoat-dong/${service.id}`,
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <div className="w-full">
        <HeroSection
          breadcrumbs={[
            { label: 'Trang chủ', href: '/', isActive: false },
            {
              label: 'Lĩnh vực hoạt động',
              href: '/linh-vuc-hoat-dong',
              isActive: false,
            },
            {
              label: service.title,
              href: `/linh-vuc-hoat-dong/${service.id}`,
              isActive: true,
            },
          ]}
        />

        <div className="max-w-7xl mx-auto space-y-4 py-10 px-4 sm:px-6 lg:px-8">
          <header className="w-full flex flex-col items-center justify-center ">
            {/* <h1
              id="services-heading"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-blue-1 text-center leading-tight"
            >
              {service.title.toUpperCase()}
            </h1> */}
            <h1
              id="services-heading"
              className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center uppercase"
            >
              {service.title.toUpperCase()}
            </h1>
            <LineTitle alt={`Đường viền trang trí tiêu đề ${service.title}`} />
          </header>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-12">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center max-w-4xl mx-auto">
              {service.detailedDescription || service.description}
            </p>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={service.images[1].url}
                    alt={service.images[1].alt}
                    width={600}
                    height={400}
                    className="w-full h-[300px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={service.images[2].url}
                    alt={service.images[2].alt}
                    width={600}
                    height={400}
                    className="w-full h-[300px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Các Dịch Vụ Cung Cấp
              </h3>
              <div className="w-16 h-1 bg-primary-blue-1 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-primary-blue-1 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-primary-blue-1 rounded-full flex items-center justify-center group-hover:bg-[#0f4c8c] transition-colors duration-300">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium leading-relaxed text-sm sm:text-base md:text-lg">
                        {feature}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Dịch Vụ Khác
              </h3>
              <div className="w-16 h-1 bg-primary-blue-1 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData
                .filter((s) => s.id !== service.id)
                .slice(0, 4)
                .map((relatedService) => (
                  <Link
                    key={relatedService.id}
                    href={relatedService.link}
                    className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-primary-blue-1 transition-all duration-300"
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
                      <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 group-hover:text-primary-blue-1 transition-colors duration-300 mb-2">
                        {relatedService.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base line-clamp-2">
                        {relatedService.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* <CTASection /> */}
        <MapSection />
        {/* <PartnerSection /> */}
      </div>
    </>
  );
}
