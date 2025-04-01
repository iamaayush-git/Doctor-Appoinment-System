import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useSelector(state => state.doctor)
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (speciality) {
      setFilterDoc(doctors.filter((item) => item.speciality === speciality));
    }
    else {
      setFilterDoc(doctors)
    }
  }, [speciality, doctors])

  console.log(speciality);

  return (
    <div className=' mt-10'>
      <h2 className='text-gray-700 font-sans text-2xl'>Browse through the doctor specialist</h2>
      <div className='flex items-start justify-between mt-10'>
        {/* left section */}
        <div className=' p-5 space-y-5'>
          <p onClick={() => { speciality === 'General physician' ? navigate("/doctors") : navigate('/doctors/General physician') }} className={`border-b cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-md transition-all duration-200 ${speciality === 'General physician' ? "border-2 border-green-500" : ""} `}>General physician</p>
          <p onClick={() => { speciality === 'Gynecologist' ? navigate("/doctors") : navigate('/doctors/Gynecologist') }} className={`border-b cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-md transition-all duration-200 ${speciality === 'Gynecologist' ? "border-2 border-green-500" : ""} `}>Gynecologist</p>
          <p onClick={() => { speciality === 'Dermatologist' ? navigate("/doctors") : navigate('/doctors/Dermatologist') }} className={`border-b cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-md transition-all duration-200 ${speciality === "Dermatologist" ? "border-2 border-green-500" : ""}  `}>Dermatologist</p>
          <p onClick={() => { speciality === 'Pediatricians' ? navigate("/doctors") : navigate('/doctors/Pediatricians') }} className={`border-b cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-md transition-all duration-200 ${speciality === "Pediatricians" ? "border-2 border-green-500" : ""}`}>Pediatricians</p>
          <p onClick={() => { speciality === 'Neurologist' ? navigate("/doctors") : navigate('/doctors/Neurologist') }} className={`border-b cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-md transition-all duration-200 ${speciality === "Neurologist" ? "border-2 border-green-500" : ""}`}>Neurologist</p>
          <p onClick={() => { speciality === 'Gastroenterologist' ? navigate("/doctors") : navigate('/doctors/Gastroenterologist') }} className={`border-b cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-md transition-all duration-200 ${speciality === "Gastroenterologist" ? "border-2 border-green-500" : ""} `}>Gastroenterologist</p>
        </div>
        {/* right sectiom */}
        <div className='grid grid-cols-3 gap-5 space-y-3'>
          {filterDoc.length > 0 ? filterDoc.map((item, index) => {
            return <div onClick={() => { navigate(`/appoinment/${item._id}`); scrollTo(0, 0) }} key={index} className='hover:-translate-y-2 transition duration-200 h-[50vh] w-[20vw] shadow-xl cursor-pointer p-2'>
              <div className=' h-[60%] mx-auto' ><img className='object-cover object-center w-[90%] h-full' src={item.image} alt="" /></div>
              <div className='w-[90%] mx-auto mt-3 space-y-1'>
                <div className='flex items-center justify-left gap-2'>
                  <p className='h-2 w-2 bg-green-500 rounded-full'></p><p className='text-green-500'>Available</p>
                </div>
                <p className='text-gray-700 text-light font-semibold'>{item.name}</p>
                <p className='text-gray-700 text-light text-sm'>{item.speciality}</p>
              </div>
            </div>
          }) : <h2 className='text-red-500 text-lg'>Sorry! No doctor available</h2>}
        </div>
      </div>
    </div>
  )
}
export default Doctors