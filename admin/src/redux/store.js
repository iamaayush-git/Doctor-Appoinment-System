import { configureStore } from "@reduxjs/toolkit"
import adminSlice from "./slices/adminSlice.js"
import doctorSlice from "./slices/doctorSlice.js"

const store = configureStore({
  reducer: {
    admin: adminSlice,
    doctor: doctorSlice
  }
})

export default store