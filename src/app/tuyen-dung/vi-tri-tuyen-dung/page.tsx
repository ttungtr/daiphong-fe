import { HeroSection } from '@/components/common';
import { jobPositions } from '@/data/job-positions';
import { Metadata } from 'next';
import { JobPositionsSlider } from './job-positions-slider';

export async function generateMetadata(): Promise<Metadata> {
  const jobCount = jobPositions.length;

  const title = `Vị Trí Tuyển Dụng - ${jobCount} Cơ Hội Việc Làm | Đại Phong Corp`;
  const description = `Khám phá ${jobCount} vị trí tuyển dụng hấp dẫn tại Đại Phong Corp. Tham gia đội ngũ chuyên nghiệp trong lĩnh vực thi công hệ thống MEP và phát triển sự nghiệp của bạn.`;

  return {
    title,
    description,
    keywords: [
      'tuyển dụng',
      'việc làm',
      'Đại Phong Corp',
      'career',
      'job opportunities',
      'MEP engineer',
      'kỹ sư cơ điện',
      'vị trí tuyển dụng',
      'cơ hội nghề nghiệp',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'vi_VN',
      siteName: 'Đại Phong Corp',
      images: [
        {
          url: '/images/hr-policy/hero-section.pngx',
          width: 1200,
          height: 630,
          alt: 'Tuyển dụng tại Đại Phong Corp',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/hr-policy/hero-section.pngx'],
    },
    alternates: {
      canonical: `/tuyen-dung/vi-tri-tuyen-dung`,
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

export default function JobPositionsPage() {
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
        name: 'Tuyển dụng',
        item: 'https://philongcorp.vn/tuyen-dung',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Vị trí tuyển dụng',
        item: 'https://philongcorp.vn/tuyen-dung/vi-tri-tuyen-dung',
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

  const jobPostingsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Vị trí tuyển dụng - Đại Phong Corp',
    description: 'Danh sách các vị trí tuyển dụng tại Đại Phong Corp',
    numberOfItems: jobPositions.length,
    itemListElement: jobPositions.map((job, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'JobPosting',
        title: job.title,
        description: job.title,
        hiringOrganization: {
          '@type': 'Organization',
          name: 'Đại Phong Corp',
          sameAs: 'https://philongcorp.vn',
        },
        jobLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'VN',
          },
        },
        url: `https://philongcorp.vn/tuyen-dung/vi-tri-tuyen-dung/${job.id}`,
        datePosted: new Date().toISOString(),
        validThrough: new Date(
          Date.now() + 90 * 24 * 60 * 60 * 1000
        ).toISOString(),
        employmentType: 'FULL_TIME',
      },
    })),
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingsSchema),
        }}
      />

      <div className='w-full'>
        <HeroSection
          imageUrl='/images/hr-policy/hr-policy-banner.pngx'
          imageAlt='Chính sách nhân sự - Đại Phong Corp'
          breadcrumbs={[
            { label: 'Trang chủ', href: '/', isActive: false },
            {
              label: 'Tuyển dụng',
              href: '/tuyen-dung',
              isActive: true,
            },
            {
              label: 'Vị trí tuyển dụng',
              href: '/tuyen-dung/vi-tri-tuyen-dung',
              isActive: true,
            },
          ]}
        />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6'>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-center'>
            Vị trí tuyển dụng
          </h1>

          <JobPositionsSlider jobPositions={jobPositions} />
        </div>
      </div>
    </>
  );
}
