import Link from "next/link";

export default function CategoryNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
          Không tìm thấy danh mục dự án
        </h1>
        <p className="text-base lg:text-lg text-gray-600 mb-8">
          Danh mục dự án bạn tìm kiếm không tồn tại hoặc đã được chuyển đổi.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="text-sm lg:text-base border border-primary-blue-1 text-primary-blue-1 px-6 py-3 rounded-lg hover:bg-primary-blue-1 hover:text-white transition-colors"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
