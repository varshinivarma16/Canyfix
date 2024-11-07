"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  "/Images/all_model.svg",
  // "/Images/l.svg",
  // "/Images/f.svg",
  // "/Images/s.svg",
  // "/Images/g.svg",
  // "/Images/n.svg"
];

export const Partner = () => {
  const imageWidth = 1400; // Width of each image in pixels
  const imageHeight = 120; // Height of each image in pixels
  const gap = 20; // Gap between images in pixels
  // const duplicatedSlides = [...images, ...images];
  return (
    <section className='flex flex-col items-center w-full h-auto py-10'>
      <div className='flex flex-col justify-center items-center text-center w-full max-w-screen-xl px-4 lg:px-0'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold font-satoshi'>
          Partnering with the Best
        </h2>
        <div className='overflow-hidden w-full mt-16'>
          <motion.div
            className='flex'
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', whiteSpace: 'nowrap' }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className='flex-shrink-0 '
                // style={{ width: `${imageWidth}px`, height: `${imageHeight}px`, marginRight: `${gap}px` }}
              >
                <Image src={src} alt={`client ${index}`} width={imageWidth} height={imageHeight} className="h-12 sm:h-12 md:h-14 lg:h-20 w-auto" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


