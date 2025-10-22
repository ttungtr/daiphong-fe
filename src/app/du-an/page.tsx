'use client';

import { Pagination } from '@/components/common';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { MapSection } from '@/components/feature/homepage';
import { HeroSection } from '@/components/feature/projects';
import { projectsData } from '@/data/projects';
import { servicesData } from '@/data/services';
import Link from 'next/link';
import { useMemo, useState } from 'react';

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
  alternateName: 'Đại Phong',
  url: 'https://www.philongcorp.vn',
  description:
    'Công Ty Cổ Phần Công Nghiệp Đại Phong chuyên cung cấp dịch vụ hệ thống điện, điện nhẹ,điều hòa thông gió, cấp thoát nước và phòng cháy chữa cháy',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'VN',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dịch vụ cơ điện',
    itemListElement: servicesData.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: `Dịch vụ ${service.title.toLowerCase()} chuyên nghiệp`,
        image: service.images[0].url,
        url: `https://www.philongcorp.vn${service.link}`,
      },
    })),
  },
};

export default function ProjectPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Hiển thị 9 dự án mỗi trang (3x3 grid)

  const paginatedProjects = useMemo(() => {
    // Sort projects by order first
    const sortedProjects = [...projectsData.projects].sort(
      (a, b) => b.order - a.order
    );
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedProjects.slice(startIndex, endIndex);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className='w-full'>
        <HeroSection />

        <div className='max-w-7xl mx-auto space-y-4 py-10 px-4 sm:px-6 lg:px-8'>
          <header className='w-full flex flex-col items-center justify-center'>
            <h1
              id='services-heading'
              className='text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center'
            >
              DỰ ÁN
            </h1>
            {/* <ImageWithFallback
              src='/images/titlebg.pngx'
              alt='Đường viền trang trí tiêu đề'
              width={300}
              height={100}
              className='w-56 h-auto'
              priority
            /> */}
            <div className='w-16 h-1 bg-primary-yellow-1 mx-auto mb-10'></div>

            <p className='text-sm sm:text-base lg:text-lg text-gray-600 text-center max-w-4xl'>
              Trong thời gian qua, Đại Phong Corp tự hào được nhiều đối tác tin
              tưởng và lựa chọn thông qua các dự án mà chúng tôi đã triển khai
              thành công. Khách hàng của chúng tôi thuộc nhiều lĩnh vực khác
              nhau.
            </p>
          </header>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {paginatedProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/du-an/${project.category}/${project.slug}`}
                className='group block bg-white border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary-blue-1 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in'
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className='aspect-w-16 aspect-h-10'>
                  <ImageWithFallback
                    src={project.images[0]}
                    alt={`Hình ảnh dự án ${project.title} tại ${project.location} - Đại Phong Corp`}
                    width={300}
                    height={200}
                    fill
                    className='w-full !h-[180px] object-cover group-hover:scale-105 transition-transform duration-300'
                    priority={index < 6}
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />
                </div>
                <div className='p-4'>
                  <h4 className='text-base sm:text-base md:text-base font-semibold text-gray-900 group-hover:text-primary-blue-1 transition-colors duration-300 mb-2'>
                    {project.title}
                  </h4>
                  <p className='text-gray-600 text-xs sm:text-sm md:text-sm line-clamp-2'>
                    {project.subtitle}
                  </p>
                  <div className='mt-3 pt-3 border-t border-gray-100'>
                    <span className='text-xs text-primary-blue-1 font-medium'>
                      {project.location}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className='mt-12'>
            <Pagination
              totalItems={projectsData.projects.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              className='mt-8'
            />
          </div>
        </div>

        {/* <CTASection /> */}
        <MapSection />
        {/* <PartnerSection /> */}
      </div>
    </>
  );
}
