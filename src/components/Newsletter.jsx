import React, { useState } from "react";
import { NewsletterStyled } from "../styles/newsletter";
import { BsArrowRight } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';

const validate = (input) => {
  let error = "";
  if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input)) error = "Insert a valid email. For example: foo-bar.baz@example.com";
  return error;
};

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");


  const handleChange = e => {
    e.preventDefault(e);
    setEmail(e.target.value);
    setError(validate(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault(e);
    if (email === "") toast.error("Email is required.");
    else if (error !== "") toast.error("Insert a valid email.");
    else toast.success("Email sent.");
  }

  return (
    <NewsletterStyled>
      <h4>Newsletter</h4>
      <h2>Suscribete</h2>
      <span>Y enterate de todas las novedades</span>
      <form onSubmit={e => handleSubmit(e)}>
        <input 
          type="email" 
          placeholder="Ingresa tu email" 
          value={email} 
          onChange={e => handleChange(e)}
        />
        <button type="submit">
          <BsArrowRight size={18} />
        </button>
      </form>
      <span className="error">{error}</span>
    </NewsletterStyled>
  )
};

export default NewsLetter;