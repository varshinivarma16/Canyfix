"use client";
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const Testimonial = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const headingVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  const textVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  return (
    <section ref={ref} className='flex flex-col w-full mt-10 font-satoshi p-6 lg:p-10 overflow-hidden'>
      <motion.div
        className='flex flex-col items-center mt-4'
        initial="hidden"
        animate={controls}
        variants={headingVariants}
      >
        <Image src="/Images/testimonial.svg" alt="Testimonials" width={193} height={54} className="w-auto h-auto" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-semibold mt-4 text-center">
          What Our Customer Says. Recent Reviews
        </h1>
      </motion.div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20 mt-14">
        <motion.div
          className="flex justify-center lg:justify-start w-full lg:w-auto p-6 lg:ml-10"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <Image src="/Images/man2.svg" alt="Client" className="w-full lg:w-auto object-cover" width={510} height={480} />
        </motion.div>
        <motion.div
          className="flex flex-col items-center lg:items-start"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <div className="flex flex-col items-center lg:items-start">
            <Image src="/icons/star.svg" alt="Star Rating" width={128} height={24} className="mt-8 w-auto h-auto" />
          </div>
          <div className="mt-4 text-center lg:text-left">
            <h2 className="text-[#0B2B4F] font-bold">THAKUR AJAY SEN</h2>
            {/* <Image src="/Images/arrow1.svg" alt="Arrow" className="mt-4 w-auto h-auto" width={88} height={36} /> */}
          </div>
          <p className="w-full lg:w-[680px] text-justify text-sm sm:text-base md:text-lg lg:text-[18px] mt-4">
            "This mobile repair shop is an absolute gem! The technicians are incredibly skilled and possess extensive experience in the field. The shop itself is impeccably neat, creating a welcoming atmosphere for customers. The owner is highly accountable and responsible, and the entire staff is not only proficient but also exceptionally polite."
          </p>
          
          <div className="mt-4 text-center lg:text-left">
            <h2 className="text-[#0B2B4F] font-bold">Harsh Rajput</h2>
            {/* <Image src="/Images/arrow1.svg" alt="Arrow" className="mt-4 w-auto h-auto" width={88} height={36} /> */}
          </div>
          <p className="w-full lg:w-[680px] text-justify text-sm sm:text-base md:text-lg lg:text-[18px] mt-4">
            "I had a great experience at canyfix  Mobile Repair Shop when I needed my cracked phone screen fixed. The staff was welcoming and knowledgeable, providing a clear estimate and completing the repair within an hour. The quality of the work was excellent, and they took the time to answer my questions. The shop is clean and well-equipped, which boosted my confidence in their service. I highly recommend  for any mobile repairs!"
          </p>
        </motion.div>
      </div>
    </section>
  );
};


