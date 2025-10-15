import { FunctionComponent } from 'react';

import '@/assets/css/flip.css';
import ImageWithFallback from '@/components/common/ImageWithFallback';

const partnerImages = [
  'Van-Khanh-Group.jpgx',
  'AEON.jpgx',
  'TPBank.jpgx',
  'BOE.jpgx',
  'Cadivi.jpgx',
  'Central.jpgx',
  'CPC.jpgx',
  'Daikin.jpgx',
  'Daphaco.jpgx',
  'Emart.jpgx',
  'Hisense.jpgx',
  'Hung-Thanh-Dat.jpgx',
  'LPBank.jpgx',
  'Newteccon.jpgx',
  'PCCC-2-9.jpgx',
  'PXP-electric.jpgx',
  'Samphu.jpgx',
  'searefico.jpgx',
  'Tan-Anh.jpgx',
  'Techcombank.jpgx',
  'TLD.jpgx',

  'Unicons.jpgx',

  'vietsafe.jpgx',
  'Zenco.jpgx',
];

export const PartnerSection: FunctionComponent = () => (
  <div className='w-full bg-primary-blue-1 text-white'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 py-8 md:py-12 lg:py-14 gap-6 md:gap-8 lg:gap-4'>
        <div className='lg:col-span-1 flex flex-col items-center justify-center'>
          <div className='space-y-2 sm:space-y-4 w-full'>
            <p className='text-center text-sm sm:text-base font-bold'>
              MẠNG LƯỚI ĐỐI TÁC CHIẾN LƯỢC CỦA ĐẠI PHONG
            </p>

            <p className='text-justify text-sm sm:text-base mb-1'>
              <strong>Đại Phong Corp</strong> tự hào là thành viên của một mạng
              lưới đối tác chiến lược rộng lớn, bao gồm các tập đoàn, doanh
              nghiệp hàng đầu trong nhiều lĩnh vực. Sự hợp tác bền vững với hơn
              50 đối tác uy tín đã giúp chúng tôi mở rộng phạm vi hoạt động và
              nâng cao năng lực cung cấp dịch vụ.
            </p>

            <p className='text-justify text-sm sm:text-base mb-1'>
              Chúng tôi đặc biệt chú trọng đến việc xây dựng mối quan hệ đối tác
              lâu dài, dựa trên những nguyên tắc cốt lõi:
            </p>
            <ul className='list-none space-y-1 ml-4 text-sm sm:text-base mb-1'>
              <li className='flex items-start'>
                <span className='text-blue-300 mr-2'>✓</span>
                Tin cậy và minh bạch trong giao dịch
              </li>
              <li className='flex items-start'>
                <span className='text-blue-300 mr-2'>✓</span>
                Hỗ trợ kỹ thuật chuyên sâu
              </li>
              <li className='flex items-start'>
                <span className='text-blue-300 mr-2'>✓</span>
                Giải pháp tùy chỉnh theo nhu cầu
              </li>
            </ul>

            <p className='text-justify text-sm sm:text-base mb-1'>
              Thông qua mạng lưới đối tác đa dạng, từ các ngân hàng, tập đoàn
              bất động sản, đến các công ty công nghệ và sản xuất, chúng tôi có
              thể cung cấp giải pháp tích hợp toàn diện cho mọi dự án từ quy mô
              nhỏ đến lớn.
            </p>

            <p className='text-justify text-sm sm:text-base'>
              <strong>Đại Phong</strong> cam kết duy trì và phát triển mối quan
              hệ hợp tác với tất cả đối tác hiện tại, đồng thời luôn sẵn sàng
              chào đón những đối tác mới để cùng nhau tạo ra giá trị bền vững và
              đóng góp tích cực cho sự phát triển của ngành cơ điện Việt Nam.
            </p>
          </div>
        </div>

        <div className='lg:col-span-1 h-full content-center'>
          <div className='partner-section  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 h-fit'>
            {partnerImages.map((image, index) => {
              if (index % 2 === 0) {
                const nextImage = partnerImages[index + 1];
                return (
                  <div
                    key={`partner-${index}`}
                    className='flip-card flip-card-auto w-full h-16 sm:h-16 md:h-16 '
                  >
                    <div className='flip-card-inner'>
                      <div className='flip-card-front'>
                        <ImageWithFallback
                          src={`/images/partner/${image}`}
                          alt={`Partner ${image.replace('.pngx', '')}`}
                          width={100}
                          height={100}
                          className='object-contain w-full h-full p-2'
                        />
                      </div>
                      <div className='flip-card-back'>
                        {nextImage && (
                          <ImageWithFallback
                            src={`/images/partner/${nextImage}`}
                            alt={`Partner ${nextImage.replace('.pngx', '')}`}
                            width={100}
                            height={100}
                            className='object-contain w-full h-full p-2'
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
);
