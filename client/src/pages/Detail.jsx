import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { clearPokemon, getPokemonDetails, getTypes } from '../actions';
import NavBar from '../components/NavBar/NavBar';
import Loader from '../Loader/Loader';
import typeImage from '../consts/index';
import './styled/Details.css';

const Detail = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const pokemon = useSelector((state) => state.details);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getPokemonDetails(id));
		dispatch(getTypes());
		return () => dispatch(clearPokemon());
	}, [dispatch, id]);

	useEffect(() => {
		if (pokemon.length && pokemon[0].hasOwnProperty('msg')) {
			navigate('/*');
		}
	}, [pokemon, navigate]);

	return (
		<div>
			<NavBar />
			<div className="container-card">
				<div className="pokemon-card">
					{pokemon.length > 0 ? (
						<div className="pokemon-topCard">
							<h1 className="pokemon-name">
								{pokemon[0].name.replace(
									pokemon[0].name.charAt(0),
									pokemon[0].name.charAt(0).toUpperCase(),
								)}
							</h1>

							<div className="pokemon-img">
								<img src={pokemon[0].image} alt={pokemon[0].name} />
							</div>
							<div className="pokemon-midCard">
								<div>
									<p>Pokemon Data</p>
									<ul>
										<li>
											<span>Height: {pokemon[0].height}</span>
										</li>
										<li>
											<span>Weight: {pokemon[0].weight}</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="pokemon-footCard">
								<p className="">Stadistics</p>
								<div>
									<div>
										<span>{`HP: ${pokemon[0].hp} `}</span>
										<progress max="255" value={pokemon[0].hp}>
											{pokemon[0].hp}
										</progress>
									</div>
									<div>
										<span>{`STR: ${pokemon[0].strength} `}</span>
										<progress max="255" value={pokemon[0].strength}>
											{pokemon[0].strength}
										</progress>
									</div>
									<div>
										<span>{`DEF: ${pokemon[0].defense} `}</span>
										<progress max="255" value={pokemon[0].defense}>
											{pokemon[0].defense}
										</progress>
									</div>
									<div>
										<span>{`SPEED: ${pokemon[0].speed} `}</span>
										<progress max="255" value={pokemon[0].speed}>
											{pokemon[0].speed}
										</progress>
									</div>
								</div>
								{pokemon.map((pokemon) => (
									<div className="pokemon-foot" key={pokemon.id}>
										<img
											src={typeImage[pokemon.type[0]]}
											value={pokemon.type[0]}
											alt={`${pokemon.type}`}
										/>
										{pokemon.type[1] !== undefined ? (
											<img
												src={typeImage[pokemon.type[1]]}
												value={pokemon.type[1]}
												alt={`${pokemon.type[1]}`}
											/>
										) : null}
									</div>
								))}
							</div>
						</div>
					) : (
						<Loader />
					)}
				</div>
			</div>
		</div>
	);
};

export default Detail;
