import React, { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'
import { setAdminToken } from '../redux/slices/adminSlice.js'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState("Admin")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user === "Admin") {
        const response = await axios.post(backendUrl + "/api/admin/login", { email, password })
        if (response.data.success === true) {
          dispatch(setAdminToken(response.data.token))
          toast.success(response.data.message)
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='shadow-2xl p-5 h-1/2 w-1/2'>
        <h2 className='font-semibold text-gray-700 text-2xl text-left'><span className='text-orange-500'>{user} </span> Login</h2>
        <div className='flex flex-col w-[60%] space-y-3 mt-5'>
          <div className='flex items-center justify-between'>
            <label htmlFor="email">Email: </label>
            <input onChange={(e) => setEmail(e.target.value)} autoFocus placeholder='abc@gmail.com' className='w-2/3 outline-none border rounded-md p-2 text-gray-700' type="text" id="email" />
          </div>
          <div className='flex items-center justify-between'>
            <label htmlFor="password">Password: </label>
            <input onChange={(e) => setPassword(e.target.value)} placeholder='password' className='w-2/3 outline-none border rounded-md p-2 text-gray-700' type="password" id="password" />
          </div>
          <button onClick={handleSubmit} className='px-3 py-2 border-none bg-blue-500 text-white cursor-pointer rounded-md mr-auto hover:bg-blue-700 duration-200'>Login</button>
          {user == "Admin" ? <div className='text-sm text-gray-700'>
            <p>Doctor Login? <span onClick={() => setUser("Doctor")} className='text-blue-500 underline cursor-pointer'>Click here</span></p>
          </div> : <div className='text-sm text-gray-700'>
            <p>Admin Login? <span onClick={() => setUser("Admin")} className='text-blue-500 underline cursor-pointer'>Click here</span></p>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Login