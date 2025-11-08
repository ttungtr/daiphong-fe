import { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';
import { projectsData } from '@/data/projects';
import { newsData } from '@/data/new';
import { jobPositions } from '@/data/job-positions';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.onggiodaiphong.com';

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/linh-vuc-hoat-dong`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gioi-thieu`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/du-an`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tin-tuc`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hoat-dong-cong-ty`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lien-he`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tuyen-dung`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tuyen-dung/vi-tri-tuyen-dung`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ];

  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}/linh-vuc-hoat-dong/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const projectPages = projectsData.projects.map((project) => ({
    url: `${baseUrl}/du-an/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const jobPositionPages = jobPositions.map((job) => ({
    url: `${baseUrl}/tuyen-dung/vi-tri-tuyen-dung/${job.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Add individual news pages to sitemap
  const newsPages = newsData.map((news) => {
    const createdDate = new Date(news.createdAt.split('/').reverse().join('-'));
    return {
      url: `${baseUrl}/${news.category}/${news.slug}`,
      lastModified: createdDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });

  return [
    ...staticPages,
    ...servicePages,
    ...projectPages,
    ...newsPages,
    ...jobPositionPages,
  ];
}
