import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import userContext from "../contexts/UserContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(userContext);
  const [showMenu, setShowMenu] = useState(false);
  // const [token,setToken] = useState(true);

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
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
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
                    setToken(false);
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
        <div
          className={`md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all ${
            showMenu ? "fixed w-80" : "h-0 w-0"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-6">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;