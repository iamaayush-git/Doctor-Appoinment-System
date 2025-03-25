import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const MyAppoinments = () => {
  const { doctors } = useSelector(state => state.doctor);
  return (
    <div className='mt-10'>
      <div>
        {doctors.slice(0, 2).map((item, index) => {
          return <div className='flex items-center justify-between border-b py-3'>
            <div className='flex items-center gap-5 text-gray-700 text-sm' key={index}>
              <img className='w-40' src={item.image} alt="" />
              <div>
                <p className='font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <div className='mt-2'>
                  <h2 className='font-semibold'>Address:</h2>
                  <p>{item.address.line1}</p>
                  <p>{item.address.line2}</p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                  <h2>Date & Time: </h2>
                  <p> 25 July, 2025</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center space-y-2'>
              <button className='text-sm mr-auto cursor-pointer px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 duration-200'>Pay Online</button>
              <button className='text-sm cursor-pointer px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 duration-200'>Cancel Appoinment</button>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default MyAppoinments