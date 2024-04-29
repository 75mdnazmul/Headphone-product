import React from 'react';
import { FaCheckDouble } from "react-icons/fa";
import OrderButton from '../shared/OrderButton';

const BenefitsSection = () => {
    return (
        <div className='flex justify-center py-12 bg-[#E2E2E2]'>
            <div className='px-2'>
                <div className=' text-center'>
                    <h2 className='text-[#F2EC1A] text-xl sm:text-xl md:text-2xl lg:text-2xl bg-[#2e2e2e] font-semibold py-4 my-6 rounded-md' style={{ fontFamily: "'Hind Siliguri', sans-serif" }}> কেন আপনি One Plus Airpods Pro কিনবেন ?</h2>
                </div>
                <div className='text-[18px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold text-[#2E2E2E]' style={{ fontFamily: "'Anek Bangla', sans-serif" }}>
                    <p className='flex gap-4 pb-1 mb-2 border-b border-dotted border-black'><span className='text-2xl'><FaCheckDouble /></span>ব‍্যালেন্সড এন্ড লাউড মিউজিক এক্সপেরিয়েন্সড।</p>
                    <p className='flex gap-4 pb-1 mb-2 border-b border-dotted border-black'><span className='text-2xl'><FaCheckDouble /></span>কলিং এর ক্ষেত্রে ক্লিয়ার সাউন্ড এন্ড মাইক্রোফোন এক্সপেরিয়েন্স খুবই ভালো পাবেন।</p>
                    <p className='flex gap-4 pb-1 mb-2 border-b border-dotted border-black'><span className='text-2xl'><FaCheckDouble /></span>এয়ার বাডস গুলোর ওজন মাত্র ৪ গ্রাম হওয়ায়, দীর্ঘক্ষণ ব‍্যবহারেও কোন সমস‍্যা হবে না।</p>
                    <p className='flex gap-4 pb-1 mb-2 border-b border-dotted border-black'><span className='text-2xl'><FaCheckDouble /></span>এক চার্জে সর্বমোট ১০ ঘন্টা এবং এয়ার বাডস থেকে ৩-৪ ঘন্টা ব‍্যাকআপ পাওয়া যাবে।</p>
                    <p className='flex gap-4 pb-1 mb-1 '><span className='text-2xl'><FaCheckDouble /></span>আরো থাকছে ব্লুটুথ ৫.০ এবং ওয়াটার রেসিসটেন্স সুবিধা।</p>
                </div>
                <div className='text-center'>
                    <OrderButton title="অর্ডার করতে ক্লিক করুন"/>
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;