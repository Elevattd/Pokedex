import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import './styled/PokemonList.css';

const PokemonList = ({ currentPokemon }) => {
	return (
		<div className="pokedex-grid">
			{Array.isArray(currentPokemon) ? (
				currentPokemon.map((pokemon) => (
					<Pokemon
						key={pokemon.id}
						id={pokemon.id}
						name={pokemon.name}
						image={pokemon.image}
						type={pokemon.type}
					/>
				))
			) : (
				<Pokemon
					key={currentPokemon.id}
					id={currentPokemon.id}
					name={currentPokemon.name}
					image={currentPokemon.image}
					type={currentPokemon.type}
				/>
			)}
		</div>
	);
};

export default PokemonList;
