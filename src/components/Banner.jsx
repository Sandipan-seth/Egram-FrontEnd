import React, { useContext } from "react";
import { useHref, useNavigate } from "react-router-dom";
import userContext from "../contexts/UserContext";
import { assets, services } from "../assets/assets_frontend/assets";

const Banner = () => {
  const navigate = useNavigate();
  const { token } = useContext(userContext);
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="text-center bg-blue-500 rounded-xl text-white py-8 w-full shadow-xl shadow-blue-300">
        <h1 className="text-4xl font-bold">
          Welcome to Easy Document Services
        </h1>
        <p className="text-lg mt-2">
          Your one-stop solution for Aadhar, Voter, PAN Card services and more
        </p>
        <button
          className={`bg-white text-black sm:w-1/4 w-3/4 py-3 mt-10 rounded-md text-xl cursor-pointer hover:bg-gray-300 transition-all duration-200`}
          onClick={() => {
            if (token) {
               document
                 .getElementById("section")
                 .scrollIntoView({ behavior: "smooth" });
            } else {
              navigate("/login");
            }
          }}
        >
          {token ? "Book Services" : "Create an Account"}
        </button>
      </header>

      <section className="services-section flex flex-col justify-center gap-5 items-center my-12 px-4 w-full max-w-6xl" id="section">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Our Popular Services
        </h2>
        <div className="flex flex-col w-full h-fit gap-10 ">
          {services.slice(0, 3).map((item, index) => {
            return (
              <div
                key={index}
                className="service-card bg-white shadow-md rounded-lg w-full text-center flex md:flex-row flex-col-reverse border border-gray-300 items-center justify-around p-10 hover:shadow-2xl"
              >
                <div className="text-center md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {item.description}
                  </p>
                  <button className="hover:bg-blue-500 border border-blue-800 hover:text-white py-2 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-300"
                  onClick={()=>{
                    if(token){
                      navigate(`/all-works/${item.id}`);
                    }
                    else{
                      navigate("/login");
                    }
                  }}>
                    Book Now
                  </button>
                </div>
                <img
                  className="md:w-1/3 w-full rounded-lg shadow-lg border border-gray-200"
                  src={item.image}
                  alt="Aadhar Card Services"
                />
              </div>
            );
          })}
        </div>

        <button className="bg-blue-500 border border-blue-500 text-white py-2 px-6 md:w-1/4 rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-300"
        onClick={()=>{
          if(token){
            scrollTo(0, 0);
            navigate("/all-works");
          }
          else{
            scrollTo(0, 0);
            navigate("/login");
          }
        }}>
          View All Services
        </button>
      </section>
    </div>
  );
};

export default Banner;
