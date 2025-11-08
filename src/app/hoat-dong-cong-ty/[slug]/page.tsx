import ImageWithFallback from '@/components/common/ImageWithFallback';
import { newsData } from '@/data/new';
import { ENewCategory } from '@/enum/new';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CompanyActivityDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CompanyActivityDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = newsData.find(
    (item) =>
      item.slug === slug && item.category === ENewCategory.COMPANY_ACTIVITY
  );

  if (!activity) {
    return {
      title:
        'Hoạt động công ty không tìm thấy - Công Ty Cổ Phần Công Nghiệp Đại Phong',
      description:
        'Hoạt động công ty bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.',
    };
  }

  const formattedDate = new Date(
    activity.createdAt.split('/').reverse().join('-')
  );

  return {
    title: `${activity.title} - Hoạt động công ty Công Ty Cổ Phần Công Nghiệp Đại Phong`,
    description:
      activity.paragraphs[0]?.substring(0, 160) + '...' ||
      'Hoạt động công ty từ Công Ty Cổ Phần Công Nghiệp Đại Phong',
    keywords: [
      ...activity.tags,
      'Công Ty Cổ Phần Công Nghiệp Đại Phong',
      'hoạt động công ty',
    ].join(', '),
    openGraph: {
      title: activity.title,
      description:
        activity.paragraphs[0]?.substring(0, 160) + '...' ||
        'Hoạt động công ty từ Công Ty Cổ Phần Công Nghiệp Đại Phong',
      type: 'article',
      url: `https://www.onggiodaiphong.com/hoat-dong-cong-ty/${activity.slug}`,
      images: [
        {
          url: `https://www.onggiodaiphong.com${activity.images[0]}`,
          width: 1200,
          height: 630,
          alt: activity.title,
        },
      ],
      publishedTime: formattedDate.toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: activity.title,
      description:
        activity.paragraphs[0]?.substring(0, 160) + '...' ||
        'Hoạt động công ty từ Công Ty Cổ Phần Công Nghiệp Đại Phong',
    },
    alternates: {
      canonical: `https://www.onggiodaiphong.com/hoat-dong-cong-ty/${activity.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return newsData
    .filter((item) => item.category === ENewCategory.COMPANY_ACTIVITY)
    .map((activity) => ({
      slug: activity.slug,
    }));
}

export default async function CompanyActivityDetailPage({
  params,
}: CompanyActivityDetailPageProps) {
  const { slug } = await params;
  const activity = newsData.find(
    (item) =>
      item.slug === slug && item.category === ENewCategory.COMPANY_ACTIVITY
  );

  if (!activity) {
    notFound();
  }

  const formattedDate = new Date(
    activity.createdAt.split('/').reverse().join('-')
  );
  const dateString = formattedDate.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const relatedActivities = newsData
    .filter(
      (item) =>
        item.category === ENewCategory.COMPANY_ACTIVITY &&
        item.id !== activity.id &&
        item.tags.some((tag) => activity.tags.includes(tag))
    )
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: activity.title,
    description: activity.paragraphs[0],
    image: activity.images.map((img) => `https://www.onggiodaiphong.com${img}`),
    datePublished: formattedDate.toISOString(),
    dateModified: formattedDate.toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
      url: 'https://www.onggiodaiphong.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.onggiodaiphong.com/logo.pngx',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.onggiodaiphong.com/hoat-dong-cong-ty/${activity.slug}`,
    },
    keywords: activity.tags.join(', '),
    articleSection: 'Hoạt động công ty',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          <article>
            {/* Header */}
            <header className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {activity.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <time dateTime={formattedDate.toISOString()}>{dateString}</time>

                {activity.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {activity.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-primary-blue-1 text-white px-3 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8">
              <ImageWithFallback
                src={activity.images[0]}
                alt={activity.title}
                width={800}
                height={450}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover "
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {activity.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Additional Images */}
            {activity.images.length > 1 && (
              <div className="mt-8 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activity.images.slice(1).map((image, index) => (
                    <ImageWithFallback
                      key={index}
                      src={image}
                      alt={`${activity.title} - Hình ảnh ${index + 2}`}
                      width={400}
                      height={300}
                      className="w-full h-48 sm:h-56 object-cover "
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Related Activities */}
          {relatedActivities.length > 0 && (
            <section className="mt-12 sm:mt-16">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Hoạt động liên quan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {relatedActivities.map((relatedItem) => (
                  <Link
                    key={relatedItem.id}
                    href={`/hoat-dong-cong-ty/${relatedItem.slug}`}
                    className="group block bg-white border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary-blue-1 transition-all duration-300"
                  >
                    <ImageWithFallback
                      src={relatedItem.images[0]}
                      alt={relatedItem.title}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="p-4">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-primary-blue-1 transition-colors duration-300 line-clamp-2">
                        {relatedItem.title}
                      </h3>
                      <time className="text-xs text-gray-500 mt-2 block">
                        {new Date(
                          relatedItem.createdAt.split('/').reverse().join('-')
                        ).toLocaleDateString('vi-VN')}
                      </time>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back to Company Activities */}
          <div className="mt-12 text-center">
            <Link
              href="/hoat-dong-cong-ty"
              className="inline-flex items-center px-6 py-3 bg-primary-blue-1 text-white rounded-lg hover:bg-primary-blue-1 transition-colors duration-300"
            >
              Quay lại trang hoạt động công ty
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
