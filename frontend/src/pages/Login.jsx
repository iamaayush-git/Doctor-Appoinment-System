import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Login");
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Login functionality will be implemented soon!");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("username:", username);
    alert("signup functionality will be implemented soon!");

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
