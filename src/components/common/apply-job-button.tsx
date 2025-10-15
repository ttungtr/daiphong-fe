"use client";

import { JobApplicationPopup } from "./index";
import { usePopup } from "@/hooks/use-popup";

interface ApplyJobButtonProps {
  jobTitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function ApplyJobButton({
  jobTitle = "Vị trí ứng tuyển",
  className = "",
  children,
}: ApplyJobButtonProps) {
  const { isOpen, isClosing, open, close } = usePopup();

  return (
    <>
      <button
        onClick={open}
        className={`bg-primary-blue-1 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-blue-1/80 transition-all duration-300 transform hover:scale-110 cursor-pointer ${className}`}
      >
        {children || "Ứng tuyển ngay"}
      </button>

      <JobApplicationPopup
        isOpen={isOpen}
        onClose={close}
        jobTitle={jobTitle}
        isClosing={isClosing}
      />
    </>
  );
}
