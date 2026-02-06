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
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="36"
            height="36"
            viewBox="0 0 48 48"
          >
            <path
              fill="#2962ff"
              d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"
            ></path>
            <path
              fill="#eee"
              d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"
            ></path>
            <path
              fill="#2962ff"
              d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"
            ></path>
            <path
              fill="#2962ff"
              d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"
            ></path>
            <path
              fill="#2962ff"
              d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"
            ></path>
            <path
              fill="#2962ff"
              d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"
            ></path>
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
            fill="#f7c01c"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#f7c01c"
            width="28"
            height="28"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                fillRule="evenodd"
              ></path>{' '}
            </g>
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
        <div className="absolute inset-0 w-14 h-14 bg-green-500 rounded-full animate-radar opacity-30"></div>
        <div
          className="absolute inset-0 w-14 h-14 bg-green-500 rounded-full animate-radar opacity-20"
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className="absolute inset-0 w-14 h-14 bg-green-500 rounded-full animate-radar opacity-10"
          style={{ animationDelay: '1s' }}
        ></div>

        <div
          className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-blink animate-rotate"
          style={{ animationDelay: '1s' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="36"
            height="36"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0f0"
              d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"
            ></path>
            <path
              fill="#fff"
              d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"
            ></path>
          </svg>
        </div>
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Gọi ngay
        </div>
      </a>
    </div>
  );
}
