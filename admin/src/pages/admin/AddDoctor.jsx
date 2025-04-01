import React, { useState } from 'react'
import { assets } from '../../assets/assets_admin/assets'

const AddDoctor = () => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    email: "",
    password: "",
    speciality: "",
    experience: "",
    address1: "",
    address2: "",
    fees: "",
    about: "",
    education: ""
  })
  const [doctorImg, setDoctorImg] = useState(false);

  const handleDoctorData = (e) => {
    setDoctorData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleAddDoctor = () => {
    console.log(doctorData)
  }


  return (
    <div className='w-full mb-10'>
      <p className='text-xl'>Add Doctor</p>
      <div className='flex items-center gap-5 mt-5'>
        <label htmlFor="doc-img">
          <img src={assets.upload_area} alt="" />
        </label>
        <input type="file" id='doc-img' hidden />
        <p>Upload Doctor <br />Image</p>
      </div>
      <div className='flex gap-50 mt-10'>
        {/* left */}
        <div className='w-1/2 space-y-4'>
          <div className='text-gray-700'>
            <p>Doctor Name</p>
            <input onChange={handleDoctorData} className='w-full border outline-none p-2 rounded-md' name='name' type="text" placeholder='Name' />
          </div>
          <div className='text-gray-700'>
            <p>Doctor Email</p>
            <input onChange={handleDoctorData} className='w-full border outline-none p-2 rounded-md' name='email' type="email" placeholder='Email' />
          </div>
          <div className='text-gray-700'>
            <p>Password</p>
            <input onChange={handleDoctorData} className='w-full border outline-none p-2 rounded-md' name='password' type="password" placeholder='Password' />
          </div>
          <div>
            <p>Experience</p>
            <select onChange={handleDoctorData} className='w-full p-2 border outline-none rounded-md text-gray-700' name="experience" id="">
              <option value="#">Select Experience</option>
              <option value="1 Year">1 Year</option>
              <option value="2 Year">2 Years</option>
              <option value="3 Year">3 Years</option>
              <option value="4 Year">4 Years</option>
            </select>
          </div>
          <div className='text-gray-700'>
            <p>Fees</p>
            <input onChange={handleDoctorData} name='fees' className='w-full border outline-none p-2 rounded-md' type="number" placeholder='Fees' />
          </div>
        </div>
        {/* right */}
        <div className='w-1/2 space-y-4'>
          <div className='w-full'>
            <p>Speciality</p>
            <select onChange={handleDoctorData} className='w-full p-2 border outline-none rounded-md text-gray-700' name="speciality" id="">
              <option value="#">Select Speciality</option>
              <option value="General physician">General physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>
          <div className='text-gray-700'>
            <p>Education</p>
            <input onChange={handleDoctorData} className='w-full border outline-none p-2 rounded-md' type="text" placeholder='Education' name='education' />
          </div>
          <div className='text-gray-700'>
            <p>Address</p>
            <div className='space-y-3'>
              <input onChange={handleDoctorData} className='w-full border outline-none p-2 rounded-md' type="text" placeholder='Address 1' name='address1' />
              <input onChange={handleDoctorData} className='w-full border outline-none p-2 rounded-md' type="text" placeholder='Address 2' name='address2' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-2/3 mt-4 text-gray-700'>
        <p>About Doctor</p>
        <textarea onChange={handleDoctorData} className='w-full h-[20vh] border outline-none p-2' placeholder='Enter something about yourself...' name="about" id=""></textarea>
      </div>
      <button onClick={handleAddDoctor} className='px-3 py-2 bg-blue-500 cursor-pointer rounded-md border-none outline-none text-white hover:bg-blue-700 duration-200 mt-5'>Add Doctor</button>
    </div>
  )
}

export default AddDoctor