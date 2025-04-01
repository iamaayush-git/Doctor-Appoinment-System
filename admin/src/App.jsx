import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import AdminDashboard from './pages/admin/AdminDashboard';
import AllAppoinments from './pages/admin/AllAppoinments';
import DoctorList from './pages/admin/DoctorList';
import AddDoctor from './pages/admin/AddDoctor';
const App = () => {
  const { adminToken } = useSelector(state => state.admin);
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