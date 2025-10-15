'use client';

import React from 'react';
import { NivoLikeSlider } from '@/components/common';

// Demo images - replace with your actual images
const demoImages = [
  '/images/about/hero-section.png',
  '/images/contact/hero-section.png',
];

export default function NivoSliderDemo() {
  return (
    <div className=' bg-gray-50 '>
      <div className=' mx-auto '>
        <div className='flex justify-center'>
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
