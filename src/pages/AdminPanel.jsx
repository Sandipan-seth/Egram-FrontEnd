import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import userContext from "../contexts/UserContext";

function ApplicationCard({ title, userName, userPic, id }) {
  const nav = useNavigate();
  return (
    <div className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white w-full max-w-sm">
      <h1 className="text-xl font-semibold text-gray-800 mb-3">{title}</h1>
      <div className="flex items-center gap-3 p-3 border rounded-lg bg-gray-100">
        <img
          src={userPic ? userPic : assets.profile_pic}
          alt="User"
          className="w-12 h-12 rounded-full border"
        />
        <p className="text-gray-700 font-medium">
          {userName.charAt(0).toUpperCase() + userName.slice(1)}
        </p>
      </div>
      <button
        className="mt-4 border border-blue-400 hover:text-white px-4 py-2 rounded-lg w-full hover:bg-blue-500 transition-all duration-300 "
        onClick={() => {
          nav(`/admin-panel/${id}`);
        }}
      >
        View Application
      </button>
    </div>
  );
}

function AdminPanel() {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("fresh");
  const [userImages, setUserImages] = useState({});
  const { services, setServices } = useContext(userContext);

  const getUser = async (userId) => {
    if (userImages[userId]) return; // Prevent redundant API calls

    try {
      const userDetail = await axios.post(
        `http://localhost:7000/api/admin/fetchUserById/${userId}`
      );
      setUserImages((prev) => ({
        ...prev,
        [userId]: userDetail.data.user.image,
      }));
    } catch (error) {
      console.error("Error fetching user image:", error);
    }
  };

  useEffect(() => {
    const checkToken = () => {
      let token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }
    };

    checkToken();
    const handleStorageChange = () => checkToken();
    window.addEventListener("storage", handleStorageChange);
    const interval = setInterval(checkToken, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, [navigate]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        let serviceDetails = await axios.post(
          `http://localhost:7000/api/admin/getServices`
        );
        const { success, services } = serviceDetails.data;

        if (success) {
          setServices(services);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const freshApplications = services.filter(
    (item) => item.serviceType === "New" && item.status === "Applied"
  );

  const modificationApplications = services.filter(
    (item) => item.serviceType === "Update" && item.status === "Applied"
  );

  return (
    <div className="flex items-center min-h-screen flex-col gap-16 p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Welcome to Admin Panel
      </h1>

      <div className="flex gap-4">
        <button
          className={`px-6 py-2 rounded-lg font-medium transition ${
            selectedSection === "fresh"
              ? "bg-blue-500 text-white"
              : "border border-gray-400 hover:bg-gray-500 hover:text-white"
          }`}
          onClick={() => setSelectedSection("fresh")}
        >
          Fresh Application
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-medium transition ${
            selectedSection === "modification"
              ? "bg-blue-500 text-white"
              : "border border-gray-400 hover:bg-gray-500 hover:text-white"
          }`}
          onClick={() => setSelectedSection("modification")}
        >
          Application for Modification
        </button>
      </div>

      {selectedSection === "fresh" && (
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-800">
            Fresh Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {freshApplications.length > 0 ? (
              freshApplications.map((item) => {
                getUser(item.user);
                return (
                  <ApplicationCard
                    key={item._id}
                    title={item.serviceName}
                    userName={item.name}
                    userPic={userImages[item.user]}
                    id={item._id}
                  />
                );
              })
            ) : (
              <p className="text-gray-500">No applications right now...</p>
            )}
          </div>
        </div>
      )}

      {selectedSection === "modification" && (
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-800">
            Applications for Modification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {modificationApplications.length > 0 ? (
              modificationApplications.map((item) => {
                getUser(item.user);
                return (
                  <ApplicationCard
                    key={item._id}
                    title={item.serviceName}
                    userName={item.name}
                    userPic={userImages[item.user]}
                    id={item._id}
                  />
                );
              })
            ) : (
              <p className="text-gray-500">No applications right now...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;