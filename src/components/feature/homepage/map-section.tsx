// import { MapPin, Phone } from "lucide-react";
import React from 'react';

export const MapSection: React.FunctionComponent = () => (
  <div className='w-full py-4 md:py-4 lg:py-8 bg-white'>
    <div className='max-w-7xl flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8'>
      <h3 className='text-xl sm:text-2xl font-bold uppercase text-center mb-2'>
        Văn phòng đại diện
      </h3>

      {/* <ImageWithFallback
        width={247}
        height={26}
        src='/images/titlebg.pngx'
        alt='titlebg'
        className='mx-auto mb-4 w-auto h-auto max-w-[200px] sm:max-w-[247px]'
      /> */}
      <div className='w-16 h-1 bg-primary-yellow-1 mx-auto mb-10'></div>

      <div className='w-full grid grid-cols-1 lg:grid-cols-2'>
        <div className='lg:col-span-2 order-1 lg:order-2'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3917.7669137651!2d106.78270217504384!3d10.90531078925143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU0JzE5LjEiTiAxMDbCsDQ3JzA3LjAiRQ!5e0!3m2!1svi!2s!4v1760275195470!5m2!1svi!2s'
            width='100%'
            height='450'
            style={{ border: '0' }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);
