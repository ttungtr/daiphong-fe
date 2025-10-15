import { ApplyJobButton, HeroSection } from '@/components/common';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { jobPositions } from '@/data/job-positions';
import { ISection } from '@/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FunctionComponent } from 'react';

interface ISectionProps {
  data: ISection;
  index: number;
}

const Section: FunctionComponent<ISectionProps> = ({ data, index }) => {
  const { title, subTitle, items } = data;
  return (
    <div className='w-full space-y-1 md:space-y-2'>
      <h3 className='text-lg md:text-xl font-bold uppercase text-gray-900'>
        {title}
      </h3>
      {subTitle && (
        <p className='text-sm md:text-base text-gray-700 leading-relaxed'>
          {subTitle}
        </p>
      )}
      <ul className='list-disc list-inside space-y-2 text-sm md:text-base text-gray-600 ml-4 md:ml-6'>
        {items.map((item, index) => (
          <li key={index} className='leading-relaxed'>
            {item}
          </li>
        ))}
      </ul>
      {[1, 4].includes(index) && <div className='h-5'></div>}
    </div>
  );
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const jobPosition = jobPositions.find((job) => job.id === id);

  if (!jobPosition) {
    return {
      title: 'Trang không tồn tại - Đại Phong Corp',
      description: 'Trang bạn đang tìm kiếm không tồn tại.',
    };
  }

  const title = `${jobPosition.title} | Đại Phong Corp`;
  const description = `Cơ hội nghề nghiệp hấp dẫn tại Đại Phong Corp: ${jobPosition.title}. Tham gia đội ngũ chuyên nghiệp trong lĩnh vực thi công hệ thống MEP với mức lương cạnh tranh và môi trường làm việc năng động.`;

  return {
    title,
    description,
    keywords: [
      jobPosition.title.toLowerCase(),
      'tuyển dụng',
      'việc làm',
      'Đại Phong Corp',
      'MEP engineer',
      'kỹ sư cơ điện',
      'career opportunity',
      'job opening',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'vi_VN',
      siteName: 'Đại Phong Corp',
      images: [
        {
          url:
            jobPosition.images[0]?.url || '/images/hr-policy/hero-section.pngx',
          width: 1200,
          height: 630,
          alt: jobPosition.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        jobPosition.images[0]?.url || '/images/hr-policy/hero-section.pngx',
      ],
    },
    alternates: {
      canonical: `/tuyen-dung/vi-tri-tuyen-dung/${id}`,
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
  return jobPositions.map((job) => ({
    id: job.id,
  }));
}

export default async function JobPositionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const jobPosition = jobPositions.find((job) => job.id === id);

  if (!jobPosition) {
    return notFound();
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
        name: 'Tuyển dụng',
        item: 'https://philongcorp.vn/tuyen-dung',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Vị trí tuyển dụng',
        item: 'https://philongcorp.vn/tuyen-dung/vi-tri-tuyen-dung',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: jobPosition.title,
        item: `https://philongcorp.vn/tuyen-dung/vi-tri-tuyen-dung/${jobPosition.id}`,
      },
    ],
  };

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: jobPosition.title,
    description:
      jobPosition.sections.find((s) => s.title === 'Mô tả công việc')
        ?.subTitle || jobPosition.title,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Đại Phong Corp',
      sameAs: 'https://philongcorp.vn',
      logo: 'https://philongcorp.vn/logo.pngx',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hồ Chí Minh',
        addressCountry: 'VN',
      },
    },
    datePosted: new Date().toISOString(),
    validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    employmentType: 'FULL_TIME',
    workHours: '8:00-17:00',
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'VND',
      value: {
        '@type': 'QuantitativeValue',
        minValue: 12000000,
        maxValue: 20000000,
        unitText: 'MONTH',
      },
    },
    qualifications: jobPosition.sections
      .find((s) => s.title === 'Yêu cầu công việc')
      ?.items.join('; '),
    benefits: jobPosition.sections
      .find((s) => s.title === 'Quyền lợi')
      ?.items.join('; '),
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
          __html: JSON.stringify(jobPostingSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
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
              isActive: false,
            },
            {
              label: 'Vị trí tuyển dụng',
              href: '/tuyen-dung/vi-tri-tuyen-dung',
              isActive: false,
            },
            {
              label: jobPosition.title,
              href: `/tuyen-dung/vi-tri-tuyen-dung/${jobPosition.id}`,
              isActive: true,
            },
          ]}
        />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12'>
          <header className='mb-8 md:mb-12'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold uppercase text-gray-900 text-center md:text-left'>
              {jobPosition.title}
            </h1>
          </header>

          <div className='space-y-3 md:space-y-4'>
            {jobPosition.sections.map((section, index) => (
              <Section
                index={index}
                key={`${section.title}-${index}`}
                data={section}
              />
            ))}

            {jobPosition.images.length > 0 && (
              <div className='space-y-2 md:space-y-3'>
                <div className='grid grid-cols-1 gap-4 md:gap-6'>
                  {jobPosition.images.map((image) => (
                    <div key={image.url} className='relative'>
                      <ImageWithFallback
                        src={image.url}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className='object-center object-cover w-[100%] max-w-[500px] mx-auto h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className='flex justify-center'>
              <ApplyJobButton jobTitle={jobPosition.title}>
                Ứng tuyển ngay
              </ApplyJobButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
