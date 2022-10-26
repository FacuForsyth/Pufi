import React from "react";
//import { ProductsCont } from "../Styles/ProductsStyle";
import styled from "styled-components";

const ProductStiled = styled.div`
  display: flex;
  .imgCont {
    width: 50%;
    height: 80vh;
    clip-path: ${({ position }) => (position === "left" ? "polygon(100% 0, 100% 48%, 98% 50%, 100% 52%, 100% 100%, 0 100%, 0 0)" : "polygon(0 48%, 0 0, 100% 0, 100% 100%, 0 100%, 0 52%, 2% 50%)")};
    order: ${({ position }) => (position === "left" ? 0 : 1)};
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
      opacity: 80%;
      button {
        display: block;
      }
    }
    button {
      position: absolute;
      display: none;
      color: #FFFFFF;
      background: none;
      transform: scale(3);
      border: #FFFFFF solid 1px;
      font-size: 0.4rem;
      padding: 0.5% 1%;
      :hover {
        transition: 1s;
        background: #FFFFFF;
        color: black;
        cursor: pointer;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .detailCont {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .subDetailCont {
      width: 60%;
      height: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      img {
        width: 26%;
        height: 32%;
      }
      h3 {
        font-size: 2.3rem;
        font-weight: 400;
      }
      hr {
        color: grey;
        width: 8%;
      }
      p {
        width: 45%;
        text-align: center;
        font-weight: 500;
      }
      button {
        border: none;
        background-color: #FFFFFF;
        font-size: 1rem;
        text-transform: uppercase;
        margin-top: 4%;
        :hover {
				transform: scale(1.1);
				transition: 0.5s;
				cursor: pointer;
			  }
      }
    }
  }
`

const Products = ({ image1, image2, name, position }) => {
  return (
    <ProductStiled position={position}>
      <div className="imgCont">
        <button>SHOP</button>
        <img src={image1} alt="" />
      </div>
      <div className="detailCont">
        <div className="subDetailCont">
          <img src={image2} alt="" />
          <h3>{name}</h3>
          <hr />
          <p>Descripción del producto. Este es un texto simulado</p>
          <button>{"> Ver mas"}</button>
        </div>
      </div>
    </ProductStiled>
  )
}

export default Products;