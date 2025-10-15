import Link from 'next/link';
import { FunctionComponent } from 'react';
import { tabData } from '@/data/about';

interface TabProps {
  currentPath: string;
}

export const Tab: FunctionComponent<TabProps> = ({ currentPath }) => {
  return (
    <div className='w-full flex items-center justify-center py-8'>
      {tabData.map((item, index) => {
        const isActive = currentPath === item.href;

        return (
          <Link
            className={`text-center px-6 py-2 text-white uppercase font-medium text-xs sm:text-sm duration-300 hover:bg-primary-blue-1 transition-all ${
              isActive
                ? 'bg-primary-blue-1 shadow-md'
                : 'bg-gray-400 hover:bg-gray-500'
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
  );
};
