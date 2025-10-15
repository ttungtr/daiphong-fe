"use client";

import React from "react";

interface SidebarProps {
  categories: string[];
  selected: string;
  onSelect: (c: string) => void;
}

export default function Sidebar({
  categories,
  selected,
  onSelect,
}: SidebarProps) {
  return (
    <aside className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-sm font-semibold text-slate-700">Danh mục</h2>
      <nav className="-mx-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onSelect(c)}
            className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-slate-50 ${
              selected === c
                ? "bg-blue-50 font-medium text-blue-700"
                : "text-slate-700"
            }`}
          >
            {c}
          </button>
        ))}
      </nav>
    </aside>
  );
}
