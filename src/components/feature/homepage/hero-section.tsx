'use client';

import { MingcuteRightFill } from '@/components/icons';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import '@/assets/css/slider.css';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

interface SlideData {
  id: number;
  image: string;
}

interface HeroSectionProps {
  slides: SlideData[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ slides }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Organization structured data for homepage
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Đại Phong',
    alternateName: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
    url: 'https://www.onggiodaiphong.com',
    logo: 'https://www.onggiodaiphong.com/images/logo.pngx',
    description:
      'Đơn vị hàng đầu trong thi công hệ thống MEP (điện, nước, điều hòa, phòng cháy chữa cháy)',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
      addressLocality: 'Hà Nội',
      addressRegion: 'Hà Nội',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84-123-456-789',
      contactType: 'customer service',
      availableLanguage: 'Vietnamese',
    },
    sameAs: [
      'https://www.facebook.com/onggiodaiphong',
      'https://www.linkedin.com/company/onggiodaiphong',
    ],
  };

  // Alt text descriptions for slides
  const slideAltTexts = [
    'Đại Phong - Thi công hệ thống MEP chuyên nghiệp, dự án tiêu biểu',
    'Đại Phong - Hệ thống điện, nước, điều hòa thông gió chất lượng cao',
    'Đại Phong - Phòng cháy chữa cháy và hệ thống điện nhẹ',
    'Đại Phong - Đội ngũ kỹ sư giàu kinh nghiệm, công nghệ hiện đại',
  ];

  return (
    <>
      {/* Organization Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />

      <div className="group relative w-full h-auto overflow-hidden">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          speed={800}
          allowTouchMove={false}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          className="w-full h-full"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <ImageWithFallback
                src={slide.image}
                alt={
                  slideAltTexts[index] ||
                  `Đại Phong - Slide ${slide.id} - Thi công hệ thống MEP`
                }
                className="w-full"
                width={1366}
                height={550}
                priority={index === 0}
                quality={85}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-button-prev-custom hexagon-btn absolute left-3 top-1/2 -translate-y-1/2 z-20 w-13 h-13 bg-white/50 cursor-pointer backdrop-blur-sm text-black flex items-center justify-center text-lg font-bold transition-all duration-300 opacity-0 group-hover:opacity-100">
          <MingcuteRightFill className="rotate-180" />
        </button>

        <button className="swiper-button-next-custom hexagon-btn absolute right-3 top-1/2 -translate-y-1/2 z-20 w-13 h-13 bg-white/50 cursor-pointer backdrop-blur-sm text-black flex items-center justify-center text-lg font-bold transition-all duration-300 opacity-0 group-hover:opacity-100">
          <MingcuteRightFill />
        </button>
      </div>
    </>
  );
};

export { HeroSection };
