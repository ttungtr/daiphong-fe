'use client';

import ImageWithFallback from '@/components/common/ImageWithFallback';
import LineTitle from '@/components/common/line-title';
import { MapSection } from '@/components/feature/homepage';
import { HeroSection } from '@/components/feature/services';
import { servicesData } from '@/data/services';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const SERVICE_ID_TO_KEY: Record<string, string> = {
  'ong-gio-tron': 'ongGioTron',
  'ong-gio-vuong': 'ongGioVuong',
  'cua-gio-cac-loai': 'cuaGioCacLoai',
  'phu-kien-ong-gio': 'phuKienOngGio',
  'van-gio': 'vanGio',
};

export function ServicesPageContent() {
  const { t } = useTranslation('common');

  const breadcrumbs = [
    { label: t('servicesPage.heroBreadcrumbHome'), href: '/', isActive: false },
    {
      label: t('servicesPage.heroBreadcrumbServices'),
      href: '/linh-vuc-hoat-dong',
      isActive: true,
    },
  ];

  return (
    <div className="w-full">
      <HeroSection breadcrumbs={breadcrumbs} />

      <div className="max-w-7xl mx-auto space-y-4 py-10 px-4 sm:px-6 lg:px-8">
        <header className="w-full flex flex-col items-center justify-center">
          <h1
            id="services-heading"
            className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center"
          >
            {t('servicesPage.heading')}
          </h1>
          <LineTitle alt={t('servicesPage.lineTitleAlt')} />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {servicesData.map((relatedService) => {
            const key = SERVICE_ID_TO_KEY[relatedService.id];
            const title = key
              ? t(`servicesPage.${key}.title`)
              : relatedService.title;
            const description = key
              ? t(`servicesPage.${key}.description`)
              : relatedService.description;

            return (
              <Link
                key={relatedService.id}
                href={relatedService.link}
                className="group block bg-white border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary-blue-1 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              >
                <div className="aspect-w-16 aspect-h-10">
                  <ImageWithFallback
                    src={relatedService.images[0].url}
                    alt={relatedService.images[0].alt}
                    width={300}
                    height={200}
                    className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-blue-1 transition-colors duration-300 mb-2">
                    {title.toUpperCase()}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base line-clamp-2">
                    {description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <MapSection />
    </div>
  );
}
