import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    adminToken: localStorage.getItem("adminToken") || "",
  },
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
      localStorage.setItem("adminToken", action.payload)
    },
    removeAdminToken: (state, action) => {
      state.adminToken = "";
      localStorage.removeItem("adminToken");
    }
  }
});

export const { setAdminToken, removeAdminToken } = adminSlice.actions;
export default adminSlice.reducer;
