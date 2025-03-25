import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctors: JSON.parse(localStorage.getItem('doctors')) || []
  },
  reducers: {
    setDoctor: (state, action) => {
      state.doctors = action.payload
      localStorage.setItem("doctors", JSON.stringify(action.payload))
    }
  }
})

export default doctorSlice.reducer;
export const { setDoctor } = doctorSlice.actions