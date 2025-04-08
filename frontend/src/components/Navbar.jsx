import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [selectNav, setSelectNav] = useState(0);
  const navigate = useNavigate();
  const { userToken } = useSelector(state => state.user);

  const handleLogout = () => {
    // just wait for this implementation
  }

  return (
    <div className='border-b h-20 mt-5 flex items-center justify-around'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='flex justify-center gap-3'>
        <li onClick={() => setSelectNav(0)}>
          <Link to={"/"}>
            HOME
          </Link>
          <hr className={`${selectNav === 0 ? "block" : "hidden"} mt-1 bg-black`} />
        </li>
        <li onClick={() => setSelectNav(1)}>
          <Link to={"/about"}>
            ABOUT
          </Link>
          <hr className={`${selectNav === 1 ? "block" : "hidden"} mt-1 bg-black`} />
        </li>
        <li onClick={() => setSelectNav(2)}>
          <Link to={"/doctors"}>
            ALL DOCTOR
          </Link>
          <hr className={`${selectNav === 2 ? "block" : "hidden"} mt-1 bg-black`} />

        </li>
        <li onClick={() => setSelectNav(3)}>
          <Link to={"/contact"}>
            CONTACT
          </Link>
          <hr className={`${selectNav === 3 ? "block" : "hidden"} mt-1 bg-black`} />
        </li>
      </ul>
      {
        userToken ? <div className=' h-20 group relative flex flex-col justify-center gap-2'>
          <img className='w-12 h-12 rounded-full cursor-pointer' src={assets.profile_pic} alt="" />
          <div className='group-hover:block hidden absolute -left-15 top-19 bg-stone-200 p-3 w-40 rounded-md space-y-2 '>
            <p onClick={() => navigate('/my-profile')} className='cursor-pointer hover:font-medium'>My profile</p>
            <p onClick={() => navigate('/my-appoinments')} className='cursor-pointer hover:font-medium'>My appoinment</p>
            <p onClick={handleLogout} className='cursor-pointer hover:font-medium'>Logout</p>
          </div>
        </div> : <button onClick={() => navigate('/login')} className='bg-orange-500 text-white px-2 py-3 font-light rounded-md cursor-pointer'>CREATE ACCOUNT</button>
      }

    </div>
  )
}

export default Navbar