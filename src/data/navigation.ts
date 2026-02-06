export interface DropdownItem {
  /**
   * i18n translation key, e.g. "nav.productsAll"
   */
  titleKey: string;
  href: string;
}

export interface NavItem {
  /**
   * i18n translation key, e.g. "nav.home"
   */
  titleKey: string;
  href: string;
  dropdown?: DropdownItem[];
}

export const navigationItems: NavItem[] = [
  {
    titleKey: 'nav.home',
    href: '/',
  },
  {
    titleKey: 'nav.about',
    href: '/gioi-thieu',
  },
  {
    titleKey: 'nav.products',
    href: '/san-pham',
    dropdown: [
      {
        titleKey: 'nav.productsAll',
        href: '/san-pham',
      },
      {
        titleKey: 'nav.ducts',
        href: '/san-pham/ong-gio',
      },
      {
        titleKey: 'nav.airOutlets',
        href: '/san-pham/cua-gio',
      },
      {
        titleKey: 'nav.dampers',
        href: '/san-pham/van-gio',
      },
      {
        titleKey: 'nav.ductAccessories',
        href: '/san-pham/phu-kien-ong-gio',
      },
      {
        titleKey: 'nav.fireResistantDucts',
        href: '/san-pham/ong-gio-chong-chay-ei',
      },
      {
        titleKey: 'nav.cableTrays',
        href: '/san-pham/mang-cap-dien',
      },
      {
        titleKey: 'nav.customFabrication',
        href: '/san-pham/gia-cong-theo-yeu-cau',
      },
    ],
  },

  {
    titleKey: 'nav.projects',
    href: '/du-an',
  },

  {
    titleKey: 'nav.news',
    href: '/tin-tuc',
    dropdown: [
      {
        titleKey: 'nav.newsMain',
        href: '/tin-tuc',
      },
      {
        titleKey: 'nav.companyActivities',
        href: '/hoat-dong-cong-ty',
      },
    ],
  },

  {
    titleKey: 'nav.contact',
    href: '/lien-he',
  },
];
