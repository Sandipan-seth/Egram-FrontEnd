import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

function ApplicationCard({ title }) {
  return (
    <div className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white w-full max-w-sm">
      <h1 className="text-xl font-semibold text-gray-800 mb-3">{title}</h1>
      <div className="flex items-center gap-3 p-3 border rounded-lg bg-gray-100">
        <img
          src={assets.profile_pic}
          alt="User"
          className="w-12 h-12 rounded-full border"
        />
        <p className="text-gray-700 font-medium">UserName</p>
      </div>
      <button className="mt-4 border border-blue-400 hover:text-white px-4 py-2 rounded-lg w-full hover:bg-blue-500 transition-all duration-300 ">
        View Application
      </button>
    </div>
  );
}

function AdminPanel() {
  const [selectedSection, setSelectedSection] = useState("fresh");

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
          Fresh Apply
        </button>
        <button
          className={`px-6 py-2 rounded-lg  font-medium transition ${
            selectedSection === "modification"
              ? "bg-blue-500 text-white"
              : "border border-gray-400 hover:bg-gray-500 hover:text-white"
          }`}
          onClick={() => setSelectedSection("modification")}
        >
          Apply for Modification
        </button>
      </div>

      {selectedSection === "fresh" && (
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-800">Fresh Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-center">
            <ApplicationCard title="Service Application 1" />
            <ApplicationCard title="Service Application 2" />
            <ApplicationCard title="Service Application 3" />
          </div>
        </div>
      )}

      {selectedSection === "modification" && (
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-800">
            Apply for Modification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-center">
            <ApplicationCard title="Modification Request 1" />
            <ApplicationCard title="Modification Request 2" />
            <ApplicationCard title="Modification Request 3" />
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
