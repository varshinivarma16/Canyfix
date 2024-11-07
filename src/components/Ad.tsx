
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
      duration: 0.4,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const imageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Ad = () => {
  return (
    <motion.section 
      className='flex flex-col lg:flex-row w-full bg-t1 content-center justify-evenly mt-4 p-4 lg:p-8'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div 
        className='flex flex-col w-full lg:w-[615px] justify-center'
        variants={containerVariants}
      >
        <motion.div className='font-satoshi' variants={textVariants}>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-semibold'>
            Don't Wait! Get a Free Quote for Your Phone Repair Today.
          </h1>
          <p className='text-[#545456] text-sm sm:text-base md:text-lg lg:text-[18px] mt-4 lg:mt-8'>
            Don't let a broken phone disrupt your life any longer. Get a free, no-obligation quote for your repair in seconds through our app and see how affordable getting your phone back to top condition can be.
          </p>
        </motion.div>
        <motion.div variants={textVariants}>
          {/* 
          # TODO remove
          <Link href="https://play.google.com/store/apps/details?id=com.example.app">
            <Image src="/Images/googleplay.svg" alt="Google Play Store" width={150} height={50} className='mt-6 lg:mt-10 w-auto' />
          </Link> */}
        </motion.div>
      </motion.div>
      <motion.div 
        className='flex justify-center lg:justify-start mt-6 lg:mt-0'
        variants={imageVariants}
      >
        <Image src="/Images/mob.svg" alt="Mobile Phone" className='w-full lg:w-auto' width={580} height={668} />
      </motion.div>
    </motion.section>
  );
};
