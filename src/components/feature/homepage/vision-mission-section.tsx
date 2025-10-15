import { FunctionComponent } from 'react';

export const VisionMissionSection: FunctionComponent = () => {
  return (
    <section
      className='py-8 md:py-12 lg:py-16 xl:py-24 bg-white'
      aria-labelledby='vision-mission-heading'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16'>
            {/* Vision Section */}
            <div className='space-y-6'>
              <div className='space-y-4'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>
                  <span className='text-gray-500'>01</span> TẦM NHÌN |{' '}
                </h2>

                <div className='space-y-4'>
                  <p className='text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed'>
                    <strong className='text-black'>Đại Phong</strong> định hướng
                    trở thành đơn vị sản xuất và gia công ống gió, miệng gió,
                    phụ kiện HVAC uy tín hàng đầu tại Việt Nam, được các nhà
                    thầu và chủ đầu tư tin tưởng lựa chọn trong mọi dự án cơ
                    điện.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className='space-y-6'>
              <div className='space-y-4'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>
                  <span className='text-gray-500'>02</span> SỨ MỆNH |{' '}
                </h2>

                <div className='space-y-4'>
                  <div className='flex items-start space-x-3'>
                    <div className='flex-shrink-0 w-2 h-2 bg-primary-blue-1 rounded-full mt-3'></div>
                    <div className='space-y-2'>
                      <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                        Sản xuất và cung cấp các sản phẩm ống gió, phụ kiện và
                        thiết bị thông gió đạt chuẩn kỹ thuật, đảm bảo chất
                        lượng – độ bền – độ chính xác cao cho các công trình dân
                        dụng và công nghiệp.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <div className='flex-shrink-0 w-2 h-2 bg-primary-blue-1 rounded-full mt-3'></div>
                    <div className='space-y-2'>
                      <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                        Đồng hành cùng khách hàng trong mọi dự án, đảm bảo tiến
                        độ - kỹ thuật – hiệu quả, góp phần tối ưu chi phí và
                        thời gian thi công cho đối tác.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <div className='flex-shrink-0 w-2 h-2 bg-primary-blue-1 rounded-full mt-3'></div>
                    <div className='space-y-2'>
                      <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                        Không ngừng đầu tư máy móc, cải tiến công nghệ, từng
                        bước hướng tới tự động hóa và tiêu chuẩn hóa quy trình
                        sản xuất.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <div className='flex-shrink-0 w-2 h-2 bg-primary-blue-1 rounded-full mt-3'></div>
                    <div className='space-y-2'>
                      <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                        Phát triển bền vững mối quan hệ hợp tác với khách hàng,
                        đối tác và nhà cung cấp, trở thành mắt xích tin cậy
                        trong chuỗi cung ứng ngành HVAC.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <div className='flex-shrink-0 w-2 h-2 bg-primary-blue-1 rounded-full mt-3'></div>
                    <div className='space-y-2'>
                      <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                        Xây dựng đội ngũ nhân sự tâm huyết – chuyên nghiệp, coi
                        con người là nền tảng cốt lõi để kiến tạo giá trị và
                        phát triển lâu dài.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
            alternateName: 'Đại Phong Corp',
            description:
              'Nhà sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC uy tín hàng đầu tại Việt Nam',
            mission:
              'Sản xuất và cung cấp các sản phẩm ống gió, phụ kiện và thiết bị thông gió đạt chuẩn kỹ thuật, đảm bảo chất lượng – độ bền – độ chính xác cao cho các công trình dân dụng và công nghiệp',
            foundingDate: '2003',
            areaServed: 'Vietnam',
            industry: ['HVAC', 'Manufacturing', 'Construction'],
            knowsAbout: [
              'Ống gió',
              'Miệng gió',
              'Phụ kiện HVAC',
              'Hệ thống thông gió',
              'Sản xuất cơ khí',
            ],
          }),
        }}
      />
    </section>
  );
};
