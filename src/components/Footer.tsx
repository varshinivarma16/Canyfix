"use client";

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row w-full bg-f1 content-center justify-between font-satoshi overflow-hidden p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[300px] w-full">
        <div className="flex flex-col content-start justify-center w-full lg:w-[462px] ml-0 lg:ml-20">
          <div className="content-start">
            <Image
              src="/icons/logo.svg"
              alt="Canyfix"
              width={123}
              height={50}
              className="w-auto h-auto"
            />
          </div>
          <div className="mt-6">
            <p className="text-sm sm:text-base lg:text-[16px]">
              We fix all phone models and brands with a commitment to quality,
              affordability, and exceptional customer service. Get a free quote
              today and experience the Canyfix difference.
            </p>
          </div>
          <div className="flex flex-col mt-6 gap-4">
            <div className="flex flex-row items-center ml-0 lg:ml-2">
              <Image
                src="/icons/location.svg"
                alt="Shop 5, Sai Arcade,next to Maharashtra bank, behind Kuba resturant Kalyan(West), Maharashtra"
                width={20}
                height={20}
                className="w-auto h-auto"
              />
              <p className="text-sm sm:text-base lg:text-[16px] ml-4">
              Shop 5, Sai Arcade,next to Maharashtra bank, behind Kuba resturant Kalyan(West), Maharashtra
              </p>
            </div>
            <div className="flex flex-row items-center ml-0 lg:ml-2">
              <Image
                src="/icons/contact.svg"
                alt="+91-7888014443"
                width={20}
                height={20}
                className="w-auto h-auto"
              />
              <p className="text-sm sm:text-base lg:text-[16px] ml-4">
                +91-7888014443
              </p>
            </div>
            <div className="flex flex-row items-center ml-0 lg:ml-2">
              <Image
                src="/icons/email.svg"
                alt="support@canyfix.com"
                width={20}
                height={20}
                className="w-auto h-auto"
              />
              <p className="text-sm sm:text-base lg:text-[16px] ml-4">
                support@canyfix.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 mt-4 w-full">
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl md:text-[20px] font-semibold">
              Quick links
            </h1>
            <ul className="list-none mt-4">
              <li className="mt-2">
                <a href="#" className="text-sm sm:text-base lg:text-[16px]">
                  Home
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-sm sm:text-base lg:text-[16px]">
                  About
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-sm sm:text-base lg:text-[16px]">
                  How it Works
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-sm sm:text-base lg:text-[16px]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl md:text-[20px] font-semibold">
              Company
            </h1>
            <ul className="list-none mt-4">
              <li className="mt-2">
                <Link href="/privacypolicy">
                  <p className="text-sm sm:text-base lg:text-[16px]">
                    Privacy Policy
                  </p>
                </Link>
              </li>
              {/* <li className="mt-2">
                <Link href="/partnerpolicy">
                  <p className="text-sm sm:text-base lg:text-[16px]">
                    Partner Policy
                  </p>
                </Link>
              </li> */}
              <li className="mt-2">
                <a href="#" className="text-sm sm:text-base lg:text-[16px]">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
