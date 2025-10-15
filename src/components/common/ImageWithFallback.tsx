"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className = "",
  fill = false,
  sizes,
  priority = false,
  quality = 100,
  placeholder = "empty",
  blurDataURL,
  onClick,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Nếu không có src hoặc đã có lỗi, hiển thị placeholder
  if (!src || hasError) {
    return <ImagePlaceholder className={className} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      sizes={sizes}
      priority={priority}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onError={() => {
        setHasError(true);
        setIsLoading(false);
      }}
      onLoad={() => setIsLoading(false)}
      className={`
          transition-opacity duration-300 
          ${isLoading ? "opacity-0" : "opacity-100"}
          ${onClick ? "cursor-pointer" : ""}
          ${className}
        `}
    />
  );
}
