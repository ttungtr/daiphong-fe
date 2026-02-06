'use client';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

export const LetterSection: FunctionComponent = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <section
        className="py-4 md:py-4 lg:py-8 xl:py-8 bg-white"
        aria-labelledby="letter-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
              <div className="space-y-4 md:space-y-6 lg:col-span-7 order-1 lg:order-1">
                <header>
                  <h1
                    id="letter-heading"
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8"
                  >
                    {t('letter.heading')}
                  </h1>
                </header>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-2">
                  {t('letter.p1')}
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-2">
                  {t('letter.p2')}
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-2">
                  {t('letter.p3')}
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-2">
                  {t('letter.p4')}
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-2">
                  {t('letter.p5')}
                </p>

                <div className="my-3 md:my-5">
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong className="text-black italic">
                      {t('letter.closing')}
                    </strong>
                  </p>
                </div>

                <div className="mb-3 md:mb-5">
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    {t('letter.directorTitle')}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-gray-900 mt-1">
                    {t('letter.directorName')}
                  </p>
                </div>

                {/* Button for desktop */}
                {/* <div className='hidden lg:block'>
                  <Link
                    href='/gioi-thieu'
                    className='inline-block bg-primary-blue-1 hover:opacity-70 text-white duration-300 w-32 sm:w-40 text-center py-2 sm:py-3 rounded-md text-sm font-semibold transition-opacity'
                    aria-label='Xem tất cả thông tin về công ty'
                  >
                    Xem tất cả
                  </Link>
                </div> */}
              </div>

              <div className="lg:col-span-5 w-full h-full flex justify-center items-center lg:justify-end order-2 lg:order-2">
                <ImageWithFallback
                  src="/images/thu-ngo.jpg"
                  alt="Lê Thanh Tùng - Giám đốc Công ty Công Ty Cổ Phần Công Nghiệp Đại Phong"
                  className="object-cover w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[380px] h-auto mx-auto "
                  width={350}
                  height={400}
                  priority
                />
              </div>

              {/* Button for mobile - appears after image */}
              {/* <div className='lg:hidden order-3 flex justify-center'>
                <Link
                  href='/gioi-thieu'
                  className='inline-block bg-primary-blue-1 hover:opacity-70 text-white duration-300 w-32 sm:w-40 text-center py-2 sm:py-3 rounded-md text-sm font-semibold transition-opacity'
                  aria-label='Xem tất cả thông tin về công ty'
                >
                  Xem tất cả
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <AnimatedStatsSection /> */}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Lê Thanh Tùng',
            jobTitle: 'Giám đốc Công ty',
            worksFor: {
              '@type': 'Organization',
              name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
              alternateName: '',
              foundingDate: '2003',
              numberOfEmployees: '1200',
              industry: [
                'Construction',
                'MEP Systems',
                'Solar Energy',
                'Fire Protection',
              ],
              slogan: 'NÂNG TẦM CHẤT LƯỢNG, BỀN VỮNG TƯƠNG LAI',
            },
          }),
        }}
      />
    </>
  );
};
