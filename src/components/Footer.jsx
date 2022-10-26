import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
//import { Title } from "./NavBar"; //VER COMO PASARLE PROP PARA Q SEA MAS CHICO
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa"
import { BiShieldQuarter } from "react-icons/bi"
import imgDataFiscal from "../img/Data-fiscal.jpg"
import imgBrandlive from "../img/Brandlive.png"

const FooterStyled = styled.div`
  
  background-color: white;
  border-top: 1px solid;
  border-color: gray;
  display: flex;
  flex-direction: row;
  padding: 2.5% 2%;

  ul {
    list-style: none;
    font-weight: 600;
    /* margin-right: 10%; */
    /* width: 10%; */
    /* border-right: solid 1px #adadad; */
    /* padding: 0 0 0 5%; */

  }
  li {
    font-size: x-small;
    cursor: pointer;
    margin-bottom: 5%;
  }
  span {
    font-size: x-small;
    cursor: pointer; 
  }

  .listProd {

  }

  .compraSegura {
    /* display: flex;
    flex-direction: row; */
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    width: 20%;
    /* border-right: solid 1px #adadad; */
    /* padding-left: 5%; */
    padding-right: 0px;
  
    .fiscalGarantia {
      /* display: flex;
      flex-direction: row; */
      display: flex;
      align-items: center;

      img{
        width: 2rem;
        height: 3rem;
        margin-top: 3%;
      }

      span {
        font-style: italic;
        font-weight: 400;
        width: 25%;
      }
    }
  }

  .redes {
    font-weight: 600;
    display: flex;
    flex-direction: row;
    padding-right: 10%;
    /* width: 20%; */
    /* padding-left: 5%; */

    .icons{
      /* margin-left: 3%; */
    margin-top: -1%;
    }
  }

`
export const Title = styled.h1`
  padding-left: 12px;
  font-size: x-large;
  line-height: 1.75rem;
  font-weight: 700;
  width: 15%;
  cursor: pointer;
`

const FooterStyled2 = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 0.5% 0%; */


  span {
    margin-left: 2%;
    font-size: xx-small;
    color: gray;
  }
  
  img {
    margin-right: 2%;
    width: 4rem;
    height: 2rem;
  }
`

const Footer = () => {

  return(
    <div>
    <FooterStyled>
      <Title>PUFI®</Title>

      <div className="listProd">
        <ul>
          <li key={1}>
            <Link to="PUFI PUFF" smooth duration={500}>
              PUFI PUFF
            </Link>
          </li>
          <li key={2}>
            <Link to="PUFI RAIN" smooth duration={500}>
              PUFI RAIN
            </Link>
          </li>
          <li key={3}>
            <Link to="PUFI CART" smooth duration={500}>
              PUFI CART
            </Link>
          </li>
          <li key={4}>
            <Link to="PUFI NAP" smooth duration={500}>
              PUFI NAP
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <ul className="list">
        <li>CONTACTO</li>
        <li>AYUDA</li>
        <li>CÓMO COMPRAR</li>
        <li>TÉRMINOS & CONDICIONES</li>
      </ul>
      <hr />
      <div className="compraSegura">
      <span>COMPRA 100% SEGURA</span>
        <div className="fiscalGarantia">
          <img className="QRIMG" src={imgDataFiscal} alt="data_fiscal" />
          <BiShieldQuarter size={60} />
          <span>COMPRÁ CON LA GARANTÍA DE PUFI</span>
        </div>
      </div>
      <hr />
      <div className="redes">
        <span>SEGUINOS EN</span>
        <div className="icons">
          <FaFacebookSquare size={20} />
          <FaTwitter size={20} />
          <FaInstagram size={20} />
        </div>
      </div>
      </FooterStyled>
      <hr />
      <FooterStyled2>
        <span>PUFI Copyright 2017 - Todos los derechos reservados</span>
        <img src={imgBrandlive} alt="" />
      </FooterStyled2>
    </div>
  )
}

export default Footer;