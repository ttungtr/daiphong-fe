import { Metadata } from 'next';
import { NewsItem, Tab } from '@/components/feature/news';
import { newsData } from '@/data/new';
import { ENewCategory } from '@/enum/new';

export const metadata: Metadata = {
  title:
    'Hoạt động công ty - Công Ty Cổ Phần Công Nghiệp Đại Phong | Tin tức nội bộ',
  description:
    'Cập nhật các hoạt động nội bộ của Công Ty Cổ Phần Công Nghiệp Đại Phong, sự kiện công ty, thành tựu và các chương trình phát triển nhân sự.',
  keywords:
    'hoạt động công ty Đại Phong, sự kiện nội bộ, phát triển nhân sự, văn hóa doanh nghiệp',
  openGraph: {
    title: 'Hoạt động công ty - Công Ty Cổ Phần Công Nghiệp Đại Phong',
    description:
      'Cập nhật các hoạt động nội bộ của Công Ty Cổ Phần Công Nghiệp Đại Phong, sự kiện công ty, thành tựu và các chương trình phát triển nhân sự.',
    type: 'website',
    url: 'https://www.onggiodaiphong.com/hoat-dong-cong-ty',
    images: [
      {
        url: 'https://www.onggiodaiphong.com/images/news/news-3.pngx',
        width: 1200,
        height: 630,
        alt: 'Hoạt động công ty Công Ty Cổ Phần Công Nghiệp Đại Phong',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoạt động công ty - Công Ty Cổ Phần Công Nghiệp Đại Phong',
    description:
      'Cập nhật các hoạt động nội bộ của Công Ty Cổ Phần Công Nghiệp Đại Phong, sự kiện công ty, thành tựu và các chương trình phát triển nhân sự.',
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
    name: 'Hoạt động công ty - Công Ty Cổ Phần Công Nghiệp Đại Phong',
    description:
      'Các hoạt động nội bộ và sự kiện của Công Ty Cổ Phần Công Nghiệp Đại Phong',
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
          name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
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
              Theo dõi các hoạt động nội bộ của Công Ty Cổ Phần Công Nghiệp Đại
              Phong, từ các sự kiện công ty, chương trình phát triển nhân sự đến
              những thành tựu và văn hóa doanh nghiệp.
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
