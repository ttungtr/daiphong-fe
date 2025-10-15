import { INew } from '@/types/news';
import { TabItem } from './about';
import { ENewCategory } from '@/enum/new';

export const newsTabData: TabItem[] = [
  { label: 'Tin tức', href: '/tin-tuc' },
  { label: 'Hoạt động công ty', href: '/hoat-dong-cong-ty' },
];

export const newsData: INew[] = [
  {
    id: 'samsung-electronics-vietnam-factory',
    title:
      'ĐẠI PHONG CORP CHÍNH THỨC KHỞI CÔNG NHÀ MÁY SAMSUNG ELECTRONICS VIỆT NAM TẠI BẮC NINH',
    images: [
      '/images/news/samsung-bac-ninh/1.pngx',
      '/images/news/samsung-bac-ninh/2.pngx',
      '/images/news/samsung-bac-ninh/3.pngx',
    ],
    createdAt: '15/03/2023',
    slug: 'samsung-electronics-vietnam-factory',
    category: ENewCategory.NEWS,
    tags: ['SAMSUNG', 'BẮC NINH', 'CÔNG NGHIỆP'],
    paragraphs: [
      'Công Ty Cổ Phần Công Nghiệp Đại Phong vinh dự được lựa chọn làm nhà thầu chính thi công hệ thống cơ điện (MEP) cho dự án Nhà máy Samsung Electronics Việt Nam tại Khu công nghiệp Yên Phong, Bắc Ninh.',
      'Đây là một trong những dự án công nghiệp lớn nhất của Samsung tại Việt Nam với quy mô 200,000 m2, gồm 4 tầng nhà xưởng sản xuất điện tử cao cấp. Việc được lựa chọn cho dự án này khẳng định năng lực và uy tín của Đại Phong trong lĩnh vực thi công MEP công nghiệp.',
      '🏭 Thông tin dự án:\n🔻 Quy mô: 200,000 m2, 4 tầng\n🔻 Giá trị hợp đồng: ~6.8 tỷ VNĐ\n🔻 Thời gian thi công: 03/2023 - 11/2023\n🔻 Hạng mục: Hệ thống ống gió, cửa gió, van gió và HVAC toàn nhà máy',
      'Với phương châm "Chất lượng quốc tế - Tiến độ cam kết - An toàn tuyệt đối", Đại Phong cam kết mang đến giải pháp MEP tối ưu cho nhà máy Samsung, đảm bảo tiêu chuẩn kỹ thuật cao nhất và thời gian hoàn thành đúng hẹn.',
      '🚀 Dự án Samsung Electronics Việt Nam sẽ mở ra cơ hội hợp tác dài hạn với tập đoàn công nghệ hàng đầu thế giới, đồng thời nâng cao vị thế của Đại Phong trong thị trường MEP công nghiệp Việt Nam.',
    ],
    order: 1,
  },
  {
    id: 'aeon-mall-binh-tan-construction',
    title:
      'KHỞI CÔNG TRUNG TÂM THƯƠNG MẠI AEON MALL BÌNH TÂN - DỰ ÁN THƯƠNG MẠI QUY MÔ LỚN',
    images: [
      '/images/news/aeon-mall-binh-tan/1.pngx',
      '/images/news/aeon-mall-binh-tan/2.pngx',
      '/images/news/aeon-mall-binh-tan/3.pngx',
    ],
    createdAt: '10/01/2024',
    slug: 'aeon-mall-binh-tan-construction',
    category: ENewCategory.NEWS,
    tags: ['AEON', 'THƯƠNG MẠI', 'BÌNH TÂN'],
    paragraphs: [
      'Đại Phong Corp chính thức khởi công dự án Trung tâm thương mại AEON Mall Bình Tân - một trong những trung tâm thương mại quy mô lớn nhất tại TP. Hồ Chí Minh với diện tích 180,000 m2.',
      'Dự án được đầu tư bởi tập đoàn AEON Nhật Bản, nằm tại vị trí đắc địa Quận Bình Tân với 3 tầng hầm và 4 tầng nổi. Đại Phong được lựa chọn thi công toàn bộ hệ thống HVAC và cơ điện cho công trình này.',
      '🏬 Chi tiết dự án:\n🔻 Địa điểm: 1 Đường số 17A, Bình Trị Đông B, Bình Tân\n🔻 Quy mô: 3 tầng hầm, 4 tầng nổi, 180,000 m2\n🔻 Giá trị: ~4.2 tỷ VNĐ\n🔻 Thời gian: 01/2024 - 09/2024',
      'Đây là dự án thương mại lớn thứ 3 mà Đại Phong thực hiện cho tập đoàn AEON tại Việt Nam, khẳng định mối quan hệ hợp tác bền vững và niềm tin từ phía chủ đầu tư Nhật Bản.',
      '🎯 Với kinh nghiệm thi công các dự án thương mại lớn, Đại Phong cam kết mang đến giải pháp HVAC hiện đại, tiết kiệm năng lượng và đảm bảo tiêu chuẩn chất lượng quốc tế cho AEON Mall Bình Tân.',
    ],
    order: 2,
  },
];
