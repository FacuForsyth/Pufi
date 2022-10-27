import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  top: 0%;
  z-index: 100;
  width: 100%;
`
export const Title = styled.h1`
  font-family: 'Quenda';
  padding-left: 2rem;
  color: white;
  font-size: 3rem;
  line-height: 1.75rem;
  font-weight: 500;
  cursor: pointer;
`
export const ListAdm = styled.div`
  margin-top: 0;
  padding-right: 3rem;
  
  ul {
    display: flex;
    padding: 0;
    list-style: none;

    hr {
      margin: 0px 10px;
    }

    li {
      list-style-type: none;
      font-family: 'Segoe UI' ;
      letter-spacing: .2em;
      color: white;
      font-size: x-small;
      cursor: pointer;
      text-transform: capitalize;
      
      span {
        text-transform: capitalize;  
      }    
    }
  }
`