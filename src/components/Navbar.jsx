import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import userContext from "../contexts/UserContext";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userType, setUserType, setUserData, userData } =
    useContext(userContext);
  const [showMenu, setShowMenu] = useState(false);

  const userVerify = async (token) => {
    try {
      if (localStorage.getItem("token") === null) {
        return;
      } else {
        let res = await axios.post(`http://localhost:7000/api/auth/decode`, {
          token,
        });
        setUserType(res.data.user.role);
        setUserData(res.data.user);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    userVerify(localStorage.getItem("token"));
    if (userType === "admin") {
      navigate("/admin-panel");
    }
  }, [token]);

  return (
    <div className="sticky z-10 top-0 left-0 flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 bg-white bg-opacity-75">
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => {
          navigate("/");
          scrollTo(0, 0);
        }}
      >
        Egram.
      </div>

      {token ? (
        <div className="text-center">
          Hello, &nbsp;
          <span className="text-red-500 font-bold text-lg md:text-xl ">
            {(userData.fullname || "Guest").charAt(0).toUpperCase() +
              (userData.fullname || "Guest").slice(1).split(" ")[0]}
          </span>
        </div>
      ) : null}

      {userType === "user" ? (
        <ul className="hidden md:flex items-start gap-5 font-medium">
          <NavLink to={"/"}>
            <li className="py-1">
              Home
              <hr
                className={`border-none outline-none h-0.5 w-4/5 m-auto bg-blue-400 hidden`}
              />
            </li>
          </NavLink>

          <NavLink to={"/all-works"}>
            <li className="py-1">All Services</li>
            <hr
              className={`border-none outline-none h-0.5 bg-blue-400 w-4/5 m-auto hidden`}
            />
          </NavLink>

          <NavLink to={"/about"}>
            <li className="py-1">About</li>
            <hr
              className={`border-none outline-none h-0.5 bg-blue-400 w-4/5 m-auto hidden`}
            />
          </NavLink>

          <NavLink to={"/contact"}>
            <li className="py-1">Contact</li>
            <hr
              className={`border-none outline-none h-0.5 bg-blue-400 w-4/5 m-auto hidden`}
            />
          </NavLink>
        </ul>
      ) : null}

      {!token ? null : (
        <div className="">
          {userType === "admin" ? (
            <button
              className="px-4 py-2 border border-gray-600 rounded-md font-semibold hover:bg-gray-300 transition-all duration-300"
              onClick={() => {
                navigate("/admin-panel");
              }}
            >
              {userType.charAt(0).toUpperCase() + userType.slice(1)} Panel
            </button>
          ) : userType === "officer" ? (
            <button
              className="px-4 py-2 border border-gray-600 rounded-md font-semibold hover:bg-gray-300 transition-all duration-300"
              onClick={() => {
                navigate("/officer-panel");
              }}
            >
              {userType.charAt(0).toUpperCase() + userType.slice(1)} Panel
            </button>
          ) : null}
          {
            userType === "user" ? (
              <button
              className="px-4 py-2 border border-gray-600 rounded-md font-semibold hover:bg-gray-300 transition-all duration-300"
            >
              {userType.charAt(0).toUpperCase() + userType.slice(1)} Area
            </button>
            ):null
          }
        </div>
      )}

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative w-10 h-10">
            <img
              className="rounded-full object-cover w-10 h-10"
              src={userData.image ? userData.image : assets.profile_pic}
              alt=""
            />

            {/* floating menu */}
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 flex flex-col gap-4 p-4">
                <p
                  onClick={() => {
                    navigate("/my-profile");
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate("/my-works");
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  My Works
                </p>
                <p
                  onClick={() => {
                    setToken("");
                    localStorage.removeItem("token");
                    setUserType("user");
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  Log Out
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-blue-600 hover:bg-blue-400 text-white px-8 py-3 transition-all duration-200 rounded-full font-light hidden md:block"
            onClick={() => {
              navigate("/login");
            }}
          >
            Create Account
          </button>
        )}
        <img
          src={assets.menu_icon}
          className="w-6 md:hidden"
          alt="menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />

        {/* responsive menu */}
        <div
          className={`md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all flex flex-col justify-evenly ${
            showMenu ? "fixed w-80" : "h-0 w-0"
          }`}
        >
          <div className="flex items-center justify-between px-5">
            {/* <img className="w-36" src="" alt="logo" /> */}

            <div className="text-2xl font-bold">Egram.</div>

            <img
              className="w-7"
              onClick={() => {
                setShowMenu(false);
              }}
              src={assets.cross_icon}
              alt="cross"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink
              onClick={() => {
                setShowMenu(false);
              }}
              to="/"
            >
              <p className="px-4 py-2 rounded inline-block">Home</p>
            </NavLink>
            <NavLink
              onClick={() => {
                setShowMenu(false);
              }}
              to="/all-works"
            >
              <p className="px-4 py-2 rounded inline-block">All Services</p>
            </NavLink>
            <NavLink
              onClick={() => {
                setShowMenu(false);
              }}
              to="/about"
            >
              <p className="px-4 py-2 rounded inline-block">About</p>
            </NavLink>
            <NavLink
              onClick={() => {
                setShowMenu(false);
              }}
              to="/contact"
            >
              <p className="px-4 py-2 rounded inline-block">Contact</p>
            </NavLink>
          </ul>

          <div className="w-full flex justify-center items-center">
            {userType === "user" ? null : userType === "admin" ? (
              <button className="md:p-4 p-1 border border-gray-600 rounded-md font-semibold hover:bg-gray-300 transition-all duration-300">
                {userType.charAt(0).toUpperCase() + userType.slice(1)} Panel
              </button>
            ) : userType === "officer" ? (
              <button className="p-4 border border-gray-600 rounded-md font-semibold hover:bg-gray-300 transition-all duration-300">
                {userType.charAt(0).toUpperCase() + userType.slice(1)} Panel
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
