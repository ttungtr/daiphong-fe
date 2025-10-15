import { newsTabData } from '@/data/new';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface TabProps {
  currentPath: string;
}

export const Tab: FunctionComponent<TabProps> = ({ currentPath }) => (
  <div className='w-full py-10 space-y-4'>
    {/* <ImageWithFallback
      src="/images/titlebg.pngx"
      alt="Đường viền trang trí cho tiêu đề Liên hệ"
      width={300}
      height={100}
      className="w-56 h-auto mx-auto"
      priority
    /> */}

    <div className='flex items-center justify-center gap-4'>
      {newsTabData.map((item, index) => {
        const isActive = currentPath === item.href;

        return (
          <Link
            className={`px-4 py-1 text-white uppercase font-semibold text-sm duration-300 hover:bg-primary-blue-1 ${
              isActive ? 'bg-primary-blue-1' : 'bg-gray-400'
            }`}
            href={item.href}
            key={`${item.label}-${index}`}
            scroll={false}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  </div>
);
