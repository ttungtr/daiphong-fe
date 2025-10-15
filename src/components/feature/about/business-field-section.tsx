import ImageWithFallback from '@/components/common/ImageWithFallback';
import { servicesData } from '@/data/services';
import { FunctionComponent } from 'react';

export const BusinessFieldSection: FunctionComponent = () => {
  // Structured data for business services
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
    alternateName: '',
    description: 'Nhà thầu thi công hệ thống cơ điện (MEP) chuyên nghiệp',
    serviceType: servicesData.map((field) => field.title),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dịch vụ lĩnh vực hoạt động',
      itemListElement: servicesData.map((field, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: field.title,
          description: `Dịch vụ ${field.title.toLowerCase()} chuyên nghiệp của Công Ty Cổ Phần Công Nghiệp Đại Phong`,
          provider: {
            '@type': 'Organization',
            name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
          },
        },
      })),
    },
    areaServed: 'Vietnam',
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section
        className='py-5 bg-white'
        aria-labelledby='business-fields-heading'
        itemScope
        itemType='https://schema.org/Organization'
      >
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto space-y-10'>
            <header className='w-full flex flex-col items-center justify-center'>
              <h2
                id='business-fields-heading'
                className='text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center'
                itemProp='name'
              >
                LĨNH VỰC HOẠT ĐỘNG
              </h2>
              {/* <ImageWithFallback
                src="/images/titlebg.pngx"
                alt="Đường viền trang trí tiêu đề lĩnh vực hoạt động"
                width={300}
                height={100}
                className="w-56 h-auto"
                priority
              /> */}
            </header>

            <div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              itemScope
              itemType='https://schema.org/ItemList'
              aria-label='Danh sách lĩnh vực hoạt động của Công Ty Cổ Phần Công Nghiệp Đại Phong'
            >
              {servicesData.map((field, index) => (
                <article
                  key={field.title}
                  className='group block bg-white border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary-blue-1 transition-all duration-300'
                  itemScope
                  itemType='https://schema.org/Service'
                  itemProp='itemListElement'
                >
                  <meta itemProp='position' content={String(index + 1)} />
                  <div className='relative'>
                    <ImageWithFallback
                      src={field.images[0].url}
                      alt={`${field.images[0].alt} - Dịch vụ ${field.title} chuyên nghiệp của Công Ty Cổ Phần Công Nghiệp Đại Phong trong lĩnh vực MEP`}
                      width={300}
                      height={200}
                      className='w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300'
                      sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    />
                  </div>
                  <div className='p-4'>
                    <h4
                      className='text-base sm:text-lg md:text-xl font-semibold text-gray-900 group-hover:text-primary-blue-1 transition-colors duration-300 mb-2'
                      itemProp='name'
                    >
                      {field.title}
                    </h4>
                    <p className='text-gray-600 text-xs sm:text-sm md:text-base line-clamp-2'>
                      {field.description}
                    </p>
                    <meta
                      itemProp='description'
                      content={`Dịch vụ ${field.title.toLowerCase()} chuyên nghiệp, uy tín với đội ngũ kỹ thuật giàu kinh nghiệm`}
                    />
                    <meta
                      itemProp='provider'
                      content='Công Ty Cổ Phần Công Nghiệp Đại Phong'
                    />
                    <meta itemProp='areaServed' content='Vietnam' />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
