
'use client';

type Step = 1 | 2 | 3 | 4;

const ProgressBar = ({ step }: { step: Step }) => {


    return (
        <div className="flex  justify-between items-center mb-4 font-satoshi text-sm ">
            <div className="flex  flex-col  items-center">
                <div className={`flex items-center justify-center rounded-full w-8 h-8 border-2 ${step >= 1 ? 'border-[#0B2B4F] bg-[#0B2B4F] text-white' : 'border-gray-300 text-gray-300'}`}>
                    {step > 1 ? '✓' : '1'}
                </div>
                <span className={`ml-2 ${step >= 1 ? 'text-[#0B2B4F]' : 'text-gray-300'}`}>Select Brand</span>
            </div>
            <div className={`flex-auto mb-8  border-t-2 transition duration-500 ease-in-out ${step > 1 ? 'border-[#0B2B4F]' : 'border-gray-300'}`}></div>
            <div className="flex  flex-col  items-center">
                <div className={`flex items-center justify-center rounded-full w-8 h-8 border-2 ${step >= 2 ? 'border-[#0B2B4F] bg-[#0B2B4F] text-white' : 'border-gray-300 text-gray-300'}`}>
                    {step > 2 ? '✓' : '2'}
                </div>
                <span className={`ml-2 ${step >= 2 ? 'text-[#0B2B4F]' : 'text-gray-300'}`}>Select Model</span>
            </div>
            <div className={`flex-auto   mb-8 border-t-2 transition duration-500 ease-in-out ${step > 2 ? 'border-[#0B2B4F]' : 'border-gray-300'}`}></div>
            <div className="flex flex-col  items-center">
                <div className={`flex items-center justify-center rounded-full w-8 h-8 border-2 ${step >= 3 ? 'border-[#0B2B4F] bg-[#0B2B4F] text-white' : 'border-gray-300 text-gray-300'}`}>
                    {step > 3 ? '✓' : '3'}
                </div>
                <span className={`ml-2 ${step >= 3 ? 'text-[#0B2B4F]' : 'text-gray-300'}`}>Select Service</span>
            </div>
            <div className={`flex-auto   mb-8 border-t-2 transition duration-500 ease-in-out ${step > 3 ? 'border-[#0B2B4F]' : 'border-gray-300'}`}></div>
            <div className="flex flex-col items-center">
                <div className={`flex items-center justify-center rounded-full w-8 h-8 border-2 ${step >= 4 ? 'border-[#0B2B4F] bg-[#0B2B4F] text-white' : 'border-gray-300 text-gray-300'}`}>
                    {step > 4 ? '✓' : '4'}
                </div>
                <span className={`ml-2 ${step >= 4 ? 'text-[#0B2B4F]' : 'text-gray-300'}`}>Book Appointment</span>
            </div>
        </div>
    );
};

export default ProgressBar;


