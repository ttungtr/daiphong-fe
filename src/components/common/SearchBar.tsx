"use client";

import React, { useCallback } from "react";

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder,
}: SearchBarProps) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onSubmit();
      }
    },
    [onSubmit]
  );

  return (
    <div className="flex items-center gap-2 border border-slate-200 bg-white p-2 shadow-sm focus-within:ring-2 focus-within:ring-primary-blue-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        stroke="currentColor"
        className="h-5 w-5 text-slate-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z"
        />
      </svg>
      <input
        className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 px-1"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder ?? "Tìm sản phẩm..."}
        aria-label="Tìm kiếm sản phẩm"
      />
    </div>
  );
}

export default SearchBar;
