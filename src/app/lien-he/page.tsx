import ImageWithFallback from '@/components/common/ImageWithFallback';
import { HeroSection } from '@/components/feature/contact';
import { MapSection } from '@/components/feature/homepage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liên hệ - Đại Phong Corp | Tư vấn thi công hệ thống MEP',
  description:
    'Liên hệ với Đại Phong Corp để được tư vấn miễn phí về thi công hệ thống MEP (điện, nước, điều hòa). Hotline: 0123456789. Email: daiphong@daiphong.com',
  keywords: [
    'liên hệ Đại Phong Corp',
    'tư vấn thi công MEP',
    'báo giá hệ thống điều hòa',
    'tư vấn hệ thống điện',
    'liên hệ công ty cơ điện',
    'hotline Đại Phong',
    'email Đại Phong Corp',
    'tư vấn miễn phí MEP',
    'liên hệ thi công điều hòa',
    'tư vấn cấp thoát nước',
  ],
  openGraph: {
    title: 'Liên hệ - Đại Phong Corp',
    description:
      'Liên hệ với Đại Phong Corp để được tư vấn miễn phí về thi công hệ thống MEP chuyên nghiệp',
    type: 'website',
    locale: 'vi_VN',
    siteName: 'Đại Phong Corp',
  },
  twitter: {
    card: 'summary',
    title: 'Liên hệ - Đại Phong Corp',
    description:
      'Liên hệ với Đại Phong Corp để được tư vấn miễn phí về thi công hệ thống MEP chuyên nghiệp',
  },
  alternates: {
    canonical: '/lien-he',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function ContactPage() {
  // Structured data for contact page
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Liên hệ - Đại Phong Corp',
    description:
      'Trang liên hệ của Đại Phong Corp - Công ty thi công hệ thống MEP chuyên nghiệp',
    url: 'https://philongcorp.vn/lien-he',
    mainEntity: {
      '@type': 'Organization',
      name: 'Đại Phong Corp',
      url: 'https://philongcorp.vn',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+84123456789',
        contactType: 'customer service',
        availableLanguage: 'Vietnamese',
      },
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Đại Phong Corp',
    url: 'https://philongcorp.vn',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84123456789',
      contactType: 'customer service',
      email: 'daiphong@daiphong.com',
      availableLanguage: 'Vietnamese',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
    },
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <div className="w-full">
        <HeroSection />

        <main className="max-w-7xl mx-auto space-y-8 py-10 px-4 sm:px-6 lg:px-8">
          <header className="w-full flex flex-col items-center justify-center gap-2">
            <h1
              id="contact-heading"
              className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center uppercase"
            >
              Liên hệ
            </h1>
            <ImageWithFallback
              src="/images/titlebg.jpg"
              alt="Đường viền trang trí cho tiêu đề Liên hệ"
              width={300}
              height={100}
              className="w-56 h-auto"
              priority
            />
          </header>

          {/* Contact Form */}
          <section aria-labelledby="contact-form" className="max-w-4xl mx-auto">
            <div className="bg-white  shadow-sm border-2 border-[#0F4C8C]  p-6 md:p-8">
              <form
                className="space-y-6"
                method="POST"
                action="https://formspree.io/f/mrbkdvvy"
              >
                {/* Honeypot chống spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Redirect về trang liên hệ sau khi gửi */}
                <input
                  type="hidden"
                  name="_next"
                  value="https://philongcorp.vn/lien-he?success=1"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black outline-none transition-colors duration-300"
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      pattern="[0-9]{10,11}"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black outline-none transition-colors duration-300"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black outline-none transition-colors duration-300"
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Tiêu đề <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black outline-none transition-colors duration-300"
                      placeholder="Nhập tiêu đề yêu cầu"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="content"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nội dung <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black outline-none transition-colors duration-300 resize-vertical"
                    placeholder="Mô tả chi tiết yêu cầu của bạn..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3 bg-primary-blue-1 text-white font-medium rounded-lg hover:bg-primary-blue-1/80 transition-all duration-300"
                  >
                    Gửi yêu cầu
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        {/* <CTASection /> */}
        <MapSection />
        {/* <PartnerSection /> */}
      </div>
    </>
  );
}
