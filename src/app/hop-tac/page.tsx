import ImageWithFallback from '@/components/common/ImageWithFallback';
import { HeroSection } from '@/components/feature/cooperation';
import { MapSection, PartnerSection } from '@/components/feature/homepage';
import { Metadata } from 'next';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Hợp Tác - Đối Tác Chiến Lược | Đại Phong Corp',
  description:
    'Khám phá các cơ hội hợp tác và trở thành đối tác chiến lược của chúng tôi. Chúng tôi mang đến những giải pháp tối ưu và cơ hội phát triển bền vững cho doanh nghiệp của bạn.',
  keywords: 'hợp tác, đối tác, chiến lược, doanh nghiệp, giải pháp, phát triển',
  authors: [{ name: 'Đại Phong Corp' }],
  creator: 'Đại Phong Corp',
  publisher: 'Đại Phong Corp',
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
    url: 'https://philongcorp.vn/cooperation',
    title: 'Hợp Tác - Đối Tác Chiến Lược',
    description:
      'Khám phá các cơ hội hợp tác và trở thành đối tác chiến lược của chúng tôi. Chúng tôi mang đến những giải pháp tối ưu và cơ hội phát triển bền vững.',
    images: [
      {
        url: '/images/cooperation-og-image.pngx',
        width: 1200,
        height: 630,
        alt: 'Hợp tác đối tác chiến lược',
      },
    ],
    siteName: 'Đại Phong Corp',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@philongcorp',
    creator: '@philongcorp',
    title: 'Hợp Tác - Đối Tác Chiến Lược',
    description:
      'Khám phá các cơ hội hợp tác và trở thành đối tác chiến lược của chúng tôi.',
    images: ['/images/cooperation-twitter-image.pngx'],
  },
  alternates: {
    canonical: 'https://philongcorp.vn/cooperation',
    languages: {
      'vi-VN': 'https://philongcorp.vn/cooperation',
      'en-US': 'https://philongcorp.vn/en/cooperation',
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    other: {
      me: ['daiphong@daiphong.com'],
    },
  },
};

// JSON-LD Structured Data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Hợp Tác - Đối Tác Chiến Lược',
  description:
    'Khám phá các cơ hội hợp tác và trở thành đối tác chiến lược của chúng tôi. Chúng tôi mang đến những giải pháp tối ưu và cơ hội phát triển bền vững cho doanh nghiệp của bạn.',
  url: 'https://philongcorp.vn/cooperation',
  mainEntity: {
    '@type': 'Organization',
    name: 'Đại Phong Corp',
    url: 'https://philongcorp.vn',
    logo: 'https://philongcorp.vn/logo.pngx',
    description: 'Mô tả về công ty và dịch vụ hợp tác của Đại Phong Corp',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84-906-888-888',
      contactType: 'customer service',
      areaServed: 'VN',
      availableLanguage: ['Vietnamese', 'English'],
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
        item: 'https://philongcorp.vn',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Hợp Tác',
        item: 'https://philongcorp.vn/cooperation',
      },
    ],
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://philongcorp.vn/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function CooperationPage() {
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
            HỢP TÁC
          </h1>
          <ImageWithFallback
            src="/images/titlebg.jpg"
            alt="Đường viền trang trí tiêu đề hợp tác"
            width={300}
            height={100}
            className="w-56 h-auto"
            priority
          />
        </header>

        <main role="main" aria-labelledby="services-heading">
          <PartnerSection />
        </main>
        <MapSection />

        {/* <CTASection /> */}
      </div>
    </>
  );
}
