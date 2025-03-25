import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setDoctor } from '../redux/slices/doctorSlice'
import { doctors } from '../assets/assets_frontend/assets'


const TopDoctors = () => {
  const doctors = useSelector(state => state.doctor.doctors)
  const navigate = useNavigate();
  return (
    <>
      <h2 className='text-center mt-20 font-semibold text-gray-700 text-2xl'>Top Doctors to Book</h2>
      <p className='text-center font-light text-gray-700'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='grid grid-cols-4 mt-5 space-y-5'>
        {
          doctors.slice(0, 10).map((item, index) => {
            return <Link key={index} to={`appoinment/${item._id}`}>
              <div className='hover:-translate-y-2 transition duration-200 h-[50vh] w-[20vw] shadow-xl cursor-pointer p-2'>
                <div className=' h-[60%] mx-auto' ><img className='object-cover object-center w-[90%] h-full' src={item.image} alt="" /></div>
                <div className='w-[90%] mx-auto mt-3 space-y-1'>
                  <div className='flex items-center justify-left gap-2'>
                    <p className='h-2 w-2 bg-green-500 rounded-full'></p><p className='text-green-500'>Available</p>
                  </div>
                  <p className='text-gray-700 text-light font-semibold'>{item.name}</p>
                  <p className='text-gray-700 text-light text-sm'>{item.speciality}</p>
                </div>
              </div>
            </Link>
          })
        }
      </div>
      <div className='text-center mt-10'><button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-blue-100 px-4 py-2 rounded-md cursor-pointer text-center text-gray-600'>more</button></div>
    </>
  )
}

export default TopDoctors