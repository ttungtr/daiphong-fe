'use client';

import { FunctionComponent } from 'react';
import { TrendingUp, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ImageWithFallback from '@/components/common/ImageWithFallback';

export const VisionMissionSection: FunctionComponent = () => {
  const { t } = useTranslation('common');
  const visionMissionData = [
    {
      number: '1',
      titleKey: 'about.visionMission.vision.title' as const,
      icon: TrendingUp,
      background: '/images/about/tam-nhin.jpg',
      features: [
        t('about.visionMission.vision.description'),
      ],
    },
    {
      number: '2',
      titleKey: 'about.visionMission.mission.title' as const,
      icon: Globe,
      background: '/images/about/su-menh.jpg',
      features: t('about.visionMission.mission.features', {
        returnObjects: true,
      }) as string[],
    },
    {
      number: '3',
      titleKey: 'about.visionMission.coreValues.title' as const,
      icon: TrendingUp,
      background: '/images/about/gia-tri-cot-loi.jpg',
      features: t('about.visionMission.coreValues.features', {
        returnObjects: true,
      }) as string[],
    },
    {
      number: '4',
      titleKey: 'about.visionMission.philosophy.title' as const,
      icon: TrendingUp,
      background: '/images/about/triet-li-kinh-doanh.jpg',
      features: t('about.visionMission.philosophy.features', {
        returnObjects: true,
      }) as string[],
    },
  ];

  return (
    <section className="w-full py-4 md:py-4 lg:py-8 bg-primary-blue-1">
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h3
          id="team-heading"
          className="text-xl sm:text-2xl font-bold uppercase text-center mb-2 text-white"
        >
          {t('about.visionMission.heading')}
        </h3>
      </div>

      {visionMissionData.map((goal, index) => (
        <div key={index} className="transform-gpu">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12  ${
                !(index % 2) ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-4 md:space-y-6 ${
                  !(index % 2) ? 'lg:col-start-2' : ''
                }`}
              >
                <div className="flex gap-2 items-center">
                  {/* Icon with Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white bg-primary-yellow-1">
                    <span className="text-xl md:text-2xl font-bold">
                      {goal.number}
                    </span>
                  </div>
                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-white">
                    {t(goal.titleKey)}
                  </h2>
                </div>

                {/* Description */}
                {/* <p className="text-sm md:text-base leading-relaxed text-white">
                  {goal.description}
                </p> */}

                {/* Features List */}
                {goal.features.length > 0 && (
                  <div className="space-y-2 md:space-y-3">
                    {goal.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="shrink-0 mt-1.5">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400"></div>
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-white">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div
                className={`relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-2xl ${
                  !(index % 2) ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <ImageWithFallback
                  src={goal.background}
                  alt={t('about.visionMission.imageAlt', {
                    title: t(goal.titleKey),
                  })}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
