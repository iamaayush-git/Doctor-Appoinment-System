import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const RelatedDoctor = ({ docId, speciality }) => {
  const { doctors } = useSelector(state => state.doctor);
  const [relatedDoctors, setRelatedDoctors] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (doctors.length > 0 && speciality && docId) {
      setRelatedDoctors(doctors.filter(doc => doc.speciality === speciality && doc._id !== docId))
    }
  }, [docId, speciality])

  return (
    <div className='mt-10'>
      <h2 className='text-2xl text-gray-700 font-semibold'>Related Doctors</h2>
      <div className='mt-5 flex items-center gap-5'>
        {relatedDoctors.length > 0 ? relatedDoctors.map((item, index) => {
          return <div onClick={() => { navigate(`/appoinment/${item._id}`); scrollTo(0, 0) }} key={index} className='hover:-translate-y-2 transition duration-200 h-[50vh] w-[20vw] shadow-xl cursor-pointer p-2'>
            <div className=' h-[60%] mx-auto' ><img className='object-cover object-center w-[90%] h-full' src={item.image} alt="" /></div>
            <div className='w-[90%] mx-auto mt-3 space-y-1'>
              <div className='flex items-center justify-left gap-2'>
                <p className='h-2 w-2 bg-green-500 rounded-full'></p><p className='text-green-500'>Available</p>
              </div>
              <p className='text-gray-700 text-light font-semibold'>{item.name}</p>
              <p className='text-gray-700 text-light text-sm'>{item.speciality}</p>
            </div>
          </div>
        }) : <h2 className='text-red-500 text-lg'>Sorry! No doctor available</h2>}
      </div>
    </div>
  )
}

export default RelatedDoctor