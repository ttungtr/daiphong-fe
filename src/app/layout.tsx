import '@/app/globals.css';
import { Footer, Header } from '@/components/layout';
import { GoogleAnalytics, OnlineTrackingProvider } from '@/components/common';
import I18nProvider from '@/components/common/I18nProvider';
import FloatingContactButtons from '@/components/common/FloatingContactButtons';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: {
    default:
      'Đại Phong - Sản Xuất Ống Gió, Miệng Gió, Phụ Kiện HVAC Chất Lượng Hàng Đầu Việt Nam',
    template: '%s | Đại Phong',
  },
  description:
    'Đại Phong chuyên sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC chất lượng cao. "Ống gió chất lượng – Khởi nguồn không khí sạch". Công nghệ hiện đại, độ chính xác cao, đảm bảo tiến độ cho mọi công trình. Hotline: 0888885964',
  keywords: [
    'ống gió',
    'miệng gió',
    'phụ kiện HVAC',
    'ống gió tròn',
    'ống gió vuông',
    'ống gió chất lượng',
    'sản xuất ống gió',
    'gia công ống gió',
    'hệ thống thông gió',
    'thiết bị thông gió',
    'van gió',
    'damper',
    'diffuser',
    'grille',
    'ống gió spiral',
    'ống gió mềm',
    'ống gió cách nhiệt',
    'Đại Phong',
    'không khí sạch',
    'HVAC Việt Nam',
    'nhà máy ống gió',
  ],
  authors: [{ name: 'Công ty Cổ phần Công nghiệp Đại Phong' }],
  creator: 'Đại Phong',
  publisher: 'Đại Phong',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://www.onggiodaiphong.com',
    title: 'Đại Phong - Sản Xuất Ống Gió, Miệng Gió, Phụ Kiện HVAC Chất Lượng',
    description:
      'Đơn vị sản xuất và gia công ống gió, miệng gió, phụ kiện HVAC uy tín hàng đầu Việt Nam. Công nghệ hiện đại, chất lượng đảm bảo, độ chính xác cao.',
    siteName: 'Đại Phong',
    images: [
      {
        url: 'https://www.onggiodaiphong.com/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Đại Phong - Sản xuất ống gió chất lượng',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@onggiodaiphong',
    creator: '@onggiodaiphong',
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${nunito.variable} font-sans antialiased bg-white`}
        suppressHydrationWarning={true}
      >
        <GoogleAnalytics />
        <OnlineTrackingProvider>
          <I18nProvider>
            <Header />
            <main className="bg-white min-h-screen">{children}</main>
            <Footer />
            <FloatingContactButtons />
          </I18nProvider>
        </OnlineTrackingProvider>
      </body>
    </html>
  );
}
