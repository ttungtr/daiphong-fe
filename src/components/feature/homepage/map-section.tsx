'use client';
// import { MapPin, Phone } from "lucide-react";
import LineTitle from '@/components/common/line-title';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const MapSection: React.FunctionComponent = () => {
  const { t } = useTranslation('common');

  return (
    <div className="w-full py-4 md:py-4 lg:py-8 bg-white">
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-bold uppercase text-center">
          {t('mapSection.heading')}
        </h3>

        <LineTitle alt={t('mapSection.lineTitleAlt')} />

        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:col-span-2 order-1 lg:order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1958.893482259745!2d106.7845922!3d10.9037887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527f96718084b%3A0x388cffb3a8b794fa!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24gQ8O0bmcgTmdoaeG7h3AgxJDhuqFpIFBob25nIFZO!5e0!3m2!1svi!2s!4v1785170596505!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>
        </div>
      </div>
    </div>
  );
};
