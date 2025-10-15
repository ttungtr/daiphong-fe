'use client';

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { useCallback } from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [onPageChange, totalPages]
  );

  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className='flex items-center justify-end space-x-2'>
      {/* First Page Button */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className='relative inline-flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-primary-blue-1 hover:text-white hover:border-primary-blue-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-500 disabled:hover:border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-blue-1 focus:ring-offset-2'
        aria-label='Trang đầu'
      >
        <ChevronsLeft className='w-4 h-4' />
      </button>

      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='relative inline-flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-primary-blue-1 hover:text-white hover:border-primary-blue-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-500 disabled:hover:border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-blue-1 focus:ring-offset-2'
        aria-label='Trang trước'
      >
        <ChevronLeft className='w-4 h-4' />
      </button>

      {/* Page Numbers */}
      <div className='flex items-center space-x-1'>
        {visiblePages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className='relative inline-flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-400'
              >
                ⋯
              </span>
            );
          }

          return (
            <button
              key={page}
              onClick={() => handlePageChange(page as number)}
              className={`relative inline-flex items-center justify-center w-10 h-10 text-sm font-medium border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-blue-1 focus:ring-offset-2 ${
                currentPage === page
                  ? 'bg-primary-blue-1 border-primary-blue-1 text-white shadow-lg shadow-primary-blue-1/25 scale-105'
                  : 'bg-white border-gray-300 text-gray-600 hover:bg-primary-blue-1/10 hover:text-primary-blue-1 hover:border-primary-blue-1 hover:scale-105'
              }`}
              aria-label={`Trang ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='relative inline-flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-primary-blue-1 hover:text-white hover:border-primary-blue-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-500 disabled:hover:border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-blue-1 focus:ring-offset-2'
        aria-label='Trang sau'
      >
        <ChevronRight className='w-4 h-4' />
      </button>

      {/* Last Page Button */}
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className='relative inline-flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-primary-blue-1 hover:text-white hover:border-primary-blue-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-500 disabled:hover:border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-blue-1 focus:ring-offset-2'
        aria-label='Trang cuối'
      >
        <ChevronsRight className='w-4 h-4' />
      </button>
    </div>
  );
}
