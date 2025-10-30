'use client';

import { Pagination } from '@/components/common';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { MapSection } from '@/components/feature/homepage';
import { HeroSection } from '@/components/feature/projects';
import { projectsData } from '@/data/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Category {
  id: string;
  name: string;
  link: string;
  image: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  scale: string;
  contractValue: string;
  duration: string;
  workScope: string;
  slug: string;
  category: string;
  images: string[];
}

export default function ProjectsPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Hiển thị 9 dự án mỗi trang (3x3 grid)

  // Lấy category từ params
  const [category, setCategory] = useState<Category | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Xử lý params async với useEffect
  useEffect(() => {
    const loadCategoryData = async () => {
      try {
        const { category: categoryx } = await params;
        const foundCategory = projectsData.categories.find(
          (c) => c.id === categoryx
        );

        if (!foundCategory) {
          return notFound();
        }

        setCategory(foundCategory);

        const projects = projectsData.projects
          .filter((project) => project.category === foundCategory.id)
          .sort((a, b) => b.order - a.order);
        setFilteredProjects(projects);
      } catch (error) {
        console.error('Error loading category data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCategoryData();
  }, [params]);

  // Pagination logic
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Loading state
  if (isLoading || !category) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="text-lg text-gray-600">Đang tải...</div>
        </div>
      </div>
    );
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: 'https://philongcorp.vn',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Công trình',
        item: 'https://philongcorp.vn/du-an',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `https://philongcorp.vn/du-an/${category.id}`,
      },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Đại Phong Corp',
    url: 'https://philongcorp.vn',
    logo: 'https://philongcorp.vn/logo.pngx',
    description: 'Công ty chuyên thi công hệ thống MEP (cơ điện) chuyên nghiệp',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
    },
  };

  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Công trình ${category.name} - Đại Phong Corp`,
    description: `Danh sách dự án ${category.name.toLowerCase()} của Đại Phong Corp`,
    numberOfItems: filteredProjects.length,
    itemListElement: filteredProjects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Project',
        name: project.title,
        description: project.subtitle,
        url: `https://philongcorp.vn/du-an/${category.id}/${project.slug}`,
        image: `https://philongcorp.vn/images/projects/${project.images[0]}`,
        location: {
          '@type': 'Place',
          name: project.location,
        },
        organizer: {
          '@type': 'Organization',
          name: 'Đại Phong Corp',
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsSchema),
        }}
      />

      <div className="w-full">
        <HeroSection />

        <div className="max-w-7xl mx-auto space-y-4 py-10 px-4 sm:px-6 lg:px-8">
          <header className="w-full flex flex-col items-center justify-center gap-2">
            <h1
              id="services-heading"
              className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center uppercase"
            >
              {category.name}
            </h1>
            <ImageWithFallback
              src="/images/titlebg.jpg"
              alt={`Đường viền trang trí cho tiêu đề ${category.name}`}
              width={300}
              height={100}
              className="w-56 h-auto"
              priority
            />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {paginatedProjects.map((project, index) => {
              // Kiểm tra và lấy image hợp lệ
              const projectImage =
                project.images && project.images.length > 0 && project.images[0]
                  ? project.images[0]
                  : '/images/projects/hero-section.pngx'; // Fallback image

              return (
                <Link
                  key={project.id}
                  href={`/du-an/${category.id}/${project.slug}`}
                  className="group block bg-white border border-gray-200  overflow-hidden hover:shadow-xl hover:border-primary-blue-1 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="aspect-w-16 aspect-h-10">
                    <ImageWithFallback
                      src={projectImage}
                      alt={`Hình ảnh dự án ${project.title} tại ${project.location} - Đại Phong Corp`}
                      width={300}
                      height={200}
                      fill
                      className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-base sm:text-base md:text-base font-semibold text-gray-900 group-hover:text-primary-blue-1 transition-colors duration-300 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-sm line-clamp-2">
                      {project.subtitle}
                    </p>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <span className="text-xs text-primary-blue-1 font-medium">
                        {project.location}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          {filteredProjects.length > itemsPerPage && (
            <div className="mt-12">
              <Pagination
                totalItems={filteredProjects.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                className="mt-8"
              />
            </div>
          )}
        </div>

        {/* <CTASection /> */}
        <MapSection />
        {/* <PartnerSection /> */}
      </div>
    </>
  );
}
