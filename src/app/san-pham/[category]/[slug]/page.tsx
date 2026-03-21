'use client';

import React from 'react';
import {
  useProductBySlug,
  useRelatedProducts,
  useLocalizedProductMaps,
} from '@/hooks/useLocalizedData';
import ProductDetail from '@/components/products/ProductDetail';
import ProductGrid from '@/components/products/ProductGrid';
import { useTranslation } from 'react-i18next';

const CATEGORY_TO_KEY: Record<string, string> = {
  'Tất cả': 'productsAll',
  'Ống gió': 'ducts',
  'Cửa gió': 'airOutlets',
  'Van gió': 'dampers',
  'Phụ kiện ống gió': 'ductAccessories',
  'Ống gió chống cháy EI': 'fireResistantDucts',
  'Máng cáp điện': 'cableTrays',
  'Gia công theo yêu cầu': 'customFabrication',
};

interface ProductDetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { t } = useTranslation('common');
  const resolvedParams = React.use(params);
  const { category, slug } = resolvedParams;
  const { categories, slugCategoryMap } = useLocalizedProductMaps();
  const product = useProductBySlug(slug);
  const relatedProducts = useRelatedProducts(product?.category ?? '', product?.id);

  // Decode URL parameters (slug -> category name)
  const decodedCategory = slugCategoryMap[category];

  // Check if category exists
  const isValidCategory = decodedCategory && categories.includes(decodedCategory);

  const displayCategory =
    decodedCategory &&
    t(`nav.${CATEGORY_TO_KEY[decodedCategory] ?? 'productsAll'}`);

  if (!isValidCategory) {
    return (
      <div className='min-h-[50vh] flex items-center justify-center text-slate-600'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>
            {t('productsDetail.categoryNotFoundTitle')}
          </h1>
          <p>
            {t('productsDetail.categoryNotFoundDescription', {
              category: displayCategory ?? decodedCategory,
            })}
          </p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className='min-h-[50vh] flex items-center justify-center text-slate-600'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>
            {t('productsDetail.productNotFoundTitle')}
          </h1>
          <p>
            {t('productsDetail.productNotFoundDescription', { slug })}
          </p>
        </div>
      </div>
    );
  }

  // Verify product belongs to the specified category
  const allCategory = categories[0] ?? 'Tất cả';
  if (product.category !== decodedCategory && decodedCategory !== allCategory) {
    return (
      <div className='min-h-[50vh] flex items-center justify-center text-slate-600'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>
            {t('productsDetail.wrongCategoryTitle')}
          </h1>
          <p>
            {t('productsDetail.wrongCategoryDescription', {
              productName: product.name,
              category: displayCategory ?? decodedCategory,
            })}
          </p>
        </div>
      </div>
    );
  }

  const relatedCategoryLabel =
    product.category &&
    t(`nav.${CATEGORY_TO_KEY[product.category] ?? 'productsAll'}`);

  return (
    <div className='min-h-screen bg-slate-50'>
      <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        {/* Product Detail */}
        <ProductDetail product={product} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className='mt-12 space-y-4'>
            <h2 className='text-2xl font-bold text-slate-900'>
              {t('productsDetail.relatedHeading')}
            </h2>
            <p className='text-slate-600'>
              {t('productsDetail.relatedDescription', {
                category: relatedCategoryLabel ?? product.category,
              })}
            </p>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
}
