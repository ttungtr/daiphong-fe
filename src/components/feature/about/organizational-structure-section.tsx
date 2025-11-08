import ImageWithFallback from '@/components/common/ImageWithFallback';
import LineTitle from '@/components/common/line-title';

export const OrganizationalStructureSection = () => {
  return (
    <section
      className="py-4 md:py-4 lg:py-8 bg-white"
      // aria-labelledby="organizational-structure-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 flex flex-col items-center justify-center">
          <header className="w-full flex flex-col items-center justify-center">
            <h2
              // id="organizational-structure-heading"
              className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 text-center"
            >
              CƠ CẤU TỔ CHỨC
            </h2>
            <LineTitle alt="Đường viền trang trí tiêu đề cơ cấu tổ chức" />
          </header>

          <ImageWithFallback
            src="/images/about/co-cau-to-chuc.png"
            alt="Cơ cấu tổ chức công ty"
            width={1200}
            height={800}
            className="w-full h-auto mt-10"
          />
        </div>
      </div>
    </section>
  );
};
