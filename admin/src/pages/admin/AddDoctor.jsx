import React, { useState } from 'react'
import { assets } from '../../assets/assets_admin/assets'
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import axios from "axios"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AddDoctor = () => {
  const { adminToken } = useSelector(state => state.admin);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(false);

  const [doctorData, setDoctorData] = useState({
    name: "",
    email: "",
    password: "",
    speciality: "General physician",
    experience: "1 Year",
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

  const handleAddDoctor = async () => {
    setLoading(true)
    try {
      if (!doctorImg) {
        setLoading(false)
        return toast.error("Image not selected")
      }

      if (!doctorData.name || !doctorData.email || !doctorData.password || !doctorData.about || !doctorData.fees || !doctorData.education || !doctorData.address1 || !doctorData.address2 || !doctorData.experience || !doctorData.speciality) {
        setLoading(false);
        return toast.error("All fields are required");
      }

      const formData = new FormData();
      formData.append('image', doctorImg);
      formData.append('name', doctorData.name)
      formData.append('email', doctorData.email)
      formData.append('password', doctorData.password)
      formData.append('speciality', doctorData.speciality)
      formData.append('experience', doctorData.experience)
      formData.append('address', JSON.stringify({ line1: doctorData.address1, line2: doctorData.address2 }))
      formData.append('fees', Number(doctorData.fees))
      formData.append('about', doctorData.about)
      formData.append('degree', doctorData.education)

      formData.forEach((value, key) => {
        console.log(`${key} = ${value}`)
      });

      const response = await axios.post(backendUrl + "/api/admin/add-doctor", formData, {
        headers: {
          adminToken
        }
      });
      if (response.data.success === true) {
        toast.success(response.data.message);
      }

      setLoading(false)

    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message)
    }
  }


  return (
    <div className='w-full mb-10'>
      <p className='text-xl'>Add Doctor</p>
      <div className='flex items-center gap-5 mt-5'>
        <label htmlFor="doc-img">
          <img className='cursor-pointer w-50 h-50 rounded-full object-contain' src={doctorImg ? URL.createObjectURL(doctorImg) : assets.upload_area} alt="" />
        </label>
        <input onChange={(e) => setDoctorImg(e.target.files[0])} type="file" id='doc-img' hidden />
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
            <select defaultValue={"1 Year"} onChange={handleDoctorData} className='w-full p-2 border outline-none rounded-md text-gray-700' name="experience" id="">
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
            <select defaultValue={"General physician"} onChange={handleDoctorData} className='w-full p-2 border outline-none rounded-md text-gray-700' name="speciality" id="">
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
      <button disabled={loading} onClick={handleAddDoctor} className='flex items-center justify-center gap-3 w-40 py-3 bg-blue-500 cursor-pointer rounded-md border-none outline-none text-white hover:bg-blue-700 duration-200 mt-5'> {loading ? <span className='flex items-center justify-center gap-3 disabled:opacity-20 cursor-not-allowed'>Please wait <AiOutlineLoading3Quarters size={16} className='animate-spin' /></span> : "Add Doctor"} </button>
    </div>
  )
}

export default AddDoctor