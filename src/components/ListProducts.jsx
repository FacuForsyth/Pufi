import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import iconpuff from '../img/icons/icon-puff.png';
import iconcart from '../img/icons/icon-cart.png';
import iconnap from '../img/icons/icon-nap.png';
import iconrain from '../img/icons/icon-rain.png';

const ListProd = styled.ul`
  display: flex;
  list-style: none;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  li {
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    cursor: pointer;
    font-size: medium;
    color: white;
    text-transform: capitalize;
  
    &:hover {
      transform: scale(1.05);
      transition-duration: 200ms;
    }
  }
` 

const ListProducts = () => {

  const products = [
    {
      id: 1,
      prod: (
        <div>
          <img src={iconpuff} alt="icon_puff" />
          PUFI PUFF
        </div>
      )
    },
    {
      id: 2,
      prod: (
        <div>
          <img src={iconrain} alt="icon_rain" />
          PUFI RAIN
        </div>
      )
    },
    {
      id: 3,
      prod: (
        <div>
          <img src={iconcart} alt="icon_cart" />
          PUFI CART
        </div>
      )
    },
    {
      id: 4,
      prod: (
        <div>
          <img src={iconnap} alt="icon_nap" />
          PUFI NAP
        </div>
      )
    },
  ];

  return (
    <ListProd>
      {products.map(({ id, prod }) => (
        <li
          key={id}
        >
          <Link to={prod} smooth duration={500}>
            {prod}
          </Link>
        </li>
      ))}
    </ListProd>
  )
};

export default ListProducts;