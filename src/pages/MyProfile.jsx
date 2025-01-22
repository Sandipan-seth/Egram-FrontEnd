import React, { useContext, useEffect, useState } from "react";
import userContext from "../contexts/UserContext";
import { assets } from "../assets/assets_frontend/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { userData, setUserData, token } = useContext(userContext);
  const navigate = useNavigate();

  const userVerify = async (token) => {
    try {
      if (localStorage.getItem("token") === null) {
        return;
      } else {
        let res = await axios.post(`http://localhost:7000/api/user/getUsers`, {
          token,
        });
        setUserData(res.data.user);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    userVerify(localStorage.getItem("token"));
  }, [token]);

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="p-6 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-10 w-full max-w-md border border-gray-400">
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={userData.image ? userData.image : assets.profile_pic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
          {isEdit ? (
            <input
              type="text"
              value={userData.fullname}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="mt-3 text-center border border-gray-300 rounded p-1 w-full"
              required
            />
          ) : (
            <p className="mt-3 text-lg font-semibold">
              {!userData.fullname
                ? "Full Name"
                : userData.fullname
                    .toLowerCase()
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
            </p>
          )}
        </div>

        <hr className="border-gray-200 mb-6" />

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-medium mb-3">Contact Info</h2>
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Email Id:</p>
            <p className="text-gray-700">{userData.email ? userData.email: "Email"}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Phone:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="border border-gray-300 rounded p-1 w-full"
              />
            ) : (
              <p className="text-gray-700">{userData.phone? userData.phone : "Phone Number"}</p>
            )}
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={() => setIsEdit(!isEdit)}
          className="mt-6 bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-400 transition-all duration-200"
        >
          {isEdit ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
