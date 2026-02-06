import LineTitle from '@/components/common/line-title';
import { HeroSection } from '@/components/feature/contact';
import { MapSection } from '@/components/feature/homepage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liên Hệ Đại Phong | Tư Vấn Sản Xuất Ống Gió, Miệng Gió, Phụ Kiện HVAC',
  description:
    'Liên hệ với Đại Phong để được tư vấn miễn phí về sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC. Hotline: 0888885964. Email: ongiodaiphong@gmail.com. Địa chỉ: Lô 3.2, Đường số 2, KCN Tân Đông Hiệp A, Dĩ An, TP.HCM',
  keywords: [
    'liên hệ Đại Phong',
    'tư vấn ống gió',
    'báo giá ống gió',
    'sản xuất ống gió',
    'gia công miệng gió',
    'phụ kiện HVAC',
    'hotline ống gió',
    'đặt hàng ống gió',
    'tư vấn miễn phí',
    'sản xuất theo yêu cầu',
    'ống gió tròn',
    'ống gió vuông',
  ],
  openGraph: {
    title: 'Liên Hệ Đại Phong - Sản Xuất Ống Gió Chất Lượng',
    description:
      'Liên hệ với Đại Phong để được tư vấn miễn phí về sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC chất lượng cao',
    type: 'website',
    locale: 'vi_VN',
    url: 'https://www.onggiodaiphong.com/lien-he',
    siteName: 'Đại Phong',
    images: [
      {
        url: 'https://www.onggiodaiphong.com/images/contact/hero-section.jpg',
        width: 1200,
        height: 630,
        alt: 'Liên hệ Đại Phong',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Liên Hệ Đại Phong',
    description:
      'Liên hệ với Đại Phong để được tư vấn miễn phí về sản xuất ống gió, miệng gió, phụ kiện HVAC',
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
    name: 'Liên hệ - Đại Phong',
    description:
      'Trang liên hệ của Đại Phong - Đơn vị sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC chất lượng cao',
    url: 'https://www.onggiodaiphong.com/lien-he',
    mainEntity: {
      '@type': 'Organization',
      name: 'Công ty Cổ phần Công nghiệp Đại Phong',
      url: 'https://www.onggiodaiphong.com',
      logo: 'https://www.onggiodaiphong.com/images/logo/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+84888885964',
        contactType: 'sales',
        availableLanguage: 'Vietnamese',
        areaServed: 'VN',
      },
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Công ty Cổ phần Công nghiệp Đại Phong',
    alternateName: 'Đại Phong',
    url: 'https://www.onggiodaiphong.com',
    logo: 'https://www.onggiodaiphong.com/images/logo/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84888885964',
      contactType: 'sales',
      email: 'ongiodaiphong@gmail.com',
      availableLanguage: 'Vietnamese',
      areaServed: 'VN',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lô 3.2, Đường số 2, KCN Tân Đông Hiệp A, Phường Dĩ An',
      addressLocality: 'Thành phố Hồ Chí Minh',
      addressCountry: 'VN',
      postalCode: '700000',
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
            <LineTitle alt="Đường viền trang trí tiêu đề Liên hệ" />
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
                  value="https://onggiodaiphong.com/lien-he?success=1"
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
