import { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const [user, setUser] = useState(true);

    if (!user) {
        return <Navigate to="/" />; 
    }

  return children
}

export default PrivateRoute