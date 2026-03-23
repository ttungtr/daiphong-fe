'use client';

import { NivoLikeSlider } from '@/components/common';
import i18n from '@/i18n';

// Demo images - replace with your actual images
const demoImagesVi = [
  '/images/banners/banner-1-vi.jpg',
  '/images/banners/banner-2-vi.jpg',
  '/images/banners/banner-3-vi.jpg',
];

const demoImagesEn = [
  '/images/banners/banner-1-en.jpg',
  '/images/banners/banner-2-en.jpg',
  '/images/banners/banner-3-en.jpg',
];

export default function NivoSliderDemo() {
  const isEn = i18n.language === 'en';
  return (
    <div className="bg-white">
      <div className="mx-auto">
        <div className="flex justify-center">
          <NivoLikeSlider
            images={isEn ? demoImagesEn : demoImagesVi}
            autoPlayInterval={3000}
            columns={8}
            rows={4}
            // className="shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
