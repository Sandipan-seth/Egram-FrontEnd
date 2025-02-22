import React, { useContext, useEffect, useState } from "react";
import userContext from "../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { token,userType, setUserType, setToken, backendUrl,username,setUsername } =
    useContext(userContext);

  const navigate = useNavigate();

  
  

  const [state, setState] = useState("Log In");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [officerCode, setOfficerCode] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [number, setNumber] = useState("");
  



  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
    setNumber("");
    setOfficerCode("");
    setAdminCode("");
  }, [state, userType]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (state === "Log In") {
      try {
        let specialCode = "";
        if (userType === "officer") {
          specialCode = officerCode;
        } else if (userType === "admin") {
          specialCode = adminCode;
        }
        const data = await axios.post(`http://localhost:7000/api/auth/login`, {
          email,
          password,
          code: specialCode,
          role: userType,
        });
        const { token, message, existingUser } = data.data;
        setToken(token); // Set token securely
        localStorage.setItem("token", token);
        setUsername(existingUser.fullname);
        setName("");
        setEmail("");
        setPassword("");
        setNumber("");
        setOfficerCode("");
        setAdminCode("");
        navigate("/");
        alert(message);
      } catch (err) {
        console.error("Login error:", err);
        alert(err.response?.data?.message || "Invalid Credentials");
      }
    }

    if (state === "Sign Up") {
      try {
        let specialCode = "000000";
        if (userType === "admin") {
          specialCode = adminCode;
        } else if (userType === "officer") {
          specialCode = officerCode;
        }

        const payload = {
          fullname: name,
          email,
          password,
          role: userType,
          phone: number,
          code: specialCode,
        };

        // console.log("Payload being sent:", payload);

        const response = await axios.post(
          `http://localhost:7000/api/auth/register`,
          payload
        );

        
        setToken(response.data.token); // Set token securely
        localStorage.setItem("token",response.data.token);
        setUsername(response.data.user.fullname);


        
        setName("");
        setEmail("");
        setPassword("");
        setNumber("");
        setOfficerCode("");
        setAdminCode("");
        navigate("/");
        alert(response.data.message);
      
      } catch (err) {
        // alert(err.response?.data?.message);
        alert(err.response?.data?.message || "Invalid Credentials");
      }
    } 


  };

  

  return (
    <div className="min-h-[80vh] flex items-start pt-4 flex-col md:flex-row justify-around gap-10">
      <div className="flex flex-col items-center space-y-4 p-6 w-full md:w-1/2 rounded-xl shadow-xl">
        {/* User Option */}
        <div
          onClick={() => {
            setUserType("user");
          }}
          className={`w-full max-w-sm p-4 text-center ${
            userType === "user"
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-300 hover:text-black"
          } rounded-md shadow-md cursor-pointer border border-blue-500 transition-all duration-300 md:max-w-md`}
        >
          Are you a User?
        </div>

        {/* Admin Option */}
        <div
          onClick={() => {
            setUserType("admin");
          }}
          className={`w-full max-w-sm p-4 text-center ${
            userType === "admin"
              ? "bg-green-500 text-white"
              : "hover:bg-green-300 hover:text-black"
          } rounded-md shadow-md cursor-pointer border border-green-600 transition-all duration-300 md:max-w-md`}
        >
          Are you an Admin?
        </div>

        {/* Officer Option */}
        <div
          onClick={() => {
            setUserType("officer");
          }}
          className={`w-full max-w-sm p-4 text-center ${
            userType === "officer"
              ? "bg-purple-500 text-white"
              : "hover:bg-purple-300 hover:text-black"
          } rounded-md shadow-md cursor-pointer border border-purple-500 transition-all duration-300 md:max-w-md`}
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

          {userType === "officer" ? (
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

          {userType === "admin" ? (
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
