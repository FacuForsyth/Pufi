import React from "react";
import styled from "styled-components";
import imgInsta1 from "../img/Instagram/insta1.png"
import imgInsta2 from "../img/Instagram/insta2.png"
import imgInsta3 from "../img/Instagram/insta3.png"
import imgInsta4 from "../img/Instagram/insta4.png"
import imgInsta5 from "../img/Instagram/insta5.png"
import imgInsta6 from "../img/Instagram/insta6.png"


const InstagramStyled = styled.div`
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
		margin: 0% 0% 3% 0%;
		font-size: 3rem;
		font-weight: 400;
	}
	.InstagramImgList {
		display: flex;
		flex-wrap: wrap;
		width: 45%;
		.itemList {
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

const Instagram = () => {
  return (
    <InstagramStyled>
      <h4>INSTAGRAM</h4>
					<h2>#ESPUFI</h2>
					<ul className="InstagramImgList">
						<li className="itemList">
							<img src={imgInsta1} alt="" />
						</li>
						<li className="itemList">
							<img src={imgInsta2} alt="" />
						</li>
						<li className="itemList">
							<img src={imgInsta3} alt="" />
						</li>
						<li className="itemList">
							<img src={imgInsta4} alt="" />
						</li>
						<li className="itemList">
							<img src={imgInsta5} alt="" />
						</li>
						<li className="itemList">
							<img src={imgInsta6} alt="" />
						</li>
					</ul>
    </InstagramStyled>
  )
};

export default Instagram