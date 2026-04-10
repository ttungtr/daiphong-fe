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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2456.8504173061056!2d106.78480150910403!3d10.904128289966598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9c7cd0f86b9%3A0x4fd446149c29ea02!2zQ8OUTkcgVFkgQ-G7lCBQSOG6pk4gQ8OUTkcgTkdISeG7hlAgxJDhuqBJIFBIT05HIFZO!5e0!3m2!1sen!2s!4v1775803840707!5m2!1sen!2s"
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
