import React from "react";
import styled from "styled-components";
import ListProducts from "./ListProducts";

const Header = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  z-index: 100;
  width: 100%;
`
const Title = styled.h1`
  padding-left: 8px;
  color: white;
  font-size: 28px;
  font-weight: 700;
  cursor: pointer;
`

const NavBar = () => {
 

  return (
    <Header>
      <Title>PUFI®</Title>

      <ListProducts />      

      <ul>
        <li>
          <span>MI CUENTA</span>

        </li>
        <hr/>
        <li>
          <span>MI COMPRA</span>
        </li>
      </ul>

    </Header>
  )
};

export default NavBar;