import {
  FinancialReportsSection,
  HeroSection,
  Tab,
} from '@/components/feature/about';
import FinancialCapacitySection from '@/components/feature/about/financial-capacity-section';
import { MapSection } from '@/components/feature/homepage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giấy Phép & Chứng Chỉ - Công Ty Cổ Phần Công Nghiệp Đại Phong | ',
  description:
    'Xem các giấy phép đăng ký kinh doanh, chứng chỉ năng lực hoạt động xây dựng, giấy phép hoạt động điện lực và chứng nhận PCCC của Công Ty Cổ Phần Công Nghiệp Đại Phong.',
  keywords:
    'giấy phép kinh doanh, chứng chỉ xây dựng, giấy phép điện lực, chứng nhận PCCC, Công Ty Cổ Phần Công Nghiệp Đại Phong, ',
  openGraph: {
    title: 'Giấy Phép & Chứng Chỉ - Công Ty Cổ Phần Công Nghiệp Đại Phong',
    description:
      'Các giấy phép và chứng chỉ hành nghề của Công Ty Cổ Phần Công Nghiệp Đại Phong - nhà thầu MEP uy tín',
    type: 'website',
    locale: 'vi_VN',
  },
  alternates: {
    canonical: '/about/license',
  },
};

export default function AboutLicense() {
  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
    alternateName: '',
    description:
      'Nhà thầu thi công hệ thống cơ điện (MEP) uy tín với đầy đủ giấy phép hành nghề',
    url: 'https://www.philongcorp.vn/about/license',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Giấy phép đăng ký kinh doanh',
        description:
          'Giấy phép đăng ký kinh doanh của Công Ty Cổ Phần Công Nghiệp Đại Phong',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Chứng chỉ năng lực hoạt động xây dựng',
        description:
          'Chứng chỉ năng lực hoạt động xây dựng của Công Ty Cổ Phần Công Nghiệp Đại Phong',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Giấy phép hoạt động điện lực',
        description:
          'Giấy phép hoạt động điện lực của Công Ty Cổ Phần Công Nghiệp Đại Phong',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Giấy chứng nhận PCCC',
        description:
          'Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ phòng cháy chữa cháy',
      },
    ],
    areaServed: 'Vietnam',
    foundingDate: '2003',
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div
        className='w-full'
        itemScope
        itemType='https://schema.org/Organization'
      >
        <HeroSection
          breadcrumbs={[
            { label: 'Trang chủ', href: '/', isActive: false },
            { label: 'Về chúng tôi', href: '/gioi-thieu', isActive: false },
            {
              label: 'Báo cáo tài chính',
              href: '/gioi-thieu/bao-cao-tai-chinh',
              isActive: true,
            },
          ]}
        />

        <Tab currentPath='/gioi-thieu/bao-cao-tai-chinh' />

        <section
          className='py-5 bg-white'
          aria-labelledby='business-license-heading'
        >
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <header className='w-full flex flex-col items-center justify-center'>
              <h1
                id='business-license-heading'
                className='text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center'
                itemProp='name'
              >
                BÁO CÁO TÀI CHÍNH
              </h1>
              {/* <ImageWithFallback
                src='/images/titlebg.pngx'
                alt='Đường viền trang trí tiêu đề'
                width={300}
                height={100}
                className='w-56 h-auto'
                priority
              /> */}
              <div className='w-16 h-1 bg-primary-yellow-1 mx-auto mb-10'></div>
            </header>
          </div>
        </section>

        <section
          className='py-5 bg-white'
          aria-labelledby='construction-certificate-heading'
        >
          <FinancialCapacitySection />
        </section>

        <FinancialReportsSection />

        {/* <CTASection /> */}
        <MapSection />
        {/* <PartnerSection /> */}
      </div>
    </>
  );
}
