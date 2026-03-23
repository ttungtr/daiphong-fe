import { newsData } from '@/data/news';
import { ENewCategory } from '@/enum/new';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NewsDetailContent } from '@/components/feature/news';

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const news = newsData.find(
    (item) => item.slug === slug && item.category === ENewCategory.NEWS,
  );

  if (!news) {
    return {
      title:
        'Tin tức không tìm thấy - Công ty Cổ phần Công Nghiệp Đại Phong VN',
      description: 'Tin tức bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.',
    };
  }

  const formattedDate = new Date(news.createdAt.split('/').reverse().join('-'));

  return {
    title: `${news.title} - Tin tức Công ty Cổ phần Công Nghiệp Đại Phong VN`,
    description:
      news.paragraphs[0]?.replace(/<[^>]*>/g, '').substring(0, 160) + '...' ||
      'Tin tức từ Công ty Cổ phần Công Nghiệp Đại Phong VN',
    keywords: [
      ...news.tags,
      'Công ty Cổ phần Công Nghiệp Đại Phong VN',
      'tin tức',
    ].join(', '),
    openGraph: {
      title: news.title,
      description:
        news.paragraphs[0]?.replace(/<[^>]*>/g, '').substring(0, 160) + '...' ||
        'Tin tức từ Công ty Cổ phần Công Nghiệp Đại Phong VN',
      type: 'article',
      url: `https://www.onggiodaiphong.com/tin-tuc/${news.slug}`,
      images: [
        {
          url: `https://www.onggiodaiphong.com${news.images[0]}`,
          width: 1200,
          height: 630,
          alt: news.title,
        },
      ],
      publishedTime: formattedDate.toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: news.title,
      description:
        news.paragraphs[0]?.replace(/<[^>]*>/g, '').substring(0, 160) + '...' ||
        'Tin tức từ Công ty Cổ phần Công Nghiệp Đại Phong VN',
    },
    alternates: {
      canonical: `https://www.onggiodaiphong.com/tin-tuc/${news.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return newsData
    .filter((item) => item.category === ENewCategory.NEWS)
    .map((news) => ({
      slug: news.slug,
    }));
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const news = newsData.find(
    (item) => item.slug === slug && item.category === ENewCategory.NEWS,
  );

  if (!news) {
    notFound();
  }

  const formattedDate = new Date(news.createdAt.split('/').reverse().join('-'));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: news.title,
    description: news.paragraphs[0]?.replace(/<[^>]*>/g, '') || '',
    image: news.images.map((img) => `https://www.onggiodaiphong.com${img}`),
    datePublished: formattedDate.toISOString(),
    dateModified: formattedDate.toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Công ty Cổ phần Công Nghiệp Đại Phong VN',
      url: 'https://www.onggiodaiphong.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Công ty Cổ phần Công Nghiệp Đại Phong VN',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.onggiodaiphong.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.onggiodaiphong.com/tin-tuc/${news.slug}`,
    },
    keywords: news.tags.join(', '),
    articleSection: 'Tin tức',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewsDetailContent slug={slug} />
    </>
  );
}
