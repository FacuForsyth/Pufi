import React from "react";
import { InstagramStyled } from "../styles/instagram";
import imgInsta1 from "../img/Instagram/insta1.png"
import imgInsta2 from "../img/Instagram/insta2.png"
import imgInsta3 from "../img/Instagram/insta3.png"
import imgInsta4 from "../img/Instagram/insta4.png"
import imgInsta5 from "../img/Instagram/insta5.png"
import imgInsta6 from "../img/Instagram/insta6.png"

const Instagram = () => {
  return (
    <InstagramStyled>
      <h4>INSTAGRAM</h4>
					<h2>#ESPUFI</h2>
					<ul>
						<li>
							<img src={imgInsta1} alt="instagram1" />
						</li>
						<li>
							<img src={imgInsta2} alt="instagram2" />
						</li>
						<li>
							<img src={imgInsta3} alt="instagram3" />
						</li>
						<li>
							<img src={imgInsta4} alt="instagram4" />
						</li>
						<li>
							<img src={imgInsta5} alt="instagram5" />
						</li>
						<li>
							<img src={imgInsta6} alt="instagram6" />
						</li>
					</ul>
    </InstagramStyled>
  )
};

export default Instagram