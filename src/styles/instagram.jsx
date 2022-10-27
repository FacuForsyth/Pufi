import styled from "styled-components";

export const InstagramStyled = styled.div`
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
    letter-spacing: .1em;
		font-weight: 400;
		margin: 0% 0% 3% 0%;
	}
	
  ul {
		display: flex;
		flex-wrap: wrap;
		width: 45%;

		li {
			list-style-type: none;
			width: 32%;
			height: 50%;
			margin-left: 0.5%;
		
      :hover {
				opacity: 50%;
				transition: 0.5s;
				cursor: pointer;
			}
		
      img {
				width: 100%;
				height: 100%;
			}
		}
	}
`