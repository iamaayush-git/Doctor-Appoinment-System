import React from 'react'
import { useSelector } from 'react-redux'

const AdminDashboard = () => {
  const { doctors } = useSelector(state => state.doctor);
  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard