"use client";

import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';

export const Hero = () => {
    return (
        <section className="bg-[#F4F9FE] flex flex-col lg:flex-row w-full h-auto lg:h-[620px] items-center bg-hero bg-cover p-6 lg:p-10 overflow-hidden">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-14 lg:ml-10 max-w-full lg:max-w-screen-xl mx-auto">
                <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-satoshi mt-6 lg:mt-14 lg:ml-6 leading-relaxed lg:leading-snug">
                    <span className='text-[#0B2B4F]'>
                        Your Trusted Phone Repair<br className="lg:block hidden" /> Partner-
                    </span>
                    Certified <br className="lg:block hidden" /> Technicians & High-<br className="lg:block hidden" />
                    Quality Parts
                </p>

                <div className='flex mt-6 lg:mt-10 p-4 lg:p-6'>
                    <Link href="/bookappoinment">
                        <Button>Book Appointment</Button>
                    </Link>
                </div>
            </div>

            <div className="flex justify-center mt-6 lg:mt-0 lg:ml-14 w-full lg:w-auto">
                <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
                    <Image src="/Images/man.svg" alt="logo" width={600} height={500} className="w-full lg:w-auto" />
                </div>
            </div>
        </section>
    );
};
