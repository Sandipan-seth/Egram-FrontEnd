import React, { useState } from "react";

const MyWorks = () => {
  // Mock data for applied works
  const [works, setWorks] = useState([
    {
      id: 1,
      title: "Aadhar Update",
      status: "Submitted", // Possible statuses: Submitted, Forwarded, Verified
    },
    {
      id: 2,
      title: "Passport Renewal",
      status: "Forwarded",
    },
    {
      id: 3,
      title: "PAN Card Correction",
      status: "Verified",
    },
    {
      id: 4,
      title: "PAN Card Correction",
      status: "Submitted",
    },
  ]);

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
                  Work Title
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
                <tr key={work.id} className="odd:bg-gray-100 even:bg-white">
                  <td className="border border-gray-300 px-4 py-2">
                    {work.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {work.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {work.status === "Submitted" ? (
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
