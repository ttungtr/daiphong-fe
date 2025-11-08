'use client';

import { useState } from 'react';
import type { Product } from '@/data/products';
import ImageWithFallback from '../common/ImageWithFallback';

export default function ProductDetail({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState<'details' | 'specifications'>(
    'details'
  );

  const formattedPrice =
    typeof product.price === 'number'
      ? new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
          maximumFractionDigits: 0,
        }).format(product.price)
      : 'Liên hệ';

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden border border-slate-200">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-slate-900">{product.name}</h1>
          <div className="text-sm text-slate-500">
            Mã sản phẩm: {product.code ?? 'N/A'}
          </div>
          <div className="text-xl font-semibold text-primary-blue-1">
            {formattedPrice}
          </div>
          <p className="text-slate-700 leading-relaxed">
            {product.description}
          </p>

          <div className="pt-2">
            <a
              href="https://zalo.me/luis-truong"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zalo"
            >
              <button className="bg-primary-blue-1 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-blue-1/90 transition-all shadow-sm">
                Liên hệ ngay
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Tab Section - Below the main content */}
      <div className="mt-8 pt-6 border-t border-slate-200">
        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'details'
                ? 'bg-primary-blue-1 text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Thông tin chi tiết
          </button>
          <button
            onClick={() => setActiveTab('specifications')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'specifications'
                ? 'bg-primary-blue-1 text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Thông số kĩ thuật
          </button>
        </div>

        {/* Tab Content */}
        <div className="prose prose-sm max-w-none text-slate-700">
          {activeTab === 'details' && (
            <div
              className="details"
              dangerouslySetInnerHTML={{ __html: product.details || '' }}
            />
          )}
          {activeTab === 'specifications' && (
            <div
              className="details"
              dangerouslySetInnerHTML={{
                __html:
                  product.specifications ||
                  'Thông số kĩ thuật đang được cập nhật...',
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
