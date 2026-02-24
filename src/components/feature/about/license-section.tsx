'use client';

import ImageWithFallback from '@/components/common/ImageWithFallback';
import LineTitle from '@/components/common/line-title';
import { useTranslation } from 'react-i18next';

export const LicenseSection = () => {
  const { t } = useTranslation('common');
  return (
    <section className="py-5 bg-white" aria-labelledby="license-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 flex flex-col items-center justify-center">
          <header className="w-full flex flex-col items-center justify-center">
            <h2
              id="license-heading"
              className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center"
            >
              {t('about.license.heading')}
            </h2>
            <LineTitle alt={t('about.license.lineTitleAlt')} />
          </header>

          <ImageWithFallback
            src="/images/about/giay-phep.png"
            alt={t('about.license.imageAlt')}
            width={400}
            height={600}
            className="w-1/2 h-auto mt-10"
          />
        </div>
      </div>
    </section>
  );
};
