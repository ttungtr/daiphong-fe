'use client';

import LineTitle from '@/components/common/line-title';
import { HeroSection } from '@/components/feature/contact';
import { MapSection } from '@/components/feature/homepage';
import { useTranslation } from 'react-i18next';

export function ContactPageContent() {
  const { t } = useTranslation('common');

  const breadcrumbs = [
    { label: t('contactPage.heroBreadcrumbHome'), href: '/', isActive: false },
    {
      label: t('contactPage.heroBreadcrumbContact'),
      href: '/lien-he',
      isActive: true,
    },
  ];

  return (
    <div className="w-full">
      <HeroSection
        breadcrumbs={breadcrumbs}
        imageAlt={t('contactPage.heroImageAlt')}
      />

      <main className="max-w-7xl mx-auto space-y-8 py-10 px-4 sm:px-6 lg:px-8">
        <header className="w-full flex flex-col items-center justify-center gap-2">
          <h1
            id="contact-heading"
            className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center uppercase"
          >
            {t('contactPage.heading')}
          </h1>
          <LineTitle alt={t('contactPage.lineTitleAlt')} />
        </header>

        {/* Contact Form */}
        <section aria-labelledby="contact-form" className="max-w-4xl mx-auto">
          <div className="bg-white shadow-sm border-2 border-[#0F4C8C] p-6 md:p-8">
            <form
              className="space-y-6"
              method="POST"
              action="https://formspree.io/f/mrbkdvvy"
            >
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input
                type="hidden"
                name="_next"
                value="https://onggiodaiphong.com/lien-he?success=1"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t('contactPage.labels.fullName')}{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black outline-none transition-colors duration-300"
                    placeholder={t('contactPage.placeholders.fullName')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t('contactPage.labels.phone')}{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9]{10,11}"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black outline-none transition-colors duration-300"
                    placeholder={t('contactPage.placeholders.phone')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t('contactPage.labels.email')}{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black outline-none transition-colors duration-300"
                    placeholder={t('contactPage.placeholders.email')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t('contactPage.labels.subject')}{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black outline-none transition-colors duration-300"
                    placeholder={t('contactPage.placeholders.subject')}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t('contactPage.labels.content')}{' '}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="content"
                  name="content"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black outline-none transition-colors duration-300 resize-vertical"
                  placeholder={t('contactPage.placeholders.content')}
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-primary-blue-1 text-white font-medium rounded-lg hover:bg-primary-blue-1/80 transition-all duration-300"
                >
                  {t('contactPage.submit')}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <MapSection />
    </div>
  );
}
