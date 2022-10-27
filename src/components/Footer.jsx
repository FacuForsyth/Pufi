import React from "react";
import { FooterStyled, Title, FooterStyled2 } from "../styles/footer";
import { Link } from "react-scroll";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa"
import { BiShieldQuarter } from "react-icons/bi"
import imgDataFiscal from "../img/Data-fiscal.jpg"
import imgBrandlive from "../img/Brandlive.png"

const Footer = () => {

  return(
    <div>
    <FooterStyled>
      <Title>PUFI®</Title>
      <div className="listProd">
        <ul className="ulPufi">
          <li key={1} className="liPufi">
            <Link to="Pufi PUFF" smooth duration={500}>
              PUFI PUFF
            </Link>
          </li>
          <li key={2} className="liPufi">
            <Link to="Pufi RAIN" smooth duration={500}>
              PUFI RAIN
            </Link>
          </li>
          <li key={3} className="liPufi">
            <Link to="Pufi CART" smooth duration={500}>
              PUFI CART
            </Link>
          </li>
          <li key={4} className="liPufi">
            <Link to="Pufi NAP" smooth duration={500}>
              PUFI NAP
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <ul className="ulContacto">
        <li>Contacto</li>
        <li>Ayuda</li>
        <li>Cómo comprar</li>
        <li>Términos & Condiciones</li>
      </ul>
      <hr />
      <div className="compraSegura">
        <span>Compra 100% segura</span>
        <div className="fiscalGarantia">
          <img className="QRIMG" src={imgDataFiscal} alt="data_fiscal" />
          <BiShieldQuarter size={45} />
          <span>Comprá con la garantía de Pufi</span>
        </div>
      </div>
      <hr />
      <div className="redes">
        <span>Seguinos en</span>
        
          <FaFacebookSquare size={20} className="icons" />
          <FaTwitter size={20} className="icons" />
          <FaInstagram size={20} className="icons" />
        
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