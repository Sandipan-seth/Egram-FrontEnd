import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import userContext from "../contexts/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function OfficerViewDetails() {
  const navigate = useNavigate();
  const id = useParams().serviceId;
  const [details, setDetails] = useState({});

  const rejectDocument = async () => {
    try {
      let res = await axios.post(
        `http://localhost:7000/api/officer/rejectDocument/${id}`
      );
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
    navigate("/officer-panel");
  };

  const forwardDocument = async () => {
    try {
      let res = await axios.post(
        `http://localhost:7000/api/officer/forwardDocument/${id}`
      );
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
    navigate("/officer-panel");
  };

  useEffect(() => {
    scrollTo(0, 0);
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
    const fecthDetails = async (id) => {
      let res = await axios.post(
        `http://localhost:7000/api/officer/fetchServiceById/${id}`
      );
      setDetails(res.data.service);
    };
    fecthDetails(id);
  }, []);
  if (!details) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-lg p-6  w-fit flex justify-center flex-col">
        <h1 className="flex justify-center w-full h-fit text-3xl">
          <strong>Status:</strong> {" "+details.status}
        </h1>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          {details.serviceType} {details.serviceName}
        </h2>

        <div className="flex flex-col md:flex-row md:gap-20">
          <img
            src={details.image || assets.aadhar_card}
            alt="Service"
            className="w-full md:w-1/2 h-fit object-cover rounded-md mb-4 border border-gray-300 shadow-lg"
          />
          <div className="rounded-xl p-10 md:p-0 bg-gray-200 md:w-1/2 items-center justify-center flex">
            <div>
              <p className="text-gray-700">
                <strong>Name:</strong> {details.name}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {details.phone}
              </p>

              {details.serviceType === "New" && (
                <p className="text-gray-700">
                  <strong>Age:</strong> {details.age}
                </p>
              )}
              <p className="text-gray-700">
                <strong>Address Line 1:</strong> {details.address1}
              </p>
              {details.address2 && (
                <p className="text-gray-700">
                  <strong>Address Line 2:</strong> {details.address2}
                </p>
              )}
              <p className="text-gray-700">
                <strong>Pincode:</strong> {details.pincode}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end gap-10 mt-6">
          <button
            className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300"
            onClick={() => {
              rejectDocument();
            }}
          >
            Reject
          </button>
          <button
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            onClick={() => {
              forwardDocument();
            }}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default OfficerViewDetails;
