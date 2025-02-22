import React, { useContext, useEffect, useState } from "react";
import userContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Modification = ({ id }) => {
  const { userData } = useContext(userContext);
  const [name, setName] = useState(userData.fullname);
  const [phone, setPhone] = useState(userData.phone);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pinCode, setPinCode] = useState("");

  const navigate = useNavigate();

  const formSubmitHandeler = async (e) => {
    e.preventDefault();
    try {
      const original = id;
      const updated = original
        .replace(/_/g, " ")
        .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
      let res = await axios.post(
        `http://localhost:7000/api/user/applyService`,
        {
          token: localStorage.getItem("token"),
          serviceName: updated,
          serviceType: "Update",
          name,
          phone,
          status: "Applied",
          address1,
          address2,
          pincode: pinCode,
        }
      );

      alert(res.data.message);
      // console.log(res);
      navigate("/my-works");
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-400">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Modify Details for{" "}
        {id
          .split("_")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ")}
      </h2>
      <form
        className="space-y-4"
        autoComplete="off"
        onSubmit={(e) => {
          formSubmitHandeler(e);
        }}
      >
        {/* File Input */}
        <div>
          <label
            htmlFor="details"
            className="block text-gray-700 font-medium mb-1"
          >
            Upload Old{" "}
            {id
              .split("_")
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(" ")}{" "}
            Details <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            name="details"
            id="details"
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer file:cursor-pointer"
          />
        </div>

        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-1"
          >
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter your name"
            className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-200 outline-none"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Phone Input */}
        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-1"
          >
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            id="phone"
            value={phone}
            placeholder="Enter your phone number"
            className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-200 outline-none"
            autoComplete="off"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Address Inputs */}
        <div>
          <label
            htmlFor="address1"
            className="block text-gray-700 font-medium mb-1"
          >
            Address Line 1 <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="address1"
            value={address1}
            placeholder="Enter Address Line 1"
            className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-200 outline-none mb-2"
            autoComplete="off"
            onChange={(e) => setAddress1(e.target.value)}
          />

          <label
            htmlFor="address2"
            className="block text-gray-700 font-medium mb-1"
          >
            Address Line 2
          </label>
          <input
            type="text"
            id="address2"
            value={address2}
            placeholder="Enter Address Line 2"
            className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-200 outline-none mb-2"
            autoComplete="off"
            onChange={(e) => setAddress2(e.target.value)}
          />

          <label
            htmlFor="PinCode"
            className="block text-gray-700 font-medium mb-1"
          >
            Pin Code <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="PinCode"
            value={pinCode}
            placeholder="Enter Pin Code"
            className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-200 outline-none"
            autoComplete="off"
            onChange={(e) => setPinCode(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Modification;
