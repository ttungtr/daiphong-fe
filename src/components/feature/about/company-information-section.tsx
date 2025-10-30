import ImageWithFallback from '@/components/common/ImageWithFallback';
import { FunctionComponent } from 'react';

export const CompanyInformationSection: FunctionComponent = () => {
  const companyInformation = [
    {
      label: 'Tên công ty',
      value: 'Công Ty Cổ Phần Công Nghiệp Đại Phong',
    },
    {
      label: 'Địa chỉ',
      value: 'Lô 3.2, Đường số 2, KCN Tân Đông Hiệp A, Phường Dĩ An, TPHCM',
    },
    {
      label: 'Liên hệ',
      value: '(+84) xxx xxx xxx',
    },
    {
      label: 'Email',
      value: 'daiphong@daiphong.com',
    },
    {
      label: 'Website',
      value: 'daiphong.vn',
    },
    {
      label: 'Giám đốc',
      value: 'Ông: Lê Thanh Tùng',
    },
    {
      label: 'Mã số thuế',
      value: 'xxxxxxxxxxxx',
    },
    {
      label: 'Ngày thành lập',
      value: '2003',
    },
    {
      label: 'Ngành nghề chính',
      value: 'Sản xuất và gia công các sản phẩm cơ điện (MEP)',
    },
  ];

  return (
    <section
      className="py-5 bg-white"
      aria-labelledby="organizational-structure-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full col-span-1">
            <ImageWithFallback
              src="/images/about/thong-tin-cong-ty.jpg"
              alt="Cơ cấu tổ chức"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full col-span-1 content-center">
            <h2 className="uppercase text-lg md:text-xl lg:text-2xl font-bold text-primary-blue-1 mb-6">
              Thông tin công ty
            </h2>

            <table className="w-full overflow-hidden ">
              <tbody className="w-full">
                {companyInformation.map((item, index) => (
                  <tr
                    className="border-t border-gray-300 last:border-b"
                    key={`company-information-row-${index}`}
                  >
                    <td className="w-1/3 align-top">
                      <p className="py-3 font-bold h-fit text-sm md:text-base lg:text-sm xl:text-base">
                        {item.label}
                      </p>
                    </td>
                    <td>
                      <p className="text-wrap whitespace-pre-line py-2 text-sm md:text-base lg:text-sm xl:text-base">
                        {item.value}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
