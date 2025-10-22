'use client';

import React from 'react';
import {
  getProductBySlug,
  getRelatedProducts,
  PRODUCT_CATEGORIES,
  SLUG_CATEGORY_MAP,
} from '@/data/products';
import ProductDetail from '@/components/products/ProductDetail';
import ProductGrid from '@/components/products/ProductGrid';

interface ProductDetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = React.use(params);
  const { category, slug } = resolvedParams;

  // Decode URL parameters
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

  // Get product by slug
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className='min-h-[50vh] flex items-center justify-center text-slate-600'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>Sản phẩm không tồn tại</h1>
          <p>Sản phẩm &quot;{slug}&quot; không được tìm thấy.</p>
        </div>
      </div>
    );
  }

  // Verify product belongs to the specified category
  if (product.category !== decodedCategory && decodedCategory !== 'Tất cả') {
    return (
      <div className='min-h-[50vh] flex items-center justify-center text-slate-600'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>
            Sản phẩm không thuộc danh mục
          </h1>
          <p>
            Sản phẩm &quot;{product.name}&quot; không thuộc danh mục &quot;
            {decodedCategory}&quot;.
          </p>
        </div>
      </div>
    );
  }

  // Get related products from the same category
  const relatedProducts = getRelatedProducts(product.category, product.id);

  return (
    <div className='min-h-screen bg-slate-50'>
      <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        {/* Product Detail */}
        <ProductDetail product={product} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className='mt-12 space-y-4'>
            <h2 className='text-2xl font-bold text-slate-900'>
              Sản phẩm liên quan
            </h2>
            <p className='text-slate-600'>
              Các sản phẩm khác trong danh mục {product.category}
            </p>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
}
