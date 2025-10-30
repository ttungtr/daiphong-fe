import ImageWithFallback from '@/components/common/ImageWithFallback';
import { FunctionComponent } from 'react';

export const LetterSection: FunctionComponent = () => {
  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
    alternateName: '',
    foundingDate: '2003',
    description: 'Nhà thầu thi công hệ thống cơ điện (MEP) uy tín.',
    ceo: {
      '@type': 'Person',
      name: 'Lê Thanh Tùng',
      jobTitle: 'Giám đốc Công ty',
    },
    areaServed: 'Vietnam',
    serviceType: [
      'Thi công hệ thống cơ điện (MEP)',
      'Lắp đặt thang máy SANKA',
      'Hệ thống điện năng lượng mặt trời',
      'Thiết kế hệ thống PCCC',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section
        className="py-5 bg-white mb-10"
        aria-labelledby="letter-heading"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="w-full flex flex-col items-center justify-center">
              <h2
                id="letter-heading"
                className="text-3xl font-bold text-gray-900"
                itemProp="name"
              >
                GIỚI THIỆU CÔNG TY
              </h2>
              {/* <ImageWithFallback
                src="/images/titlebg.pngx"
                alt="Đường viền trang trí tiêu đề thư ngỏ Công Ty Cổ Phần Công Nghiệp Đại Phong"
                width={300}
                height={100}
                className="w-56 h-auto "
                priority
              /> */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
              <div className="space-y-4 md:space-y-6 lg:col-span-7 order-1 lg:order-1">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  <strong className="text-black">Đại Phong Corp</strong> là đơn
                  vị tiên phong trong lĩnh vực sản xuất và gia công các sản phẩm
                  cơ điện chuyên nghiệp. Chúng tôi chuyên cung cấp các giải pháp
                  toàn diện về ống gió, miệng gió, van gió, thang – máng cáp và
                  các phụ kiện liên quan cho hệ thống HVAC.
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  Với năng lực sản xuất hiện đại và đội ngũ kỹ thuật chuyên
                  nghiệp, chúng tôi cam kết mang đến những sản phẩm đạt tiêu
                  chuẩn kỹ thuật cao nhất. Tất cả các sản phẩm của Đại Phong đều
                  được kiểm định chất lượng nghiêm ngặt, đảm bảo độ bền, độ
                  chính xác và hiệu suất tối ưu.
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  Chúng tôi tự hào là đối tác tin cậy của nhiều dự án lớn trên
                  toàn quốc, từ các tòa nhà cao tầng, trung tâm thương mại, bệnh
                  viện, trường học đến các nhà máy, nhà xưởng và khu công
                  nghiệp. Mỗi dự án là một cơ hội để chúng tôi thể hiện năng lực
                  và cam kết chất lượng.
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  Đại Phong không ngừng đầu tư vào máy móc thiết bị hiện đại và
                  ứng dụng công nghệ tiên tiến. Chúng tôi hướng tới việc tự động
                  hóa và tiêu chuẩn hóa quy trình sản xuất để đảm bảo tính nhất
                  quán và chất lượng cao trong mọi sản phẩm.
                </p>

                <div className="my-6 md:my-8"></div>

                <div className="mb-6 md:mb-8"></div>

                {/* Button for desktop */}
                <div className="hidden lg:block">
                  <a
                    href="https://drive.google.com/file/d/1ubVYqq0He4bBzW-HWB47p9L8nf9kMonk/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-blue-1 hover:opacity-70 text-white duration-300 w-32 sm:w-40 text-center py-2 sm:py-3 rounded-md text-sm font-semibold transition-opacity cursor-pointer"
                    aria-label="Xem profile công ty"
                  >
                    Xem Đại Phong Profile
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 w-full flex justify-center lg:justify-end order-2 lg:order-2">
                <ImageWithFallback
                  src="/images/about/gioi-thieu-cong-ty.jpg"
                  alt="Ông Lê Thanh Tùng - Chủ tịch HĐQT kiêm Tổng Giám đốc Công Ty Cổ Phần Công Nghiệp Đại Phong, nhà lãnh đạo trong lĩnh vực xây dựng và hệ thống cơ điện MEP"
                  className="object-cover w-full max-w-[300] sm:max-w-[350px] lg:max-w-[380] h-auto mx-auto "
                  width={350}
                  height={400}
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 350px"
                />
              </div>

              {/* Button for mobile - appears after image */}
              <div className="lg:hidden order-3 flex justify-center">
                <a
                  href="https://drive.google.com/file/d/1ubVYqq0He4bBzW-HWB47p9L8nf9kMonk/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-blue-1 hover:opacity-70 text-white duration-300 w-32 sm:w-40 text-center py-2 sm:py-3 rounded-md text-sm font-semibold transition-opacity cursor-pointer"
                  aria-label="Xem profile công ty"
                >
                  Xem Đại Phong Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
