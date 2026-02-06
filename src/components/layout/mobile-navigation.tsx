"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, useState } from "react";
import { navigationItems, type DropdownItem } from "@/data/navigation";
import { useTranslation } from "react-i18next";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: FunctionComponent<MobileNavigationProps> = ({
  isOpen,
  onClose,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { t } = useTranslation("common");

  const isActive = (href: string): boolean => {
    return pathname === href;
  };

  const hasActiveDropdown = (dropdown?: DropdownItem[]): boolean => {
    if (!dropdown) return false;
    return dropdown.some((item) => isActive(item.href));
  };

  const toggleDropdown = (href: string) => {
    setOpenDropdown(openDropdown === href ? null : href);
  };

  const handleLinkClick = () => {
    onClose();
    setOpenDropdown(null);
  };

  return (
    <div
      className={`xl:hidden bg-white border-t border-slate-200 transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <nav className="px-4 py-2">
        {navigationItems.map((item) => (
          <div
            key={item.href}
            className="border-b border-primary-blue-1 last:border-b-0"
          >
            <div className="flex items-center justify-between">
              <Link
                href={item.href}
                onClick={handleLinkClick}
                className={`block py-3 text-sm font-bold transition-colors duration-200 flex-1 ${
                  isActive(item.href) || hasActiveDropdown(item.dropdown)
                    ? "text-[#00689d]"
                    : "text-slate-700 hover:text-[#00689d]"
                }`}
              >
                {t(item.titleKey)}
              </Link>
              {item.dropdown && (
                <button
                  onClick={() => toggleDropdown(item.href)}
                  className="p-2 text-slate-600 hover:text-[#00689d]"
                  aria-label={`Toggle ${t(item.titleKey)} dropdown`}
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === item.href ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              )}
            </div>

            {item.dropdown && (
              <div
                className={`transition-all duration-300  ease-in-out overflow-hidden ${
                  openDropdown === item.href
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 pb-2">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.href}
                      href={dropdownItem.href}
                      onClick={handleLinkClick}
                      className={`block  py-2 text-sm transition-colors duration-200 ${
                        isActive(dropdownItem.href)
                          ? "text-[#00689d] font-semibold"
                          : "text-slate-700 hover:text-[#00689d]"
                      }`}
                    >
                      {t(dropdownItem.titleKey)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};
