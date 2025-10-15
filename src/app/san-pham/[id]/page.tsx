"use client";

import React, { useMemo } from "react";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import ProductDetail from "@/components/products/ProductDetail";
import ProductGrid from "@/components/products/ProductGrid";

export default function ProductItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = React.use(params);
  const product = useMemo(
    () => getProductBySlug(resolvedParams.id),
    [resolvedParams.id]
  );

  if (!product) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-slate-600">
        Không tìm thấy sản phẩm.
      </div>
    );
  }

  const related = getRelatedProducts(product.category, product.id);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <ProductDetail product={product} />
        </div>

        {related.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Sản phẩm liên quan
            </h2>
            <ProductGrid products={related} />
          </div>
        )}
      </div>
    </div>
  );
}
