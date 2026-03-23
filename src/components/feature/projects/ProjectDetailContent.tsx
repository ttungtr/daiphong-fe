'use client';

import ImageWithFallback from '@/components/common/ImageWithFallback';
import { MapSection } from '@/components/feature/homepage';
import { HeroSection } from '@/components/feature/projects';
import { useProjectsData } from '@/hooks/useLocalizedData';
import LineTitle from '@/components/common/line-title';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface ProjectDetailContentProps {
  slug: string;
}

export default function ProjectDetailContent({
  slug,
}: ProjectDetailContentProps) {
  const { t } = useTranslation('common');
  const projectsData = useProjectsData();
  const project = projectsData.projects.find((p) => p.slug === slug);

  if (!project) return null;

  const relatedProjects = projectsData.projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <div className="w-full">
        <HeroSection
          breadcrumbs={[
            {
              label: t('projectsPage.heroBreadcrumbHome'),
              href: '/',
              isActive: false,
            },
            {
              label: t('projectsPage.heroBreadcrumbProjects'),
              href: '/du-an',
              isActive: false,
            },
            {
              label: project.title,
              href: `/du-an/${project.slug}`,
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
              alt={t('projectsPage.lineTitleAltWithTitle', {
                title: project.title,
              })}
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
              {t('projectsPage.detailHeading')}
            </h2>

            <div className="space-y-2">
              <div className="border-b border-gray-200 pb-2">
                <dt className="font-semibold text-gray-700 mb-1">
                  {t('projectsPage.location')}
                </dt>
                <dd className="text-gray-600">{project.location}</dd>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <dt className="font-semibold text-gray-700 mb-1">
                  {t('projectsPage.owner')}
                </dt>
                <dd className="text-gray-600">{project.owner}</dd>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <dt className="font-semibold text-gray-700 mb-1">
                  {t('projectsPage.category')}
                </dt>
                <dd className="text-gray-600">{project.category}</dd>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <dt className="font-semibold text-gray-700 mb-1">
                  {t('projectsPage.productConsumptionCapacity')}
                </dt>
                <dd className="text-gray-600">
                  {project.productConsumptionCapacity}
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
                    alt={t('projectsPage.projectImageAlt', {
                      index: index + 1,
                      title: project.title,
                    })}
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
                {t('projectsPage.relatedHeading')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/du-an/${relatedProject.slug}`}
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
            </section>
          )}
        </main>

        <MapSection />
      </div>
    </>
  );
}
