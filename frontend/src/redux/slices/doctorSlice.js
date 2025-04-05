import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctors: []
  },
  reducers: {
    setDoctor: (state, action) => {
      state.doctors = action.payload
    }
  }
})

export default doctorSlice.reducer;
export const { setDoctor } = doctorSlice.actions