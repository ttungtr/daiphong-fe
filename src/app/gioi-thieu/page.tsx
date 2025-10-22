import ImageWithFallback from '@/components/common/ImageWithFallback';
import {
  CompanyInformationSection,
  HeroSection,
  LetterSection,
  Tab,
} from '@/components/feature/about';
import {
  MapSection,
  PartnerSection,
  VisionMissionSection,
} from '@/components/feature/homepage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Về Chúng Tôi - Nhà Sản Xuất Ống Thông Gió Chất Lượng Cao | Uy Tín Hàng Đầu Việt Nam',
  description:
    'Tìm hiểu về công ty sản xuất ống thông gió hàng đầu Việt Nam. Xem lịch sử hình thành, năng lực sản xuất, máy móc hiện đại, chứng chỉ chất lượng và tầm nhìn sứ mệnh của chúng tôi.',
  keywords:
    'về chúng tôi, nhà sản xuất ống thông gió, ống gió chất lượng cao, cửa gió, van gió, phụ kiện ống gió, HVAC, hệ thống thông gió, lịch sử hình thành, năng lực sản xuất',
  openGraph: {
    title: 'Về Chúng Tôi - Nhà Sản Xuất Ống Thông Gió Chất Lượng Cao',
    description:
      'Nhà sản xuất ống thông gió uy tín hàng đầu Việt Nam với hơn 10 năm kinh nghiệm',
    type: 'website',
    locale: 'vi_VN',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  // Structured data for the organization
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Công ty Sản xuất Ống Thông Gió Chất Lượng Cao',
    alternateName: 'Nhà sản xuất ống gió uy tín',
    description:
      'Nhà sản xuất ống thông gió chất lượng cao, chuyên nghiệp tại Việt Nam',
    url: 'https://www.ongthonggio.vn/about',
    foundingDate: '2014',
    founder: {
      '@type': 'Person',
      name: 'Nguyễn Văn Minh',
      jobTitle: 'Giám đốc điều hành',
    },
    areaServed: 'Vietnam',
    serviceType: [
      'Ống gió tròn',
      'Ống gió vuông',
      'Cửa gió các loại',
      'Phụ kiện ống gió',
      'Van gió',
      'Sản xuất theo yêu cầu',
      'Dịch vụ tư vấn thiết kế',
    ],
    knowsAbout: [
      'Sản xuất ống thông gió',
      'Hệ thống HVAC',
      'Công nghệ sản xuất',
      'Kiểm soát chất lượng',
      'Tư vấn thiết kế hệ thống thông gió',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 9001:2015',
        description: 'Chứng nhận hệ thống quản lý chất lượng quốc tế',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Chứng nhận CE',
        description: 'Chứng nhận sản phẩm đạt tiêu chuẩn Châu Âu',
      },
    ],
    slogan: 'CHẤT LƯỢNG VƯỢT TRỘI - DỊCH VỤ HOÀN HẢO - PHÁT TRIỂN BỀN VỮNG',
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: 'https://www.philongcorp.vn',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Về chúng tôi',
        item: 'https://www.philongcorp.vn/about',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div
        className="w-full"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <HeroSection />

        <Tab currentPath="/gioi-thieu" />

        <LetterSection />

        {/* <CoreValuesSection /> */}

        <VisionMissionSection />

        <CompanyInformationSection />

        <section
          className="py-5 bg-white"
          aria-labelledby="organizational-structure-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-4 flex flex-col items-center justify-center">
              <header className="w-full flex flex-col items-center justify-center">
                <h2
                  id="organizational-structure-heading"
                  className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center"
                >
                  GIẤY PHÉP
                </h2>
                {/* <ImageWithFallback
                  src='/images/titlebg.pngx'
                  alt='Đường viền trang trí tiêu đề cơ cấu tổ chức'
                  width={300}
                  height={100}
                  className='w-56 h-auto'
                /> */}
                <div className="w-16 h-1 bg-primary-yellow-1 mx-auto mb-10"></div>
              </header>

              <ImageWithFallback
                src="/images/about/giay-phep.pngx"
                alt="Cơ cấu tổ chức và bộ máy quản lý của Công Ty Cổ Phần Công Nghiệp Đại Phong - Sơ đồ tổ chức từ Hội đồng quản trị đến các phòng ban chuyên môn"
                width={400}
                height={600}
                className="w-1/2 h-auto mt-10"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          </div>
        </section>

        <PartnerSection />

        {/* <CTASection /> */}
        <MapSection />
      </div>
    </>
  );
}
