import React from "react";
import { ProductStyled } from "../styles/products";

const Products = ({ image1, image2, name, position }) => {
  return (
    <ProductStyled position={position} name={name}>
      <div className="imgStyled" >
        <button>SHOP</button>
        <img src={image1} alt="" />
      </div>
      <div className="detailStyled">
        <div className="detailStyled2">
          <img src={image2} alt="" />
          <h3>{name}</h3>
          <hr />
          <p>Descripción del producto. Este es un texto simulado</p>
          <button>{"> Ver mas"}</button>
        </div>
      </div>
    </ProductStyled>
  )
}

export default Products;