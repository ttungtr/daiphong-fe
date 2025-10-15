import ImageWithFallback from '@/components/common/ImageWithFallback';
import { visionMissionData } from '@/data/about';
import { FunctionComponent } from 'react';

export const VisionMissionSection: FunctionComponent = () => {
  // Structured data for Vision and Mission
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
    alternateName: '',
    description: 'Nhà thầu thi công hệ thống cơ điện (MEP) hàng đầu Việt Nam',
    mission:
      'Đáp ứng mọi nhu cầu và đem lại giá trị, chất lượng cho công trình. Mang đến cho khách hàng sự tin tưởng, an tâm và hài lòng.',
    values: 'Nâng Tầm Chất Lượng, Bền Vững Tương Lai',
    foundingDate: '2003',
    areaServed: 'Vietnam',
    knowsAbout: [
      'Hệ thống cơ điện (MEP)',
      'Thi công xây dựng',
      'Hệ thống điện',
      'Hệ thống PCCC',
      'Lắp đặt thang máy',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Giấy phép đăng ký kinh doanh',
        description:
          'Được cấp phép hoạt động trong lĩnh vực xây dựng và cơ điện',
      },
    ],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section
        className='py-5 bg-white'
        aria-labelledby='vision-mission-heading'
        itemScope
        itemType='https://schema.org/Organization'
      >
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto space-y-10'>
            <header className='w-full flex flex-col items-center justify-center'>
              <h2
                id='vision-mission-heading'
                className='text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center uppercase'
                itemProp='name'
              >
                Tầm nhìn - Sứ mệnh
              </h2>
              {/* <ImageWithFallback
                src="/images/titlebg.pngx"
                alt="Đường viền trang trí tiêu đề tầm nhìn sứ mệnh Công Ty Cổ Phần Công Nghiệp Đại Phong"
                width={300}
                height={100}
                className="w-56 h-auto"
                priority
              /> */}
            </header>

            <div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
              itemScope
              itemType='https://schema.org/ItemList'
              aria-label='Tầm nhìn, sứ mệnh, giá trị cốt lõi và triết lý kinh doanh của Công Ty Cổ Phần Công Nghiệp Đại Phong'
            >
              {visionMissionData.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className='w-full border border-gray-200'
                  itemScope
                  itemType='https://schema.org/CreativeWork'
                  itemProp='itemListElement'
                >
                  <meta itemProp='position' content={String(index + 1)} />
                  <ImageWithFallback
                    src={item.imageUrl}
                    alt={`${
                      item.imageAlt
                    } của Công Ty Cổ Phần Công Nghiệp Đại Phong - ${item.description.replace(
                      /\n/g,
                      ', '
                    )}`}
                    width={300}
                    height={300}
                    className='w-full h-auto aspect-video object-cover object-center'
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
                  />
                  <div className='p-4 space-y-4'>
                    <h3
                      className='text-lg font-bold text-gray-900 mt-2 text-center uppercase'
                      itemProp='name'
                    >
                      {item.title}
                    </h3>
                    <p
                      className='text-gray-600 text-center whitespace-pre-line'
                      itemProp='description'
                    >
                      {item.description}
                    </p>
                    {/* Hidden structured data for specific sections */}
                    {item.title === 'Tầm nhìn' && (
                      <meta
                        itemProp='about'
                        content='Phát triển vững chắc thành nhà thầu cơ điện hàng đầu Việt Nam và Đông Nam Á'
                      />
                    )}
                    {item.title === 'Sứ mệnh' && (
                      <meta itemProp='mission' content={item.description} />
                    )}
                    {item.title === 'Giá trị cốt lõi' && (
                      <meta
                        itemProp='values'
                        content='An Toàn, Chất Lượng, Tiến Độ'
                      />
                    )}
                    {item.title === 'Triết lý kinh doanh' && (
                      <meta
                        itemProp='businessPhilosophy'
                        content='Nâng cao Chất Lượng, Sản xuất bằng Tâm, Vươn xa bằng Tầm'
                      />
                    )}
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
