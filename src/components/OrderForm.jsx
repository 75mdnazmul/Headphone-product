import React from 'react';
import brandPic from "../../public/Photo/BRAND.png"
import { FaLock } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const OrderForm = () => {
    return (
        <div className='bg-[#E1FFEF] py-10 px-4 sm:px-4 md:px-4 lg:px-28'>
            <div>
                <h2 className='text-xl sm:text-xl md:text-2xl lg:text-2xl font-semibold pb-5 text-center' style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>অর্ডার করতে নিচের ফর্মে আপনার নাম ঠিকানা ফোন নম্বর দিয়া প্লেস অর্ডার বাটন এ ক্লিক করুন।</h2>
                <form className='border-[#8b4a2e] border-y-[16px] border-x-[6px] border-b-[6px] rounded-2xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    <ul className='py-6 px-4 sm:px-6 md:px-6 lg:px-4 '>
                        <li><h3 className='text-xl font-semibold pb-6'>Billing details</h3></li>
                        <li>
                            <label htmlFor="নাম">নাম লিখুন <span className='text-[#FF0000] text-lg font-bold'>*</span></label><br />
                            <input type="text" name="name" id='নাম' placeholder='আপনার সম্পূর্ণ নাম লিখুন' className='mt-2 py-2 ps-4 pe-2 w-full rounded-md mb-5' />
                        </li>
                        <li>
                            <label htmlFor="ঠিকানা">ঠিকানা লিখুন <span className='text-[#FF0000] text-lg font-bold'>*</span></label><br />
                            <input type="text" name="address" id='ঠিকানা' placeholder='আপনার সম্পূর্ণ ঠিকানাটি লিখুন' className='mt-2 py-2 ps-4 pe-2 w-full rounded-md mb-5' />
                        </li>
                        <li>
                            <label htmlFor="নম্বর">মোবাইল নম্বর লিখুন <span className='text-[#FF0000] text-lg font-bold'>*</span></label><br />
                            <input type="number" name="number" id='নম্বর' placeholder='আপনার মোবাইল নম্বরটি লিখুন' className='mt-2 py-2 ps-4 pe-2 w-full rounded-md' />
                        </li>
                    </ul>
                    <ul className='py-6 ps-10 pe-7'>
                        <li><h3 className='text-xl font-semibold pb-6'>Your order</h3></li>
                        <li>
                            <div className='grid grid-cols-6 font-semibold pb-3 border-b border-dashed border-gray-400'>
                                <p className='col-span-4'>Product</p>
                                <p className='col-span-2'>Subtotal</p>
                            </div>
                            <div className='grid grid-cols-6 py-3 border-b border-dashed border-gray-400'>
                                <p className='col-span-3 flex gap-2'>
                                    <img src={brandPic} alt="Brand Photo" className=' h-[20px]' />
                                    <span>Sample product</span>
                                </p>
                                <p className='col-span-3 ps-10'>× 1 &nbsp; ৳ 1,000.00</p>
                            </div>
                            <div className='grid grid-cols-6 pt-3'>
                                <p className='col-span-4'>Subtotal</p>
                                <p className='col-span-2'>
                                    <span>৳ 1,000.00</span>
                                    <p className='pt-3'>
                                        <input type="checkbox" id='Inside' className='cursor-pointer'/>&nbsp;
                                        <label htmlFor="Inside" className='cursor-pointer'>Inside Dhaka:</label>
                                    </p>
                                    <p>৳ 60.00</p>
                                </p>
                            </div>
                            <div className='grid grid-cols-6 py-3 border-b border-dashed border-gray-400'>
                                <p className='col-span-4'>Shipping</p>
                                <p className='col-span-2'>
                                    <input type="checkbox" id='Outside' className='cursor-pointer'/>&nbsp;
                                    <label htmlFor="Outside" className='cursor-pointer'>Outside Dhaka:</label>
                                    <p>৳ 120.00</p>
                                </p>
                            </div>
                            <div className='grid grid-cols-6 py-3 font-bold'>
                                <p className='col-span-4 font-semibold'>Total</p>
                                <p className='col-span-2 font-bold'>৳ 1,060.00</p>
                            </div>
                        </li>
                        <li>
                            <div className='py-5 ps-5 my-5 rounded-md bg-[#f7f7f7]'>
                                <input type="checkbox" id='Cash' className='cursor-pointer'/>&nbsp;
                                <label htmlFor="Cash" className='cursor-pointer'>&nbsp; Cash on delivery</label>
                                <div className='ps-4 py-3 mt-4 me-5 relative rounded-md bg-[#eaeaea]'>Pay with cash upon delivery.
                                    <div className='w-6 h-6 bg-[#eaeaea] absolute -top-2 left-8 rotate-45'>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <Link to='orderSuccessful'>
                            <button className='py-6 w-full bg-[#8b4a2e] rounded-lg hover:bg-[#000] hover:text-[#f2ec1f] text-white text-2xl font-bold flex justify-center items-center'>
                                <i className='text-3xl'><FaLock /></i> &nbsp;
                                Place Order &nbsp;<p className='text-2xl font-extrabold'>৳</p>&nbsp; 1,060.00
                            </button>
                        </Link>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;