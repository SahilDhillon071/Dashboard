import React from "react";
import {

  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import {  useNavigate } from "react-router-dom";


function Header({ OpenSidebar }) {
  const navigate = useNavigate();
  // const val = useContext(AuthContext);
  // const { auth } = useContext(AuthContext);
  // console.log(auth,"setAuth");home
  const handleLogout = () => {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // setAuth(false);

    navigate("/login");
  };
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>

      {/* <Link to='/logout'> */}
      <div
        className="header-right"
        style={{ cursor: "pointer" }}
        onClick={() => handleLogout()}
      >
        <BsPersonCircle className="icon" />
        Logout
      </div>
      {/* </Link> */}
    </header>
  );
}

export default Header;
