'use client';

import ImageWithFallback from '@/components/common/ImageWithFallback';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

export const CompanyInformationSection: FunctionComponent = () => {
  const { t } = useTranslation('common');
  const labelKeys = [
    'companyName',
    'address',
    'contact',
    'email',
    'website',
    'director',
    'taxCode',
    'foundedDate',
    'mainBusiness',
  ] as const;
  const companyInformation = labelKeys.map((key) => ({
    label: t(`about.companyInfo.labels.${key}`),
    value: t(`about.companyInfo.values.${key}`),
  }));

  return (
    <section
      className="py-5 bg-white"
      aria-labelledby="organizational-structure-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full col-span-1">
            <ImageWithFallback
              src="/images/about/thong-tin-cong-ty.jpg"
              alt={t('about.companyInfo.imageAlt')}
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full col-span-1 content-center">
            <h2 className="uppercase text-lg md:text-xl lg:text-2xl font-bold text-primary-blue-1 mb-6">
              {t('about.companyInfo.heading')}
            </h2>

            <table className="w-full overflow-hidden ">
              <tbody className="w-full">
                {companyInformation.map((item, index) => (
                  <tr
                    className="border-t border-gray-300 last:border-b"
                    key={`company-information-row-${index}`}
                  >
                    <td className="w-1/3 align-top">
                      <p className="py-3 font-bold h-fit text-sm md:text-base lg:text-sm xl:text-base">
                        {item.label}
                      </p>
                    </td>
                    <td>
                      <p className="text-wrap whitespace-pre-line py-2 text-sm md:text-base lg:text-sm xl:text-base">
                        {item.value}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
