import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userToken: localStorage.getItem("userToken") || "",
    userName: localStorage.getItem("userName") || "",
  },
  reducers: {
    setUser: (state, action) => {
      state.userToken = action.payload.token
      state.userName = action.payload.username
      localStorage.setItem("userToken", action.payload.token)
      localStorage.setItem("userName", action.payload.username)
    },
    removeUser: (state, action) => {
      state.userToken = "",
        state.userName = ""
      localStorage.removeItem("userToken")
      localStorage.removeItem("userName")
    }
  }
})

export default userSlice.reducer
export const { setUser, removeUser } = userSlice.actions