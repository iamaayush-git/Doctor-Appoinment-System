import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets_frontend/assets';
import TimeSlotPicker from '../components/TimeSlotPicker';
import RelatedDoctor from '../components/RelatedDoctor';

const Appoinment = () => {
  const { docId } = useParams();
  const [docInfo, setdocInfo] = useState();
  const { doctors } = useSelector(state => state.doctor)

  useEffect(() => {
    setdocInfo(doctors.find(item => item._id === docId));
  })

  return docInfo && (
    <div>
      <div className='flex  gap-10 justify-center mt-10'>
        <div className='border rounded-xl p-6 bg-orange-300'>
          <img className='w-[100vw]' src={docInfo.image} alt="" />
        </div>
        <div className='border p-6 rounded-xl'>
          <div className='flex items-center justify-left gap-4'>
            <p className='font-semibold text-xl text-gray-700'>{docInfo.name}</p>
            <img className='w-5' src={assets.verified_icon} alt="" />
          </div>
          <div className='flex items-center gap-4 mt-2'>
            <p className='font-light text-lg text-gray-700'>{docInfo.degree}</p>
            <p className='px-2 border rounded-lg text-gray-700'>{docInfo.experience}</p>
          </div>
          <div className='mt-5'>
            <div className='flex items-center gap-4'>
              <h2 className='font-semibold text-xl'>About</h2>
              <img className='w-4' src={assets.info_icon} alt="" />
            </div>
            <p className='font-light text-lg text-gray-700'>{docInfo.about}</p>
          </div>
          <p className='mt-5 text-lg text-gray-700'>Appoinment fee: <span className='font-semibold'>${docInfo.fees}</span></p>
        </div>
      </div>

      {/* booking slots */}
      <TimeSlotPicker />
      <div className='text-center mt-10'>
        <button className='px-3 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-700 duration-200'>Book an Appoinment</button>
      </div>
      <RelatedDoctor docId={docInfo._id} speciality={docInfo.speciality} />
    </div>
  )
}
export default Appoinment