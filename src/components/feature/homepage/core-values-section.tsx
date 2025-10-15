import { Globe, TrendingUp, Users } from 'lucide-react';
import { FunctionComponent } from 'react';

export const CoreValuesSection: FunctionComponent = () => {
  const developmentGoals = [
    {
      title: 'Phát triển bền vững',
      icon: TrendingUp,
      background: '/images/phat-trien-ben-vung.pngx',
      description:
        'Đại Phong cam kết không ngừng nâng cao chất lượng dịch vụ và giải pháp thi công cơ điện, hướng đến sự tối ưu trong hiệu quả – an toàn – bền vững. Mục tiêu trở thành một trong những nhà thầu cơ điện uy tín hàng đầu tại Việt Nam, đóng góp tích cực vào sự phát triển của ngành xây dựng hiện đại.',
    },
    {
      title: 'Mở rộng thị trường',
      icon: Globe,
      background: '/images/mo-rong-thi-truong.pngx',

      description:
        'Tăng cường triển khai các dự án cơ điện cả nước. Đại Phong Corp định hướng phát triển quy mô và năng lực thi công để đáp ứng các dự án công nghiệp, dịch vụ, nghỉ dưỡng và hạ tầng quy mô lớn.',
    },
    {
      title: 'Xây dựng đội ngũ chuyên gia',
      icon: Users,
      background: '/images/xay-dung-doi-ngu.pngx',

      description:
        'Đại Phong chú trọng đầu tư đào tạo đội ngũ kỹ sư cơ điện chất lượng cao, đồng thời xây dựng môi trường làm việc chuyên nghiệp, năng động. Chúng tôi tạo điều kiện để nhân sự phát huy tối đa năng lực, qua đó nâng cao sức cạnh tranh và hướng đến phát triển bền vững.',
    },
  ];

  return (
    <div className='w-full py-8 md:py-12 lg:py-14'>
      <div className='max-w-7xl flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8'>
        <h2
          id='organizational-structure-heading'
          className='text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center'
        >
          MỤC TIÊU PHÁT TRIỂN
        </h2>

        {/* <ImageWithFallback
          width={247}
          height={26}
          src="/images/titlebg.pngx"
          alt="titlebg"
          className="mx-auto mb-6 w-auto h-auto max-w-[200px] sm:max-w-[247px]"
        /> */}

        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8'>
          {developmentGoals.map((value, index) => (
            <div
              key={`core-value-${index}`}
              className='group relative bg-white p-6 md:p-8 space-y-2 md:space-y-4 overflow-hidden transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105 cursor-pointer h-64 md:h-80'
              style={{
                backgroundImage: `url(${value.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Mobile: Luôn hiển thị gradient và description */}
              <div className='md:hidden absolute left-0 right-0 h-full bg-gradient-to-t from-primary-blue-1 via-primary-blue-1/70 to-transparent'></div>

              {/* Desktop: Hover mới hiển thị gradient và description */}
              <div className='hidden md:block mb-0 absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary-blue-1 via-primary-blue-1/70 to-transparent group-hover:absolute group-hover:inset-0 group-hover:h-full group-hover:bg-primary-blue/70 transition-all duration-500 ease-in-out'></div>

              <div className='relative z-10 h-full flex flex-col justify-between'>
                {/* Mobile: Luôn hiển thị description */}
                <div className='md:hidden flex-1'>
                  <p className='text-sm sm:text-base font-bold text-white/95 leading-relaxed'>
                    {value.description}
                  </p>
                </div>

                {/* Desktop: Hover mới hiển thị description */}
                <div className='hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0 flex-1'>
                  <p className='text-sm sm:text-base font-bold text-white/95 leading-relaxed text-center'>
                    {value.description}
                  </p>
                </div>

                <div className='flex items-center space-x-3'>
                  <value.icon className='size-6 md:size-8 text-white' />
                  <h4 className='text-lg sm:text-xl font-bold text-white'>
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
