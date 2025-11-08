import ImageWithFallback from '@/components/common/ImageWithFallback';
import { MapSection } from '@/components/feature/homepage';
import { HeroSection } from '@/components/feature/projects';
import { projectsData } from '@/data/projects';
import { Metadata } from 'next';
import Link from 'next/link';
import NotFound from './not-found';
import LineTitle from '@/components/common/line-title';

// Generate metadata for each project detail page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { slug, category: categoryx } = await params;
  const project = projectsData.projects.find(
    (project) => project.slug === slug
  );

  const category = projectsData.categories.find(
    (category) => category.id === categoryx
  );

  if (!project || !category) {
    return {
      title: 'Công trình không tồn tại - Đại Phong',
      description: 'Công trình bạn đang tìm kiếm không tồn tại.',
    };
  }

  const title = `${project.title} | ${category.name} - Đại Phong`;
  const description = `${project.subtitle}. ${project.workScope}. Công trình tại ${project.location} với giá trị ${project.contractValue}.`;

  return {
    title,
    description,
    keywords: [
      project.title,
      category.name.toLowerCase(),
      'Đại Phong',
      'thi công MEP',
      'hệ thống điều hòa',
      'cơ điện',
      project.location,
      project.workScope,
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'vi_VN',
      siteName: 'Đại Phong',
      images: [
        {
          url: `/images/projects/${project.images[0]}`,
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.location}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/images/projects/${project.images[0]}`],
    },
    alternates: {
      canonical: `/du-an/${categoryx}/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    category: project.category,
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.projects.find(
    (project) => project.slug === slug
  );

  const category = projectsData.categories.find(
    (category) => category.id === project?.category
  );

  if (!project || !category) {
    return <NotFound />;
  }

  // Related projects from same category
  const relatedProjects = projectsData.projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  // Structured data for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: 'https://onggiodaiphong.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: category.name,
        item: `https://onggiodaiphong.com/du-an/${category.id}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://onggiodaiphong.com/du-an/${project.category}/${project.slug}`,
      },
    ],
  };

  // Structured data for project
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: project.title,
    description: project.subtitle,
    url: `https://onggiodaiphong.com/du-an/${project.category}/${project.slug}`,
    image: project.images.map(
      (img) => `https://onggiodaiphong.com/images/projects/${img}`
    ),
    location: {
      '@type': 'Place',
      name: project.location,
    },
    organizer: {
      '@type': 'Organization',
      name: 'Đại Phong',
      url: 'https://onggiodaiphong.com',
    },
    workPerformed: project.workScope,
    startDate: project.duration.split(' ~ ')[0],
    endDate: project.duration.includes(' ~ ')
      ? project.duration.split(' ~ ')[1]
      : null,
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />

      <div className="w-full">
        <HeroSection
          breadcrumbs={[
            { label: 'Trang chủ', href: '/', isActive: false },
            {
              label: category.name,
              href: `/du-an/${category.id}`,
              isActive: false,
            },
            {
              label: project.title,
              href: `/du-an/${project.category}/${project.slug}`,
              isActive: true,
            },
          ]}
        />

        <main className="max-w-7xl mx-auto space-y-8 py-10 px-4 sm:px-6 lg:px-8">
          <header className="w-full flex flex-col items-center justify-center gap-2">
            <h1
              id="project-heading"
              className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center uppercase"
            >
              {project.title}
            </h1>
            <LineTitle
              alt={`Đường viền trang trí cho tiêu đề ${project.title}`}
            />

            <p className="text-gray-600 text-center text-sm md:text-base lg:text-lg max-w-3xl">
              {project.subtitle}
            </p>
          </header>

          {/* Project Details */}
          <section
            aria-labelledby="project-details"
            className="bg-white shadow-sm border border-gray-200 p-6 md:p-8"
          >
            <h2
              id="project-details"
              className="text-xl md:text-2xl font-bold text-gray-900 mb-6"
            >
              Thông tin chi tiết dự án
            </h2>

            <div className="space-y-2">
              <div className="border-b border-gray-200 pb-2">
                <dt className="font-semibold text-gray-700 mb-1">Địa điểm</dt>
                <dd className="text-gray-600">{project.location}</dd>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <dt className="font-semibold text-gray-700 mb-1">Quy mô</dt>
                <dd className="text-gray-600">{project.scale}</dd>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <dt className="font-semibold text-gray-700 mb-1">
                  Giá trị hợp đồng
                </dt>
                <dd className="text-gray-600">{project.contractValue}</dd>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <dt className="font-semibold text-gray-700 mb-1">
                  Thời gian thực hiện
                </dt>
                <dd className="text-gray-600">{project.duration}</dd>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <dt className="font-semibold text-gray-700 mb-1">
                  Hạng mục thi công
                </dt>
                <dd className="text-gray-600">{project.workScope}</dd>
              </div>

              <div>
                <dt className="font-semibold text-gray-700 mb-1">Danh mục</dt>
                <dd>
                  <Link
                    href={`/du-an/${category.id}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {category.name}
                  </Link>
                </dd>
              </div>
            </div>
          </section>

          {/* Project Images Gallery */}
          <section aria-labelledby="project-gallery" className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden shadow-sm"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Hình ảnh ${index + 1} của dự án ${project.title}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 2}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section aria-labelledby="related-projects" className="mt-12">
              <h2
                id="related-projects"
                className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center"
              >
                Công trình liên quan
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/du-an/${relatedProject.category}/${relatedProject.slug}`}
                    className="group block bg-white border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary-blue-1 transition-all duration-300"
                  >
                    <div className="aspect-video">
                      <ImageWithFallback
                        src={relatedProject.images[0]}
                        alt={`${relatedProject.title} - ${relatedProject.location}`}
                        width={300}
                        height={200}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary-blue-1 transition-colors duration-300 line-clamp-2">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                        {relatedProject.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link
                  href={`/du-an/${category.id}`}
                  className="inline-flex items-center px-6 py-3 bg-primary-blue-1 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  Xem tất cả dự án {category.name}
                </Link>
              </div>
            </section>
          )}
        </main>

        {/* <CTASection /> */}
        <MapSection />
        {/* <PartnerSection /> */}
      </div>
    </>
  );
}
