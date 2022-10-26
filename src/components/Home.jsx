import React from "react";
import img from "../img/img.jpg"
import img2 from "../img/img2.png"
import img3 from "../img/img3.jpg"
import NavBar from "./NavBar";
import styled from "styled-components";
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


const HomeStyled = styled.div`
  .carousel {
    height: 100vh;
    .react-multi-carousel-track{
      height: 100%;
    }
    .react-multi-carousel-dot-list{
      margin-bottom: 1.5%;
      transform: scale(1.5);
    }

    /* .item {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
      .textCont {
        font-size: xx-large;
        width: 38%;
        text-align: center;
        position: absolute;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        & h1 {
          text-transform: uppercase;
          color: #FFFFFF;
          line-height: 100%;
          text-shadow: 2px 2px #909090;
          font-weight: 500;
        }
        & button {
          text-transform: uppercase;
          color: #FFFFFF;
          background: none;
          transform: scale(3);
          border: #FFFFFF solid 1px;
          font-size: 0.4rem;
          padding: 1% 2.5%;
          :hover {
            transition: 1s;
            background: #FFFFFF;
            opacity: 80%;
            color: black;
            cursor: pointer;
          }
        }
      }
    } */
  }
`;

const SliderStyled = styled.div`
  .item {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
  
      img {
        width: 100%;
        height: 100%;
      }
  }
`

const TextCenter = styled.div`
  text-align: center;
  font-size: x-large;
  position: absolute;
  top: 30%;
  left: 30%;
  display: flex;
  flex-direction: column;
  width: 42%;
  height: 65% ;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: white;
    text-transform: uppercase;
    text-shadow: rgb(144 144 144) 2px 2px;
    font-weight: 500;
  }

  button {
    color: rgb(255, 255, 255);
    background: none;
    font-size: 0.3rem;
    padding: 1% 2%;
    border: 1px solid rgb(255, 255, 255);
    transform: scale(3);
    text-transform: uppercase;
    cursor: pointer;
  }
`

const Home = () => {
 
  return (
    <HomeStyled>
      <NavBar />

      <Carousel className="carousel" responsive={responsive}>
        <SliderStyled>
          <TextCenter>
            <h1>
              Estár cómodo, nunca fue tan fácil.
            </h1>
            <button>Shop</button>
          </TextCenter>    
            <img src={img} alt="img_home" />
        </SliderStyled>
        <SliderStyled>
          <TextCenter>
            <h1>
              Estár cómodo, nunca fue tan fácil.
            </h1>
            <button>Shop</button>
          </TextCenter>    
            <img src={img2} alt="img_home" />
        </SliderStyled>
        <SliderStyled>
          <TextCenter>
            <h1>
              Estár cómodo, nunca fue tan fácil.
            </h1>
            <button>Shop</button>
          </TextCenter>    
            <img src={img3} alt="img_home" />
        </SliderStyled>
      </Carousel>
    </HomeStyled>
  )
};

export default Home;