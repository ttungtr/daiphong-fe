"use client";

import { Download, FileText } from "lucide-react";
import { FunctionComponent } from "react";

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, string | number>
    ) => void;
  }
}

interface FinancialReport {
  title: string;
  year: string;
  fileName: string;
  fileSize: string;
  description: string;
  href: string;
}

const financialReports: FinancialReport[] = [
  {
    title: "Báo cáo tài chính nửa đầu năm 2025",
    year: "2025",
    fileName: "Phi-Long-BCTC-2025-30-6.pdf",
    fileSize: "402KB",
    href: "https://drive.google.com/file/d/1KRWuLgxzFsXg-HcClgwvlY36rgMXlgUR/view",

    description:
      "Báo cáo tài chính kiểm toán nửa đầu năm 2025 của Công Ty Cổ Phần Công Nghiệp Đại Phong",
  },
  {
    title: "Báo cáo tài chính năm 2024",
    year: "2024",
    fileName: "Phi-Long-BCTC-2024.pdf",
    fileSize: "402KB",
    href: "https://drive.google.com/file/d/1dh49InDOnDM_Uufgt9Hx7PZ1pW520vm7/view",
    description:
      "Báo cáo tài chính kiểm toán năm 2024 của Công Ty Cổ Phần Công Nghiệp Đại Phong",
  },
  {
    title: "Báo cáo tài chính năm 2023",
    year: "2023",
    fileName: "Phi-Long-BCTC-2023.pdf",
    fileSize: "405KB",
    href: "https://drive.google.com/file/d/1t9-uQkr17cW5Pg2YfezyTrfO7kAjlDOJ/view",

    description:
      "Báo cáo tài chính kiểm toán năm 2023 của Công Ty Cổ Phần Công Nghiệp Đại Phong",
  },
];

const FinancialReportsSection: FunctionComponent = () => {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Tải xuống báo cáo tài chính
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            Các báo cáo tài chính đã được kiểm toán bởi công ty kiểm toán độc
            lập, thể hiện tình hình tài chính minh bạch và năng lực tài chính
            vững mạnh của Đại Phong Corp.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {financialReports.map((report) => (
            <div
              key={report.fileName}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {report.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {report.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                        Năm {report.year}
                      </span>
                      {/* <span>{report.fileSize}</span> */}
                    </div>

                    <div className="flex gap-2">
                      {/* <button
                        onClick={() =>
                          handleDownload(report.fileName, report.title)
                        }
                        className="flex items-center gap-2 bg-primary-blue-1 hover:bg-primary-blue-1 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        aria-label={`Tải xuống ${report.title}`}
                      >
                        <Download className="w-3 h-3" />
                        Tải xuống
                      </button> */}

                      <a
                        href={report.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={report.fileName}
                        // className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        className="flex items-center gap-2 bg-primary-blue-1 hover:bg-primary-blue-1 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        aria-label={`Liên kết trực tiếp ${report.title}`}
                        title="Liên kết trực tiếp (backup)"
                      >
                        Tải xuống
                        <Download className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            * Các báo cáo tài chính được kiểm toán bởi công ty kiểm toán độc lập
            có uy tín
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinancialReportsSection;
