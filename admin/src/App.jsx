import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { toast, ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import AdminDashboard from './pages/admin/AdminDashboard';
import AllAppoinments from './pages/admin/AllAppoinments';
import DoctorList from './pages/admin/DoctorList';
import AddDoctor from './pages/admin/AddDoctor';
import { setDoctor } from './redux/slices/doctorSlice.js';
import axios from 'axios';

const App = () => {
  const dispatch = useDispatch();

  const { adminToken } = useSelector(state => state.admin);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetchAllDoctors();
  }, [adminToken, backendUrl])

  const fetchAllDoctors = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/admin/all-doctors", { headers: { adminToken } })
      if (response.data.success === true) {
        dispatch(setDoctor(response.data.doctors))
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message)
    }
  }



  return adminToken ? (
    <div className='w-[90vw] mx-auto'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path='/all-appoinments' element={<AllAppoinments />} />
          <Route path='/doctor-list' element={<DoctorList />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
        </Route>
      </Routes>
    </div>
  ) : <div>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </div>
}

export default App