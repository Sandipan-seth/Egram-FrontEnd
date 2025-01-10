import { createContext, useState } from "react";

const userContext = createContext();

export const UserProvider = (props)=>{
    const [token, setToken] =useState(true);
    
  const [userType, setUserType] = useState("User");

    const values = {
        token,
        setToken,
        userType,
        setUserType
    };
    return(
        <userContext.Provider value={values}>
            {props.children }
        </userContext.Provider>
    );
};




export default userContext;