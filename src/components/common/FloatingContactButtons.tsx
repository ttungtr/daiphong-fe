'use client';

import React from 'react';

export default function FloatingContactButtons() {
  return (
    <div className="fixed right-4 bottom-[10%] transform z-50 flex flex-col gap-6">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/luis-truong"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        aria-label="Liên hệ Zalo"
      >
        {/* Radar effect */}
        <div className="absolute inset-0 w-14 h-14 bg-blue-500 rounded-full animate-radar opacity-30"></div>
        <div
          className="absolute inset-0 w-14 h-14 bg-blue-500 rounded-full animate-radar opacity-20"
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className="absolute inset-0 w-14 h-14 bg-blue-500 rounded-full animate-radar opacity-10"
          style={{ animationDelay: '1s' }}
        ></div>

        <div className="relative w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-blink animate-rotate">
          <svg
            className="w-7 h-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Zalo
        </div>
      </a>

      {/* Email Button */}
      <a
        href="mailto:contact@onggiodaiphong.com"
        className="group relative"
        aria-label="Gửi email"
      >
        {/* Radar effect */}
        <div className="absolute inset-0 w-14 h-14 bg-orange-500 rounded-full animate-radar opacity-30"></div>
        <div
          className="absolute inset-0 w-14 h-14 bg-orange-500 rounded-full animate-radar opacity-20"
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className="absolute inset-0 w-14 h-14 bg-orange-500 rounded-full animate-radar opacity-10"
          style={{ animationDelay: '1s' }}
        ></div>

        <div
          className="relative w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-blink animate-rotate"
          style={{ animationDelay: '0.5s' }}
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Email
        </div>
      </a>

      {/* Phone Button */}
      <a
        href="tel:+84123456789"
        className="group relative"
        aria-label="Gọi điện thoại"
      >
        {/* Radar effect */}
        <div className="absolute inset-0 w-14 h-14 bg-red-500 rounded-full animate-radar opacity-30"></div>
        <div
          className="absolute inset-0 w-14 h-14 bg-red-500 rounded-full animate-radar opacity-20"
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className="absolute inset-0 w-14 h-14 bg-red-500 rounded-full animate-radar opacity-10"
          style={{ animationDelay: '1s' }}
        ></div>

        <div
          className="relative w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-blink animate-rotate"
          style={{ animationDelay: '1s' }}
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Gọi ngay
        </div>
      </a>
    </div>
  );
}
