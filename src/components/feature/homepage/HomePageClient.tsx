'use client';

import NivoSliderDemo from '@/components/demo/NivoSliderDemo';
import {
  ContactConsultationSection,
  LetterSection,
  MapSection,
  NewsSection,
  TeamSection,
} from '@/components/feature/homepage';
import { ProductSection } from '@/components/feature/homepage/product-section';
import { useTranslation } from 'react-i18next';

export default function HomePageClient() {
  const { t } = useTranslation('common');

  return (
    <div className="w-full bg-white" aria-label={t('home.ariaRoot')}>
      {/* <HeroSection slides={slides} /> */}
      <NivoSliderDemo />
      {/* <ImagePlaceholderDemo /> */}
      {/* <IntroduceSection /> */}
      <LetterSection />
      <TeamSection />
      <ProductSection />
      <NewsSection />
      {/* <CTASection /> */}
      <ContactConsultationSection />

      <MapSection />
      {/* <PartnerSection /> */}
      {/* <PageViewsDemo /> */}
    </div>
  );
}

