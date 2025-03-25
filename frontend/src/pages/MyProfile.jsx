import React, { useState } from 'react'
import { assets } from "../assets/assets_frontend/assets"

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Aayush Bhattarai",
    image: assets.profile_pic,
    email: "aayush@gmail.com",
    phone: "980808098",
    address: {
      line1: '57 Cross, Richmond',
      line2: 'Circle, Chruch Road, London'
    },
    gender: 'male',
    dob: '2000-01-20'
  })

  const [isEdit, setIsEdit] = useState(false);

  const handleUserData = (e) => {
    setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  console.log(userData)


  return (
    <div>
      <h2 className='text-center text-3xl font-semibold text-gray-700 mt-10'>Your Profile</h2>
      <div className='mt-10'>
        <img className='w-50 rounded-full' src={userData.image} alt="" />
      </div>
      {isEdit ? <div>
        <form className='mt-10 space-y-3' action="name">
          <div className='w-[25vw] flex items-center justify-between'>
            <label htmlFor="name" className='font-semibold text-lg'>Name:</label>
            <input onChange={handleUserData} defaultValue={userData.name} className='outline-none border rounded-md p-2 text-gray-700 w-[70%]' type="text" id='name' name='name' />
          </div>
          <div className='w-[25vw] flex items-center justify-between'>
            <label htmlFor="email" className='font-semibold text-lg'>Email:</label>
            <input onChange={handleUserData} defaultValue={userData.email} className='outline-none border rounded-md p-2 text-gray-700 w-[70%]' type="text" id='email' name='email' />
          </div>
          <div className='w-[25vw] flex items-center justify-between'>
            <label htmlFor="phone" className='font-semibold text-lg'>Phone:</label>
            <input onChange={handleUserData} defaultValue={userData.phone} className='outline-none border rounded-md p-2 text-gray-700 w-[70%]' type="text" id='phone' name='phone' />
          </div>
          <div className='w-[25vw] flex items-center justify-between'>
            <label htmlFor="dob" className='font-semibold text-lg'>DOB:</label>
            <input onChange={handleUserData} defaultValue={userData.dob} className='outline-none border rounded-md p-2 text-gray-700 w-[70%]' type="text" id='dob' name='dob' />
          </div>
          <div className='w-[25vw] flex items-center justify-between'>
            <label className='font-semibold text-lg' htmlFor="gender">Gender: </label>
            <select onChange={handleUserData} className='border w-[70%] p-2 rounded-md outline-none' name="gender" id='gender' >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className='w-[25vw] flex items-start justify-between'>
            <label htmlFor="phone" className='font-semibold text-lg'>Address Line 1:</label>
            <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} defaultValue={userData.address.line1} className='outline-none border rounded-md p-2 text-gray-700 w-[70%]' type="text" id='line1' name='address.line1' />
          </div>
          <div className='w-[25vw] flex items-start justify-between'>
            <label htmlFor="phone" className='font-semibold text-lg'>Address Line 2:</label>
            <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} defaultValue={userData.address.line2} className='outline-none border rounded-md p-2 text-gray-700 w-[70%]' type="text" id='line2' name='address.line2' />
          </div>
        </form>

      </div> : <div className='mt-5'>
        <div className='text-gray-700 text-xl flex items-center gap-3'>
          <p className='font-semibold'>Name: </p>
          <p>{userData.name}</p>
        </div>
        <div className='text-gray-700 text-xl flex items-center gap-3'>
          <p className='font-semibold'>Email: </p>
          <p>{userData.email}</p>
        </div>
        <div className='text-gray-700 text-xl flex items-center gap-3'>
          <p className='font-semibold'>Phone: </p>
          <p>{userData.phone}</p>
        </div>
        <div className='text-gray-700 text-xl flex items-center gap-3'>
          <p className='font-semibold'>Gender: </p>
          <p>{userData.gender}</p>
        </div>
        <div className='text-gray-700 text-xl flex items-center gap-3'>
          <p className='font-semibold'>DOB: </p>
          <p>{userData.dob}</p>
        </div>

      </div>}
      <div className='mt-5'>
        {isEdit ? <button className='px-4 py-2 rounded-md cursor-pointer bg-blue-500 text-white'>Save</button> : <button onClick={() => setIsEdit(true)} className='px-4 py-2 rounded-md cursor-pointer bg-blue-500 hover:bg-blue-700 duration-200 text-white'>Edit</button>}
      </div>
    </div>
  )
}
export default MyProfile
