import styled from "styled-components";

export const ProductStyled = styled.div`
  display: flex;
  .imgStyled {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80vh;
    clip-path: ${({ position }) => (position === "left" ? "polygon(100% 0, 100% 48%, 98% 50%, 100% 52%, 100% 100%, 0 100%, 0 0)" : "polygon(0 48%, 0 0, 100% 0, 100% 100%, 0 100%, 0 52%, 2% 50%)")};
    order: ${({ position }) => (position === "left" ? 0 : 1)};

    :hover{
      opacity: 75%;
    
      button {
        display: block;
      }
    }

    button {
      display: none;
      position: absolute;
      background: none;
      color: white;
      border: white solid 1px;
      font-size: 0.3rem;
      letter-spacing: .2em;
      transform: scale(3);
      padding: 0.5% 1%;
  
      :hover {
        transition: 1s;
        background: white;
        color: grey;
        cursor: pointer;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .detailStyled {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    
    .detailStyled2 {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 60%;
      height: 60%;

      img {
        width: 28%;
        height: 28%;
      }

      h3 {
        font-family: 'Segoe UI';
        font-size: 2rem;
        font-weight: 400;
      }

      hr {
        color: grey;
        width: 8%;
      }

      p {
        font-family: 'Segoe UI';
        font-size: small;
        width: 52%;
        text-align: center;
        font-weight: 500;
      }

      button {
        margin-top: 4%;
        font-family: 'Segoe UI';
        font-size: small;
        letter-spacing: .2em;
        border: none;
        background-color: #FFFFFF;
        text-transform: uppercase;
      
        :hover {
          transform: scale(1.1);
          transition: 0.5s;
          cursor: pointer;
			  }
      }
    }
  }
`