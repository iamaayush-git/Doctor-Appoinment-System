import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className=" mx-auto my-20 rounded-2xl flex items-center justify-center bg-orange-500 relative ">
      {/* Left side */}
      <div className="space-y-2.5">
        <p className="text-4xl font-semibold text-white">Book Appointment</p>
        <p className="text-2xl font-light text-white">With 100+ Trusted Doctors</p>
        <button onClick={() => navigate("/login")} className="mt-4 px-4 py-2 bg-white text-orange-500 rounded cursor-pointer hover:scale-105 transition-all duration-100 ">Create Account</button>
      </div>

      {/* Right side (Image) */}
      <div className="relative w-1/2 h-[300px] flex justify-end">
        <img
          className="absolute bottom-0 right-10 w-[60%] max-w-none translate-x-10"
          src={assets.appointment_img}
          alt="Appointment"
        />
      </div>
    </div>

  )
}

export default Banner