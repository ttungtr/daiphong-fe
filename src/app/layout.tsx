import '@/app/globals.css';
import { Footer, Header } from '@/components/layout';
import { GoogleAnalytics, OnlineTrackingProvider } from '@/components/common';
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
      'Đại Phong Corp - Công Ty Cổ Phần Công Nghiệp | Thi công hệ thống MEP chuyên nghiệp',
    template: '%s | Đại Phong Corp',
  },
  description:
    'Đại Phong Corp - Đơn vị hàng đầu trong thi công hệ thống MEP (điện, nước, điều hòa, phòng cháy chữa cháy). Tư vấn, thiết kế và thi công chuyên nghiệp với đội ngũ kỹ sư giàu kinh nghiệm.',
  keywords: [
    'Đại Phong Corp',
    'thi công hệ thống MEP',
    'hệ thống điện',
    'hệ thống nước',
    'điều hòa thông gió',
    'phòng cháy chữa cháy',
    'cơ điện',
    'kỹ thuật cơ điện',
    'thiết kế MEP',
    'tư vấn cơ điện',
    'công ty cơ điện',
    'dự án MEP',
    'hệ thống điện nhẹ',
    'cấp thoát nước',
    'HVAC',
  ],
  authors: [{ name: 'Đại Phong Corp' }],
  creator: 'Đại Phong Corp',
  publisher: 'Đại Phong Corp',
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
    url: 'https://www.philongcorp.vn',
    title: 'Đại Phong Corp - Công Ty Cổ Phần Công Nghiệp',
    description:
      'Đơn vị hàng đầu trong thi công hệ thống MEP (điện, nước, điều hòa, phòng cháy chữa cháy)',
    siteName: 'Đại Phong Corp',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@philongcorp',
    creator: '@philongcorp',
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
    <html lang='vi'>
      <body
        className={`${nunito.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <GoogleAnalytics />
        <OnlineTrackingProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingContactButtons />
        </OnlineTrackingProvider>
      </body>
    </html>
  );
}
