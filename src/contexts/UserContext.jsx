import { createContext, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const userContext = createContext();





export const UserProvider = (props) => {

  const [userType, setUserType] = useState("user");
  const [username, setUsername] = useState("");


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
    backendUrl,
    username,
    setUsername,
  };
  return (
    <userContext.Provider value={values}>{props.children}</userContext.Provider>
  );
};

export default userContext;
