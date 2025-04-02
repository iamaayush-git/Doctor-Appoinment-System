import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useSelector } from "react-redux"
import { toast } from 'react-toastify';

const DoctorList = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { adminToken } = useSelector(state => state.admin)
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetchAllDoctors();
  }, [adminToken, backendUrl])

  const fetchAllDoctors = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/admin/all-doctors", { headers: { adminToken } })
      console.log(response)
      if (response.data.success === true) {
        setDoctors(response.data.doctors);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message)
    }
  }

  return doctors.length > 0 ? (
    <div>
      {doctors.map((item, index) => {
        return <div key={index}>Helllo</div>
      })}
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default DoctorList