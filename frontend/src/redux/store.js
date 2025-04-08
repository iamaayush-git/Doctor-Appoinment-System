import { configureStore } from "@reduxjs/toolkit"
import doctorSlice from './slices/doctorSlice.js'
import userSlice from "./slices/userSlice.js"

const store = configureStore({
  reducer: {
    doctor: doctorSlice,
    user: userSlice
  }
})
export default store