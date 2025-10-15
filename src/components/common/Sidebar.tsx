"use client";

import React from "react";
import { SearchBar } from "./SearchBar";

export interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  keyword: string;
  onKeywordChange: (value: string) => void;
  onSearch: () => void;
}

export function Sidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  keyword,
  onKeywordChange,
  onSearch,
}: SidebarProps) {
  return (
    <aside className="flex h-full flex-col gap-6  border border-slate-200 bg-white p-4 shadow-sm">
      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-slate-700">
          Tìm kiếm sản phẩm
        </h2>
        <SearchBar
          value={keyword}
          onChange={onKeywordChange}
          onSubmit={onSearch}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-slate-700">Danh mục</h2>
        <nav className="-mx-2">
          <button
            type="button"
            onClick={() => onSelectCategory("Tất cả")}
            className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-slate-50 ${
              selectedCategory === "Tất cả"
                ? "bg-blue-50 font-medium text-blue-700"
                : "text-slate-700"
            }`}
          >
            Tất cả
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-slate-50 ${
                selectedCategory === category
                  ? "bg-blue-50 font-medium text-blue-700"
                  : "text-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
