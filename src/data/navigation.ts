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
  },
  {
    title: 'SẢN PHẨM',
    href: '/san-pham',
    dropdown: [
      {
        title: 'Tất cả',
        href: '/san-pham',
      },
      {
        title: 'Ống gió',
        href: '/san-pham/ong-gio',
      },
      {
        title: 'Cửa gió',
        href: '/san-pham/cua-gio',
      },
      {
        title: 'Van gió',
        href: '/san-pham/van-gio',
      },
      {
        title: 'Phụ kiện ống gió',
        href: '/san-pham/phu-kien-ong-gio',
      },
      {
        title: 'Ống gió chống cháy EI',
        href: '/san-pham/ong-gio-chong-chay-ei',
      },
      {
        title: 'Máng cáp điện',
        href: '/san-pham/mang-cap-dien',
      },
      {
        title: 'Gia công theo yêu cầu',
        href: '/san-pham/gia-cong-theo-yeu-cau',
      },
    ],
  },

  {
    title: 'DỰ ÁN',
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

  {
    title: 'LIÊN HỆ',
    href: '/lien-he',
  },
];
