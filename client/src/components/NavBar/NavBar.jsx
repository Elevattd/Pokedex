import React from 'react';
import './styled/NavBar.css';
import POKEAPI_BANNER from '../../assets/images/pokeapi.png';
import { Link } from 'react-router-dom';
import pokeball from '../../assets/images/blue-btn.png';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../actions';
import btnRed from '../../assets/images/navbar/red.png';
import btnYellow from '../../assets/images/navbar/yellow.png';
import btnGreen from '../../assets/images/navbar/green.png';

const NavBar = () => {
	const dispatch = useDispatch();
	return (
		<nav>
			<div className="goLanding">
				<Link to={'/'}>
					<img src={pokeball} alt="pokeball" height="80" width="80" />
				</Link>
			</div>
			<div>
				<Link to={'/home'}>
					<button
						className="btn-pokeapiBaner"
						type="button"
						onClick={() => dispatch(getPokemons())}
					>
						<img
							src={POKEAPI_BANNER}
							alt="pokeapi-logo"
							className="navbar-image"
						/>
					</button>
				</Link>
			</div>

			<div>
				<Link to={'/pokemons/create'}>
					<div>
						<img src={btnRed} alt="btn-red" height="25" width="25" />
						<img src={btnYellow} alt="btn-yellow" height="25" width="25" />
						<img src={btnGreen} alt="btn-green" height="25" width="25" />
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
