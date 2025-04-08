import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../src/pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import MyProfile from "./pages/MyProfile"
import MyAppoinments from "./pages/MyAppoinments"
import Appoinment from "./pages/Appoinment"
import Navbar from "./components/Navbar"
import { setDoctor } from './redux/slices/doctorSlice'
import { useDispatch } from "react-redux";
import Footer from './components/Footer'
import Login from './pages/Login'
import axios from "axios"
import { toast } from "react-toastify"

const App = () => {
  const dispatch = useDispatch();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetchDoctorList();
  }, [])

  const fetchDoctorList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/doctor/doctor-list");
      if (response.data.success === true) {
        dispatch(setDoctor(response.data.doctors))
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className='w-[90vw] mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-appoinments" element={<MyAppoinments />} />
        <Route path="/appoinment/:docId" element={<Appoinment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App