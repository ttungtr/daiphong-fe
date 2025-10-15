interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface HeroSectionProps {
  breadcrumbs: BreadcrumbItem[];
  imageUrl: string;
  imageAlt: string;
}

export const heroSectionData: HeroSectionProps = {
  breadcrumbs: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Về chúng tôi', href: '/gioi-thieu', isActive: true },
  ],
  imageUrl: '/images/about/hero-section.pngx',
  imageAlt: 'Về chúng tôi - Hình ảnh đại diện cho công ty',
};

export interface TabItem {
  label: string;
  href: string;
}

export const tabData: TabItem[] = [
  { label: 'Tổng quan công ty', href: '/gioi-thieu' },
  // { label: "Giấy phép", href: "/gioi-thieu/giay-phep" },
  { label: 'Báo cáo tài chính', href: '/gioi-thieu/bao-cao-tai-chinh' },
];

interface IBusinessField {
  title: string;
  imageUrl: string;
  imageAlt: string;
}

export const businessFields: IBusinessField[] = [
  {
    title: 'Ống gió tròn',
    imageUrl: '/images/business-fields/he-thong-dien.jpeg',
    imageAlt: 'Ống gió tròn thông gió',
  },
  {
    title: 'Ống gió vuông',
    imageUrl: '/images/business-fields/he-thong-dien-nhe.jpeg',
    imageAlt: 'Ống gió vuông thông gió',
  },
  {
    title: 'Cửa gió các loại',
    imageUrl: '/images/business-fields/dieu-hoa-khong-khi.pngx',
    imageAlt: 'Cửa gió thông gió',
  },
  {
    title: 'Phụ kiện ống gió',
    imageUrl: '/images/business-fields/cap-thoat-nuoc.pngx',
    imageAlt: 'Phụ kiện ống gió',
  },
  {
    title: 'Van gió',
    imageUrl: '/images/business-fields/he-thong-pccc.pngx',
    imageAlt: 'Van gió thông gió',
  },
  {
    title: 'Sản xuất theo yêu cầu',
    imageUrl: '/images/business-fields/bao-hanh-bao-tri-2.pngx',
    imageAlt: 'Sản xuất ống gió theo yêu cầu',
  },
  {
    title: 'Dịch vụ tư vấn thiết kế',
    imageUrl: '/images/business-fields/bao-hanh-bao-tri.pngx',
    imageAlt: 'Tư vấn thiết kế hệ thống thông gió',
  },
];

