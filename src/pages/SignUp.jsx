import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    // Password Show Hide Toggle handle
    const [open, setOpen] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const handleToggle = () => {
        setOpen(!open)
    }
    const handleConfirmToggle = () => {
        setOpenConfirm(!openConfirm)
    }
    return (
        <div className='flex justify-center'>
            <div className='bg-white px-14 py-8 rounded-3xl my-16'>
                <h1 className='text-center text-4xl font-bold' style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>Sign Up Form</h1>
                <div className='flex justify-center gap-2'>
                    <Link to="/login"><button className='w-32 bg-[#ff0000] text-white text-[22px] font-semibold py-1 px-6 mt-5 mb-6 rounded-md hover:bg-[#F2EC1A] hover:text-black hover:border-2 hover:border-[#ff0000] active:bg-[#087f0c] active:text-white focus:bg-[#087f0c] border-2 border-[#ff0000]' style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.2s' }}>Login</button></Link>
                    <Link to="/sign-up"><button className='w-32 bg-[#FF0000] text-white text-[22px] font-semibold py-1 px-6 mt-5 mb-6 rounded-md hover:bg-[#F2EC1A] hover:text-black hover:border-2 hover:border-[#ff0000] active:bg-[#087f0c] active:text-white focus:bg-[#087f0c] border-2 border-[#ff0000]' style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.2s' }}>Sign Up</button></Link>
                </div>
                <form>
                    <label htmlFor='userName' className='text-lg font-semibold '> Username </label><br />
                    <input name='username' type='text' placeholder="Type your username" className="text-lg py-2 px-3 mt-2 mb-2 w-96 font-semibold border-2 border-[#e2e2e2] rounded-md" required id='userName' />
                    <br />
                    <label htmlFor='email' className='text-lg font-semibold'> Email </label><br />
                    <input name='email' type='email' placeholder="Type your email" className="text-lg py-2 px-3 mt-2 mb-2 w-96 font-semibold border-2 border-[#e2e2e2] rounded-md" required id='email' />
                    <br />
                    <label htmlFor='password' className='text-lg font-semibold '> Password </label><br />
                    <div className='relative'>
                        <input name='password' placeholder="Type your password" className="text-lg py-2 px-3 mt-3 mb-1 w-96 font-semibold border-2 border-[#e2e2e2] rounded-md " required id='password' type={(open === false) ? 'password' : 'text'} />
                        <i onClick={handleToggle} className='absolute top-6 text-2xl right-5 cursor-pointer text-gray-500'>{
                            (open === false) ? <FaEye /> : <FaEyeSlash />
                        }</i>
                    </div>
                    <br />
                    <label htmlFor='confirm-password' className='text-lg font-semibold '> Confirm password </label><br />
                    <div className='relative'>
                        <input name='confirm-password' placeholder="Type password again" className="text-lg py-2 px-3 mt-3 mb-1 w-96 font-semibold border-2 border-[#e2e2e2] rounded-md" required id='confirm password' type={(openConfirm === false) ? 'password' : 'text'} />
                        <i onClick={handleConfirmToggle} className='absolute top-6 text-2xl right-5 cursor-pointer text-gray-500'>{
                            (openConfirm === false) ? <FaEye /> : <FaEyeSlash />
                        }</i>
                    </div>

                    <div className='flex justify-center'>
                        <button className='w-96 bg-[#FF0000] text-white text-[22px] font-semibold py-1 px-6 mt-6 rounded-md hover:bg-[#F2EC1A] hover:text-black hover:border-2 hover:border-[#ff0000] active:bg-[#087f0c] active:text-white border-2 border-[#ff0000]' style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.2s' }}>Sign Up</button>
                    </div>
                </form>
                <p className='pt-5 text-md text-center font-semibold'>Already have an account ? Then <Link to="/login" className='underline font-bold text-[16px] hover:text-[#ff0000]'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;