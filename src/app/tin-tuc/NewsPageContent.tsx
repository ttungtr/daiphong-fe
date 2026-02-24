'use client';

import { NewsItem, Tab } from '@/components/feature/news';
import { newsData } from '@/data/new';
import { ENewCategory } from '@/enum/new';
import { useTranslation } from 'react-i18next';

export function NewsPageContent() {
  const { t } = useTranslation('common');
  const newsItems = newsData
    .sort((a, b) => b.order - a.order)
    .filter((item) => item.category === ENewCategory.NEWS);

  return (
    <div className="w-full pb-10 px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto">
        <Tab currentPath="/tin-tuc" />

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('newsPage.heading')}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            {t('newsPage.description')}
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
              {t('newsPage.emptyState')}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
