import { BreadcrumbItem } from '@/data/services';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import ImageWithFallback from './ImageWithFallback';

interface HeroSectionProps {
  breadcrumbs: BreadcrumbItem[];
  imageUrl: string;
  imageAlt: string;
}

export const HeroSection: FunctionComponent<HeroSectionProps> = ({
  breadcrumbs,
  imageUrl,
  imageAlt,
}) => {
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
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <section className='relative overflow-hidden' role='banner'>
        {/* Hero Background with Gradient Overlay */}
        <div className='relative h-64 md:h-80 lg:h-96'>
          <ImageWithFallback
            src={imageUrl}
            alt={imageAlt}
            width={1000}
            height={400}
            className='w-full h-full object-center object-cover'
            priority
            quality={85}
          />

          {/* Modern Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-navy-dark/60 to-transparent'></div>

          {/* Floating Elements */}
          <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            <div className='absolute top-10 right-10 w-4 h-4 bg-primary-blue-1/30 floating'></div>
            <div
              className='absolute bottom-20 left-20 w-2 h-2 bg-primary-blue-1/40 floating'
              style={{ animationDelay: '1s' }}
            ></div>
            <div
              className='absolute top-1/2 right-1/4 w-3 h-3 bg-primary-blue-1/20 floating'
              style={{ animationDelay: '2s' }}
            ></div>
          </div>
        </div>

        {/* Modern Breadcrumb Navigation */}
        <nav
          aria-label='Breadcrumb'
          className='absolute bottom-0 left-0 right-0 h-16 glass-dark border-t border-electric/20'
          role='navigation'
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full'>
            <div className='max-w-7xl mx-auto h-full flex items-center'>
              <ol className='flex items-center space-x-2 sm:space-x-3 text-white text-sm sm:text-base'>
                {breadcrumbs.map((item, index) => (
                  <li
                    key={`${item.href}-${index}`}
                    className='flex items-center'
                  >
                    {item.isActive ? (
                      <span
                        className='text-primary-blue-1 font-semibold truncate max-w-[120px] sm:max-w-none bg-primary-blue-1/10 px-3 py-1'
                        aria-current='page'
                        title={item.label}
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className='text-silver hover:text-primary-blue-1 transition-all duration-300 truncate max-w-[100px] sm:max-w-none hover:bg-primary-blue-1/10 px-2 py-1'
                        title={`Đi tới ${item.label}`}
                      >
                        {item.label}
                      </Link>
                    )}

                    {index < breadcrumbs.length - 1 && (
                      <ChevronRight
                        className='w-4 h-4 mx-2 text-primary-blue-1/60 flex-shrink-0'
                        aria-hidden='true'
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
