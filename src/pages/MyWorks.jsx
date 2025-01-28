import axios from "axios";
import React, { useEffect, useState } from "react";

const MyWorks = () => {
  // Mock data for applied works
  const [works, setWorks] = useState([]);

  const getMyWorks = async () => {
    try {
      let res = await axios.post(
        `http://localhost:7000/api/user/decodeService`,
        {
          token: localStorage.getItem("token"),
        }
      );
      let myServices = res.data.services;
      console.log(myServices);
      setWorks(myServices);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMyWorks();
  }, []);

  // Handler to simulate online payment
  const handlePayOnline = (id) => {
    alert(`Payment for work ID ${id} has been processed.`);
    // Add logic for payment here
  };

  // Handler to cancel submission
  const handleCancel = (id) => {
    setWorks(works.filter((work) => work.id !== id));
    alert(`Work ID ${id} has been canceled.`);
  };

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold mb-5 text-center">My Works</h1>
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
                    {work.serviceType}{" "}{work.serviceName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {work.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {work.status === "Applied" ? (
                      <div className="flex flex-wrap gap-2">
                        <button
                          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                          onClick={() => handlePayOnline(work.id)}
                        >
                          Pay Online
                        </button>
                        <button
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                          onClick={() => handleCancel(work.id)}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-500">
                        No actions available
                      </span>
                    )}
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
