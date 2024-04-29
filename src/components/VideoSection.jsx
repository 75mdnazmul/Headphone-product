import OrderButton from '../shared/OrderButton';

const VideoSection = () => {
    return (
        <div className="w-full bg-[#2e2e2e] text-center pt-16 pb-6 px-4 sm:px-4 md:px-4 lg:px-28">
            <div className="flex justify-center">
                {/* Title Bar */}
                <h1 className="w-full py-2 sm:py-3 md:py-3 lg:py-4 bg-white text-[#EF0427] text-[40px] sm:text-[38px] md:text-[40px] lg:text-[42px] font-sans font-bold rounded border border-black" style={{ boxShadow: "#fff 0px 0px 18px" }}>One Plus Airpods Pro</h1>
            </div>
            {/* Product Benefits Text */}
            <h2 className="text-white text-[20px] sm:text-[20px] md:text-2xl lg:text-2xl font-semibold my-6 " style={{ fontFamily: "'Hind Siliguri', sans-serif" }}><p>সাউন্ড কোয়ালিটি এক কথায় অসাধারণ।</p> যারা লো বাজেটে <span className="text-[#f2ec1f]">বেস্ট সাউন্ড কোয়ালিটির</span> এক্সপেরিয়েন্স চান তাদের জন্য এটি।</h2>
            {/* Product Video */}
            <div className="flex justify-center">
                <video className='border-[6px] border-[#F2EC1A] rounded-xl w-[767px] sm:w-[767px] md:w-9/12 lg:w-[767px] h-[300px] sm:h-[380px] md:h-[340px] lg:h-[431px]' muted autoPlay controls loop>
                    {/* <source src={} type="video/mp4" /> */}
                </video>
            </div>
            {/* Order Button */}
            <OrderButton title="অর্ডার করতে ক্লিক করুন"/>
        </div>
    );
};

export default VideoSection;