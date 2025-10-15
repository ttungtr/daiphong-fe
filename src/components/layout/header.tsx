import Link from 'next/link';
import { FunctionComponent } from 'react';
import ImageWithFallback from '../common/ImageWithFallback';
import { MobileNavigationWrapper } from './mobile-navigation-wrapper';
import { Navigation } from './navigation';
import { SEONav } from './seo-nav';

export const Header: FunctionComponent = () => {
  return (
    <>
      <SEONav />

      <header className='sticky top-0 z-50 w-full backdrop-blur shadow-sm bg-primary-blue-1'>
        <div className='max-w-7xl mx-auto relative'>
          <div className='flex items-center justify-between h-20 px-4 xl:px-0 '>
            <Link href='/' className='flex-shrink-0 group'>
              <div className='relative'>
                <ImageWithFallback
                  src='/images/logo/horizontal-logo.png'
                  alt='Nhà sản xuất ống thông gió Logo'
                  width={220}
                  height={100}
                  className='max-w-48 h-auto transition-all duration-300 group-hover:scale-105'
                  priority
                />
              </div>
            </Link>

            <Navigation />

            <MobileNavigationWrapper />
          </div>
        </div>
      </header>
    </>
  );
};
