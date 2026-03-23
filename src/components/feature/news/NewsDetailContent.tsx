'use client';

import { useLocalizedNewsData } from '@/hooks/useLocalizedData';
import { ENewCategory } from '@/enum/new';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

interface NewsDetailContentProps {
  slug: string;
}

export default function NewsDetailContent({ slug }: NewsDetailContentProps) {
  const { t, i18n } = useTranslation('common');
  const newsData = useLocalizedNewsData();
  const news = newsData.find(
    (item) => item.slug === slug && item.category === ENewCategory.NEWS,
  );

  if (!news) {
    return null;
  }

  const formattedDate = new Date(
    news.createdAt.split('/').reverse().join('-'),
  );
  const locale = i18n.language === 'en' ? 'en-US' : 'vi-VN';
  const dateString = formattedDate.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="max-w-6xl mx-auto">
        <article>
          <header className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {news.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <time dateTime={formattedDate.toISOString()}>{dateString}</time>

              {news.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {news.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-primary-blue-1 text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {news.paragraphs.map((paragraph, index) => (
              <div
                key={index}
                className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/tin-tuc"
              className="inline-flex items-center px-6 py-3 bg-primary-blue-1 text-white rounded-lg hover:bg-primary-blue-1 transition-colors duration-300"
            >
              {t('newsPage.backToNews')}
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
