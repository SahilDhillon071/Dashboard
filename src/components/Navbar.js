import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';




const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  ::selection {
    color: #000;
    background: #fff;
  }
`;

const Nav = styled.nav`
  position: fixed;
  background: #1b1b1b;
  width: 100%;
  padding: 10px 0;
  z-index: 12;
`;

const Menu = styled.div`
  max-width: 1250px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Logo = styled.div`
  a {
    text-decoration: none;
    color: #fff;
    font-size: 35px;
    font-weight: 600;
  }
`;

const Ul = styled.ul`
  display: inline-flex;
`;

const Li = styled.li`
  list-style: none;
  margin-left: 7px;
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: black;
  }
`;

const Img = styled.div`
  background: url('img3.jpg') no-repeat;
  width: 100%;
  ${'' /* height: 100vh; */}
  background-size: cover;
  background-position: center;
  position: relative;

  ${'' /* &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
  } */}
`;

// const Center = styled.div`
//   position: absolute;
//   top: 52%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 100%;
//   padding: 0 20px;
//   text-align: center;
// `;

// const Title = styled.div`
//   color: #fff;
//   font-size: 55px;
//   font-weight: 600;
// `;

// const SubTitle = styled.div`
//   color: #fff;
//   font-size: 52px;
//   font-weight: 600;
// `;

// const Btns = styled.div`
//   margin-top: 20px;
// `;

// const Button = styled.button`
//   height: 55px;
//   width: 170px;
//   border-radius: 5px;
//   border: none;
//   margin: 0 10px;
//   border: 2px solid white;
//   font-size: 20px;
//   font-weight: 500;
//   padding: 0 10px;
//   cursor: pointer;
//   outline: none;
//   transition: all 0.3s ease;

//   &:first-child {
//     color: #fff;
//     background: none;
//   }

//   &:first-child:hover {
//     background: white;
//     color: black;
//   }

//   &:last-child {
//     background: white;
//     color: black;
//   }
// `;

function Navbar() {
  return (
    <div>
      <GlobalStyle />
      <Nav>
        <Menu>
          <Logo>
            <a href="/">PET SHOP</a>
          </Logo>
          <Ul>
            <Li><A href="/">Home</A></Li>
            <Li><A href="/">About</A></Li>
            <Li><A href="/">Services</A></Li>
            <Li><A href="/">Contact</A></Li>
            <Link to='/login'><Li><A>Login</A></Li></Link>
          </Ul>
        </Menu>
      </Nav>
      <Img></Img>
      
    </div>
  );
}

export default Navbar;
