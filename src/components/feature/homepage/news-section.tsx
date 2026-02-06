'use client';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import LineTitle from '@/components/common/line-title';
import { projectsData } from '@/data/projects';
import { MoveRightIcon } from 'lucide-react';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

export const NewsSection: FunctionComponent = () => {
  // Side projects are orders 2, 3, 4, 5
  const sideProjects = projectsData.subProjects;
  const { t } = useTranslation('common');

  return (
    <div className="w-full py-4 md:py-4 lg:py-8 bg-white">
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-bold uppercase text-center">
          {t('newsSection.heading')}
        </h3>

        <LineTitle alt={t('newsSection.lineTitleAlt')} />

        <p className="text-center max-w-[90%] sm:max-w-[80%] text-black/80 text-sm sm:text-base mb-6 md:mb-8">
          {t('newsSection.subtitle')}
        </p>

        {/* Grid of project images */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
          {sideProjects.slice(0, 6).map((project) => {
            return (
              <Link
                key={project.id}
                href={`/du-an/${project.category}/${project.slug}`}
                className="group relative overflow-hidden rounded-lg"
                style={{ aspectRatio: '2/3' }}
              >
                <ImageWithFallback
                  width={300}
                  height={200}
                  src={project.images[0]}
                  alt={`Công trình ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Mobile: Always show title with overlay */}
                <div className="absolute inset-0 bg-primary-yellow-1/50 flex items-center justify-center md:hidden">
                  <div className="text-center px-2">
                    <h4 className="text-sm font-bold text-white uppercase leading-tight">
                      {project.title}
                    </h4>
                  </div>
                </div>

                {/* Desktop: Show title on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center">
                  <div className="text-center px-4">
                    <h4 className="text-sm lg:text-base font-bold text-white uppercase leading-tight">
                      {project.title}
                    </h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="w-full flex items-center justify-center py-3 mt-6 md:mt-8">
          <Link
            href="/du-an"
            className="bg-primary-blue-1 hover:opacity-70 text-white duration-300 w-32 sm:w-40 text-center py-2 rounded-md text-sm font-semibold flex gap-1 justify-center items-center"
          >
            {t('newsSection.viewAll')} <MoveRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
