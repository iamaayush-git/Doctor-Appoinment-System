import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex justify-center items-center gap-10 p-10 bg-orange-500 rounded-lg mt-10'>
      {/* left section */}
      <div className='space-y-4'>
        <h2 className='text-3xl font-semibold text-white'>Book Appoinment <br /> <span>With Trusted Doctors</span> </h2>
        <div className='flex items-center justify-center gap-2'>
          <img className='w-15' src={assets.group_profiles} alt="" />
          <p className='font-light text-white text-lg'>Simply browse through our extensive list of trusted doctors.</p>
        </div>
        <a href='#speciality' className='px-3 py-2 cursor-pointer rounded-lg font-light bg-gray-200 hover:scale-110 transition duration-200' >Book Appoinment</a>
      </div>
      {/* right section */}
      <div>
        <img className='w-100 rounded-full' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header