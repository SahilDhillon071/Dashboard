import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./Login";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const { Component } = props;

  useEffect(() => {
    // let login = user;
    const myCookieValue = Cookies.get("jwt");
    // console.log(myCookieValue,"myCookieValue");
    if (!myCookieValue) {
      navigate("/login");
    }
  });

  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
