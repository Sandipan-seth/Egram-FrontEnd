import React, { useContext, useEffect, useState } from "react";
import userContext from "../contexts/UserContext";
import { assets } from "../assets/assets_frontend/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { userData, setUserData } = useContext(userContext);
  const navigate = useNavigate();

  const [editedName, setEditedName] = useState("");
  const [editedNumber, setEditedNumber] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to check token and redirect if missing
  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    checkToken(); // Check token immediately

    // Listen for token removal across tabs
    const handleStorageChange = () => checkToken();
    window.addEventListener("storage", handleStorageChange);

    // Fallback: Detect token removal in the same tab
    const interval = setInterval(checkToken, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    userVerify(token);
  }, []);

  useEffect(() => {
    if (userData) {
      setEditedName(userData.fullname || "");
      setEditedNumber(userData.phone || "");
    }
  }, [userData]);

  const userVerify = async (token) => {
    try {
      let res = await axios.post(`http://localhost:7000/api/user/getUsers`, {
        token,
      });
      setUserData(res.data.user);
    } catch (err) {
      console.error(err);
      navigate("/login");
    }
  };


  const submitHandler = async (e) => {
    e.preventDefault();

    if (!editedName || !editedNumber) {
      alert("Please fill out all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", editedName);
    formData.append("phone", editedNumber);
    formData.append("token", localStorage.getItem("token"));

    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    setLoading(true);
    // console.log("Form data:", selectedImage);

    try {
      let res = await axios.post(
        "http://localhost:7000/api/user/updateUser",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );


      if (res.data.success) {
        setShowForm(false);
        setUserData(res.data.user);
        alert("Profile updated successfully!");
      } else {
        alert("Failed to update user.");
      }
    } catch (err) {
      console.error("Error updating user:", err);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="p-6 min-h-screen flex justify-center items-center">
      {!showForm ? (
        <div className="bg-white rounded-lg shadow-xl p-10 w-full max-w-md border border-gray-400">
          <div className="flex flex-col items-center mb-6">
            <img
              src={userData.image || assets.profile_pic}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <p className="mt-3 text-lg font-semibold">
              {userData.fullname
                ? userData.fullname
                    .toLowerCase()
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")
                : "Full Name"}
            </p>
          </div>

          <hr className="border-gray-200 mb-6" />

          <div>
            <h2 className="text-lg font-medium mb-3">Contact Info</h2>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">Email Id:</p>
              <p className="text-gray-700">{userData.email || "Email"}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">Phone:</p>
              <p className="text-gray-700">
                {userData.phone || "Phone Number"}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="mt-6 bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-400 transition-all duration-200"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form
          onSubmit={submitHandler}
          className="w-full max-w-sm mx-auto bg-white p-7 rounded-md shadow-xl border border-gray-300"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="image"
            >
              Upload Image
            </label>
            <input
              id="image"
              type="file"
              // accept="image/*"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => {
                setSelectedImage(e.target.files[0]);
              }}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Enter your full name"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Enter your phone number"
              value={editedNumber}
              onChange={(e) => setEditedNumber(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-md ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            } transition duration-300`}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      )}
    </div>
  );
};

export default MyProfile;
