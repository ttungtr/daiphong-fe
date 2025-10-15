"use client";

import React from "react";
import { catalogues } from "@/data/catalogues";

export default function CataloguePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-2xl font-bold text-slate-900">Catalogue</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {catalogues.map((c) => (
            <div
              key={c.id}
              className="border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.thumbnail}
                  alt={c.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm font-medium text-slate-900">
                  {c.name}
                </div>
                <a
                  href={c.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-blue-1 text-white px-4 py-2 text-sm font-medium hover:bg-primary-blue-1/90 transition"
                >
                  Tải xuống
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
