import React from "react";
import { Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  className?: string;
}

export default function ImagePlaceholder({
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`
        w-full h-full 
        bg-gray-100 
        border border-gray-300 
        flex flex-col items-center justify-center 
        ${className}
      `}
    >
      <ImageIcon size={48} className="text-gray-400 mb-2" />
      <p className="text-sm text-gray-400 font-light">No image available</p>
    </div>
  );
}
