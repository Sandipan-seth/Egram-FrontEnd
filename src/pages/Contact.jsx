import React, { useEffect } from "react";


const Contact = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl p-6 md:p-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <div className="w-full flex flex-col-reverse md:flex-row gap-8">
          <div className="md:w-1/2 border border-gray-300 flex flex-col justify-center items-center rounded-md p-10 md:shadow-lg  shadow-red-300 transition-all duration-200 hover:shadow-red-400">
            <p className="text-gray-700 mb-2">
              <strong>Phone Number:</strong> +91 891064645
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> egram@gmail.com
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> 123, Main Street, City, Country
            </p>
          </div>
          <div className="md:w-1/2 border border-gray-300  rounded-md p-10 md:shadow-lg shadow-green-300 transition-all duration-200 hover:shadow-green-400">
            <form className="space-y-6" autoComplete="off">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none sm:text-sm"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
