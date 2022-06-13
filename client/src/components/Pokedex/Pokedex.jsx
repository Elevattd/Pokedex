import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../actions';
import SearchBar from '../SearchBar/SearchBar';
import FilterByType from '../Filters/FilterByType';
import Filters from '../Filters/Filters';
import PokeNotFound from '../PokeNotFound/PokeNotFound';
import PokemonList from '../PokemonList/PokemonList';
import Paginated from '../Paginated/Paginated';
import './styled/Pokedex.css';

const Pokedex = ({ pokemonsFiltered }) => {
	const dispatch = useDispatch();

	const [order, setOrder] = useState('');

	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonPerPage, setPokemonPerPage] = useState(12);
	const indexOfLastPokemon = currentPage * pokemonPerPage;
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
	const currentPokemon = pokemonsFiltered.slice(
		indexOfFirstPokemon,
		indexOfLastPokemon,
	);

	useEffect(() => {
		dispatch(getPokemons());
	}, [dispatch]);

	return (
		<div className="body-container">
			<SearchBar setCurrentPage="setCurrentPage" setOrder="setOrder" />
			<FilterByType setCurrentPage={setCurrentPage} setOrder={setOrder} />

			<Filters setCurrentPage={setCurrentPage} setOrder={setOrder} />

			{!currentPokemon.length ? (
				<PokeNotFound />
			) : (
				<PokemonList currentPokemon={currentPokemon} />
			)}
			<Paginated
				pokemonPerPage={pokemonPerPage}
				pokemonsFiltered={pokemonsFiltered.length}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</div>
	);
};

export default Pokedex;
