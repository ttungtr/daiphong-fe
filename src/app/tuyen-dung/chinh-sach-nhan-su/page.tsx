import LineTitle from '@/components/common/line-title';
import { MapSection } from '@/components/feature/homepage';
import { HeroSection } from '@/components/feature/hr-policy';
import { Metadata } from 'next';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Chính Sách Nhân Sự - Quy Định Lao Động | Tên Công Ty',
  description:
    'Tìm hiểu về chính sách nhân sự, quy định lao động, chế độ đãi ngộ và môi trường làm việc chuyên nghiệp tại công ty chúng tôi. Gia nhập đội ngũ với những chính sách minh bạch và công bằng.',
  keywords:
    'chính sách nhân sự, quy định lao động, tuyển dụng, đãi ngộ nhân viên, môi trường làm việc, HR policy, human resources',
  authors: [{ name: 'Tên Công Ty' }],
  creator: 'Tên Công Ty',
  publisher: 'Tên Công Ty',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://onggiodaiphong.com/hr-policy',
    title: 'Chính Sách Nhân Sự - Quy Định Lao Động',
    description:
      'Tìm hiểu về chính sách nhân sự, quy định lao động, chế độ đãi ngộ và môi trường làm việc chuyên nghiệp tại công ty chúng tôi.',
    images: [
      {
        url: '/images/hr-policy-og-image.pngx',
        width: 1200,
        height: 630,
        alt: 'Chính sách nhân sự công ty',
      },
    ],
    siteName: 'Tên Công Ty',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourcompany',
    creator: '@yourcompany',
    title: 'Chính Sách Nhân Sự - Quy Định Lao Động',
    description:
      'Tìm hiểu về chính sách nhân sự, quy định lao động và chế độ đãi ngộ tại công ty chúng tôi.',
    images: ['/images/hr-policy-twitter-image.pngx'],
  },
  alternates: {
    canonical: 'https://onggiodaiphong.com/hr-policy',
    languages: {
      'vi-VN': 'https://onggiodaiphong.com/hr-policy',
      'en-US': 'https://onggiodaiphong.com/en/hr-policy',
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      me: ['daiphong@daiphong.com'],
    },
  },
};

// JSON-LD Structured Data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Chính Sách Nhân Sự',
  description:
    'Tìm hiểu về chính sách nhân sự, quy định lao động, chế độ đãi ngộ và môi trường làm việc chuyên nghiệp tại công ty chúng tôi. Gia nhập đội ngũ với những chính sách minh bạch và công bằng.',
  url: 'https://onggiodaiphong.com/hr-policy',
  mainEntity: {
    '@type': 'Organization',
    name: 'Tên Công Ty',
    url: 'https://onggiodaiphong.com',
    logo: 'https://onggiodaiphong.com/logo.pngx',
    description:
      'Công ty với chính sách nhân sự minh bạch và môi trường làm việc chuyên nghiệp',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84-xxx-xxx-xxx',
      contactType: 'human resources',
      areaServed: 'VN',
      availableLanguage: ['Vietnamese', 'English'],
    },
    employee: {
      '@type': 'EmployeeRole',
      roleName: 'Human Resources',
    },
    sameAs: [
      'https://facebook.com/people/Phi-Long-Corp/61577256883038/',
      'https://linkedin.com/company/yourcompany',
      'https://twitter.com/yourcompany',
    ],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang Chủ',
        item: 'https://onggiodaiphong.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Chính Sách Nhân Sự',
        item: 'https://onggiodaiphong.com/hr-policy',
      },
    ],
  },
  about: {
    '@type': 'Thing',
    name: 'Chính sách nhân sự',
    description:
      'Quy định và chính sách về quản lý nhân sự, chế độ đãi ngộ và môi trường làm việc',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://onggiodaiphong.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function HRPolicyPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="w-full">
        <HeroSection />

        <header className="w-full flex flex-col items-center justify-center my-10">
          <h1
            id="services-heading"
            className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center"
          >
            CHÍNH SÁCH NHÂN SỰ
          </h1>
          <LineTitle alt="Đường viền trang trí tiêu đề chính sách nhân sự" />
        </header>

        <main role="main" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <ImageWithFallback
              src="/images/hr-policy/chinh-sach-nhan-su-1.pngx"
              alt="Chính sách nhân sự - Quy định về chế độ đãi ngộ và quyền lợi nhân viên"
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <ImageWithFallback
              src="/images/hr-policy/chinh-sach-nhan-su-2.pngx"
              alt="Chính sách nhân sự - Môi trường làm việc và văn hóa công ty"
              width={300}
              height={300}
              className="w-full h-auto"
            /> */}
          </div>

          {/* <CTASection /> */}
          <MapSection />
          {/* <PartnerSection /> */}
        </main>
      </div>
    </>
  );
}
