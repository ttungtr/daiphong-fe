const financialData = [
  {
    id: 1,
    item: "Vốn điều lệ",
    "2023": "16,000,000,000",
    "2024": "16,000,000,000",
    "2025": "16,000,000,000",
  },
  {
    id: 2,
    item: "Tổng tài sản",
    "2023": "15,617,157,799",
    "2024": "15,998,588,185",
    "2025": "16,959,330,016",
  },
  {
    id: 3,
    item: "Tài sản ngắn hạn",
    "2023": "13,139,043,425",
    "2024": "13,139,043,425",
    "2025": "13,698,023,452",
  },
  {
    id: 4,
    item: "Tổng nợ phải trả",
    "2023": "-",
    "2024": "344,188,085",
    "2025": "1,004,018,994",
  },
  {
    id: 5,
    item: "Tổng nợ ngắn hạn",
    "2023": "-",
    "2024": "344,188,085",
    "2025": "1,004,018,994",
  },
  {
    id: 6,
    item: "Doanh thu",
    "2023": "60,185,185",
    "2024": "1,960,575,221",
    "2025": "5,319,785,451",
  },
  {
    id: 7,
    item: "Lợi nhuận sau thuế",
    "2023": "25,131,134",
    "2024": "557,353,189",
    "2025": "306,697,164",
  },
];

export default function FinancialCapacitySection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Table View */}
        <div className="hidden md:block bg-white p-6 md:p-8 border border-gray-200 shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="border-b-2 border-primary-blue-1">
                  <th className="text-left py-4 px-4 text-primary-blue-1 font-semibold border-r border-gray-300">
                    STT
                  </th>
                  <th className="text-left py-4 px-4 text-primary-blue-1 font-semibold border-r border-gray-300">
                    Hạng mục
                  </th>
                  <th className="text-center py-4 px-4 text-primary-blue-1 font-semibold border-r border-gray-300">
                    2023
                  </th>
                  <th className="text-center py-4 px-4 text-primary-blue-1 font-semibold border-r border-gray-300">
                    2024
                  </th>
                  <th className="text-center py-4 px-4 text-primary-blue-1 font-semibold">
                    2025 (Số cuối kỳ 30/06)
                  </th>
                </tr>
              </thead>
              <tbody>
                {financialData.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="py-4 px-4 text-gray-900 font-medium border-r border-gray-300">
                      {row.id}
                    </td>
                    <td className="py-4 px-4 text-gray-900 font-medium border-r border-gray-300">
                      {row.item}
                    </td>
                    <td className="py-4 px-4 text-gray-900 text-center border-r border-gray-300">
                      {row["2023"]}
                    </td>
                    <td className="py-4 px-4 text-gray-900 text-center border-r border-gray-300">
                      {row["2024"]}
                    </td>
                    <td className="py-4 px-4 text-gray-900 text-center">
                      {row["2025"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Note về đơn vị tiền tệ */}
          <div className="mt-4 text-right">
            <p className="text-sm text-gray-500 italic">* Đơn vị: Đồng (VNĐ)</p>
          </div>
        </div>

        {/* Mobile View - Hiển thị theo từng năm */}
        <div className="md:hidden space-y-6">
          {/* Năm 2023 */}
          <div className="bg-white  border border-gray-200 shadow-md p-4">
            <h3 className="text-lg font-bold text-primary-blue-1 mb-4 text-center">
              Báo cáo tài chính 2023
            </h3>
            <div className="space-y-3">
              {financialData.map((row) => (
                <div
                  key={row.id}
                  className="flex justify-between items-center py-2 border-b border-gray-100"
                >
                  <span className="text-sm text-gray-700">
                    {row.id}. {row.item}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {row["2023"]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Năm 2024 */}
          <div className="bg-white  border border-gray-200 shadow-md p-4">
            <h3 className="text-lg font-bold text-primary-blue-1 mb-4 text-center">
              Báo cáo tài chính 2024
            </h3>
            <div className="space-y-3">
              {financialData.map((row) => (
                <div
                  key={row.id}
                  className="flex justify-between items-center py-2 border-b border-gray-100"
                >
                  <span className="text-sm text-gray-700">
                    {row.id}. {row.item}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {row["2024"]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Năm 2025 */}
          <div className="bg-white  border border-gray-200 shadow-md p-4">
            <h3 className="text-lg font-bold text-primary-blue-1 mb-4 text-center">
              Báo cáo tài chính 2025 (Số cuối kỳ 30/06)
            </h3>
            <div className="space-y-3">
              {financialData.map((row) => (
                <div
                  key={row.id}
                  className="flex justify-between items-center py-2 border-b border-gray-100"
                >
                  <span className="text-sm text-gray-700">
                    {row.id}. {row.item}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {row["2025"]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Note về đơn vị tiền tệ cho mobile */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500 italic">* Đơn vị: Đồng (VNĐ)</p>
          </div>
        </div>

        {/* Additional Financial Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white  p-6 border border-gray-200 shadow-lg text-center">
            <div className="text-3xl font-bold text-primary-blue-1 mb-2">
              10+ Năm
            </div>
            <div className="text-gray-700 text-sm">Kinh nghiệm hoạt động</div>
          </div>
          <div className="bg-white  p-6 border border-gray-200 shadow-lg text-center">
            <div className="text-3xl font-bold text-primary-blue-1 mb-2">
              16 Tỷ Đồng
            </div>
            <div className="text-gray-700 text-sm">Vốn điều lệ</div>
          </div>
          <div className="bg-white  p-6 border border-gray-200 shadow-lg text-center">
            <div className="text-3xl font-bold text-primary-blue-1 mb-2">
              100+
            </div>
            <div className="text-gray-700 text-sm">Công trình thành công</div>
          </div>
        </div>
      </div>
    </section>
  );
}
