'use client';

import ImageWithFallback from '@/components/common/ImageWithFallback';
import LineTitle from '@/components/common/line-title';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

export const LetterSection: FunctionComponent = () => {
  const { t } = useTranslation('common');
  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Công ty Cổ phần Công Nghiệp Đại Phong VN',
    alternateName: '',
    foundingDate: '2003',
    description: 'Nhà thầu thi công hệ thống cơ điện (MEP) uy tín.',
    ceo: {
      '@type': 'Person',
      name: 'Lê Thanh Tùng',
      jobTitle: 'Giám đốc Công ty',
    },
    areaServed: 'Vietnam',
    serviceType: [
      'Thi công hệ thống cơ điện (MEP)',
      'Lắp đặt thang máy SANKA',
      'Hệ thống điện năng lượng mặt trời',
      'Thiết kế hệ thống PCCC',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section
        className="py-5 bg-white mb-10"
        aria-labelledby="letter-heading"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="w-full flex flex-col items-center justify-center">
              <h2
                id="letter-heading"
                className="text-3xl font-bold text-gray-900"
                itemProp="name"
              >
                {t('about.letter.heading')}
              </h2>
              <LineTitle alt={t('about.letter.lineTitleAlt')} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
              <div className="space-y-4 md:space-y-6 lg:col-span-7 order-1 lg:order-1">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  {t('about.letter.p1')}
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  {t('about.letter.p2')}
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  {t('about.letter.p3')}
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  {t('about.letter.p4')}
                </p>

                <div className="my-6 md:my-8"></div>

                <div className="mb-6 md:mb-8"></div>

                {/* Button for desktop */}
                <div className="hidden lg:block">
                  <a
                    href="https://drive.google.com/file/d/19n9bDqfTh313Vx35-xXJurzoxQEA3Fps/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-blue-1 hover:opacity-70 text-white duration-300 w-32 sm:w-40 text-center py-2 sm:py-3 rounded-md text-sm font-semibold transition-opacity cursor-pointer"
                    aria-label={t('about.letter.viewProfileAria')}
                  >
                    {t('about.letter.viewProfile')}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 w-full flex justify-center lg:justify-end order-2 lg:order-2">
                <ImageWithFallback
                  src="/images/about/tong-quan-cong-ty.jpg"
                  alt="Giới thiệu công ty"
                  className="object-cover w-full max-w-[300] sm:max-w-[350px] lg:max-w-[380] h-auto mx-auto "
                  width={350}
                  height={400}
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 350px"
                />
              </div>

              {/* Button for mobile - appears after image */}
              <div className="lg:hidden order-3 flex justify-center">
                <a
                  href="https://drive.google.com/file/d/19n9bDqfTh313Vx35-xXJurzoxQEA3Fps/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-blue-1 hover:opacity-70 text-white duration-300 w-32 sm:w-40 text-center py-2 sm:py-3 rounded-md text-sm font-semibold transition-opacity cursor-pointer"
                  aria-label={t('about.letter.viewProfileAria')}
                >
                  {t('about.letter.viewProfile')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
