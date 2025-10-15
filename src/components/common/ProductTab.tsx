'use client';

import { FunctionComponent, useRef, useEffect, useState } from 'react';

interface ProductTabProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  keyword: string;
  onKeywordChange: (keyword: string) => void;
  onSearch: () => void;
}

export const ProductTab: FunctionComponent<ProductTabProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  keyword,
  onKeywordChange,
  onSearch,
}) => {
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    left: 0,
  });

  useEffect(() => {
    const activeTab = tabRefs.current[selectedCategory];
    if (activeTab) {
      const rect = activeTab.getBoundingClientRect();
      const containerRect = activeTab.parentElement?.getBoundingClientRect();
      if (containerRect) {
        setUnderlineStyle({
          width: rect.width,
          left: rect.left - containerRect.left,
        });
      }
    }
  }, [selectedCategory]);
  return (
    <div className='bg-white mb-6'>
      {/* Search Bar */}
      <div className='px-4 py-3 border-b border-gray-200'>
        <div className='flex gap-2'>
          <input
            type='text'
            placeholder='Tìm kiếm sản phẩm...'
            value={keyword}
            onChange={(e) => onKeywordChange(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue-1 focus:border-primary-blue-1'
          />
          <button
            onClick={onSearch}
            className='bg-primary-blue-1 text-white px-6 py-2 rounded-lg hover:bg-primary-blue-1/90 transition-colors duration-200'
          >
            Tìm kiếm
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className='px-4 py-4'>
        <div className='flex gap-8 overflow-x-auto relative'>
          {categories.map((category) => (
            <button
              key={category}
              ref={(el) => {
                tabRefs.current[category] = el;
              }}
              onClick={() => onSelectCategory(category)}
              className={`text-base font-bold whitespace-nowrap transition-colors duration-300 relative pb-2 ${
                selectedCategory === category
                  ? 'text-primary-blue-1'
                  : 'text-black'
              }`}
            >
              {category}
            </button>
          ))}
          {/* Animated underline */}
          <div
            className='absolute bottom-2 h-0.5 bg-primary-blue-1 transition-all duration-300 ease-in-out'
            style={{
              width: `${underlineStyle.width}px`,
              left: `${underlineStyle.left}px`,
            }}
          ></div>
        </div>
        {/* Separator Line */}
        <div className='mt-2 h-px bg-gray-200'></div>
      </div>
    </div>
  );
};

export default ProductTab;
