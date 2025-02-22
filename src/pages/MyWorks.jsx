import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyWorks = () => {
  const navigate = useNavigate();
  const [works, setWorks] = useState([]);

  // Function to check token and redirect if missing
  const checkToken = () => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    checkToken(); // Check initially

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

  const getMyWorks = async () => {
    try {
      let res = await axios.post(
        `http://localhost:7000/api/user/decodeService`,
        {
          token: localStorage.getItem("token"),
        }
      );
      setWorks(res.data.services);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMyWorks();
  }, []);

  // Simulate online payment
  const handlePayOnline = (id) => {
    alert(`Payment for work ID ${id} has been processed.`);
  };

  // Cancel submission
  const handleCancel = async (id) => {
    try {
      let res = await axios.post(
        `http://localhost:7000/api/user/cancelService`,
        {
          token: localStorage.getItem("token"),
          serviceId: id,
        }
      );
      getMyWorks();
      alert(res.data.message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold mb-5 text-center">My Applications</h1>
      {works.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-sm md:text-base">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Service Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Status
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {works.map((work) => (
                <tr key={work._id} className="odd:bg-gray-100 even:bg-white">
                  <td className="border border-gray-300 px-4 py-2">
                    {work.serviceType} {work.serviceName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {work.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {work.status === "Applied" ? (
                      <div className="flex flex-wrap gap-2">
                        <button
                          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                          onClick={() => handlePayOnline(work._id)}
                        >
                          Pay Online
                        </button>
                      </div>
                    ) : work.status === "Forwarded to Officer" ? (
                      <span>No Action Needed..</span>
                    ) : work.status === "Rejected By Admin" ||
                      work.status === "Rejected By Officer" ||
                      work.status === "Verified" ? (
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        onClick={() => handleCancel(work._id)}
                      >
                        Remove
                      </button>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-700 text-center">No works found.</p>
      )}
    </div>
  );
};

export default MyWorks;
