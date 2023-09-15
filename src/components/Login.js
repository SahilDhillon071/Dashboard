import React, { createContext, useState, } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  ${'' /* background-color: #f5f5f5; */}
`;

const LoginBox = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #e5e7eb;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const InputField = styled.input`
  width: 92%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const LogoutButton = styled.button`
  margin-top: 20px;
  background-color: #dc3545;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #bd2130;
  }
`;

export const AuthContext = createContext();

export function Login() {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    const { username, password } = credentials;

    if (username === "Admin" && password === "admin123") {
      const token = "your-generated-jwt-token";

      document.cookie = `jwt=${token}; path=/;`;

      setAuth(true);
      navigate("/home");
    } else {
      console.error("Login failed: Invalid credentials");
    }
  };
  const handleLogout = () => {
    alert("yuyuyyuyyuuys");
    
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
    <LoginContainer>
      <LoginBox>
        <h2>Login</h2>
        <InputField
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <InputField
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button style={{width:'100px', padding:'10px',backgroundColor: '#007bff', color: '#ffffff', border: 'none' }} onClick={handleLogin}>Login</button>
      </LoginBox>
      {auth && (
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      )}
    </LoginContainer>
  </AuthContext.Provider>
  
  );
}

export default Login;
