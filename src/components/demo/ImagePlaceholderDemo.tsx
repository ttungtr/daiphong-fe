"use client";

import React from "react";
import { ImagePlaceholder } from "@/components/common";

export default function ImagePlaceholderDemo() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Image Placeholder Demo
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Default placeholder */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">Default</h3>
            <ImagePlaceholder />
          </div>

          {/* Custom className */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Custom Style
            </h3>
            <ImagePlaceholder className="border-blue-300 bg-blue-50" />
          </div>

          {/* In a card layout */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">In Card</h3>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <ImagePlaceholder className="mb-3" />
              <p className="text-sm text-gray-600">
                Product card with placeholder
              </p>
            </div>
          </div>

          {/* Grid layout */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">Grid Layout</h3>
            <div className="grid grid-cols-2 gap-2">
              <ImagePlaceholder className="aspect-square" />
              <ImagePlaceholder className="aspect-square" />
              <ImagePlaceholder className="aspect-square" />
              <ImagePlaceholder className="aspect-square" />
            </div>
          </div>

          {/* Different aspect ratios */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Aspect Ratios
            </h3>
            <div className="space-y-3">
              <ImagePlaceholder className="aspect-[4/3]" />
              <ImagePlaceholder className="aspect-[16/9]" />
              <ImagePlaceholder className="aspect-square" />
            </div>
          </div>

          {/* Responsive example */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">Responsive</h3>
            <ImagePlaceholder className="w-full md:w-1/2 lg:w-full" />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Clean, modern placeholder for images that are loading or unavailable
          </p>
          <div className="text-sm text-gray-500">
            <p>• 2:1 aspect ratio by default</p>
            <p>• Customizable with className prop</p>
            <p>• Uses lucide-react Image icon</p>
            <p>• Responsive and accessible</p>
          </div>
        </div>
      </div>
    </div>
  );
}
