'use client';

import React, { useState, useRef, useEffect } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = 'Chọn...',
  className = '',
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: SelectOption) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex items-center justify-between px-2 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-primary-blue-1 focus:outline-none focus:ring-2 focus:ring-primary-blue-1 focus:border-primary-blue-1 transition-colors duration-200'
      >
        <span className='text-sm font-medium text-gray-700'>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg'>
          <div className='py-1'>
            {options.map((option) => (
              <button
                key={option.value}
                type='button'
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150 ${
                  option.value === value
                    ? 'bg-primary-blue-1 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
