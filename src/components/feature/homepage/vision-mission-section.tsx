import { FunctionComponent } from 'react';
import { TrendingUp, Globe, Users } from 'lucide-react';
import ImageWithFallback from '@/components/common/ImageWithFallback';

export const VisionMissionSection: FunctionComponent = () => {
  // return (
  //   <section
  //     className='py-8 md:py-12 lg:py-16 xl:py-24 bg-white'
  //     aria-labelledby='vision-mission-heading'
  //   >
  //     <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
  //       <div className='max-w-7xl mx-auto'>
  //         <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16'>
  //           {/* Vision Section */}
  //           <div className='space-y-6'>
  //             <div className='space-y-4'>
  //               <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>
  //                 <span className='text-gray-500'>01</span> TẦM NHÌN
  //               </h2>

  //               <div className='space-y-4'>
  //                 <p className='text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed'>
  //                   <strong className='text-black'>Đại Phong</strong> định hướng
  //                   trở thành đơn vị sản xuất và gia công ống gió, miệng gió,
  //                   phụ kiện HVAC uy tín hàng đầu tại Việt Nam, được các nhà
  //                   thầu và chủ đầu tư tin tưởng lựa chọn trong mọi dự án cơ
  //                   điện.
  //                 </p>
  //               </div>
  //             </div>
  //           </div>

  //           {/* Mission Section */}
  //           <div className='space-y-6'>
  //             <div className='space-y-4'>
  //               <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>
  //                 <span className='text-gray-500'>02</span> SỨ MỆNH
  //               </h2>

  //               <div className='space-y-4'>
  //                 <div className='flex items-start space-x-3'>
  //                   <div className='flex-shrink-0 w-2 h-2 bg-primary-blue-1 rounded-full mt-3'></div>
  //                   <div className='space-y-2'>
  //                     <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
  //                       Sản xuất và cung cấp các sản phẩm ống gió, phụ kiện và
  //                       thiết bị thông gió đạt chuẩn kỹ thuật, đảm bảo chất
  //                       lượng – độ bền – độ chính xác cao cho các công trình dân
  //                       dụng và công nghiệp.
  //                     </p>
  //                   </div>
  //                 </div>

  //                 <div className='flex items-start space-x-3'>
  //                   <div className='flex-shrink-0 w-2 h-2 bg-primary-blue-1 rounded-full mt-3'></div>
  //                   <div className='space-y-2'>
  //                     <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
  //                       Đồng hành cùng khách hàng trong mọi dự án, đảm bảo tiến
  //                       độ - kỹ thuật – hiệu quả, góp phần tối ưu chi phí và
  //                       thời gian thi công cho đối tác.
  //                     </p>
  //                   </div>
  //                 </div>

  //                 <div className='flex items-start space-x-3'>
  //                   <div className='flex-shrink-0 w-2 h-2 bg-primary-blue-1 rounded-full mt-3'></div>
  //                   <div className='space-y-2'>
  //                     <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
  //                       Không ngừng đầu tư máy móc, cải tiến công nghệ, từng
  //                       bước hướng tới tự động hóa và tiêu chuẩn hóa quy trình
  //                       sản xuất.
  //                     </p>
  //                   </div>
  //                 </div>

  //                 <div className='flex items-start space-x-3'>
  //                   <div className='flex-shrink-0 w-2 h-2 bg-primary-blue-1 rounded-full mt-3'></div>
  //                   <div className='space-y-2'>
  //                     <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
  //                       Phát triển bền vững mối quan hệ hợp tác với khách hàng,
  //                       đối tác và nhà cung cấp, trở thành mắt xích tin cậy
  //                       trong chuỗi cung ứng ngành HVAC.
  //                     </p>
  //                   </div>
  //                 </div>

  //                 <div className='flex items-start space-x-3'>
  //                   <div className='flex-shrink-0 w-2 h-2 bg-primary-blue-1 rounded-full mt-3'></div>
  //                   <div className='space-y-2'>
  //                     <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
  //                       Xây dựng đội ngũ nhân sự tâm huyết – chuyên nghiệp, coi
  //                       con người là nền tảng cốt lõi để kiến tạo giá trị và
  //                       phát triển lâu dài.
  //                     </p>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           {/* Mission Section */}
  //           <div className='space-y-6'>
  //             <div className='space-y-4'>
  //               <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>
  //                 <span className='text-gray-500'>02</span> SỨ MỆNH
  //               </h2>

  //               <div className='space-y-4'>
  //                 <p className='text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed'>
  //                   “Ống gió chất lượng – Khởi nguồn không khí sạch” - Chất
  //                   lượng ống gió là nền tảng của không khí sạch.{' '}
  //                   <strong className='text-black'>Đại Phong</strong> sản xuất
  //                   từng sản phẩm với độ bền, độ kín và độ chính xác cao, đảm
  //                   bảo hệ thống thông gió vận hành an toàn và hiệu quả cho mọi
  //                   công trình.
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Structured Data */}
  //     <script
  //       type='application/ld+json'
  //       dangerouslySetInnerHTML={{
  //         __html: JSON.stringify({
  //           '@context': 'https://schema.org',
  //           '@type': 'Organization',
  //           name: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
  //           alternateName: 'Đại Phong Corp',
  //           description:
  //             'Nhà sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC uy tín hàng đầu tại Việt Nam',
  //           mission:
  //             'Sản xuất và cung cấp các sản phẩm ống gió, phụ kiện và thiết bị thông gió đạt chuẩn kỹ thuật, đảm bảo chất lượng – độ bền – độ chính xác cao cho các công trình dân dụng và công nghiệp',
  //           foundingDate: '2003',
  //           areaServed: 'Vietnam',
  //           industry: ['HVAC', 'Manufacturing', 'Construction'],
  //           knowsAbout: [
  //             'Ống gió',
  //             'Miệng gió',
  //             'Phụ kiện HVAC',
  //             'Hệ thống thông gió',
  //             'Sản xuất cơ khí',
  //           ],
  //         }),
  //       }}
  //     />
  //   </section>
  // );
  const developmentGoals = [
    {
      title: 'Phát triển bền vững',
      icon: TrendingUp,
      background: '/images/phat-trien-ben-vung.png',
      description:
        'Phi Long cam kết không ngừng nâng cao chất lượng dịch vụ và giải pháp thi công cơ điện, hướng đến sự tối ưu trong hiệu quả – an toàn – bền vững. Mục tiêu trở thành một trong những nhà thầu cơ điện uy tín hàng đầu tại Việt Nam, đóng góp tích cực vào sự phát triển của ngành xây dựng hiện đại.',
    },
    {
      title: 'Mở rộng thị trường',
      icon: Globe,
      background: '/images/mo-rong-thi-truong.png',

      description:
        'Tăng cường triển khai các dự án cơ điện cả nước. Phi Long Corp định hướng phát triển quy mô và năng lực thi công để đáp ứng các dự án công nghiệp, dịch vụ, nghỉ dưỡng và hạ tầng quy mô lớn.',
    },
    {
      title: 'Xây dựng đội ngũ chuyên gia',
      icon: Users,
      background: '/images/xay-dung-doi-ngu.png',

      description:
        'Phi Long chú trọng đầu tư đào tạo đội ngũ kỹ sư cơ điện chất lượng cao, đồng thời xây dựng môi trường làm việc chuyên nghiệp, năng động. Chúng tôi tạo điều kiện để nhân sự phát huy tối đa năng lực, qua đó nâng cao sức cạnh tranh và hướng đến phát triển bền vững.',
    },
    {
      title: 'Xây dựng đội ngũ chuyên gia',
      icon: Users,
      background: '/images/xay-dung-doi-ngu.png',

      description:
        'Phi Long chú trọng đầu tư đào tạo đội ngũ kỹ sư cơ điện chất lượng cao, đồng thời xây dựng môi trường làm việc chuyên nghiệp, năng động. Chúng tôi tạo điều kiện để nhân sự phát huy tối đa năng lực, qua đó nâng cao sức cạnh tranh và hướng đến phát triển bền vững.',
    },
  ];

  return (
    <div className="w-full py-8 md:py-12 lg:py-14">
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="organizational-structure-heading"
          className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center"
        >
          MỤC TIÊU PHÁT TRIỂN
        </h2>

        <ImageWithFallback
          width={247}
          height={26}
          src="/images/titlebg.png"
          alt="titlebg"
          className="mx-auto mb-6 w-auto h-auto max-w-[200px] sm:max-w-[247px]"
        />

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {developmentGoals.map((value, index) => (
            <div
              key={`core-value-${index}`}
              className="group relative bg-white rounded-lg p-6 md:p-8 space-y-2 md:space-y-4 overflow-hidden transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105 cursor-pointer h-64 md:h-80 "
              style={{
                backgroundImage: `url(${value.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Mobile: Luôn hiển thị gradient và description */}
              <div className="md:hidden absolute left-0 right-0 h-full bg-gradient-to-t from-primary-blue-1 via-primary-blue-1/70 to-transparent"></div>

              {/* Desktop: Hover mới hiển thị gradient và description */}
              <div className="hidden md:block mb-0 absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary-blue-1 via-primary-blue-1/70 to-transparent group-hover:absolute group-hover:inset-0 group-hover:h-full group-hover:bg-primary-blue/70 transition-all duration-500 ease-in-out"></div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                {/* Mobile: Luôn hiển thị description */}
                <div className="md:hidden flex-1">
                  <p className="text-sm sm:text-base font-bold text-white/95 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Desktop: Hover mới hiển thị description */}
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0 flex-1">
                  <p className="text-sm sm:text-base font-bold text-white/95 leading-relaxed text-center">
                    {value.description}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <value.icon className="size-6 md:size-8 text-white" />
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {value.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
