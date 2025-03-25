import { configureStore } from "@reduxjs/toolkit"
import doctorSlice from './slices/doctorSlice.js'

const store = configureStore({
  reducer: {
    doctor: doctorSlice
  }
})
export default store