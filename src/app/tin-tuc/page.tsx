import { Metadata } from 'next';
import { NewsItem, Tab } from '@/components/feature/news';
import { newsData } from '@/data/new';
import { ENewCategory } from '@/enum/new';

export const metadata: Metadata = {
  title:
    'Tin Tức Đại Phong | Ống Gió, Miệng Gió, Phụ Kiện HVAC - Cập Nhật Mới Nhất',
  description:
    'Tin tức mới nhất về sản xuất ống gió, miệng gió, phụ kiện HVAC tại Đại Phong. Cập nhật các dự án thông gió, công nghệ sản xuất hiện đại và thành tựu trong ngành HVAC Việt Nam.',
  keywords:
    'tin tức Đại Phong, tin tức ống gió, dự án HVAC, sản xuất ống gió, công nghệ thông gió, miệng gió, phụ kiện HVAC, ống gió Việt Nam, không khí sạch',
  openGraph: {
    title: 'Tin Tức Đại Phong - Sản Xuất Ống Gió & Phụ Kiện HVAC',
    description:
      'Tin tức mới nhất về sản xuất ống gió, miệng gió, phụ kiện HVAC tại Đại Phong. Cập nhật dự án thông gió và công nghệ hiện đại.',
    type: 'website',
    url: 'https://www.onggiodaiphong.com/tin-tuc',
    images: [
      {
        url: 'https://www.onggiodaiphong.com/images/news/news-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Tin tức Đại Phong - Sản xuất ống gió',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tin Tức Đại Phong - Sản Xuất Ống Gió & Phụ Kiện HVAC',
    description:
      'Tin tức mới nhất về sản xuất ống gió, miệng gió, phụ kiện HVAC tại Đại Phong.',
  },
  alternates: {
    canonical: 'https://www.onggiodaiphong.com/tin-tuc',
  },
};

export default function NewsPage() {
  const newsItems = newsData
    .sort((a, b) => b.order - a.order)
    .filter((item) => item.category === ENewCategory.NEWS);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Tin tức - Đại Phong - Sản xuất ống gió & phụ kiện HVAC',
    description:
      'Tin tức mới nhất về sản xuất ống gió, miệng gió, phụ kiện HVAC và các dự án thông gió tại Đại Phong',
    url: 'https://www.onggiodaiphong.com/tin-tuc',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: newsItems.map((item, index) => ({
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
        <main className="max-w-7xl mx-auto">
          <Tab currentPath="/tin-tuc" />

          <header className="mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tin tức mới nhất
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Cập nhật những thông tin mới nhất về sản xuất ống gió, miệng gió,
              phụ kiện HVAC tại Đại Phong, các dự án thông gió tiêu biểu và
              thành tựu trong ngành HVAC Việt Nam.
            </p>
          </header>

          {newsItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {newsItems.map((item) => (
                <NewsItem key={item.id} news={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-base sm:text-lg">
                Hiện tại chưa có tin tức nào.
              </p>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
