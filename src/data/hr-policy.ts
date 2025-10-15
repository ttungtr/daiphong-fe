import { HeroSectionProps } from './about';

export const heroSectionData: HeroSectionProps = {
  breadcrumbs: [
    { label: 'Trang chủ', href: '/' },
    {
      label: 'Tuyển dụng',
      href: '/tuyen-dung/chinh-sach-nhan-su',
      isActive: true,
    },
    {
      label: 'Chính sách nhân sự',
      href: '/tuyen-dung/chinh-sach-nhan-su',
      isActive: true,
    },
  ],
  imageUrl: '/images/hr-policy/hero-section.pngx',
  imageAlt: 'Chính sách nhân sự - Đại Phong Corp',
};
