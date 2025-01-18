import React, { useContext, useState } from "react";
import userContext from "../contexts/UserContext";

const MyProfile = () => {
  const { userData, setUserData } = useContext(userContext);

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="p-6 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-10 w-full max-w-md border border-gray-400">
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={userData.image}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="mt-3 text-center border border-gray-300 rounded p-1 w-full"
              required
            />
          ) : (
            <p className="mt-3 text-lg font-semibold">{userData.name}</p>
          )}
        </div>

        <hr className="border-gray-200 mb-6" />

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-medium mb-3">Contact Info</h2>
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Email Id:</p>
            <p className="text-gray-700">{userData.email}</p>
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
              <p className="text-gray-700">{userData.phone}</p>
            )}
          </div>

          {/* Address */}
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Address:</p>
            {isEdit ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  className="border border-gray-300 rounded p-1 w-full"
                  required
                />
                <input
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  className="border border-gray-300 rounded p-1 w-full"
                />
                <input
                  type="text"
                  value={userData.address.pincode}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, pincode: e.target.value },
                    }))
                  }
                  className="border border-gray-300 rounded p-1 w-full"
                  required
                />
              </div>
            ) : (
              <div className="text-gray-700">
                <p>{userData.address.line1}</p>
                <p>{userData.address.line2}</p>
                <p>{userData.address.pincode}</p>
              </div>
            )}
          </div>

          {/* Gender */}
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Gender:</p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                className="border border-gray-300 rounded p-1 w-full"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-700">{userData.gender}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Date of Birth:</p>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                className="border border-gray-300 rounded p-1 w-full"
                required
              />
            ) : (
              <p className="text-gray-700">{userData.dob}</p>
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
