'use client';

import React from 'react';
import {
  useLocalizedProducts,
  useLocalizedProductMaps,
} from '@/hooks/useLocalizedData';
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

interface ProductCategoryPageProps {
  params: Promise<{ category: string }>;
}

export default function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  const { t } = useTranslation('common');
  const products = useLocalizedProducts();
  const { categories, slugCategoryMap } = useLocalizedProductMaps();
  const resolvedParams = React.use(params);
  const { category } = resolvedParams;

  // Decode URL parameter (slug -> category name)
  const decodedCategory = slugCategoryMap[category];

  // Check if category exists
  const isValidCategory = decodedCategory && categories.includes(decodedCategory);

  const displayCategory =
    decodedCategory &&
    t(`nav.${CATEGORY_TO_KEY[decodedCategory] ?? 'productsAll'}`);

  if (!isValidCategory) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-slate-600">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {t('productsCategory.notFoundTitle')}
          </h1>
          <p>
            {t('productsCategory.notFoundDescription', {
              category: displayCategory ?? decodedCategory,
            })}
          </p>
        </div>
      </div>
    );
  }

  // Filter products by category
  const allCategory = categories[0] ?? 'Tất cả';
  const filteredProducts =
    decodedCategory === allCategory
      ? products
      : products.filter((product) => product.category === decodedCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            {displayCategory}
          </h1>
          <p className="text-slate-600">
            {decodedCategory === 'Tất cả'
              ? t('productsCategory.count', {
                  count: filteredProducts.length,
                })
              : t('productsCategory.countInCategory', {
                  count: filteredProducts.length,
                  category: displayCategory,
                })}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600">
              {t('productsCategory.empty')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
