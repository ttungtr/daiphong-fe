"use client";

import { navigationItems } from "@/data/navigation";
import Link from "next/link";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

export const SEONav: FunctionComponent = () => {
  const { t } = useTranslation("common");

  const navJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Main Navigation",
    url: navigationItems.map((item) => ({
      "@type": "WebPage",
      name: t(item.titleKey),
      url: item.href,
      ...(item.dropdown && {
        hasPart: item.dropdown.map((sub) => ({
          "@type": "WebPage",
          name: t(sub.titleKey),
          url: sub.href,
        })),
      }),
    })),
  });

  return (
    <>
      <nav
        className="sr-only"
        aria-label="Site navigation for accessibility"
        role="navigation"
      >
        <h2 className="sr-only">Navigation Links</h2>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{t(item.titleKey)}</Link>
              {item.dropdown && (
                <ul>
                  {item.dropdown.map((dropdownItem) => (
                    <li key={dropdownItem.href}>
                      <Link href={dropdownItem.href}>
                        {t(dropdownItem.titleKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: navJsonLd,
        }}
      />
    </>
  );
};
