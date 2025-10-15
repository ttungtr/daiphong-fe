import { IImage } from '@/types';
import { HeroSectionProps } from './about';

export interface IService {
  id: string;
  title: string;
  link: string;
  description: string;
  keywords: string[];
  detailedDescription?: string;
  features: string[];
  images: IImage[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  isActive: boolean;
}

export const heroSectionData: HeroSectionProps = {
  breadcrumbs: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Sản phẩm', href: '/services', isActive: true },
  ],
  imageUrl: '/images/services/hero-section.pngx',
  imageAlt:
    'Sản phẩm ống thông gió chất lượng cao - Nhà sản xuất ống gió chuyên nghiệp',
};

export const servicesData: IService[] = [
  {
    id: 'ong-gio-tron',
    title: 'Ống gió tròn',
    link: '/linh-vuc-hoat-dong/ong-gio-tron',
    description:
      'Ống gió tròn được sản xuất từ tấm kim loại chất lượng cao, có độ bền và khả năng chống ăn mòn tốt. Sản phẩm đạt tiêu chuẩn quốc tế, phù hợp cho mọi hệ thống thông gió.',
    detailedDescription:
      'Chúng tôi sản xuất ống gió tròn với nhiều kích thước khác nhau từ Ø100mm đến Ø2000mm, độ dày từ 0.5mm đến 3mm. Sản phẩm được gia công chính xác, đảm bảo độ kín khí cao và dễ dàng lắp đặt.',
    keywords: [
      'Ống gió tròn',
      'Thông gió',
      'HVAC',
      'Ống gió kim loại',
      'Ống gió tôn',
    ],
    features: [
      'Đường kính từ Ø100mm - Ø2000mm',
      'Độ dày 0.5mm - 3mm',
      'Vật liệu: Tôn mạ kẽm, Inox 304/316',
      'Độ kín khí cao',
      'Dễ dàng lắp đặt',
      'Tuổi thọ cao',
      'Giá cả cạnh tranh',
    ],
    images: [
      {
        url: '/images/services/he-thong-dien/1.pngx',
        alt: 'Ống gió tròn chất lượng cao',
      },
      {
        url: '/images/services/he-thong-dien/3.pngx',
        alt: 'Ống gió tròn sản xuất chuyên nghiệp',
      },
      {
        url: '/images/services/he-thong-dien/2.pngx',
        alt: 'Ống gió tròn đa dạng kích thước',
      },
    ],
  },
  {
    id: 'ong-gio-vuong',
    title: 'Ống gió vuông',
    images: [
      {
        url: '/images/services/he-thong-dien-nhe/1.pngx',
        alt: 'Ống gió vuông chất lượng cao',
      },
      {
        url: '/images/services/he-thong-dien-nhe/2.pngx',
        alt: 'Ống gió vuông đa dạng kích thước',
      },
      {
        url: '/images/services/he-thong-dien-nhe/3.pngx',
        alt: 'Ống gió vuông sản xuất chuyên nghiệp',
      },
    ],
    link: '/linh-vuc-hoat-dong/ong-gio-vuong',
    description:
      'Ống gió vuông được sản xuất với độ chính xác cao, phù hợp cho các hệ thống thông gió trong không gian hạn chế. Sản phẩm có tính thẩm mỹ cao và dễ dàng tích hợp vào kiến trúc.',
    detailedDescription:
      'Chúng tôi sản xuất ống gió vuông với kích thước từ 100x100mm đến 1200x1200mm, độ dày từ 0.5mm đến 2mm. Sản phẩm được gia công chính xác, đảm bảo độ kín khí và tính thẩm mỹ cao.',
    keywords: [
      'Ống gió vuông',
      'Thông gió',
      'HVAC',
      'Ống gió kim loại',
      'Ống gió tôn',
    ],
    features: [
      'Kích thước từ 100x100mm - 1200x1200mm',
      'Độ dày 0.5mm - 2mm',
      'Vật liệu: Tôn mạ kẽm, Inox 304/316',
      'Độ kín khí cao',
      'Tính thẩm mỹ cao',
      'Dễ dàng tích hợp kiến trúc',
      'Tuổi thọ cao',
    ],
  },
  {
    id: 'cua-gio-cac-loai',
    title: 'Cửa gió các loại',
    images: [
      {
        url: '/images/services/he-thong-dieu-hoa-thong-gio/1.pngx',
        alt: 'Cửa gió chất lượng cao',
      },
      {
        url: '/images/services/he-thong-dieu-hoa-thong-gio/2.pngx',
        alt: 'Cửa gió đa dạng mẫu mã',
      },
      {
        url: '/images/services/he-thong-dieu-hoa-thong-gio/3.pngx',
        alt: 'Cửa gió sản xuất chuyên nghiệp',
      },
    ],
    link: '/linh-vuc-hoat-dong/cua-gio-cac-loai',
    description:
      'Cửa gió được sản xuất với nhiều mẫu mã đa dạng, phù hợp cho mọi hệ thống thông gió. Sản phẩm có tính thẩm mỹ cao, dễ dàng điều chỉnh lưu lượng gió và đảm bảo hiệu quả thông gió tối ưu.',
    detailedDescription:
      'Chúng tôi sản xuất đầy đủ các loại cửa gió: cửa gió khe, cửa gió nan cong, cửa gió khuếch tán tròn/vuông, cửa gió ngoài trời, cửa gió có lưới lọc bụi. Tất cả đều được gia công chính xác với độ bền cao.',
    keywords: ['Cửa gió', 'Thông gió', 'HVAC', 'Cửa gió khe', 'Cửa gió nan'],
    features: [
      'Cửa gió khe (SLD)',
      'Cửa gió nan cong (AGL)',
      'Cửa gió khuếch tán tròn/vuông',
      'Cửa gió ngoài trời',
      'Cửa gió có lưới lọc bụi',
      'Cửa gió 1 lớp và 2 lớp',
      'Điều chỉnh lưu lượng gió dễ dàng',
    ],
  },
  {
    id: 'phu-kien-ong-gio',
    title: 'Phụ kiện ống gió',
    images: [
      {
        url: '/images/services/he-thong-cap-thoat-nuoc/1.pngx',
        alt: 'Phụ kiện ống gió chất lượng cao',
      },
      {
        url: '/images/services/he-thong-cap-thoat-nuoc/2.pngx',
        alt: 'Phụ kiện ống gió đa dạng',
      },
      {
        url: '/images/services/he-thong-cap-thoat-nuoc/1.pngx',
        alt: 'Phụ kiện ống gió chuyên nghiệp',
      },
    ],
    link: '/linh-vuc-hoat-dong/phu-kien-ong-gio',
    description:
      'Phụ kiện ống gió được sản xuất với độ chính xác cao, đảm bảo kết nối chặt chẽ và hiệu quả thông gió tối ưu. Sản phẩm bao gồm các loại co, tê, giảm, nối và các phụ kiện khác.',
    detailedDescription:
      'Chúng tôi sản xuất đầy đủ các loại phụ kiện ống gió: co 90°, co 45°, tê, giảm, nối, bích, gioăng... Tất cả đều được gia công chính xác với độ bền cao, đảm bảo hệ thống thông gió hoạt động hiệu quả.',
    keywords: [
      'Phụ kiện ống gió',
      'Co ống gió',
      'Tê ống gió',
      'Giảm ống gió',
      'Nối ống gió',
    ],
    features: [
      'Co 90° và co 45°',
      'Tê 3 nhánh và tê 4 nhánh',
      'Giảm tròn và giảm vuông',
      'Nối ống gió',
      'Bích nối ống gió',
      'Gioăng kín khí',
      'Độ chính xác cao',
    ],
  },
  {
    id: 'van-gio',
    title: 'Van gió',
    images: [
      {
        url: '/images/services/he-thong-phong-chay-chua-chay/2.pngx',
        alt: 'Van gió chất lượng cao',
      },
      {
        url: '/images/services/he-thong-phong-chay-chua-chay/3.pngx',
        alt: 'Van gió đa dạng mẫu mã',
      },
      {
        url: '/images/services/he-thong-phong-chay-chua-chay/2.pngx',
        alt: 'Van gió sản xuất chuyên nghiệp',
      },
    ],
    link: '/linh-vuc-hoat-dong/van-gio',
    description:
      'Van gió được sản xuất với độ chính xác cao, đảm bảo điều chỉnh lưu lượng gió chính xác và hiệu quả. Sản phẩm bao gồm van gió tròn, vuông, van xả áp, van chặn lửa và các loại van khác.',
    detailedDescription:
      'Chúng tôi sản xuất đầy đủ các loại van gió: van gió tròn (R-VCD), van cửa gió (OBD), van xả áp (PRD), van gió 1 chiều (CD), van chặn lửa cầu chì (FD), van gió động cơ điện (VCD-M). Tất cả đều đạt tiêu chuẩn chất lượng cao.',
    keywords: [
      'Van gió',
      'Van gió tròn',
      'Van gió vuông',
      'Van xả áp',
      'Van chặn lửa',
    ],
    features: [
      'Van gió tròn (R-VCD)',
      'Van cửa gió (OBD)',
      'Van xả áp (PRD)',
      'Van gió 1 chiều (CD)',
      'Van chặn lửa cầu chì (FD)',
      'Van gió động cơ điện (VCD-M)',
      'Van gió vuông (VCD)',
    ],
  },
];
