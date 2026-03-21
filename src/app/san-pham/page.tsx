'use client';

import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from '@/components/ProductCard';
import {
  useLocalizedProducts,
  useLocalizedProductMaps,
} from '@/hooks/useLocalizedData';
import { Pagination, ProductTab, CustomSelect } from '@/components/common';

type SortOrder = 'default' | 'priceAsc' | 'priceDesc';

export default function ProductsPage() {
  const { t } = useTranslation('common');
  const products = useLocalizedProducts();
  const { categories } = useLocalizedProductMaps();
  const [keyword, setKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0] ?? 'Tất cả',
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>('default');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  const handleSearchSubmit = () => {
    // No-op for now; keyword state already updates
  };

  const filteredProducts = useMemo(() => {
    let results = products;
    const allCategory = categories[0] ?? 'Tất cả';

    if (selectedCategory !== allCategory) {
      results = results.filter((p) => {
        if (selectedCategory === 'Sản phẩm mới nhất') return true; // In real case, would sort by createdAt
        return p.category === selectedCategory;
      });
    }

    if (keyword.trim()) {
      const kw = keyword.trim().toLowerCase();
      results = results.filter((p) => p.name.toLowerCase().includes(kw));
    }

    switch (sortOrder) {
      case 'priceAsc':
        return [...results].sort(
          (a, b) =>
            (Number(a.price) ?? Number.MAX_SAFE_INTEGER) -
            (Number(b.price) ?? Number.MAX_SAFE_INTEGER),
        );
      case 'priceDesc':
        return [...results].sort(
          (a, b) => (Number(b.price) ?? -1) - (Number(a.price) ?? -1),
        );
      default:
        return results;
    }
  }, [products, selectedCategory, keyword, sortOrder, categories]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Product Tab */}
        <ProductTab
          categories={[...categories]}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          keyword={keyword}
          onKeywordChange={setKeyword}
          onSearch={handleSearchSubmit}
        />

        {/* Sort Header */}
        <div className="mb-6 flex items-center justify-end">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-700">
              {t('productsPage.sortLabel')}
            </label>
            <CustomSelect
              options={[
                { value: 'default', label: t('productsPage.sortDefault') },
                { value: 'priceAsc', label: t('productsPage.sortPriceAsc') },
                { value: 'priceDesc', label: t('productsPage.sortPriceDesc') },
              ]}
              value={sortOrder}
              onChange={(value) => setSortOrder(value as SortOrder)}
              className="w-42"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedProducts.map((p) => (
            <ProductCard
              key={p.id}
              imageSrc={p.image}
              name={p.name}
              price={p.price}
              slug={p.slug}
              category={p.category}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8">
          <Pagination
            totalItems={filteredProducts.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>
      </div>
    </div>
  );
}
