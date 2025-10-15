"use client";
import { FunctionComponent, useState, useEffect } from "react";
import { MobileNavigation } from "./mobile-navigation";

export const MobileNavigationWrapper: FunctionComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="xl:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 group border border-slate-200 bg-white/80 backdrop-blur shadow-sm"
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-[#00689d] transition-all duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#00689d] transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-0 scale-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#00689d] transition-all duration-300 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Navigation - positioned outside main container */}
      <div className="absolute top-full left-0 right-0">
        <MobileNavigation
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </>
  );
};
