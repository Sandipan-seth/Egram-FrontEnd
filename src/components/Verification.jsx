import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modification from "./Modification";
import NewApply from "./NewApply";

function Verification() {
  const { id } = useParams();

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
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Verification Page</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side */}
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => setOption("Change")}
            className={`py-2 px-4 rounded-md  ${
              option === "Change"
                ? "bg-green-400 text-white"
                : "border border-green-400 hover:bg-green-200"
            }`}
          >
            Want to Change Details in {parameterConvertToWord(id)}?
          </button>
          <button
            onClick={() => setOption("New")}
            className={`py-2 px-4 rounded-md  ${
              option === "New"
                ? "bg-red-400 text-white"
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
  );
}

export default Verification;
