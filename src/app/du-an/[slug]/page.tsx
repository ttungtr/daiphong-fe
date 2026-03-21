import { projectsData } from '@/data/projects';
import ProjectDetailContent from '@/components/feature/projects/ProjectDetailContent';
import { Metadata } from 'next';
import NotFound from './not-found';

// Generate metadata for each project detail page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.projects.find(
    (project) => project.slug === slug,
  );

  if (!project) {
    return {
      title: 'Công trình không tồn tại - Đại Phong',
      description: 'Công trình bạn đang tìm kiếm không tồn tại.',
    };
  }

  const title = `${project.title} - Đại Phong`;
  const description = `${project.subtitle}. Công trình tại ${project.location} với giá trị ${project.productConsumptionCapacity}.`;

  return {
    title,
    description,
    keywords: [
      project.title,
      'Đại Phong',
      'thi công MEP',
      'hệ thống điều hòa',
      'cơ điện',
      project.location,
      project.owner,
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
      canonical: `https://onggiodaiphong.com/du-an/${slug}`,
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
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Check if project exists (check both VI data - EN has same slugs)
  const project = projectsData.projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return <ProjectDetailContent slug={slug} />;
}
