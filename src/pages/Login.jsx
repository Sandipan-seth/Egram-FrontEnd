import React, { useContext, useState } from "react";
import userContext from "../contexts/UserContext";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const { userType,setUserType} =useContext(userContext)


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [officerCode, setOfficerCode] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [number, setNumber] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-[80vh] flex items-start pt-4 flex-col md:flex-row justify-around gap-10">
      <div className="flex flex-col items-center space-y-4 p-6 w-full md:w-1/2 rounded-xl shadow-xl">
        {/* User Option */}
        <div
          onClick={() => {
            setUserType("User");
          }}
          className={`w-full max-w-sm p-4 text-center ${userType==='User'?'bg-blue-500 text-white':'hover:bg-blue-500 hover:text-white'} rounded-md shadow-md cursor-pointer border border-blue-500 transition-all duration-300 md:max-w-md`}
        >
          Are you a User?
        </div>

        {/* Admin Option */}
        <div
          onClick={() => {
            setUserType("Admin");
          }}
          className={`w-full max-w-sm p-4 text-center ${userType==='Admin'?'bg-green-500 text-white':'hover:bg-green-500 hover:text-white'} rounded-md shadow-md cursor-pointer border border-green-600 transition-all duration-300 md:max-w-md`}
        >
          Are you an Admin?
        </div>

        {/* Officer Option */}
        <div
          onClick={() => {
            setUserType("Officer");
          }}
          className={`w-full max-w-sm p-4 text-center ${userType==='Officer'?'bg-purple-500 text-white':'hover:bg-purple-500 hover:text-white'} rounded-md shadow-md cursor-pointer border border-purple-500 transition-all duration-300 md:max-w-md`}
        >
          Are you an Officer?
        </div>
      </div>

      <form
        className="min-h-[80vh] flex items-center"
        action="#"
        onSubmit={onSubmitHandler}
      >
        <div className="flex flex-col m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 shadow-xl">
          <p className="text-2xl font-semibold">
            {state === "Sign Up" ? "Create Account" : "Log In"} for {userType}
          </p>
          <p className="text-sm ">
            Plese {state === "Sign Up" ? "Create Account" : "Log In"} to get
            services
          </p>
          {state === "Sign Up" ? (
            <div className="w-full mt-5">
              <p>Full Name</p>
              <input
                className="border border-gray-400 rounded-lg p-2 w-full mt-1 outline-none"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          ) : null}

          <div className="w-full mt-5">
            <p>Email</p>
            <input
              className="border border-gray-400 rounded-lg p-2 w-full mt-1 outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-full mt-5">
            <p>Password</p>
            <input
              className="border border-gray-400 rounded-lg p-2 w-full mt-1 outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {userType === "Officer" ? (
            <div className="w-full mt-5">
              <p>Officer Special Code</p>
              <input
                className="border border-gray-400 rounded-lg p-2 w-full mt-1 outline-none"
                type="text"
                value={officerCode}
                onChange={(e) => setOfficerCode(e.target.value)}
                required
              />
            </div>
          ) : null}

          {userType === "Admin" ? (
            <div className="w-full mt-5">
              <p>Admin Special Code</p>
              <input
                className="border border-gray-400 rounded-lg p-2 w-full mt-1 outline-none"
                type="text"
                value={adminCode}
                onChange={(e) => setAdminCode(e.target.value)}
                required
              />
            </div>
          ) : null}

          {state === "Sign Up" ? (
            <div className="w-full mt-5">
              <p>Mobile Number</p>
              <input
                className="border border-gray-400 rounded-lg p-2 w-full mt-1 outline-none"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
          ) : null}

          <button
            type="submit"
            className="hover:bg-blue-400 bg-blue-600 py-2 text-white rounded-md w-full text-base mt-5 transition-all duration-300"
          >
            {state === "Sign Up" ? "Create Account" : "Log In"}
          </button>
          {state === "Sign Up" ? (
            <p className="mt-5 text-sm">
              Already have an account?{" "}
              <span
                className="hover:text-blue-400 text-blue-600 cursor-pointer"
                onClick={() => setState("Log In")}
              >
                Log In
              </span>
            </p>
          ) : (
            <p className="mt-5 text-sm">
              Don't have an account?{" "}
              <span
                className="hover:text-blue-400 text-blue-600 cursor-pointer"
                onClick={() => setState("Sign Up")}
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
