'use client';

import React from 'react';
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  SLUG_CATEGORY_MAP,
} from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';

interface ProductCategoryPageProps {
  params: Promise<{ category: string }>;
}

export default function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  const resolvedParams = React.use(params);
  const { category } = resolvedParams;

  // Decode URL parameter
  const decodedCategory = SLUG_CATEGORY_MAP[category];

  // Check if category exists in PRODUCT_CATEGORIES
  const isValidCategory = PRODUCT_CATEGORIES.includes(
    decodedCategory as (typeof PRODUCT_CATEGORIES)[number]
  );

  if (!isValidCategory) {
    return (
      <div className='min-h-[50vh] flex items-center justify-center text-slate-600'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>Danh mục không tồn tại</h1>
          <p>Danh mục &quot;{decodedCategory}&quot; không được tìm thấy.</p>
        </div>
      </div>
    );
  }

  // Filter products by category
  const filteredProducts =
    decodedCategory === 'Tất cả'
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === decodedCategory);

  return (
    <div className='min-h-screen bg-slate-50'>
      <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-slate-900 mb-4'>
            {decodedCategory}
          </h1>
          <p className='text-slate-600'>
            {filteredProducts.length} sản phẩm
            {decodedCategory !== 'Tất cả' &&
              ` trong danh mục ${decodedCategory}`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className='text-center py-12'>
            <p className='text-slate-600'>
              Không có sản phẩm nào trong danh mục này.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
