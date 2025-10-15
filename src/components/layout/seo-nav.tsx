import { navigationItems } from "@/data/navigation";
import Link from "next/link";
import { FunctionComponent } from "react";

export const SEONav: FunctionComponent = () => (
  <>
    <nav
      className="sr-only"
      aria-label="Site navigation for accessibility"
      role="navigation"
    >
      <h2 className="sr-only">Navigation Links</h2>
      <ul>
        {navigationItems.map((item) => (
          <li key={item.title}>
            <Link href={item.href}>{item.title}</Link>
            {item.dropdown && (
              <ul>
                {item.dropdown.map((dropdownItem) => (
                  <li key={dropdownItem.href}>
                    <Link href={dropdownItem.href}>{dropdownItem.title}</Link>
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
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          name: "Main Navigation",
          url: navigationItems.map((item) => ({
            "@type": "WebPage",
            name: item.title,
            url: item.href,
            ...(item.dropdown && {
              hasPart: item.dropdown.map((sub) => ({
                "@type": "WebPage",
                name: sub.title,
                url: sub.href,
              })),
            }),
          })),
        }),
      }}
    />
  </>
);
