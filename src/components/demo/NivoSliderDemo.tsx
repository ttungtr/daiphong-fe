'use client';

import React from 'react';
import { NivoLikeSlider } from '@/components/common';

// Demo images - replace with your actual images
const demoImages = [
  '/images/banners/banner-1-vi.jpg',
  '/images/banners/banner-2-vi.jpg',
  '/images/banners/banner-3-vi.jpg',
];

export default function NivoSliderDemo() {
  return (
    <div className=" bg-gray-50 ">
      <div className=" mx-auto ">
        <div className="flex justify-center">
          <NivoLikeSlider
            images={demoImages}
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
