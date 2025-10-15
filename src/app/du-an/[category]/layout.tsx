import { Metadata } from 'next';
import { projectsData } from '@/data/projects';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categoryx } = await params;
  const category = projectsData.categories.find((c) => c.id === categoryx);

  if (!category) {
    return {
      title: 'Trang không tồn tại - Đại Phong Corp',
      description: 'Trang bạn đang tìm kiếm không tồn tại.',
    };
  }

  const projectCount = projectsData.projects.filter(
    (project) => project.category === category.id
  ).length;

  const title = `${category.name} - ${projectCount} Dự Án | Đại Phong Corp`;
  const description = `Khám phá ${projectCount} dự án ${category.name.toLowerCase()} của Đại Phong Corp. Chuyên thi công hệ thống MEP với chất lượng cao và tiến độ đảm bảo.`;

  return {
    title,
    description,
    keywords: [
      `dự án ${category.name.toLowerCase()}`,
      'Đại Phong Corp',
      'thi công MEP',
      'hệ thống điều hòa',
      'cơ điện',
      'điện lạnh',
      category.name.toLowerCase(),
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'vi_VN',
      siteName: 'Đại Phong Corp',
      images: [
        {
          url: '/images/projects/hero-section.pngx',
          width: 1200,
          height: 630,
          alt: `Công trình ${category.name} - Đại Phong Corp`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/projects/hero-section.pngx'],
    },
    alternates: {
      canonical: `/du-an/${categoryx}`,
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

export async function generateStaticParams() {
  return projectsData.categories.map((category) => ({
    category: category.id,
  }));
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
