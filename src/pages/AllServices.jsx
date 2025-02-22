import React, { useContext, useEffect } from "react";
import { services } from "../assets/assets_frontend/assets";
import userContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const AllServices = () => {
  const { token } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className={`${
          !token ? "flex" : "hidden"
        } fixed inset-0 md:inset-16 z-40 bg-white bg-opacity-90 items-center justify-center`}
      >
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

      <h2
        className={`${
          token ? "block" : "hidden"
        } text-4xl font-semibold text-center mb-8`}
      >
        Services We Provide
      </h2>
      <div
        className={`${
          token ? "block" : "hidden"
        } flex flex-col w-full h-fit gap-10 `}
      >
        {services.map((item, index) => {
          return (
            <div
              key={index}
              className="service-card bg-white shadow-md rounded-lg w-full text-center flex md:flex-row flex-col-reverse border border-gray-300 items-center justify-around p-10 hover:shadow-2xl"
            >
              <div className="text-center md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <button
                  className="hover:bg-blue-500 border border-blue-800 hover:text-white py-2 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-300 "
                  onClick={() => {
                    navigate(`/all-works/${item.id}`);
                  }}
                >
                  Book Now
                </button>
              </div>
              {item.image ? (
                <img
                  className="md:w-1/3 w-full rounded-lg shadow-lg border border-gray-200"
                  src={item.image}
                  alt=""
                />
              ) : null}
            </div>
          );
        })}

        <div className="service-card bg-white shadow-md rounded-lg w-full text-center flex md:flex-row flex-col-reverse border border-gray-300 items-center justify-around p-10 hover:shadow-2xl">
          <div className="text-center md:w-2/3">
            <h3 className="text-2xl font-bold mb-3">Other Services</h3>
            <p className="text-gray-600 mb-4 text-sm">
              For Other Services You can Contact Us
            </p>
            <button
              className="hover:bg-blue-500 border border-blue-800 hover:text-white py-2 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-300 "
              onClick={() => {
                navigate(`/contact`);
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
