"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FunctionComponent } from "react";
import { navigationItems, type DropdownItem } from "@/data/navigation";

export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    return pathname === href;
  };

  const hasActiveDropdown = (dropdown?: DropdownItem[]): boolean => {
    if (!dropdown) return false;
    return dropdown.some((item) => isActive(item.href));
  };

  return (
    <nav
      className="hidden xl:flex items-center border border-slate-200 bg-white/70 backdrop-blur px-6 py-2 shadow-sm w-[60%] justify-between"
      role="navigation"
      aria-label="Main navigation"
    >
      {navigationItems.map((item) => (
        <div key={item.title} className="relative group">
          <Link
            href={item.href}
            className={`text-xs xl:text-sm font-semibold px-0 py-2 transition-colors ${
              isActive(item.href) || hasActiveDropdown(item.dropdown)
                ? "text-[#00689d]"
                : "text-slate-600 hover:text-[#00689d]"
            }`}
          >
            {item.title}
          </Link>

          {item.dropdown && (
            <div className="absolute top-full left-0 mt-2 w-max glass-dark  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 dropdown-menu shadow-electric border border-electric/20 overflow-hidden">
              {item.dropdown.map((dropdownItem) => (
                <Link
                  key={dropdownItem.href}
                  href={dropdownItem.href}
                  className={`block px-4 py-3 text-sm font-medium transition-all duration-200 border-b border-electric/10 last:border-b-0 whitespace-nowrap ${
                    isActive(dropdownItem.href)
                      ? "text-white bg-primary-blue-1"
                      : "text-white bg-primary-blue-1 hover:text-white/70 hover:bg-primary-blue-2"
                  }`}
                >
                  {dropdownItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
