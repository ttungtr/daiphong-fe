'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NivoLikeSliderProps {
  images: string[];
  autoPlayInterval?: number;
  columns?: number;
  rows?: number;
  className?: string;
  width?: number;
  height?: number;
}

export default function NivoLikeSlider({
  images,
  autoPlayInterval = 3000,
  columns = 8,
  rows = 4,
  className = '',
  width,
  height,
}: NivoLikeSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1366, height: 550 });

  // Update dimensions on mount and window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (width && height) {
        setDimensions({ width, height });
        return;
      }

      if (typeof window !== 'undefined') {
        // Maintain 1366:550 aspect ratio (≈2.88:1)
        const aspectRatio = 1366 / 550;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Use screen width and calculate height to maintain aspect ratio
        const calculatedHeight = screenWidth / aspectRatio;

        // If calculated height exceeds screen height, use screen height instead
        if (calculatedHeight > screenHeight) {
          setDimensions({
            width: screenHeight * aspectRatio,
            height: screenHeight,
          });
        } else {
          setDimensions({
            width: screenWidth,
            height: calculatedHeight,
          });
        }
      }
    };

    updateDimensions();

    // Listen for window resize
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [width, height]);

  // Auto play logic
  useEffect(() => {
    if (images.length <= 1 || isHovered || isTransitioning) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval, isHovered, isTransitioning]);

  const handleImageChange = useCallback(() => {
    if (images.length <= 1) return;

    setIsTransitioning(true);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800); // Match with animation duration
  }, [images.length]);

  // Handle index change
  useEffect(() => {
    handleImageChange();
  }, [currentIndex, handleImageChange]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02, // 20ms delay between each box
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.01,
        staggerDirection: -1, // Reverse stagger for exit
      },
    },
  };

  const boxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  } as const;

  const { width: actualWidth, height: actualHeight } = dimensions;
  const boxWidth = actualWidth / columns;
  const boxHeight = actualHeight / rows;

  // Create grid positions for boxes
  const createBoxPositions = () => {
    const positions = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        positions.push({
          x: col * boxWidth,
          y: row * boxHeight,
          width: boxWidth,
          height: boxHeight,
        });
      }
    }
    return positions;
  };

  const boxPositions = createBoxPositions();

  // Navigation handlers
  // const goToNext = useCallback(() => {
  //   if (images.length <= 1 || isTransitioning) return;
  //   setCurrentIndex((prev) => (prev + 1) % images.length);
  // }, [images.length, isTransitioning]);

  // const goToPrevious = useCallback(() => {
  //   if (images.length <= 1 || isTransitioning) return;
  //   setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  // }, [images.length, isTransitioning]);

  if (images.length === 0) {
    return (
      <div
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={{
          width: `${actualWidth}px`,
          height: `${actualHeight}px`,
        }}
      >
        <p className='text-gray-500'>No images provided</p>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: `${actualWidth}px`,
        height: `${actualHeight}px`,
      }}
    >
      {/* Image Container */}
      <div
        className='relative w-full h-full'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            className='absolute inset-0'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            {/* Animated boxes - each showing a piece of the image */}
            {boxPositions.map((position, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                className='absolute bg-no-repeat'
                style={{
                  left: position.x,
                  top: position.y,
                  width: position.width,
                  height: position.height,
                  backgroundImage: `url(${images[currentIndex]})`,
                  backgroundPosition: `-${position.x}px -${position.y}px`,
                  backgroundSize: `${actualWidth}px ${actualHeight}px`,
                }}
                variants={boxVariants}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {/* {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white  flex items-center justify-center transition-colors duration-200 z-10"
              aria-label="Previous image"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white  flex items-center justify-center transition-colors duration-200 z-10"
              aria-label="Next image"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )} */}
      </div>
    </div>
  );
}
