import styled from "styled-components";

export const NewsletterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe UI';

  h4 {
		color: #adadad;
		font-size: small;
    letter-spacing: .1em;
		font-weight: 400;
		margin: 5% 0% 0% 0%;
		text-transform: uppercase;
	}

	h2 {
    font-size: 2rem;
		font-weight: 400;
    letter-spacing: .1em;
		margin: 0;
    text-transform: uppercase;
	}

  span {
    font-size: small;
    font-weight: 500;
  }

  form {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 45%;
    margin-top: 1%;
    padding-left: 2%;
  }

  input {
    font-size: small;
    font-weight: 500;
    width: 100%;
    height: 2rem;
    padding-left: 3%;
  }

  button {
    position: absolute;
    border: none;
    background: none;
    width: 3%;
    margin-right: 0.5%;
  }

  .error {
    color: red;
    margin-top: 1%;
  }
`;