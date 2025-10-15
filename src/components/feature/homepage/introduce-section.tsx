import ImageWithFallback from '@/components/common/ImageWithFallback';
import Link from 'next/link';
import { FunctionComponent } from 'react';

export const IntroduceSection: FunctionComponent = () => {
  return (
    <section
      className='introduce-section pb-12 md:pb-20'
      aria-labelledby='company-intro'
    >
      {/* Header with Logo */}
      <header className='w-full bg-primary-green-3 flex items-center justify-center'>
        <Link
          className='p-3 md:p-5 block'
          href='/'
          aria-label='Về trang chủ Công Ty Cổ Phần Công Nghiệp Đại Phong'
        >
          <ImageWithFallback
            src='/images/logo/horizontal-logo.pngx'
            alt='Logo Công Ty Cổ Phần Công Nghiệp Đại Phong'
            width={160}
            height={50}
            className='w-64 max-w-64 h-auto'
            priority
          />
        </Link>
      </header>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Company Introduction Text */}
        <div className='mt-8 md:mt-14 mb-8 md:mb-10 space-y-2 md:space-y-1'>
          <h1
            id='company-intro'
            className='text-center text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-navbar-bg leading-tight'
          >
            Công Ty Cổ Phần Công Nghiệp Đại Phong HƠN 22 NĂM HÌNH THÀNH VÀ PHÁT
            TRIỂN
          </h1>

          <h2 className='text-center text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-navbar-bg leading-tight'>
            Với phương châm &quot;NÂNG TẦM CHẤT LƯỢNG, BỀN VỮNG TƯƠNG LAI&quot;
          </h2>

          <p className='text-center text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-navbar-bg leading-tight'>
            Công Ty Cổ Phần Công Nghiệp Đại Phong mong có nhiều cơ hội hơn để
            phục vụ Quý khách hàng
          </p>
        </div>

        {/* Company Branches Grid */}
        <div className='w-full'>
          <h3 className='sr-only'>Chi nhánh Đại Phong</h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6'>
            {Array.from({ length: 5 }).map((_, index) => (
              <article
                key={`branch-${index + 1}`}
                className='space-y-2'
                itemScope
                itemType='https://schema.org/LocalBusiness'
              >
                <div className='p-2 bg-[#EEEEEE] hover:bg-gray-200 transition-colors duration-200'>
                  <ImageWithFallback
                    src='/images/logo-2.pngx'
                    alt={`Chi nhánh Đại Phong Miền Nam số ${
                      index + 1
                    } - Dịch vụ xây dựng và vận tải`}
                    width={100}
                    height={100}
                    className='w-full h-auto'
                  />
                </div>
                <h4
                  className='text-center text-xs sm:text-sm md:text-base font-extrabold text-navbar-bg'
                  itemProp='name'
                >
                  Đại Phong Miền Nam
                </h4>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
            description:
              'Công ty kỹ thuật cơ điện, cam kết về an toàn, chất lượng và tiến độ',
            foundingDate: '2002',
            logo: '/images/logo/horizontal-logo.pngx',
            slogan: 'NÂNG TẦM CHẤT LƯỢNG, BỀN VỮNG TƯƠNG LAI',
            industry: ['Construction', 'Transportation'],
            areaServed: 'Vietnam',
          }),
        }}
      />
    </section>
  );
};
