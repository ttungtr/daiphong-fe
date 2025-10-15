'use client';

import { AnimatedNumber } from '@/components/common';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { motion } from 'framer-motion';

export const AnimatedStatsSection = () => (
  <section
    className='py-6 md:py-12 lg:py-14 bg-primary-blue-1'
    aria-label='Thống kê công ty'
  >
    <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
      <div className='grid grid-cols-4 gap-2 sm:gap-6 md:gap-8 lg:gap-12'>
        <motion.div
          className='w-full flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 md:gap-4'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className='flex-shrink-0'>
            <ImageWithFallback
              width={60}
              height={60}
              alt='Icon nhân viên'
              src='/images/group-user.pngx'
              className='w-8 h-auto sm:w-12 md:w-16'
            />
          </div>
          <div className='flex flex-col text-center sm:text-left'>
            <span className='text-primary-blue-1 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold'>
              <AnimatedNumber value={150} suffix='+' />
            </span>
            <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold'>
              Nhân viên
            </span>
          </div>
        </motion.div>

        <motion.div
          className='w-full flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 md:gap-4'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='flex-shrink-0'>
            <ImageWithFallback
              width={60}
              height={60}
              alt='Icon dự án'
              src='/images/construction.pngx'
              className='w-8 h-auto sm:w-12 md:w-16'
            />
          </div>
          <div className='flex flex-col text-center sm:text-left'>
            <span className='text-primary-blue-1 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold'>
              <AnimatedNumber value={200} suffix='+' />
            </span>
            <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold'>
              Công trình
            </span>
          </div>
        </motion.div>

        <motion.div
          className='w-full flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 md:gap-4'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className='flex-shrink-0'>
            <ImageWithFallback
              width={60}
              height={60}
              alt='Icon khách hàng'
              src='/images/partner.pngx'
              className='w-8 h-auto sm:w-12 md:w-16'
            />
          </div>
          <div className='flex flex-col text-center sm:text-left'>
            <span className='text-primary-blue-1 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold'>
              <AnimatedNumber value={100} suffix='+' />
            </span>
            <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold'>
              Khách hàng
            </span>
          </div>
        </motion.div>

        <motion.div
          className='w-full flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 md:gap-4'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className='flex-shrink-0'>
            <ImageWithFallback
              width={60}
              height={60}
              alt='Icon kinh nghiệm'
              src='/images/exprience.pngx'
              className='w-8 h-auto sm:w-12 md:w-16'
            />
          </div>
          <div className='flex flex-col text-center sm:text-left'>
            <span className='text-primary-blue-1 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold'>
              <AnimatedNumber value={10} suffix='+' />
            </span>
            <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold'>
              Kinh nghiệm
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
