import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ApplicationCard({ title, userName }) {
  return (
    <div className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white w-full max-w-sm">
      <h1 className="text-xl font-semibold text-gray-800 mb-3">{title}</h1>
      <div className="flex items-center gap-3 p-3 border rounded-lg bg-gray-100">
        <img
          src={assets.profile_pic}
          alt="User"
          className="w-12 h-12 rounded-full border"
        />
        <p className="text-gray-700 font-medium">
          {userName.charAt(0).toUpperCase() + userName.slice(1)}
        </p>
      </div>
      <button className="mt-4 border border-blue-400 hover:text-white px-4 py-2 rounded-lg w-full hover:bg-blue-500 transition-all duration-300 ">
        View Application
      </button>
    </div>
  );
}

function AdminPanel() {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("fresh");
  const [services, setServices] = useState([]);

  useEffect(() => {
    const checkToken = () => {
      let token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }
    };

    // Check token initially
    checkToken();

    // Listen for changes in localStorage (works across tabs)
    const handleStorageChange = () => checkToken();
    window.addEventListener("storage", handleStorageChange);

    // Fallback: Use an interval in case the token is removed in the same tab
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

  return (
    <div className="flex items-center min-h-screen flex-col gap-16 p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Welcome to Admin Panel
      </h1>
      <div className="flex gap-4">
        <button
          className={`px-6 py-2 rounded-lg  font-medium transition ${
            selectedSection === "fresh"
              ? "bg-blue-500 text-white"
              : "border border-gray-400 hover:bg-gray-500 hover:text-white"
          }`}
          onClick={() => setSelectedSection("fresh")}
        >
          Fresh Application
        </button>
        <button
          className={`px-6 py-2 rounded-lg  font-medium transition ${
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
            Fresh Application
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {services.some((item) => item.serviceType === "New") ? (
              services.map((item, index) =>
                item.serviceType === "New" ? (
                  <ApplicationCard
                    key={index}
                    title={item.serviceName}
                    userName={item.name}
                  />
                ) : null
              )
            ) : (
              <div className="col-span-full text-center py-10">
                <h1 className="text-gray-500 text-lg font-semibold">
                  No applications right now...
                </h1>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedSection === "modification" && (
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-800">
            Application for Modification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-center">
            {services.map((item, index) =>
              item.serviceType === "Update" ? (
                <ApplicationCard
                  key={index}
                  title={item.serviceName}
                  userName={item.name}
                />
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
