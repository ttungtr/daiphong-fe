'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { navigationItems, type DropdownItem } from '@/data/navigation';
import { useTranslation } from 'react-i18next';

export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();
  const { t } = useTranslation('common');

  const isActive = (href: string): boolean => {
    return pathname === href;
  };

  const hasActiveDropdown = (dropdown?: DropdownItem[]): boolean => {
    if (!dropdown) return false;
    return dropdown.some((item) => isActive(item.href));
  };

  return (
    <nav
      className="hidden xl:flex items-center px-6 py-2 w-[50%] justify-between"
      role="navigation"
      aria-label="Main navigation"
    >
      {navigationItems.map((item) => (
        <div key={item.href} className="relative group">
          <Link
            href={item.href}
            className={`text-xs xl:text-sm font-bold px-0 py-2 transition-colors ${
              isActive(item.href) || hasActiveDropdown(item.dropdown)
                ? 'text-white'
                : 'text-white hover:text-white/70'
            }`}
          >
            {t(item.titleKey)}
          </Link>

          {item.dropdown && (
            <div className="absolute top-full left-0 mt-2 w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-primary-blue-2  overflow-hidden">
              {item.dropdown.map((dropdownItem) => (
                <Link
                  key={dropdownItem.href}
                  href={dropdownItem.href}
                  className={`block px-4 py-3 text-sm font-medium transition-all duration-200 border-b border-primary-blue-2 last:border-b-0 whitespace-nowrap ${
                    isActive(dropdownItem.href)
                      ? 'text-white bg-primary-blue-1'
                      : 'text-white bg-primary-blue-1 hover:text-white/70 hover:bg-primary-blue-2'
                  }`}
                >
                  {t(dropdownItem.titleKey)}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
