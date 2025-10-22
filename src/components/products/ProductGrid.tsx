'use client';

import { CATEGORY_SLUG_MAP, type Product } from '@/data/products';
import Link from 'next/link';
import ImageWithFallback from '../common/ImageWithFallback';

export default function ProductGrid({ products }: { products: Product[] }) {
  console.log(products.map((p) => CATEGORY_SLUG_MAP[p.category]));

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {products.map((p) => (
        <Link
          key={p.id}
          href={`/san-pham/${CATEGORY_SLUG_MAP[p.category]}/${p.slug}`}
          className='group border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md'
        >
          <div className='relative aspect-square w-full overflow-hidden bg-slate-50'>
            <ImageWithFallback
              src={p.image}
              alt={p.name}
              fill
              className='object-contain p-4 transition-transform duration-300 group-hover:scale-105'
              sizes='(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw'
            />
          </div>
          <div className='flex flex-col gap-2 p-4'>
            <h3 className='line-clamp-2 text-sm font-medium text-slate-900'>
              {p.name}
            </h3>
            <div className='text-base font-semibold text-primary-blue-1'>
              {typeof p.price === 'number'
                ? new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    maximumFractionDigits: 0,
                  }).format(p.price)
                : 'Liên hệ'}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
