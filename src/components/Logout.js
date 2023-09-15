import React, { useContext } from "react";
import { AuthContext } from "./Login";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { auth,  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    auth.setAuth(false);

    navigate("/login");
  };

  return (
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
