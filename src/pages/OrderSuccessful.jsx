import React from 'react';
import { ImCheckmark } from "react-icons/im";

const OrderSuccessful = () => {
    return (
        <div className=''>
            {/* Thanks Section */}
            <div className='text-center bg-[#0f5149] px-5 sm:px-5'>
                <div className='flex justify-center text-[64px] sm:text-[64px] md:text-[110px] lg:text-[110px] pt-6 text-white'><ImCheckmark /></div>
                <h1 className='text-[58px] sm:text-[58px] md:text-[68px] lg:text-[68px] font-extrabold pt-0 sm:pt-0 lg:pt-3 text-center text-white' style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>ধন্যবাদ</h1>
                <p className='text-[14px] sm:text-[14px] md:text-[24px] lg:text-[28px] font-extrabold pb-6 sm:pb-8 lg:pb-20 px-0 sm:px-0 md:px-0 lg:px-64 text-center text-white' style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে। আমাদের একজন প্রতিনিধি আপনার সাথে কথা বলে আপনাকে বিস্তারিত জানিয়ে দিবেন</p>
            </div>
            {/* Order Details Section */}
            <div className='h-[600px] sm:h-[630px] md:h-[630px] lg:h-[500px] flex justify-center bg-[#f8f6f8]'>
                <div className='absolute w-11/12 sm:w-11/12 md:w-10/12 lg:w-7/12 xl:w-9/12 2xl:w-9/12  bg-[#fff] border border-[#9fb5d6] rounded-2xl mt-5 sm:mt-5 lg:mt-10 py-5 sm:py-5 lg:py-10 mx-5 sm:mx-5 px-6 sm:px-6 lg:px-12' style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                    <h3 className='text-[22px] text-center sm:text-center lg:text-left font-semibold pb-4 px-0 sm:px-0 lg py-3 sm:py-3 md:py-3 lg:ps-3' style={{ fontFamily: "'Anek Bangla', sans-serif" }}>Your order has been received.</h3>
                    <div className='bg-[#f8f6f8] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-12 p-6 sm:p-6 lg:p-8 text-[#566376] text-[14px] mb-4 rounded-xl'>
                        <div className='lg:col-span-2 border-b sm:border-b md:border-b lg:border-r border-dashed border-[#ccc] pb-3 sm:pb-3 md:pb-3'>
                            <p>Order number:</p>
                            <strong>382</strong>
                        </div>
                        <div className='border-b sm:border-b md:border-b lg:border-r border-dashed border-[#ccc] py-3 sm:py-3 md:py-3 lg:py-0 lg:ps-3 lg:col-span-3'>
                            <p>Date:</p>
                            <strong>February 10, 2024</strong>
                        </div>
                        <div className='border-b sm:border-b md:border-b lg:border-r border-dashed border-[#ccc] py-3 sm:py-3 md:py-3 lg:py-0 lg:ps-3 lg:col-span-2'>
                            <p>Total:</p>
                            <strong><span className='text-[0.75em] font-extrabold'>৳</span> 1,120.00</strong>
                        </div>
                        <div className='lg:border-b border-dashed border-[#ccc] py-3 sm:py-3 md:py-3 lg:py-0 lg:ps-3 lg:col-span-3'>
                            <p>Payment method:</p>
                            <strong>Cash on delivery</strong>
                        </div>
                    </div>
                    <p className='text-[14px] text-[#566376]'>Pay with cash upon delivery.</p>
                    <ul className='bg-[#f8f6f8] pt-4 px-8 pb-4 text-[#566376] text-[14px] mt-4 rounded-xl'>
                        <h3 className='text-[20px] font-semibold py-3 sm:py-3 md:py-3 lg:pt-4 lg:pb-8  text-[#000]' style={{ fontFamily: "'Anek Bangla', sans-serif" }}>Order details</h3>
                        <li>
                            <div className='grid grid-cols-12 font-semibold pb-2 border-b border-dashed border-[#ccc]'>
                                <p className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-5'>Product</p>
                                <p className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-7'>Total</p>
                            </div>
                            <div className='grid grid-cols-12 py-2 border-b border-dashed border-[#ccc]'>
                                <p className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-5 flex gap-2'>
                                    <span>Sample product <strong>× 1</strong></span>
                                </p>
                                <p className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-7'><span className='text-[0.75em] font-extrabold'>৳</span> 1,000.00</p>
                            </div>
                            <div className='grid grid-cols-12 pt-2'>
                                <p className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-5'>Subtotal:</p>
                                <p className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-7'>
                                    <span><span className='text-[0.75em] font-extrabold'>৳</span> 1,000.00</span>
                                </p>
                            </div>
                            <div className='grid grid-cols-12 py-2 '>
                                <p className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-5'>Shipping:</p>
                                <p className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-7'>
                                    <p><span className='text-[0.75em] font-extrabold'>৳</span> 120.00 <small> via Outside Dhaka</small></p>
                                </p>
                            </div>
                            <div className='grid grid-cols-12 py-1 '>
                                <p className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-5'>Payment method:</p>
                                <p className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-7'>
                                    <p>Cash on delivery</p>
                                </p>
                            </div>
                            <div className='grid grid-cols-12 py-3 font-bold'>
                                <p className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-5 font-semibold'>Total:</p>
                                <p className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-7 font-bold'><span className='text-[0.75em] font-extrabold'>৳</span> 1,120.00</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='h-52 bg-white'></div>
        </div>

    );
};

export default OrderSuccessful;