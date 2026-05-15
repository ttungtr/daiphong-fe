'use client';

import { useEffect, useRef, useState } from 'react';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SITE_ORIGIN = 'https://www.onggiodaiphong.com';

function toAbsolutePdfUrl(src: string): string {
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  const origin =
    typeof window !== 'undefined' ? window.location.origin : SITE_ORIGIN;
  return `${origin}${src.startsWith('/') ? src : `/${src}`}`;
}

function googlePdfViewerUrl(absolutePdfUrl: string): string {
  return `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(absolutePdfUrl)}`;
}

interface ProjectPdfPreviewProps {
  src: string;
  title: string;
}

export default function ProjectPdfPreview({
  src,
  title,
}: ProjectPdfPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  // Native PDF-in-iframe often fails for large files on Vercel; Google viewer is more reliable.
  const [useGoogleViewer, setUseGoogleViewer] = useState(
    process.env.NODE_ENV === 'production',
  );

  const absoluteUrl = toAbsolutePdfUrl(src);
  const viewerSrc = useGoogleViewer
    ? googlePdfViewerUrl(absoluteUrl)
    : absoluteUrl;

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full min-h-[min(80vh,720px)] overflow-hidden shadow-sm bg-gray-100 border border-gray-200"
    >
      {isVisible ? (
        <iframe
          key={viewerSrc}
          src={viewerSrc}
          title={title}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
          Đang tải tài liệu…
        </div>
      )}

      <div className="absolute bottom-3 right-3 z-10 flex gap-2">
        {!useGoogleViewer && (
          <button
            type="button"
            onClick={() => setUseGoogleViewer(true)}
            className="rounded bg-white/95 px-3 py-1.5 text-xs font-medium text-gray-700 shadow hover:bg-white"
          >
            Chế độ xem dự phòng
          </button>
        )}
        <Link
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded bg-primary-blue-1 px-3 py-1.5 text-xs font-medium text-white shadow hover:opacity-90"
        >
          <FileText className="h-3.5 w-3.5" />
          Mở PDF
        </Link>
      </div>
    </motion.div>
  );
}
