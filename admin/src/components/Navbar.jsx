import React from 'react'
import { assets } from "../assets/assets_admin/assets.js"
import { useDispatch, useSelector } from 'react-redux'
import { removeAdminToken } from '../redux/slices/adminSlice.js'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = () => {
  const { adminToken } = useSelector(state => state.admin)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeAdminToken());
    toast.success("Logout Successful");
    navigate("/login");
  }

  return (
    <div className='mt-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <img onClick={() => navigate('/')} src={assets.admin_logo} alt="" />
          <p className='text-lg text-gray-700 font-semibold'>{adminToken ? "Admin" : "Doctor"}</p>
        </div>
        {
          adminToken ? <button onClick={handleLogout} className='px-3 py-2 bg-blue-500 text-white border-none cursor-pointer hover:bg-blue-700 duration-200 rounded-md'>Logout</button> : <button className='px-3 py-2 bg-blue-500 text-white border-none cursor-pointer hover:bg-blue-700 duration-200 rounded-md'>Login</button>
        }
      </div>
    </div>
  )
}

export default Navbar