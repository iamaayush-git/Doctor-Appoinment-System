import React, { useEffect, useState } from "react";
import axios from "axios"
import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../redux/slices/userSlice.js";
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { userToken } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (userToken) {
      return navigate("/");
    }
  }, [])

  const dispatch = useDispatch();
  const [state, setState] = useState("Login");
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/user/user-login", { email, password })
      if (response.data.success === true) {
        dispatch(setUser({ username: response.data.name, token: response.data.token }))
        toast.success(response.data.message)
        return navigate("/")
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/user/user-register", { email, password, name: username })
      if (response.data.success === true) {
        setUsername("");
        setEmail("");
        setPassword("");
        setState("Login")
        toast.success(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          {state}
        </h2>
        <form className="space-y-4">
          {
            state === "Sign Up" && <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          }
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {
            state === "Login" && <button
              type="button" onClick={handleLogin}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          }
          {
            state === "Sign Up" && <button
              type="button" onClick={handleSignUp}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          }
        </form>
        {
          state === "Login" ? <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <a onClick={() => setState("Sign Up")} className="cursor-pointer text-blue-600 hover:underline">
              Sign Up
            </a>
          </p> : <p className="text-center text-gray-600 mt-4">Already have an account? <a onClick={() => setState("Login")} className="cursor-pointer text-blue-600 hover:underline">
            Login
          </a></p>
        }
      </div>
    </div>
  );
};

export default Login;
