import React from "react";
import styled from "styled-components";
import ListProducts from "./ListProducts";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Header = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  z-index: 100;
  width: 100%;
  top: 0%;
`
const Title = styled.h1`
  padding-left: 12px;
  color: white;
  font-size: 2.5rem;
  line-height: 1.75rem;
  font-weight: 700;
  cursor: pointer;
`
const ListAdm = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-top: 0%;

  li {
    color: white;
    font-size: x-small;
    padding-left: 1rem;
    padding-right: 1rem;
    cursor: pointer;
  }
`

const NavBar = () => {
 

  return (
    <Header>
      <Title>PUFI®</Title>

      <ListProducts />      

      <ListAdm>
        <li>
          <span>MI CUENTA <MdOutlineKeyboardArrowDown size={10}/></span>
        </li>
        <hr/>
        <li>
          <span>MI COMPRA</span>
        </li>
      </ListAdm>

    </Header>
  )
};

export default NavBar;