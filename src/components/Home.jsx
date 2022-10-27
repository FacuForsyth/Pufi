import React from "react";
import { HomeStyled, SliderStyled } from "../styles/home";
import img from "../img/img.jpg"
import img2 from "../img/img2.png"
import img3 from "../img/img3.jpg"
import NavBar from "./NavBar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Home = () => {
 
  return (
    <HomeStyled>
      <NavBar />
      <Carousel 
        className="carousel" 
        responsive={responsive} 
        showDots={true}
        swipeable={false}
        draggable={false}
        slidesToSlide={1}
        removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
      >
        <SliderStyled>
          <div className="textButton">
            <h1>
              Estár cómodo, nunca fue tan fácil.
            </h1>
            <button>Shop</button>
          </div>    
            <img src={img} alt="img_home" className="img1"/>
        </SliderStyled>
        <SliderStyled>
          <div className="textButton">
            <h1>
              Estár cómodo, nunca fue tan fácil.
            </h1>
            <button>Shop</button>
          </div>    
            <img src={img2} alt="img_home" />
        </SliderStyled>
        <SliderStyled>
          <div className="textButton">
            <h1>
              Estár cómodo, nunca fue tan fácil.
            </h1>
            <button>Shop</button>
          </div>    
            <img src={img3} alt="img_home" />
        </SliderStyled>
      </Carousel>
    </HomeStyled>
  )
};

export default Home;