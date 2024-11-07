"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
      duration: 0.5, // Slower animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Slower animation
};

const bottomVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Slower animation
};

export const HowitWorks = () => {
  return (
    <motion.div 
      id="how-it-works" // Add this ID for linking
      className='flex flex-col w-full h-auto font-satoshi content-evenly mt-8 p-6 lg:p-8'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Ensure animation on scroll both ways
    >
      <motion.div className="flex flex-col items-center lg:items-start lg:ml-10" variants={itemVariants}>
        <div className="py-8">
          <Image src="/Images/a1.svg" alt="Hassle-Free Repair Process" width={193} height={54} />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-semibold">Simple & Hassle-Free Phone Repair</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-[18px] text-[#545456] mt-6">Our Hassle-Free Repair Process: Get Your Phone Fixed in 4 Steps</p>
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-col lg:flex-row items-center justify-self-center lg:justify-start lg:items-stretch mt-10 space-y-6 lg:space-y-0 lg:space-x-6 m-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Ensure animation on scroll both ways
      >
        <motion.div className="flex flex-col items-start text-center lg:text-left" variants={bottomVariants}>
          <Image src="/icons/a2.svg" alt="Book Your Repair" width={45} height={45} className="mb-4" />
          <h1 className="text-lg sm:text-sm md:text-xl font-semibold">Book Your Repair</h1>
          <p className="text-sm sm:text-base md:text-md text-justify">
            Select your phone model,
            issue, and preferred repair
            service through our app and
            choose a convenient pick-up time
          </p>
        </motion.div>

        <div className="hidden lg:block py-20">
          <Image src="/Images/arrow.svg" alt="Arrow" width={150} height={60} />
        </div>

        <motion.div className="flex flex-col items-start text-center lg:text-left py-12" variants={bottomVariants}>
          <Image src="/icons/a3.svg" alt="Device Pick up" width={45} height={45} className="mb-4" />
          <h1 className="text-lg sm:text-sm md:text-xl font-semibold">Device Pick up</h1>
          <p className="text-sm sm:text-base md:text-md text-justify">Our courier will pick up your device from your chosen location</p>
        </motion.div>

        <div className="hidden lg:block py-28">
          <Image src="/Images/arrow.svg" alt="Arrow" width={150} height={60} />
        </div>

        <motion.div className="flex flex-col items-start text-center lg:text-left" variants={bottomVariants}>
          <Image src="/icons/a4.svg" alt="Expert Repair" width={45} height={45} className="mb-4" />
          <h1 className="text-lg sm:text-sm md:text-xl font-semibold">Expert Repair</h1>
          <p className="text-sm sm:text-base md:text-md text-justify">We diagnose the problem, fix it using high-quality parts, and keep you informed with real-time updates and even repair videos</p>
        </motion.div>

        <div className="hidden lg:block py-24">
          <Image src="/Images/arrow.svg" alt="Arrow" width={150} height={60} />
        </div>

        <motion.div className="flex flex-col items-start text-center lg:text-left py-12" variants={bottomVariants}>
          <Image src="/icons/a5.svg" alt="Delivery" width={45} height={45} className="mb-4" />
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Delivery</h1>
          <p className="text-sm sm:text-base md:text-md text-justify">Receive your repaired device securely packaged, along with a detailed bill</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
