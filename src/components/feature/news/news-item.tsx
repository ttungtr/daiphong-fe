import ImageWithFallback from '@/components/common/ImageWithFallback';
import { INew } from '@/types/news';
import Link from 'next/link';

export const NewsItem = ({ news }: { news: INew }) => {
  const formattedDate = new Date(news.createdAt.split('/').reverse().join('-'));
  const dateString = formattedDate.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className='group block bg-white border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary-blue-1 transition-all duration-300'>
      <Link href={`/${news.category}/${news.slug}`} className='block'>
        <div className='aspect-w-16 aspect-h-10 relative'>
          <ImageWithFallback
            src={news.images[0]}
            alt={`${news.title} - Tin tức Công Ty Cổ Phần Công Nghiệp Đại Phong`}
            width={400}
            height={250}
            className='w-full h-48 sm:h-52 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300'
            sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw'
            priority={false}
          />
        </div>

        <div className='p-4 sm:p-5 lg:p-6'>
          <time
            className='text-xs sm:text-sm text-gray-500 mb-2 block'
            dateTime={formattedDate.toISOString()}
          >
            {dateString}
          </time>

          <h3 className='text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 group-hover:text-primary-blue-1 transition-colors duration-300 line-clamp-2'>
            {news.title}
          </h3>
        </div>
      </Link>
    </article>
  );
};
