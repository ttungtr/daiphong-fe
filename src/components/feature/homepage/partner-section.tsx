'use client';

import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import '@/assets/css/flip.css';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import LineTitle from '@/components/common/line-title';

const partnerImages = [
  'Van-Khanh-Group.jpgx',
  'AEON.jpgx',
  'TPBank.jpgx',
  'BOE.jpgx',
  'Cadivi.jpgx',
  'Central.jpgx',
  'CPC.jpgx',
  'Daikin.jpgx',
  'Daphaco.jpgx',
  'Emart.jpgx',
  'Hisense.jpgx',
  'Hung-Thanh-Dat.jpgx',
  'LPBank.jpgx',
  'Newteccon.jpgx',
  'PCCC-2-9.jpgx',
  'PXP-electric.jpgx',
  'Samphu.jpgx',
  'searefico.jpgx',
  'Tan-Anh.jpgx',
  'Techcombank.jpgx',
  'TLD.jpgx',

  'Unicons.jpgx',

  'vietsafe.jpgx',
  'Zenco.jpgx',
];

export const PartnerSection: FunctionComponent = () => {
  const { t } = useTranslation('common');
  const principles = t('about.partner.principles', {
    returnObjects: true,
  }) as string[];
  return (
    <div className="w-full bg-primary-blue-1 text-white py-4 md:py-4 lg:py-8">
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-bold uppercase text-center">
          {t('about.partner.heading')}
        </h3>

        <LineTitle alt={t('about.partner.lineTitleAlt')} />
        <div className="grid grid-cols-1 lg:grid-cols-2 py-8 md:py-12 lg:py-14 gap-6 md:gap-8 lg:gap-4">
          <div className="lg:col-span-1 flex flex-col items-center justify-center">
            <div className="space-y-2 sm:space-y-4 w-full">
              <p className="text-center text-sm sm:text-base font-bold">
                {t('about.partner.networkTitle')}
              </p>

              <p className="text-justify text-sm sm:text-base mb-1">
                {t('about.partner.p1')}
              </p>

              <p className="text-justify text-sm sm:text-base mb-1">
                {t('about.partner.p2')}
              </p>
              <ul className="list-none space-y-1 ml-4 text-sm sm:text-base mb-1">
                {principles.map((principle, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-300 mr-2">✓</span>
                    {principle}
                  </li>
                ))}
              </ul>

              <p className="text-justify text-sm sm:text-base mb-1">
                {t('about.partner.p3')}
              </p>

              <p className="text-justify text-sm sm:text-base">
                {t('about.partner.p4')}
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 h-full content-center">
            <div className="partner-section  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 h-fit">
              {partnerImages.map((image, index) => {
                if (index % 2 === 0) {
                  const nextImage = partnerImages[index + 1];
                  return (
                    <div
                      key={`partner-${index}`}
                      className="flip-card flip-card-auto w-full h-16 sm:h-16 md:h-16 "
                    >
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <ImageWithFallback
                            src={`/images/partner/${image}`}
                            alt={`Partner ${image.replace('.png', '')}`}
                            width={100}
                            height={100}
                            className="object-contain w-full h-full p-2"
                          />
                        </div>
                        <div className="flip-card-back">
                          {nextImage && (
                            <ImageWithFallback
                              src={`/images/partner/${nextImage}`}
                              alt={`Partner ${nextImage.replace('.png', '')}`}
                              width={100}
                              height={100}
                              className="object-contain w-full h-full p-2"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
