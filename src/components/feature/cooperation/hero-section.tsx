import { heroSectionData } from '@/data/cooperation';
import { BreadcrumbItem } from '@/data/services';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface HeroSectionProps {
  breadcrumbs?: BreadcrumbItem[];
}

export const HeroSection: FunctionComponent<HeroSectionProps> = ({
  breadcrumbs: breadcrumbsProps,
}) => {
  // const { imageUrl, imageAlt } = heroSectionData;
  const breadcrumbs = breadcrumbsProps || heroSectionData.breadcrumbs;

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || ''}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <section className="relative" role="banner">
        {/* <ImageWithFallback
          src={imageUrl}
          alt={imageAlt}
          width={1000}
          height={300}
          className="w-full h-52! object-center object-cover lg:h-auto"
          priority
          quality={85}
        /> */}

        <nav
          aria-label="Breadcrumb"
          className="absolute bottom-0 left-0 right-0 h-14 bg-black/70"
          role="navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="max-w-7xl mx-auto h-full flex items-center">
              <ol className="flex items-center space-x-1 sm:space-x-2 text-white text-xs sm:text-sm md:text-lg">
                {breadcrumbs.map((item, index) => (
                  <li key={item.href} className="flex items-center">
                    {item.isActive ? (
                      <span
                        className="text-white font-bold truncate max-w-[120px] sm:max-w-none"
                        aria-current="page"
                        title={item.label}
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-white hover:text-gray-200 transition-colors truncate max-w-[100px] sm:max-w-none"
                        title={`Đi tới ${item.label}`}
                      >
                        {item.label}
                      </Link>
                    )}

                    {index < breadcrumbs.length - 1 && (
                      <ChevronRight
                        className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 text-white/60 flex-shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
