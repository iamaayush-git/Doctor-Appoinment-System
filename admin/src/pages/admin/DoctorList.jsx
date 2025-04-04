import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useSelector } from "react-redux"
import { toast } from 'react-toastify';

const DoctorList = () => {

  const { doctors } = useSelector(state => state.doctor);
  console.log(doctors)

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