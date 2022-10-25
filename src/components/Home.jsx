import React from "react";
import img from "../img/img.jpg"
import NavBar from "./NavBar";
//UN CARRUSEL

const Home = () => {
 
  return (
    <div>
      <NavBar />
      <img src={img} alt="img_home" />
    </div>
  )
};

export default Home;