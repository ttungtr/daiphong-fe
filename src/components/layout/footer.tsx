import { FunctionComponent } from 'react';
import ImageWithFallback from '../common/ImageWithFallback';
import { FacebookIcon, MailIcon, ZaloIcon } from '../icons';

export const Footer: FunctionComponent = () => {
  return (
    <footer
      className="py-12 md:py-16 bg-hero-gradient relative overflow-hidden bg-primary-blue-1 px-4"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto relative z-10">
        <div className="mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <ImageWithFallback
                src="/images/logo/horizontal-logo.png"
                alt="Đại Phong Logo"
                width={200}
                height={64}
                className="w-52 h-auto"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">
                NHÀ SẢN XUẤT ỐNG THÔNG GIÓ CHẤT LƯỢNG CAO
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-1 text-white">Địa chỉ:</h4>
                <a
                  href="https://goo.gl/maps/j15G3vj7UpgWByjF9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  Lô 3.2, Đường số 2, KCN Tân Đông Hiệp A, Phường Dĩ An, TPHCM
                </a>
              </div>

              <div>
                <h4 className="font-semibold mb-1 text-white">VPLV:</h4>
                <a
                  href="https://goo.gl/maps/j15G3vj7UpgWByjF9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  Lô 3.2, Đường số 2, KCN Tân Đông Hiệp A, Phường Dĩ An, TPHCM
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-1 text-white">Điện thoại:</h4>
                <a
                  href="tel:+84982400400"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  (+84) xxx xxx xxx
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-white">Email:</h4>
                <a
                  href="mailto:daiphong@daiphong.com"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  daiphong@daiphong.com
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              <FacebookIcon className="w-7 h-7 text-white hover:text-white/70 transition" />
              <ZaloIcon className="w-7 h-7 text-white hover:text-white/70 transition" />
              <MailIcon className="w-7 h-7 text-white hover:text-white/70 transition" />
            </div>

            <p className="text-xs text-white/70">
              © 2025 Đại Phong. All rights reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-white/60 p-8 shadow-sm backdrop-blur-md">
            <h3 className="text-lg font-semibold text-[#00689d] mb-3">
              Liên hệ với chúng tôi
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Xin vui lòng để lại địa chỉ email, chúng tôi sẽ cập nhật tin tức
              quan trọng tới quý khách.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00689d] outline-none"
              />
              <button className="px-5 py-2 bg-[#00689d] text-white rounded-lg hover:bg-[#3096be] transition">
                Gửi
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
            alternateName: 'Đại Phong',
            taxID: '3702336422',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'Lô 3.2, Đường số 2, Khu công nghiệp Tân Đông Hiệp A, Phường Dĩ An, TPHCM',
              addressLocality: 'Thành phố Hồ Chí Minh',
              addressCountry: 'VN',
            },
            telephone: '+84982400400',
            email: 'daiphong@daiphong.com',
            url: 'https://onggiodaiphong.com',
            foundingDate: '2002',
            industry: ['Construction', 'Transportation'],
            areaServed: 'Vietnam',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+84982400400',
              contactType: 'customer service',
              availableLanguage: 'Vietnamese',
            },
            sameAs: [
              'https://www.facebook.com/',
              'https://twitter.com/',
              'https://www.youtube.com/',
            ],
          }),
        }}
      />
    </footer>
  );
};
