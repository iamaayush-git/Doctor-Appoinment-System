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
import { useSelector, useDispatch } from "react-redux";
import { doctors } from './assets/assets_frontend/assets'
import Footer from './components/Footer'
import Login from './pages/Login'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDoctor(doctors))
  }, [])


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