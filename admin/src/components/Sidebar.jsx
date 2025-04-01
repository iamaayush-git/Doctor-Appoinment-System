import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets_admin/assets';

const Sidebar = () => {

  const { adminToken } = useSelector(state => state.admin);

  return adminToken && (
    <div className=' h-[50vh] w-[20vw]'>
      <ul className=' px-5 py-3 space-y-4 border-r'>
        <NavLink className={({ isActive }) => `${isActive && "bg-blue-100 rounded-md duration-200"} px-3 py-2 flex items-center gap-5 w-full`} to={"/admin-dashboard"}>
          <img src={assets.home_icon} alt="" />
          <p>Dashboard</p>
        </NavLink>
        <NavLink className={({ isActive }) => `${isActive && "bg-blue-100 rounded-md duration-200"} px-3 py-2 flex items-center gap-5`} to={"/all-appoinments"}>
          <img src={assets.appointment_icon} alt="" />
          <p>Appoinments</p>
        </NavLink>
        <NavLink className={({ isActive }) => `${isActive && "bg-blue-100  rounded-md duration-200"} px-3 py-2 flex items-center gap-5`} to={"/add-doctor"}>
          <img src={assets.add_icon} alt="" />
          <p>Add Doctor</p>
        </NavLink>
        <NavLink className={({ isActive }) => `${isActive && "bg-blue-100 rounded-md duration-200"} px-3 py-2 flex items-center gap-5`} to={"/doctor-list"}>
          <img src={assets.people_icon} alt="" />
          <p>See Doctors</p>
        </NavLink>
      </ul>
    </div >
  )
}

export default Sidebar