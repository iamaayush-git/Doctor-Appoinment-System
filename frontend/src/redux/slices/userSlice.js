import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userToken: localStorage.getItem("userToken") || "",
    userName: localStorage.getItem("userName") || "",
  },
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token
      state.username = action.payload.username
      localStorage.setItem("userToken", action.payload.token)
      localStorage.setItem("userName", action.payload.username)
    },
    removeUser: (state, action) => {
      state.token = "",
        state.username = ""
      localStorage.removeItem("userToken")
      localStorage.removeItem("userName")
    }
  }
})

export default userSlice.reducer
export const { setUser, removeUser } = userSlice.actions