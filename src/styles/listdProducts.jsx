import styled from "styled-components";


export const ListProd = styled.ul`
  display: flex;
  list-style: none;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  li {
    font-family: 'Segoe UI';
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    cursor: pointer;
    font-size: medium;
    color: white;
    text-transform: capitalize;
  
    &:hover {
      transform: scale(1.05);
      transition-duration: 200ms;
    }
  }
` 