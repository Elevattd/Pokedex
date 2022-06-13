import React from 'react';
import { Link } from 'react-router-dom';
import './styled/Landing.css';
import POKEMON_BANNER from '../assets/images/pokemon-landing-page.png';
import POKEMON_POKEBALL_BTN from '../assets/images/button-pokeball.png';
import GITHUB from '../assets/images/footer/github.png';
import DISCORD from '../assets/images/footer/discord.png';
import LINKEDIN from '../assets/images/footer/linkeding.png';

const Landing = () => {
	return (
		<div className="landing-container">
			<div className="mid-container">
				<div className="landing-banner">
					<img src={POKEMON_BANNER} alt="landing" />
				</div>
				<div className="landing-footer">
					<div className="landing-btn">
						<Link path to={'/home'}>
							<button className="welcome-btn">
								<img src={POKEMON_POKEBALL_BTN} alt="button" />
							</button>
						</Link>
					</div>
					<div className="handSelect">👈</div>
				</div>
			</div>
			<footer className="social-media">
				<a href="https://github.com/Elevattd" target="_blank" rel="noreferrer">
					<img src={GITHUB} alt="github" width="60px" height="60px" />
				</a>
				<a
					href="https://discord.com/users/Elevattd"
					target="_blank"
					rel="noreferrer"
				>
					<img src={DISCORD} alt="discord" width="60px" height="60px" />
				</a>
				<a
					href="https://www.linkedin.com/in/mariano-dunand/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={LINKEDIN} alt="linkedin" width="60px" height="60px" />
				</a>
			</footer>
		</div>
	);
};

export default Landing;
