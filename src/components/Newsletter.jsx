import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
//import { NewsLetterCont } from "../Styles/NewsLetterStyle";
import styled from "styled-components";

export const NewsLetterCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
		margin: 5% 0% 0% 0%;
		color: #adadad;
		font-size: 1.2rem;
		font-weight: 400;
	}
	h2 {
		margin: 0;
		font-size: 3rem;
		font-weight: 400;
	}
  span {
    font-weight: 500;
  }
  form {
    margin-top: 1%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  input {
    width: 100%;
    height: 3rem;
    font-size: 1.2rem;
    padding-left: 2%;
  }
  button {
    position: absolute;
    border: none;
    background: none;
    width: 2%;
    margin-right: 0.5%;
  }
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .error {
    margin-top: 1%;
    color: #e63946;
  }
`;

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = input => {
    let error = "";
    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input)) error = "Insert a valid email. For example: foo-bar.baz@example.com";
    return error;
  }

  const handleChange = e => {
    setEmail(e.target.value);
    setError(validate(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault(e);
    if (email === "") alert("Email is required");
    else if (error !== "") alert("Insert a valid email");
    // En un caso real, aquí enviaríamos el email
    else alert("Email sent");
  }

  return (
    <NewsLetterCont>
      <h4>NEWSLETTER</h4>
      <h2>SUSCRIBITE</h2>
      <span>Y enterate de todas las novedades</span>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="email" placeholder="Ingresa tu email" value={email} onChange={e => handleChange(e)} ></input>
        <button type="submit">
          <BsArrowRight size={20} />
        </button>
      </form>
      <span className="error">{error}</span>
    </NewsLetterCont>
  )
}

export default NewsLetter;