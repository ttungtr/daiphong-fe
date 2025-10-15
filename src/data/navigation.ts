export interface DropdownItem {
  title: string;
  href: string;
}

export interface NavItem {
  title: string;
  href: string;
  dropdown?: DropdownItem[];
}

export const navigationItems: NavItem[] = [
  {
    title: 'TRANG CHỦ',
    href: '/',
  },
  {
    title: 'VỀ CHÚNG TÔI',
    href: '/gioi-thieu',
    dropdown: [
      {
        title: 'Tổng quan công ty',
        href: '/gioi-thieu',
      },
      {
        title: 'Báo cáo tài chính',
        href: '/gioi-thieu/bao-cao-tai-chinh',
      },
    ],
  },
  {
    title: 'SẢN PHẨM',
    href: '/san-pham',
    // dropdown: [
    //   {
    //     title: 'Sản phẩm ống vuông',
    //     href: '/san-pham/ong-vuong',
    //   },
    //   {
    //     title: 'Sản phẩm ống tròn',
    //     href: '/san-pham/ong-tron',
    //   },
    //   {
    //     title: 'Sản phẩm van gió',
    //     href: '/san-pham/van-gio',
    //   },
    //   {
    //     title: 'Sản phẩm miệng gió',
    //     href: '/san-pham/mieng-gio',
    //   },
    //   {
    //     title: 'Sản phẩm tiêu âm',
    //     href: '/san-pham/tieu-am',
    //   },
    //   {
    //     title: 'Sản phẩm thang máng cáp',
    //     href: '/san-pham/thang-mang-cap',
    //   },
    //   {
    //     title: 'Sản phẩm quạt gió',
    //     href: '/san-pham/quat-gio',
    //   },
    //   {
    //     title: 'Sản phẩm ống vuông & phụ kiện',
    //     href: '/san-pham/ong-vuong-phu-kien',
    //   },
    //   {
    //     title: 'Sản phẩm ống tròn xoắn 2 lớp',
    //     href: '/san-pham/ong-tron-xoan-2-lop',
    //   },
    //   {
    //     title: 'Sản phẩm thiết bị sản xuất',
    //     href: '/san-pham/thiet-bi-san-xuat',
    //   },
    // ],
  },
  // {
  //   title: "LĨNH VỰC HOẠT ĐỘNG",
  //   href: "/linh-vuc-hoat-dong",
  //   dropdown: [
  //     {
  //       title: "Hệ thống điện",
  //       href: "/linh-vuc-hoat-dong/he-thong-dien",
  //     },
  //     {
  //       title: "Hệ thống điện nhẹ",
  //       href: "/linh-vuc-hoat-dong/he-thong-dien-nhe",
  //     },
  //     {
  //       title: "Hệ thống điều hòa thông gió",
  //       href: "/linh-vuc-hoat-dong/he-thong-dieu-hoa-thong-gio",
  //     },
  //     {
  //       title: "Hệ thống cấp thoát nước",
  //       href: "/linh-vuc-hoat-dong/he-thong-cap-thoat-nuoc",
  //     },
  //     {
  //       title: "Hệ thống phòng cháy chữa cháy",
  //       href: "/linh-vuc-hoat-dong/he-thong-phong-chay-chua-chay",
  //     },
  //   ],
  // },
  {
    title: 'CÔNG TRÌNH',
    href: '/du-an',
  },

  {
    title: 'TIN TỨC',
    href: '/tin-tuc',
    dropdown: [
      {
        title: 'Tin tức',
        href: '/tin-tuc',
      },
      {
        title: 'Hoạt động công ty',
        href: '/hoat-dong-cong-ty',
      },
    ],
  },
  // {
  //   title: "TUYỂN DỤNG",
  //   href: "/tuyen-dung/vi-tri-tuyen-dung",
  // },
  // {
  //   title: "HỢP TÁC",
  //   href: "/hop-tac",
  // },
  {
    title: 'LIÊN HỆ',
    href: '/lien-he',
  },
];
