'use client';

import React, { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import {
  Product as ProductData,
  PRODUCT_CATEGORIES,
  PRODUCTS,
} from '@/data/products';
import { Pagination, ProductTab, CustomSelect } from '@/components/common';

type SortOrder = 'default' | 'priceAsc' | 'priceDesc';

export default function ProductsPage() {
  const [keyword, setKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [sortOrder, setSortOrder] = useState<SortOrder>('default');
  const [productList] = useState<ProductData[]>(PRODUCTS);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  const handleSearchSubmit = () => {
    // No-op for now; keyword state already updates
  };

  const filteredProducts = useMemo(() => {
    let results = productList;

    if (selectedCategory !== 'Tất cả') {
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
            (Number(b.price) ?? Number.MAX_SAFE_INTEGER)
        );
      case 'priceDesc':
        return [...results].sort(
          (a, b) => (Number(b.price) ?? -1) - (Number(a.price) ?? -1)
        );
      default:
        return results;
    }
  }, [productList, selectedCategory, keyword, sortOrder]);

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
          categories={[...PRODUCT_CATEGORIES]}
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
              Sắp xếp theo:
            </label>
            <CustomSelect
              options={[
                { value: 'default', label: 'Mặc định' },
                { value: 'priceAsc', label: 'Giá tăng dần' },
                { value: 'priceDesc', label: 'Giá giảm dần' },
              ]}
              value={sortOrder}
              onChange={(value) => setSortOrder(value as SortOrder)}
              className="w-36"
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