interface IVisionMission {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const visionMissionData: IVisionMission[] = [
  {
    title: 'Tầm nhìn',
    description:
      'Trở thành nhà sản xuất và cung cấp ống thông gió hàng đầu tại Việt Nam, dẫn đầu về chất lượng sản phẩm và dịch vụ khách hàng trong ngành HVAC.',
    imageUrl: '/images/vision-mission/tam-nhin.pngx',
    imageAlt: 'Tầm nhìn',
  },
  {
    title: 'Sứ mệnh',
    description:
      'Cung cấp các sản phẩm ống thông gió chất lượng cao, đáp ứng mọi nhu cầu của khách hàng từ dân dụng đến công nghiệp. Cam kết mang đến giải pháp thông gió tối ưu, tiết kiệm năng lượng và thân thiện với môi trường.',
    imageUrl: '/images/vision-mission/su-menh.pngx',
    imageAlt: 'Sứ mệnh',
  },
  {
    title: 'Giá trị cốt lõi',
    description:
      'Chất lượng vượt trội - Dịch vụ hoàn hảo - Phát triển bền vững',
    imageUrl: '/images/vision-mission/gia-tri-cot-loi.pngx',
    imageAlt: 'Giá trị cốt lõi',
  },
  {
    title: 'Triết lý kinh doanh',
    description:
      'Sản phẩm chất lượng cao – Dịch vụ chuyên nghiệp – Đối tác tin cậy – Phát triển bền vững',
    imageUrl: '/images/vision-mission/triet-ly-kinh-doanh.pngx',
    imageAlt: 'Triết lý kinh doanh',
  },
];

// Quy mô và năng lực sản xuất
export interface IProductionCapacity {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const productionCapacityData: IProductionCapacity[] = [
  {
    title: 'Nhà xưởng hiện đại',
    description:
      'Diện tích 5,000m2 với hệ thống máy móc hiện đại, dây chuyền sản xuất tự động hóa cao, đảm bảo năng suất và chất lượng sản phẩm.',
    imageUrl: '/images/about/nang-luc-nhan-su.pngx',
    imageAlt: 'Nhà xưởng sản xuất ống gió hiện đại',
  },
  {
    title: 'Đội ngũ chuyên gia',
    description:
      'Hơn 50 kỹ sư và công nhân lành nghề với nhiều năm kinh nghiệm trong ngành sản xuất ống thông gió, được đào tạo chuyên sâu về công nghệ HVAC.',
    imageUrl: '/images/about/co-cau-to-chuc.pngx',
    imageAlt: 'Đội ngũ nhân viên chuyên nghiệp',
  },
  {
    title: 'Kinh nghiệm 10+ năm',
    description:
      'Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi đã cung cấp sản phẩm cho hàng trăm dự án lớn nhỏ trên toàn quốc.',
    imageUrl: '/images/about/giay-phep.pngx',
    imageAlt: 'Kinh nghiệm sản xuất lâu năm',
  },
  {
    title: 'Công nghệ tiên tiến',
    description:
      'Áp dụng công nghệ sản xuất tiên tiến từ các nước phát triển, đảm bảo sản phẩm đạt tiêu chuẩn quốc tế.',
    imageUrl: '/images/about/thong-tin-cong-ty.pngx',
    imageAlt: 'Công nghệ sản xuất hiện đại',
  },
];

// Sơ đồ tổ chức (dạng text)
export interface IOrganizationStructure {
  department: string;
  responsibilities: string[];
  manager: string;
}

export const organizationStructureData: IOrganizationStructure[] = [
  {
    department: 'Ban Giám đốc',
    responsibilities: [
      'Hoạch định chiến lược',
      'Quyết định đầu tư',
      'Quản lý tổng thể',
    ],
    manager: 'Giám đốc điều hành',
  },
  {
    department: 'Phòng Kỹ thuật',
    responsibilities: [
      'Thiết kế sản phẩm',
      'Kiểm soát chất lượng',
      'Nghiên cứu phát triển',
    ],
    manager: 'Trưởng phòng Kỹ thuật',
  },
  {
    department: 'Phòng Sản xuất',
    responsibilities: ['Quản lý sản xuất', 'Bảo trì máy móc', 'Quản lý kho'],
    manager: 'Trưởng phòng Sản xuất',
  },
  {
    department: 'Phòng Kinh doanh',
    responsibilities: [
      'Bán hàng',
      'Chăm sóc khách hàng',
      'Phát triển thị trường',
    ],
    manager: 'Trưởng phòng Kinh doanh',
  },
  {
    department: 'Phòng Kế toán - Hành chính',
    responsibilities: ['Quản lý tài chính', 'Nhân sự', 'Hành chính'],
    manager: 'Trưởng phòng Kế toán',
  },
];

// Chứng chỉ
export interface ICertification {
  name: string;
  issuer: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const certificationsData: ICertification[] = [
  {
    name: 'ISO 9001:2015',
    issuer: 'Tổ chức Quốc tế về Tiêu chuẩn hóa',
    description: 'Chứng nhận hệ thống quản lý chất lượng quốc tế',
    imageUrl: '/images/about/giay-phep.pngx',
    imageAlt: 'Chứng nhận ISO 9001:2015',
  },
  {
    name: 'Chứng nhận CE',
    issuer: 'Liên minh Châu Âu',
    description: 'Chứng nhận sản phẩm đạt tiêu chuẩn Châu Âu',
    imageUrl: '/images/about/giay-phep.pngx',
    imageAlt: 'Chứng nhận CE',
  },
  {
    name: 'Giấy phép sản xuất',
    issuer: 'Bộ Công Thương',
    description: 'Giấy phép sản xuất ống thông gió hợp pháp',
    imageUrl: '/images/about/giay-phep.pngx',
    imageAlt: 'Giấy phép sản xuất',
  },
  {
    name: 'Chứng nhận ASTM',
    issuer: 'Hiệp hội Vật liệu và Thử nghiệm Hoa Kỳ',
    description: 'Chứng nhận vật liệu đạt tiêu chuẩn ASTM',
    imageUrl: '/images/about/giay-phep.pngx',
    imageAlt: 'Chứng nhận ASTM',
  },
];

// Máy móc sản xuất
export interface IMachinery {
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
}

export const machineryData: IMachinery[] = [
  {
    name: 'Máy cắt laser CNC',
    description:
      'Máy cắt laser hiện đại với độ chính xác cao, có thể cắt tấm kim loại dày đến 20mm',
    features: [
      'Độ chính xác ±0.1mm',
      'Tốc độ cắt cao',
      'Tự động hóa hoàn toàn',
      'Tiết kiệm nguyên liệu',
    ],
    imageUrl: '/images/about/giay-phep.pngx',
    imageAlt: 'Máy cắt laser CNC',
  },
  {
    name: 'Máy tạo hình ống gió',
    description:
      'Dây chuyền sản xuất ống gió tự động, tạo hình chính xác các loại ống tròn và vuông',
    features: [
      'Tự động hóa 100%',
      'Năng suất cao',
      'Chất lượng đồng đều',
      'Giảm thiểu lỗi sản xuất',
    ],
    imageUrl: '/images/about/giay-phep.pngx',
    imageAlt: 'Máy tạo hình ống gió',
  },
  {
    name: 'Máy hàn TIG tự động',
    description:
      'Máy hàn TIG tự động cho các mối nối ống gió, đảm bảo độ kín khí hoàn hảo',
    features: [
      'Hàn tự động',
      'Độ kín khí cao',
      'Chất lượng mối hàn tốt',
      'Tăng độ bền sản phẩm',
    ],
    imageUrl: '/images/about/giay-phep.pngx',
    imageAlt: 'Máy hàn TIG tự động',
  },
  {
    name: 'Máy gia công cửa gió',
    description:
      'Máy chuyên dụng gia công các loại cửa gió với độ chính xác cao',
    features: [
      'Gia công đa dạng',
      'Độ chính xác cao',
      'Hiệu suất cao',
      'Tiết kiệm thời gian',
    ],
    imageUrl: '/images/about/giay-phep.pngx',
    imageAlt: 'Máy gia công cửa gió',
  },
];
