import styled from "styled-components";

export const FooterStyled = styled.div`
  font-family: 'Segoe UI';
  margin-top: 7%;
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 2.5% 2%;
  box-shadow: 0px 0px 25px 0px rgb(0 0 0 / 8%);

  ul {
    list-style: none;
    font-weight: 600;
    text-transform: uppercase;
  }

  li {
    font-size: x-small;
    font-weight: 600;
    letter-spacing: .1em;
    line-height: 1.6;
    cursor: pointer;
    margin-bottom: 5%;
    text-transform: uppercase;
  }

  .liPufi{
    line-height: 2;
  }

  .ulContacto{
    padding: 0;
  }

  .compraSegura {
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    width: 20%;
    padding-left: 0px;
    padding-top: 1%;

    span {
      display: flex;
      justify-content: center;
      font-size: x-small;
      font-weight: 600;
      letter-spacing: .1em;
      line-height: 1.6;
      text-transform: uppercase;
    }

    .fiscalGarantia {
      display: flex;
      justify-content: center;
      padding-top: 8%;

      img{
        width: 2rem;
        height: 2.5rem;
        margin-top: 3%;
      }

      span {
        font-style: italic;
        font-weight: 400;
        width: 35%;
        text-transform: uppercase;
      }
    }
  }

  .redes {
    display: flex;
    flex-direction: row;
    padding-right: 10%;
    text-transform: uppercase;
    padding-top: 1%;

    span {
      display: flex;
      justify-content: center;
      font-size: x-small;
      font-weight: 600;
      letter-spacing: .1em;
      line-height: 1.6;
      text-transform: uppercase;
    }

    .icons{
      padding-right: 0%;
      cursor: pointer;
    }
  }

`;

export const Title = styled.h1`
  font-family: 'Quenda';
  font-size: x-large;
  padding-left: 12px;
  line-height: 1.75rem;
  font-weight: 600;
  width: 15%;
  cursor: pointer;
`;

export const FooterStyled2 = styled.div`
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
`;