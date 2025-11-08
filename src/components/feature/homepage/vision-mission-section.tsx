import { FunctionComponent } from 'react';
import { TrendingUp, Globe } from 'lucide-react';
import ImageWithFallback from '@/components/common/ImageWithFallback';

export const VisionMissionSection: FunctionComponent = () => {
  const visionMissionData = [
    {
      number: '1',
      title: 'TẦM NHÌN',
      icon: TrendingUp,
      background: '/images/about/tam-nhin.jpg',
      description:
        'Đại Phong định hướng trở thành đơn vị sản xuất và gia công ống gió, miệng gió và phụ kiện HVAC chất lượng – uy tín hàng đầu Việt Nam, mang đến những giải pháp thông gió an toàn, hiệu quả và bền vững cho mọi công trình cơ điện.',
      features: [
        'Đại Phong định hướng trở thành đơn vị sản xuất và gia công ống gió, miệng gió và phụ kiện HVAC chất lượng – uy tín hàng đầu Việt Nam, mang đến những giải pháp thông gió an toàn, hiệu quả và bền vững cho mọi công trình cơ điện.',
        // 'Trở thành nhà sản xuất ống gió và phụ kiện HVAC hàng đầu Việt Nam, được công nhận về chất lượng và uy tín.',
        // 'Là đối tác tin cậy của các nhà thầu lớn và chủ đầu tư trong các dự án cơ điện quy mô quốc gia.',
        // 'Xây dựng thương hiệu Đại Phong trở thành chuẩn mực chất lượng trong ngành sản xuất thiết bị HVAC.',
        // 'Mở rộng quy mô sản xuất, nâng cao công suất để đáp ứng nhu cầu thị trường trong nước và khu vực.',
      ],
    },
    {
      number: '2',
      title: 'SỨ MỆNH',
      icon: Globe,
      background: '/images/about/su-menh.jpg',
      description:
        'Ống gió chất lượng – Khởi nguồn không khí sạch" - Chất lượng ống gió là nền tảng của không khí sạch. Đại Phong sản xuất từng sản phẩm với độ bền, độ kín và độ chính xác cao, đảm bảo hệ thống thông gió vận hành an toàn và hiệu quả cho mọi công trình.',
      features: [
        'Đại Phong mang trong mình sứ mệnh kiến tạo không gian sống và làm việc trong lành bằng việc cung cấp giải pháp thông gió chất lượng cao, thông qua các sản phẩm ống gió, miệng gió và phụ kiện HVAC đạt chuẩn kỹ thuật – thẩm mỹ – độ bền vượt trội.',
        'Chúng tôi không ngừng đổi mới công nghệ, nâng cao năng lực sản xuất và hoàn thiện dịch vụ, nhằm mang đến cho nhà thầu và chủ đầu tư những sản phẩm chính xác, an toàn, hiệu quả và đúng tiến độ trong mọi dự án cơ điện.',
      ],
    },
    {
      number: '3',
      title: 'GIÁ TRỊ CỐT LÕI',
      icon: TrendingUp,
      background: '/images/about/gia-tri-cot-loi.jpg',
      description:
        '"Ống gió chất lượng – Khởi nguồn không khí sạch" - Tại Đại Phong, chúng tôi tin rằng chất lượng ống gió chính là nền tảng của không khí sạch và môi trường sống bền vững.',
      features: [
        '"Ống gió chất lượng – Khởi nguồn không khí sạch"',
        'Tại Đại Phong, chúng tôi tin rằng chất lượng ống gió chính là nền tảng của không khí sạch và môi trường sống bền vững.',
        'Mỗi sản phẩm được chế tạo với độ bền cao, độ kín tuyệt đối và độ chính xác vượt trội, đảm bảo hệ thống thông gió vận hành an toàn, ổn định và hiệu quả năng lượng trong mọi công trình.',
        'Không chỉ tạo ra sản phẩm, Đại Phong còn kiến tạo giải pháp thông gió toàn diện, góp phần nâng tầm chất lượng công trình – giá trị thương hiệu – và trải nghiệm sống của con người Việt Nam.',
      ],
    },
    {
      number: '4',
      title: 'TRIẾT LÝ KINH DOANH',
      icon: TrendingUp,
      background: '/images/about/triet-li-kinh-doanh.jpg',
      description:
        '"Ống gió chất lượng – Khởi nguồn không khí sạch" - Chất lượng ống gió là nền tảng của không khí sạch. Đại Phong sản xuất từng sản phẩm với độ bền, độ kín và độ chính xác cao, đảm bảo hệ thống thông gió vận hành an toàn và hiệu quả cho mọi công trình.',
      features: [
        'Chất lượng là nền tảng – Mỗi sản phẩm được tạo ra đều phản ánh cam kết của Đại Phong về độ bền, độ kín và độ chính xác cao nhất.',
        'Tiến độ là cam kết – Đồng hành cùng tiến độ dự án, đảm bảo uy tín với khách hàng và đối tác.',
        'Uy tín là kim chỉ nam – Giữ vững niềm tin và trách nhiệm trong từng hợp tác.',
        'Đổi mới không ngừng – Ứng dụng công nghệ hiện đại, tối ưu quy trình để nâng cao hiệu quả sản xuất.',
        'Phát triển bền vững – Hướng tới sự hài hòa giữa lợi ích doanh nghiệp, khách hàng, nhân viên và xã hội.',
      ],
    },
  ];

  return (
    <section className="w-full py-4 md:py-4 lg:py-8 bg-primary-blue-1">
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h3
          id="team-heading"
          className="text-xl sm:text-2xl font-bold uppercase text-center mb-2 text-white"
        >
          TẦM NHÌN - SỨ MỆNH
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
                    {goal.title}
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
                  alt={`${goal.title} - Đại Phong`}
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
