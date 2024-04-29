import { FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#11181f] w-full text-center text-white text-xs py-4 font-medium" >
      <div className="flex gap-2 justify-center mb-2">
        <p className="flex gap-2 items-center"><FaLink /> Privacy Policy</p>
        <p className="flex gap-2 items-center"><FaLink /> Refund Policy</p>
        <p className="flex gap-2 items-center"><FaLink /> Terms & Conditions</p>
      </div>
      <p> &#169;2024 | Developed by Branding Solutions BD</p>
    </div>
  )
}

export default Footer