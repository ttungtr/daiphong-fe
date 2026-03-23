'use client';

import LineTitle from '@/components/common/line-title';
import { HeroSection, NewsItem } from '@/components/feature/news';
import { useLocalizedNewsData } from '@/hooks/useLocalizedData';
import { ENewCategory } from '@/enum/new';
import { useTranslation } from 'react-i18next';

export function NewsPageContent() {
  const { t } = useTranslation('common');
  const newsData = useLocalizedNewsData();
  const newsItems = newsData
    .sort((a, b) => b.order - a.order)
    .filter((item) => item.category === ENewCategory.NEWS);

  const breadcrumbs = [
    {
      label: t('newsPage.heroBreadcrumbHome'),
      href: '/',
      isActive: false,
    },
    {
      label: t('newsPage.heroBreadcrumbNews'),
      href: '/tin-tuc',
      isActive: true,
    },
  ];
  return (
    <div className="w-full">
      <HeroSection
        breadcrumbs={breadcrumbs}
        imageAlt={t('newsPage.heroImageAlt')}
      />
      <main className="max-w-7xl mx-auto space-y-8 py-10 px-4 sm:px-6 lg:px-8">
        <header className="w-full flex flex-col items-center justify-center gap-2">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center uppercase">
            {t('newsPage.heading')}
          </h1>
          <LineTitle alt={t('newsPage.lineTitleAlt')} />

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-center max-w-4xl">
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
