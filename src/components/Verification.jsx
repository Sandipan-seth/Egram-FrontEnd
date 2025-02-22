import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modification from "./Modification";
import NewApply from "./NewApply";
import userContext from "../contexts/UserContext";

function Verification() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(userContext);


  const parameterConvertToWord = (w) =>
    w
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const [option, setOption] = useState("Change");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <>
      {token ? (
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Verification Page
          </h1>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Side */}
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => setOption("Change")}
                className={`py-2 px-4 rounded-md  ${
                  option === "Change"
                    ? "bg-green-500 text-white"
                    : "border border-green-400 hover:bg-green-200"
                }`}
              >
                Want to Change Details in {parameterConvertToWord(id)}?
              </button>
              <button
                onClick={() => setOption("New")}
                className={`py-2 px-4 rounded-md  ${
                  option === "New"
                    ? "bg-red-500 text-white"
                    : "border border-red-400 hover:bg-red-200"
                }`}
              >
                Want to Apply for a new {parameterConvertToWord(id)}?
              </button>
            </div>

            {/* Right Side */}
            <div>
              {option === "Change" ? (
                <Modification id={id} />
              ) : (
                <NewApply id={id} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex fixed inset-0 items-center justify-center bg-white bg-opacity-90 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 w-full max-w-md mx-4 md:mx-auto text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Login to View More
            </h1>
            <p className="text-gray-600 mb-6">
              Access our services by logging into your account.
            </p>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Verification;
