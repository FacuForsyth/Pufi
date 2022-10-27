import React from "react";
import { ListProd } from "../styles/listdProducts";
import { Link } from "react-scroll";
import iconpuff from '../img/icons/icon-puff.png';
import iconcart from '../img/icons/icon-cart.png';
import iconnap from '../img/icons/icon-nap.png';
import iconrain from '../img/icons/icon-rain.png';

const ListProducts = () => {

  const products = [
    {
      id: 1,
      prod: (
        <div>
          <img src={iconpuff} alt="icon_puff" />
          PUFI PUFF
        </div>
      ),
      link: 'Pufi PUFF'
    },
    {
      id: 2,
      prod: (
        <div>
          <img src={iconrain} alt="icon_rain" />
          PUFI RAIN
        </div>
      ),
      link: 'Pufi RAIN'
    },
    {
      id: 3,
      prod: (
        <div>
          <img src={iconcart} alt="icon_cart" />
          PUFI CART
        </div>
      ),
      link: 'Pufi CART'
    },
    {
      id: 4,
      prod: (
        <div>
          <img src={iconnap} alt="icon_nap" />
          PUFI NAP
        </div>
      ),
      link: 'Pufi NAP'
    },
  ];

  return (
    <ListProd>
      {products.map(({ id, prod, link }) => (
        <li
          key={id}
        >
          <Link to={link} smooth duration={500}>
            {prod}
          </Link>
        </li>
      ))}
    </ListProd>
  )
};

export default ListProducts;