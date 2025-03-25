import React from 'react'
import { specialityData } from "../assets/assets_frontend/assets.js"
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='mt-20' id='speciality'>
      <h2 className='font-semibold text-2xl text-center text-gray-700'>Find by Speciality</h2>
      <p className='font-light text-center text-lg text-gray-700'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='mt-5 flex items-center justify-center gap-10 text-gray-700'>
        {specialityData.map((item, index) => {
          return <Link onClick={() => scrollTo(0, 0)} to={`doctors/${item.speciality}`} className='group mt-5 cursor-pointer flex flex-col items-center justify-center' key={index}>
            <img className='group-hover:scale-110  transition duration-200 w-20' src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default SpecialityMenu