import { FunctionComponent } from 'react';
import ImageWithFallback from '@/components/common/ImageWithFallback';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  imageAlt: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'tm-001',
    name: 'Lê Thanh Tùng',
    position: 'Tổng Giám đốc',
    image: '/images/giam-doc.pngx',
    imageAlt:
      'Lê Thanh Tùng - Tổng Giám đốc Công Ty Cổ Phần Công Nghiệp Đại Phong',
  },
  {
    id: 'tm-002',
    name: 'Nguyễn Văn A',
    position: 'Giám đốc Dự án',
    image: '/images/giam-doc.pngx',
    imageAlt: 'Nguyễn Văn A - Giám đốc Dự án',
  },
  {
    id: 'tm-003',
    name: 'Trần Thị B',
    position: 'Giám đốc Sản xuất',
    image: '/images/giam-doc.pngx',
    imageAlt: 'Trần Thị B - Giám đốc Sản xuất',
  },
];

export const TeamSection: FunctionComponent = () => {
  return (
    <section
      className="w-full py-4 md:py-4 lg:py-8 bg-primary-blue-1"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          id="team-heading"
          className="text-xl sm:text-2xl font-bold uppercase text-center mb-2"
        >
          ĐỘI NGŨ CỦA CHÚNG TÔI
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-24 w-full">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.imageAlt}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Name and Position */}
              <div className="space-y-2">
                <h3 className="text-base  font-bold text-white uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-sm  font-semibold text-white uppercase tracking-wider">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
