import NivoSliderDemo from '@/components/demo/NivoSliderDemo';
import {
  ContactConsultationSection,
  LetterSection,
  MapSection,
  NewsSection,
  TeamSection,
} from '@/components/feature/homepage';
import { ProductSection } from '@/components/feature/homepage/product-section';
// import { PageViewsDemo } from "@/components/common";
import { Metadata } from 'next';

// SEO Metadata for homepage
export const metadata: Metadata = {
  title:
    'Đại Phong - Công Ty Cổ Phần Công Nghiệp | Thi công hệ thống MEP chuyên nghiệp',
  description:
    'Đại Phong - Đơn vị hàng đầu trong thi công hệ thống MEP (điện, nước, điều hòa, phòng cháy chữa cháy). Tư vấn, thiết kế và thi công chuyên nghiệp với đội ngũ kỹ sư giàu kinh nghiệm.',
  keywords: [
    'Đại Phong',
    'thi công hệ thống MEP',
    'hệ thống điện',
    'hệ thống nước',
    'điều hòa thông gió',
    'phòng cháy chữa cháy',
    'cơ điện',
    'kỹ thuật cơ điện',
    'thiết kế MEP',
    'tư vấn cơ điện',
    'công ty cơ điện',
    'dự án MEP',
    'hệ thống điện nhẹ',
    'cấp thoát nước',
    'HVAC',
  ],
  authors: [{ name: 'Đại Phong' }],
  creator: 'Đại Phong',
  publisher: 'Đại Phong',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://www.onggiodaiphong.com',
    title:
      'Đại Phong - Công Ty Cổ Phần Công Nghiệp | Thi công hệ thống MEP chuyên nghiệp',
    description:
      'Đại Phong - Đơn vị hàng đầu trong thi công hệ thống MEP (điện, nước, điều hòa, phòng cháy chữa cháy). Tư vấn, thiết kế và thi công chuyên nghiệp.',
    images: [
      {
        url: '/images/banners/banner-1.pngx',
        width: 1200,
        height: 630,
        alt: 'Đại Phong - Thi công hệ thống MEP chuyên nghiệp',
      },
    ],
    siteName: 'Đại Phong',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@onggiodaiphong',
    creator: '@onggiodaiphong',
    title: 'Đại Phong - Công Ty Cổ Phần Công Nghiệp',
    description:
      'Đơn vị hàng đầu trong thi công hệ thống MEP (điện, nước, điều hòa, phòng cháy chữa cháy)',
    images: ['/images/banners/banner-1.pngx'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="w-full bg-white">
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
