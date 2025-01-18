import { createContext, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import axios from "axios";

const userContext = createContext();





export const UserProvider = (props) => {


  const userVerify = async (token) => {
    try {
      if (localStorage.getItem("token") === null) {
        localStorage.setItem("token", "");
      } else {
        let res = await axios.post(`http://localhost:7000/api/auth/decode`, {
          token,
        });
        setUserType(res.data.user.role);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const [userType, setUserType] = useState("user");
  userVerify(localStorage.getItem("token"));


  let temp = localStorage.getItem("token");
  const [token, setToken] = useState(temp);

  const backendUrl = import.meta.env.BACKEND_URL;
  const [userData, setUserData] = useState({
    name: "Sandipan Seth",
    image: assets.profile_pic,
    email: "hospital@gmail.com",
    phone: "9163028419",
    address: {
      line1: "Konnagar",
      line2: "West Bengal",
      pincode: "712246",
    },
    gender: "Male",
    dob: "2004-05-16",
  });

  const values = {
    userData,
    setUserData,
    token,
    setToken,
    userType,
    setUserType,
    backendUrl
  };
  return (
    <userContext.Provider value={values}>{props.children}</userContext.Provider>
  );
};

export default userContext;
