'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  CATEGORY_SLUG_MAP,
  SLUG_CATEGORY_MAP,
  type Product,
} from '@/data/products';
import {
  PRODUCTS_EN,
  PRODUCT_CATEGORIES_EN,
  SLUG_CATEGORY_MAP_EN,
  PRODUCT_PRICE_EN,
} from '@/data/products.en';
import { projectsData as projectsDataVi } from '@/data/projects';
import { projectsData as projectsDataEn } from '@/data/projects.en';
import type { IProjectsPageData } from '@/types';

/**
 * Merge base product with English translation when available.
 */
function localizeProduct(product: Product, lang: string): Product {
  if (lang !== 'en') return product;
  const trans = PRODUCTS_EN[product.id];
  if (!trans) return product;
  return {
    ...product,
    name: trans.name,
    category: trans.category,
    description: trans.description,
    details: trans.details ?? product.details,
    specifications: trans.specifications ?? product.specifications,
    price: product.price ? PRODUCT_PRICE_EN : product.price,
  };
}

/**
 * Returns localized products array based on current language.
 */
export function useLocalizedProducts(): Product[] {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'vi';

  return useMemo(() => {
    return PRODUCTS.map((p) => localizeProduct(p, lang));
  }, [lang]);
}

/**
 * Returns product category maps based on current language.
 */
export function useLocalizedProductMaps() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'vi';

  return useMemo(() => {
    if (lang === 'en') {
      const categorySlugMapEn = Object.fromEntries(
        Object.entries(SLUG_CATEGORY_MAP_EN).map(([slug, name]) => [name, slug])
      ) as Record<string, string>;
      return {
        categories: PRODUCT_CATEGORIES_EN as unknown as readonly string[],
        categorySlugMap: categorySlugMapEn,
        slugCategoryMap: SLUG_CATEGORY_MAP_EN,
      };
    }
    return {
      categories: PRODUCT_CATEGORIES,
      categorySlugMap: CATEGORY_SLUG_MAP,
      slugCategoryMap: SLUG_CATEGORY_MAP,
    };
  }, [lang]);
}

/**
 * Get product by slug with localization.
 */
export function useProductBySlug(slug: string): Product | undefined {
  const products = useLocalizedProducts();
  return useMemo(() => products.find((p) => p.slug === slug), [products, slug]);
}

/**
 * Get related products with localization.
 */
export function useRelatedProducts(category: string, excludeId?: string): Product[] {
  const products = useLocalizedProducts();
  return useMemo(
    () =>
      products.filter((p) => p.category === category && p.id !== excludeId),
    [products, category, excludeId]
  );
}

/**
 * Returns projects data based on current language.
 */
export function useProjectsData(): IProjectsPageData {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'vi';

  return useMemo(() => {
    return lang === 'en' ? projectsDataEn : projectsDataVi;
  }, [lang]);
}
