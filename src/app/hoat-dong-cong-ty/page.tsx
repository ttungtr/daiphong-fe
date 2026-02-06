import { Metadata } from 'next';
import { NewsItem, Tab } from '@/components/feature/news';
import { newsData } from '@/data/new';
import { ENewCategory } from '@/enum/new';

export const metadata: Metadata = {
  title:
    'Hoạt Động Công Ty Đại Phong | Sự Kiện & Thành Tựu Sản Xuất Ống Gió',
  description:
    'Cập nhật các hoạt động nội bộ của Đại Phong - Nhà sản xuất ống gió, miệng gió, phụ kiện HVAC. Sự kiện công ty, thành tựu sản xuất và các chương trình phát triển trong ngành HVAC.',
  keywords:
    'hoạt động công ty Đại Phong, sự kiện Đại Phong, nhà máy ống gió, sản xuất HVAC, phát triển nhân sự, văn hóa doanh nghiệp, ống gió Việt Nam',
  openGraph: {
    title: 'Hoạt Động Công Ty Đại Phong - Sản Xuất Ống Gió',
    description:
      'Cập nhật các hoạt động nội bộ của Đại Phong, sự kiện công ty, thành tựu sản xuất ống gió và chương trình phát triển.',
    type: 'website',
    url: 'https://www.onggiodaiphong.com/hoat-dong-cong-ty',
    images: [
      {
        url: 'https://www.onggiodaiphong.com/images/news/news-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Hoạt động công ty Đại Phong',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoạt Động Công Ty Đại Phong - Sản Xuất Ống Gió',
    description:
      'Cập nhật các hoạt động nội bộ của Đại Phong, sự kiện công ty và thành tựu sản xuất ống gió.',
  },
  alternates: {
    canonical: 'https://www.onggiodaiphong.com/hoat-dong-cong-ty',
  },
};

export default function CompanyActivityPage() {
  const companyActivities = newsData.filter(
    (item) => item.category === ENewCategory.COMPANY_ACTIVITY
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Hoạt động công ty - Đại Phong - Sản xuất ống gió',
    description:
      'Các hoạt động nội bộ, sự kiện và thành tựu sản xuất ống gió của Đại Phong',
    url: 'https://www.onggiodaiphong.com/hoat-dong-cong-ty',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: companyActivities.map((item, index) => ({
        '@type': 'Article',
        position: index + 1,
        name: item.title,
        url: `https://www.onggiodaiphong.com/${item.category}/${item.slug}`,
        datePublished: new Date(
          item.createdAt.split('/').reverse().join('-')
        ).toISOString(),
        image: `https://www.onggiodaiphong.com${item.images[0]}`,
        author: {
          '@type': 'Organization',
          name: 'Công ty Cổ phần Công nghiệp Đại Phong',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Đại Phong',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.onggiodaiphong.com/images/logo/logo.png',
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tab currentPath="/hoat-dong-cong-ty" />

          <header className="mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hoạt động công ty
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Theo dõi các hoạt động nội bộ của Đại Phong - Nhà sản xuất ống gió
              hàng đầu, từ các sự kiện công ty, chương trình phát triển sản xuất
              đến những thành tựu và văn hóa doanh nghiệp.
            </p>
          </header>

          {companyActivities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {companyActivities.map((item) => (
                <NewsItem key={item.id} news={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-base sm:text-lg">
                Hiện tại chưa có hoạt động công ty nào.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
