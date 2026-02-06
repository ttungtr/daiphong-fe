'use client';
import Link from 'next/link';

export const CTASection = () => (
  <div className="w-full bg-primary-blue-1">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-3 lg:py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-8 lg:gap-0">
        <div className="lg:col-span-1 text-white">
          <p className="text-center text-sm sm:text-lg md:text-lg font-semibold">
            HỢP TÁC VÀ PHÁT TRIỂN CÙNG Đại Phong CORP
          </p>
          <p className="text-center text-sm sm:text-lg md:text-lg font-semibold">
            Nâng Tầm Chất Lượng, Bền Vững Tương Lai
          </p>

          <p className="text-center mt-2 md:mt-2 lg:mt-2 text-lg sm:text-lg md:text-lg font-semibold">
            <strong>HOTLINE: 0888 885 964</strong>
          </p>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-3 md:gap-4 lg:gap-4 items-center justify-center text-white">
          <a
            href="https://drive.google.com/file/d/1ubVYqq0He4bBzW-HWB47p9L8nf9kMonk/view"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 rounded-md uppercase border-white w-full max-w-sm text-sm sm:text-base md:text-lg lg:text-lg py-2 md:py-3 lg:py-2 text-center duration-300 hover:bg-primary-blue-1 hover:border-primary-blue-1 cursor-pointer"
          >
            Giới thiệu năng lực
          </a>
          <Link
            href="/lien-he"
            className="border-2 rounded-md uppercase border-white w-full max-w-sm text-sm sm:text-base md:text-lg lg:text-lg py-2 md:py-3 lg:py-2 text-center duration-300 hover:bg-primary-blue-1 hover:border-primary-blue-1 cursor-pointer"
          >
            Góp ý
          </Link>
        </div>
      </div>
    </div>
  </div>
);
