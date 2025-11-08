'use client';
import { FunctionComponent, useState } from 'react';

export const ContactConsultationSection: FunctionComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    content: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      content: '',
    });
  };

  return (
    <section
      className="py-4 md:py-4 lg:py-8 xl:py-8 bg-primary-blue-1"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header>
            <h3
              id="contact-heading"
              className="text-xl sm:text-2xl font-bold uppercase text-center mb-8 text-white"
            >
              LIÊN HỆ TƯ VẤN
            </h3>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Left Section - Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Liên hệ với chúng tôi để được tư vấn cụ thể và chi tiết nhất.
                Nhập email tại đây
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-1">
                    <svg
                      className="w-5 h-5 text-primary-yellow-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-white">
                    Lô 3.2, Đường số 2, Khu công nghiệp Tân Đông Hiệp A, Phường
                    Dĩ An, TPHCM
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-1">
                    <svg
                      className="w-5 h-5 text-primary-yellow-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-white">
                    daiphong@daiphong.com
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-1">
                    <svg
                      className="w-5 h-5 text-primary-yellow-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-white">
                    (+84) xxx xxx xxx
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Họ tên của bạn"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm sm:text-base bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue-1 focus:border-transparent"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Địa chỉ email của bạn"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm sm:text-base bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue-1 focus:border-transparent"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Số điện thoại của bạn"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm sm:text-base bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue-1 focus:border-transparent"
                    required
                  />
                </div>

                {/* Content Field */}
                <div>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Nội dung"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm sm:text-base bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue-1 focus:border-transparent resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-primary-yellow-1 text-sm font-semibold  transition-colors duration-300 hover:opacity-80 rounded-sm"
                  >
                    Gửi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
