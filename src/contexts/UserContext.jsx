import { createContext, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const userContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(true);

  const [userType, setUserType] = useState("User");
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
  };
  return (
    <userContext.Provider value={values}>{props.children}</userContext.Provider>
  );
};

export default userContext;
