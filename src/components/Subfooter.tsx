"use client"

import Image from "next/image";

export const Subfooter = () => {
    return (
      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-20 bg-[#0B2B4F] font-satoshi items-center mt-2 justify-between lg:p-0 overflow-hidden">
        <div className="text-[12px] sm:text-[14px] text-white text-center lg:text-left mb-4 lg:mb-0 lg:ml-10">
          <p>Copyrights 2024 | Canyfix, All Rights Reserved</p>
        </div>
        <div className="flex flex-row gap-4 lg:mr-12">
          <Image src="/icons/facebook.svg" alt="facebook" className="w-6 h-6 sm:w-8 sm:h-8" width={24} height={24}/>
          <Image src="/icons/twitter.svg" alt="twitter" className="w-6 h-6 sm:w-8 sm:h-8" width={24} height={24}/>
          <Image src="/icons/instagram.svg" alt="instagram" className="w-6 h-6 sm:w-8 sm:h-8" width={24} height={24}/>
          <Image src="/icons/linkedin.svg" alt="linkedin" className="w-6 h-6 sm:w-8 sm:h-8" width={24} height={24}/>
        </div>
      </div>
    );
  };
  