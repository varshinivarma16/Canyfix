"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

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

const headingVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  return (
    <motion.section 
      className="flex justify-center w-full bg-white font-satoshi py-16 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div className="flex flex-col w-full max-w-screen-xl mx-4" variants={containerVariants}>
        <motion.div className="flex flex-col items-center" variants={headingVariants}>
          <Image src="/Images/faq.svg" alt="FAQ" width={193} height={54} className="w-auto h-auto"/>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold mt-4 text-center">
            Got Questions? We've Got Answers!
          </h1>
        </motion.div>
        <motion.div className="flex flex-col mt-10 space-y-4" variants={containerVariants}>
          {[{
              question: "What types of phone repairs do you offer?",
              answer: "We offer repairs for screen damage, battery issues, software glitches, charging problems, and more.",
              isOpen: isOpen1,
              setIsOpen: setIsOpen1,
            }, {
              question: "How much will it cost to repair my phone?",
              answer: "The cost depends on your phone model and issue; you can get prices detail at time of submission",
              isOpen: isOpen2,
              setIsOpen: setIsOpen2,
            }, {
              question: "How long will it take to repair my phone?",
              answer: "Most repairs are completed within same days some issue table 1–2 business days, depending on the issue.",
              isOpen: isOpen3,
              setIsOpen: setIsOpen3,
            }, {
              question: "Do you offer a warranty on your repairs?",
              answer: "Yes, we offer a limited warranty on parts and labor for all repairs.",
              isOpen: isOpen4,
              setIsOpen: setIsOpen4,
            }, {
              question: "What happens if my phone data is lost during the repair?",
              answer: "While we take precautions to protect your data, we recommend backing up your device beforehand.",
              isOpen: isOpen5,
              setIsOpen: setIsOpen5,
            }, {
              question: "Can I drop off my phone for repair or do you offer pick-up services?",
              answer: "We offer both options: you can drop off your phone or use our convenient pick-up and delivery service.",
              isOpen: isOpen6,
              setIsOpen: setIsOpen6,
          }].map(({ question, answer, isOpen, setIsOpen }, index) => (
            <motion.div className="relative w-full" variants={itemVariants} key={index}>
              <button
                onClick={() => setIsOpen(prev => !prev)}
                className="bg-[#F7F8FB] p-4 w-full flex items-center justify-between font-semibold text-md rounded-lg"
              >
                {question}
                {!isOpen ? <Image src="/icons/d1.svg" alt="Expand" width={20} height={20}/> : <Image src="/icons/d2.svg" alt="Collapse" width={20} height={20}/>}
              </button>
              {isOpen && (
                <div className="bg-[#F7F8FB] rounded-b-lg mt-2 p-4">
                  <p className="text-[#75777A]">
                    {answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Faq;

