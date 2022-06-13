import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../actions';
import NavBar from '../components/NavBar/NavBar';
import Pokedex from '../components/Pokedex/Pokedex';

import Loader from '../Loader/Loader';

const Home = () => {
	let dispatch = useDispatch();

	let allPokemons = useSelector((state) => state.pokemons);
	let pokemonsFiltered = useSelector((state) => state.pokemonsFiltered);

	useEffect(() => {
		dispatch(getPokemons());
	}, [dispatch]);
	return (
		<div>
			<div>
				<NavBar />
			</div>
			<div className="home-container">
				{allPokemons.length > 0 ? (
					<Pokedex pokemonsFiltered={pokemonsFiltered} />
				) : (
					<Loader />
				)}
			</div>
		</div>
	);
};

export default Home;
