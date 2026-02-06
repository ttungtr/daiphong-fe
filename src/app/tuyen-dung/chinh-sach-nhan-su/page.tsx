import LineTitle from '@/components/common/line-title';
import { MapSection } from '@/components/feature/homepage';
import { HeroSection } from '@/components/feature/hr-policy';
import { Metadata } from 'next';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Chính Sách Nhân Sự Đại Phong | Tuyển Dụng Ngành Sản Xuất Ống Gió',
  description:
    'Tìm hiểu về chính sách nhân sự, quy định lao động, chế độ đãi ngộ và môi trường làm việc chuyên nghiệp tại Đại Phong - Nhà sản xuất ống gió hàng đầu. Gia nhập đội ngũ với những chính sách minh bạch, công bằng và cơ hội phát triển trong ngành HVAC.',
  keywords:
    'chính sách nhân sự Đại Phong, tuyển dụng ống gió, tuyển dụng HVAC, quy định lao động, đãi ngộ nhân viên, môi trường làm việc, tuyển dụng sản xuất, công nhân ống gió, kỹ sư HVAC',
  authors: [{ name: 'Công ty Cổ phần Công nghiệp Đại Phong' }],
  creator: 'Đại Phong',
  publisher: 'Đại Phong',
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
    url: 'https://www.onggiodaiphong.com/tuyen-dung/chinh-sach-nhan-su',
    title: 'Chính Sách Nhân Sự Đại Phong - Tuyển Dụng Ngành Sản Xuất Ống Gió',
    description:
      'Tìm hiểu về chính sách nhân sự, quy định lao động, chế độ đãi ngộ và môi trường làm việc chuyên nghiệp tại Đại Phong.',
    images: [
      {
        url: 'https://www.onggiodaiphong.com/images/hr-policy/hero-section.jpg',
        width: 1200,
        height: 630,
        alt: 'Chính sách nhân sự Đại Phong',
      },
    ],
    siteName: 'Đại Phong',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@onggiodaiphong',
    creator: '@onggiodaiphong',
    title: 'Chính Sách Nhân Sự Đại Phong',
    description:
      'Tìm hiểu về chính sách nhân sự, quy định lao động và chế độ đãi ngộ tại Đại Phong.',
    images: [
      'https://www.onggiodaiphong.com/images/hr-policy/hero-section.jpg',
    ],
  },
  alternates: {
    canonical: 'https://www.onggiodaiphong.com/tuyen-dung/chinh-sach-nhan-su',
  },
};

// JSON-LD Structured Data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Chính Sách Nhân Sự - Đại Phong',
  description:
    'Chính sách nhân sự, quy định lao động, chế độ đãi ngộ tại Đại Phong - Nhà sản xuất ống gió, miệng gió, phụ kiện HVAC hàng đầu.',
  url: 'https://www.onggiodaiphong.com/tuyen-dung/chinh-sach-nhan-su',
  mainEntity: {
    '@type': 'Organization',
    name: 'Công ty Cổ phần Công nghiệp Đại Phong',
    alternateName: 'Đại Phong',
    url: 'https://www.onggiodaiphong.com',
    logo: 'https://www.onggiodaiphong.com/images/logo/logo.png',
    description:
      'Nhà sản xuất ống gió, miệng gió, phụ kiện HVAC với chính sách nhân sự minh bạch và môi trường làm việc chuyên nghiệp',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84888885964',
      contactType: 'human resources',
      email: 'ongiodaiphong@gmail.com',
      areaServed: 'VN',
      availableLanguage: 'Vietnamese',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lô 3.2, Đường số 2, KCN Tân Đông Hiệp A, Phường Dĩ An',
      addressLocality: 'Thành phố Hồ Chí Minh',
      addressCountry: 'VN',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang Chủ',
        item: 'https://www.onggiodaiphong.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tuyển Dụng',
        item: 'https://www.onggiodaiphong.com/tuyen-dung',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Chính Sách Nhân Sự',
        item: 'https://www.onggiodaiphong.com/tuyen-dung/chinh-sach-nhan-su',
      },
    ],
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
