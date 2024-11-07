"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
      duration: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export const AboutUs = () => {
  return (
    <motion.section 
      className="flex flex-col lg:flex-row w-full content-center p-4 lg:gap-44 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div className="flex flex-col items-center lg:items-start lg:ml-16" variants={textVariants}>
        <div className="py-6 ml-1">
          <Image src="/Images/a6.svg" alt="" width={193} height={54} className="w-auto h-auto" />
        </div>
        <div className="flex flex-col content-evenly ml-2 font-satoshi w-full lg:w-[650px]">
          <h1 className="text-[25px] sm:text-[30px] md:text-[35px] font-semibold">Get to Know Us at CanyFix</h1>
          <p className="text-[16px] sm:text-[18px] text-[#545456] mt-4">
            Canyfix was founded by Karan with a mission to make mobile repair services affordable, transparent, and fast. Driven by a customer-first approach, we’ve proudly served over 5,000 customers, offering quality repairs with genuine parts and reliable service. As we expand to new pin codes, Canyfix continues to simplify the repair process, ensuring convenience and peace of mind with every device we handle
          </p>
        </div>
      </motion.div>
      <motion.div 
        className="flex justify-center lg:justify-start mt-6 lg:mt-2 lg:ml-12 lg:w-auto p-6"
        variants={imageVariants}
      >
        <Image src="/Images/man1.svg" alt="peoples" className="w-full lg:w-auto object-cover h-auto" width={435} height={400} />
      </motion.div>
    </motion.section>
  );
};
