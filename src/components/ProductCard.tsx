'use client';

import Link from 'next/link';
import ImageWithFallback from './common/ImageWithFallback';
import { CATEGORY_SLUG_MAP } from '@/data/products';

export interface ProductCardProps {
  imageSrc: string;
  name: string;
  price?: number | string;
  slug: string;
  category: string;
}

export function ProductCard({
  imageSrc,
  name,
  price,
  slug,
  category,
}: ProductCardProps) {
  const formattedPrice =
    typeof price === 'number'
      ? new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
          maximumFractionDigits: 0,
        }).format(price)
      : 'Liên hệ';

  return (
    <Link
      href={`/san-pham/${CATEGORY_SLUG_MAP[category]}/${slug}`}
      className="group border border-primary-blue-1 bg-white shadow-sm transition-shadow hover:shadow-md "
    >
      <div className="relative aspect-square w-full overflow-hidden bg-slate-50">
        <ImageWithFallback
          src={imageSrc}
          alt={name}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="line-clamp-2 text-sm font-medium text-slate-900">
          {name}
        </h3>
        <div className="text-base font-semibold text-blue-700">
          {formattedPrice}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
