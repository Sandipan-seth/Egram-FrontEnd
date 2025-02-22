import { createContext, useState } from "react";

const userContext = createContext();

export const UserProvider = (props) => {
  const [userType, setUserType] = useState("user");
  const [username, setUsername] = useState("");

  let temp = localStorage.getItem("token");
  const [token, setToken] = useState(temp);

  const backendUrl = import.meta.env.BACKEND_URL;
  const [userData, setUserData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState([]);

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
    showForm,
    setShowForm,
    services,
    setServices,
  };
  return (
    <userContext.Provider value={values}>{props.children}</userContext.Provider>
  );
};

export default userContext;
