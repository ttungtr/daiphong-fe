'use client';

import React, { useCallback } from 'react';

interface SearchAndFilterBarProps {
  keyword: string;
  onKeywordChange: (value: string) => void;
  onSearch: () => void;
  sort: 'default' | 'priceAsc' | 'priceDesc';
  onSortChange: (sort: 'default' | 'priceAsc' | 'priceDesc') => void;
}

export default function SearchAndFilterBar({
  keyword,
  onKeywordChange,
  onSearch,
  sort,
  onSortChange,
}: SearchAndFilterBarProps) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onSearch();
      }
    },
    [onSearch]
  );

  return (
    <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
      <div className='flex w-full items-center gap-2 border border-slate-200 bg-white p-2 shadow-sm focus-within:ring-2 focus-within:ring-primary-blue-1 md:max-w-xl'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          strokeWidth='2'
          stroke='currentColor'
          className='h-5 w-5 text-slate-500'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z'
          />
        </svg>
        <input
          className='w-full bg-transparent text-sm outline-none placeholder:text-slate-400 px-1'
          type='text'
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Tìm sản phẩm...'
          aria-label='Tìm kiếm sản phẩm'
        />
        <button
          type='button'
          className='bg-primary-blue-1 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-blue-1/90 transition-all duration-200 shadow-sm'
          onClick={onSearch}
        >
          Tìm
        </button>
      </div>

      <div className='flex items-center gap-2'>
        <label htmlFor='sort' className='sr-only'>
          Sắp xếp theo
        </label>
        <select
          id='sort'
          value={sort}
          onChange={(e) => onSortChange(e.target.value as never)}
          className='border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue-1'
        >
          <option value='default'>Mặc định</option>
          <option value='priceAsc'>Giá tăng dần</option>
          <option value='priceDesc'>Giá giảm dần</option>
        </select>
      </div>
    </div>
  );
}
