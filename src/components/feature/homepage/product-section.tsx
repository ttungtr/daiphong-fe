'use client';

import { MingcuteRightFill } from '@/components/icons';
import { PRODUCTS } from '@/data/products';
import Link from 'next/link';
import { FunctionComponent, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import '@/assets/css/slider.css';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { MoveRightIcon } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LineTitle from '@/components/common/line-title';
import { useTranslation } from 'react-i18next';

export const ProductSection: FunctionComponent = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { t } = useTranslation('common');

  return (
    <div className="w-full py-4 md:py-4 lg:py-8 bg-white">
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-bold uppercase text-center">
          {t('productsSection.heading')}
        </h3>

        <LineTitle alt={t('productsSection.heading')} />

        <p className="text-center max-w-[90%] sm:max-w-[80%] text-black/80 text-sm sm:text-base mb-6 md:mb-8">
          {t('productsSection.subtitle')}
        </p>

        {/* Slider Container */}
        <div className="group relative w-full overflow-hidden pb-12">
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
              nextEl: '.products-swiper-button-next',
              prevEl: '.products-swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.products-swiper-pagination',
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
            className="w-full"
          >
            {PRODUCTS.slice(0, 6).map((product) => (
              <SwiperSlide key={product.id}>
                <Link
                  href={`/san-pham/${product.slug}`}
                  className="group/card block bg-white border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary-blue-1 transition-all duration-300 h-full"
                >
                  <div className="overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      width={400}
                      height={250}
                      src={product.image}
                      alt={product.name}
                      className="w-full !h-56 object-cover group-hover/card:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-4">
                    <h4
                      className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 group-hover/card:text-primary-blue-1 transition-colors duration-300 mb-2"
                      itemProp="name"
                    >
                      {product.name}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base line-clamp-3 mb-2">
                      {product.description}
                    </p>
                    <div className="text-sm font-medium text-primary-blue-1">
                      {typeof product.price === 'number'
                        ? new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                            maximumFractionDigits: 0,
                          }).format(product.price)
                        : 'Liên hệ'}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="products-swiper-button-prev hexagon-btn absolute left-2 top-1/2 -translate-y-1/2 z-20 w-13 h-13 bg-white/80 hover:bg-white cursor-pointer backdrop-blur-sm text-black flex items-center justify-center text-lg font-bold transition-all duration-300 opacity-100 xl:opacity-0 xl:group-hover:opacity-100 shadow-lg">
            <MingcuteRightFill className="rotate-180" />
          </button>

          <button className="products-swiper-button-next hexagon-btn absolute right-2 top-1/2 -translate-y-1/2 z-20 w-13 h-13 bg-white/80 hover:bg-white cursor-pointer backdrop-blur-sm text-black flex items-center justify-center text-lg font-bold transition-all duration-300 opacity-100 xl:opacity-0 xl:group-hover:opacity-100 shadow-lg">
            <MingcuteRightFill />
          </button>

          {/* Pagination Dots */}
          <div className="products-swiper-pagination absolute bottom-2 !w-fit !left-1/2 !-translate-x-1/2 z-20 flex space-x-4"></div>
        </div>

        {/* View All Button */}
        <div className="w-full flex items-center justify-center py-3 mt-6 md:mt-8">
          <Link
            href="/san-pham"
            className="bg-primary-blue-1 hover:opacity-70 text-white duration-300 w-32 sm:w-40 text-center py-2 rounded-md text-sm font-semibold flex gap-1 justify-center items-center"
          >
            {t('productsSection.viewAll')} <MoveRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
