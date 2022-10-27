import styled from "styled-components";

export const HomeStyled = styled.div`
  .carousel {
    height: 100vh;
    width: 100%;
    .react-multi-carousel-track{
      height: 100%;
      width: 100%;
    }
    .react-multi-carousel-dot-list{
      margin-bottom: 1.5%;
      transform: scale(1.5);
    }
  }
`;

export const SliderStyled = styled.div`
  width: 100%;
  height: 100%;
  
  /* img {
    width: 100%;
    height: 100%;
  } */

  .textButton{
    text-align: center;
    font-size: x-large;
    position: absolute;
    top: 30%;
    left: 29%;
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 50%;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-family: 'Segoe UI';
      line-height: 1;
      color: white;
      text-transform: uppercase;
      text-shadow: rgb(144 144 144) 2px 2px;
      font-weight: 400;
    }

    button {
      color: rgb(255, 255, 255);
      background: none;
      font-size: 0.3rem;
      letter-spacing: .2em;
      padding: 1% 2%;
      border: 1px solid white;
      transform: scale(3);
      text-transform: uppercase;
      cursor: pointer;
      
      :hover {
        background: white;
        color: grey;
        opacity: 75%;
        transition: 1s;
        cursor: pointer;
      }
    }
  }
`;