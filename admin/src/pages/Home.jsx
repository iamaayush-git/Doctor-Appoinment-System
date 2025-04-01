import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const navigate = useNavigate();
  const { adminToken } = useSelector(state => state.admin)

  useEffect(() => {
    if (!adminToken) {
      return navigate('/login')
    }
  }, [])

  return (
    <div className='mt-10'>
      <div className='flex gap-10'>
        <Sidebar />
        <div className='w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home