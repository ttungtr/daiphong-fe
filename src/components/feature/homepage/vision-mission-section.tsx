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
        'Đại Phong định hướng trở thành đơn vị sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC uy tín hàng đầu tại Việt Nam, được các nhà thầu và chủ đầu tư tin tưởng lựa chọn trong mọi dự án cơ điện.',
      features: [
        'Trở thành nhà sản xuất ống gió và phụ kiện HVAC hàng đầu Việt Nam, được công nhận về chất lượng và uy tín.',
        'Là đối tác tin cậy của các nhà thầu lớn và chủ đầu tư trong các dự án cơ điện quy mô quốc gia.',
        'Xây dựng thương hiệu Đại Phong trở thành chuẩn mực chất lượng trong ngành sản xuất thiết bị HVAC.',
        'Mở rộng quy mô sản xuất, nâng cao công suất để đáp ứng nhu cầu thị trường trong nước và khu vực.',
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
        'Sản xuất và cung cấp ống gió, phụ kiện và thiết bị thông gió đạt chuẩn, đảm bảo chất lượng và độ chính xác cao.',
        'Đồng hành cùng khách hàng để đảm bảo tiến độ, kỹ thuật và tối ưu chi phí – thời gian.',
        'Đầu tư công nghệ, cải tiến máy móc, hướng tới tự động hóa và chuẩn hóa sản xuất.',
        'Xây dựng đội ngũ chuyên nghiệp và phát triển bền vững mối quan hệ với khách hàng, đối tác, nhà cung cấp.',
      ],
    },
    {
      number: '3',
      title: 'GIÁ TRỊ CỐT LÕI',
      icon: TrendingUp,
      background: '/images/about/gia-tri-cot-loi.jpg',
      description:
        '"Ống gió chất lượng – Khởi nguồn không khí sạch" - Chất lượng ống gió là nền tảng của không khí sạch. Đại Phong sản xuất từng sản phẩm với độ bền, độ kín và độ chính xác cao, đảm bảo hệ thống thông gió vận hành an toàn và hiệu quả cho mọi công trình.',
      features: [
        'CHẤT LƯỢNG LÀ NỀN TẢNG - Cam kết sản xuất và cung cấp sản phẩm đạt chuẩn cao nhất, đảm bảo độ bền, độ kín và độ chính xác trong từng chi tiết.',
        'UY TÍN LÀ THƯƠNG HIỆU - Xây dựng lòng tin qua hành động, trung thực trong mọi cam kết và luôn đặt lợi ích khách hàng lên hàng đầu.',
        'SÁNG TẠO VÀ CẢI TIẾN - Không ngừng nghiên cứu, đổi mới công nghệ và quy trình sản xuất để tối ưu hóa chất lượng và hiệu quả.',
        'BỀN VỮNG VÀ TRÁCH NHIỆM - Hướng đến phát triển lâu dài, hài hòa lợi ích của công ty, khách hàng, đối tác và cộng đồng.',
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
        'CHẤT LƯỢNG LÀ NỀN TẢNG - Cam kết sản xuất và cung cấp sản phẩm đạt chuẩn cao nhất, đảm bảo độ bền, độ kín và độ chính xác trong từng chi tiết.',
        'UY TÍN LÀ THƯƠNG HIỆU - Xây dựng lòng tin qua hành động, trung thực trong mọi cam kết và luôn đặt lợi ích khách hàng lên hàng đầu.',
        'SÁNG TẠO VÀ CẢI TIẾN - Không ngừng nghiên cứu, đổi mới công nghệ và quy trình sản xuất để tối ưu hóa chất lượng và hiệu quả.',
        'BỀN VỮNG VÀ TRÁCH NHIỆM - Hướng đến phát triển lâu dài, hài hòa lợi ích của công ty, khách hàng, đối tác và cộng đồng.',
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
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                !(index % 2) ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-4 md:space-y-6 ${
                  !(index % 2) ? 'lg:col-start-2' : ''
                }`}
              >
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

                {/* Description */}
                <p className="text-sm md:text-base leading-relaxed text-white">
                  {goal.description}
                </p>

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
