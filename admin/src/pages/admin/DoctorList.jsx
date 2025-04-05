import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'
import { toast } from "react-toastify"
import { setDoctor } from '../../redux/slices/doctorSlice.js'

const DoctorList = () => {

  const { doctors } = useSelector(state => state.doctor);
  const { adminToken } = useSelector(state => state.admin)
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const dispatch = useDispatch();

  const handleCheckbox = async (docId) => {
    try {
      const response = await axios.post(backendUrl + "/api/admin/change-availability", { docId }, {
        headers: {
          admintoken: adminToken
        }
      })
      if (response.data.success === true) {
        dispatch(setDoctor(response.data.doctors))
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message)
    }
  }


  return doctors.length > 0 ? (
    <div>
      <h2 className='text-xl mb-5'>All Doctors</h2>
      <div className='grid grid-cols-3 space-y-4'>
        {doctors.map((item, index) => {
          return <div className='cursor-pointer group rounded-lg border border-gray-300 shadow-md w-[20vw] h-[55vh]' key={index}>
            <div className=' w-full bg-blue-100 group-hover:bg-blue-200 duration-400 h-[60%] mx-auto'>
              <img className='w-[75%] mx-auto' src={item.image} alt="" />
            </div>
            <div className='p-3 text-gray-700'>
              <p className='text-lg font-medium'>{item.name}</p>
              <p className='text-sm font-medium'>{item.speciality}</p>
            </div>
            <div className='text-gray-700 p-3 pt-0 flex items-center gap-3'>
              <input onChange={() => handleCheckbox(item._id)} className='cursor-pointer' type="checkbox" checked={item.available} />
              <p>Available</p>
            </div>
          </div>
        })}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default DoctorList