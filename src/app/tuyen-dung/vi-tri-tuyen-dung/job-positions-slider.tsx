'use client';

import { MingcuteRightFill } from '@/components/icons';
import { jobPositions } from '@/data/job-positions';
import Link from 'next/link';
import React, { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import '@/assets/css/slider.css';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface JobPositionsSliderProps {
  jobPositions: typeof jobPositions;
}

export const JobPositionsSlider: React.FC<JobPositionsSliderProps> = ({
  jobPositions,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className='group relative w-full overflow-hidden pb-12'>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        speed={300}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          nextEl: '.job-positions-swiper-button-next',
          prevEl: '.job-positions-swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.job-positions-swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className='w-full'
      >
        {jobPositions.map((jobPosition) => (
          <SwiperSlide key={jobPosition.id}>
            <Link
              href={`/tuyen-dung/vi-tri-tuyen-dung/${jobPosition.id}`}
              className='group/card bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-primary-blue-1 transition-all duration-300 h-full flex flex-col'
            >
              <div className='overflow-hidden flex-shrink-0'>
                <ImageWithFallback
                  src={jobPosition.images[0].url}
                  alt={jobPosition.images[0].alt}
                  width={400}
                  height={250}
                  className='w-full h-auto object-cover group-hover/card:scale-105 transition-transform duration-300'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                />
              </div>

              <div className='p-4 flex-1 flex flex-col justify-between'>
                <h4 className='text-base sm:text-lg md:text-xl font-semibold text-gray-900 group-hover/card:text-primary-blue-1 transition-colors duration-300 mb-2 min-h-[56px]'>
                  {jobPosition.title}
                </h4>
                <div className='mt-auto'>
                  <div className='text-sm text-gray-600 mb-2'>
                    <div className='flex items-center gap-2 mb-1'>
                      <span className='text-primary-blue-1'>🔹 Số lượng: </span>
                      <span>{jobPosition.quantity}</span>
                    </div>
                    <div className='flex items-center gap-2 mb-1'>
                      <span className='text-primary-blue-1'>
                        💰 Mức lương:{' '}
                      </span>
                      <span>{jobPosition.salary}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className='job-positions-swiper-button-prev hexagon-btn absolute left-2 top-1/2 -translate-y-1/2 z-20 w-13 h-13 bg-white/80 hover:bg-white cursor-pointer backdrop-blur-sm text-black flex items-center justify-center text-lg font-bold transition-all duration-300 opacity-100 xl:opacity-0 xl:group-hover:opacity-100 shadow-lg'>
        <MingcuteRightFill className='rotate-180' />
      </button>

      <button className='job-positions-swiper-button-next hexagon-btn absolute right-2 top-1/2 -translate-y-1/2 z-20 w-13 h-13 bg-white/80 hover:bg-white cursor-pointer backdrop-blur-sm text-black flex items-center justify-center text-lg font-bold transition-all duration-300 opacity-100 xl:opacity-0 xl:group-hover:opacity-100 shadow-lg'>
        <MingcuteRightFill />
      </button>

      {/* Pagination Dots */}
      <div className='job-positions-swiper-pagination absolute bottom-2 !w-fit !left-1/2 !-translate-x-1/2 z-20 flex space-x-4'></div>
    </div>
  );
};
