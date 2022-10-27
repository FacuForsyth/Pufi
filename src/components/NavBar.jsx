import React from "react";
import ListProducts from "./ListProducts";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Header, Title, ListAdm } from "../styles/navBar";

const NavBar = () => {

  return (
    <Header>
      <Title>PUFI®</Title>
      <ListProducts />      
      <ListAdm>
        <ul>
          <li>
            <span>MI CUENTA <MdOutlineKeyboardArrowDown size={10}/></span>
          </li>
          <hr />
          <li>
            <span>MI COMPRA</span>
          </li>
        </ul>
      </ListAdm>
    </Header>
  )
};

export default NavBar;