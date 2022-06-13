const axios = require('axios');
const { Pokemon, Type } = require('../../db.js');
const { API_POKEMON } = require('../../extras/global.js');

const getPokemonApi = async () => {
	try {
		const pokemonRequest = await axios.get(API_POKEMON);
		const pokemonUrlRequest = await pokemonRequest.data.results.map((result) =>
			axios.get(result.url),
		);
		const pokemonUrlInfo = await axios.all(pokemonUrlRequest);
		let pokemons = pokemonUrlInfo.map((pokemon) => pokemon.data);
		let pokemonsInfo = pokemons.map((pokemon) => pokemonModel(pokemon));
		return pokemonsInfo;
	} catch (error) {
		console.log('getPokemon ERROR!!!!!!: ', error);
	}
};
const getPokemonDb = async () => {
	const pokemonDb = await Pokemon.findAll({
		include: Type,
	});

	let pokemonRoot = pokemonDb.map((pokemon) => {
		return {
			id: pokemon.dataValues.id,
			name: pokemon.dataValues.name,
			hp: pokemon.dataValues.hp,
			strength: pokemon.dataValues.strength,
			defense: pokemon.dataValues.defense,
			speed: pokemon.dataValues.speed,
			height: pokemon.dataValues.height,
			weight: pokemon.dataValues.weight,
			image: pokemon.dataValues.image,
			type: pokemon.dataValues.types?.map((type) => type.name),
			createInDb: pokemon.dataValues.createInDb,
		};
	});

	try {
		return pokemonRoot;
	} catch (error) {
		console.log('getPokemonDb ERROR!!!!!: ', error);
		return error;
	}
};

const getPokemons = async () => {
	try {
		const pokemonApi = await getPokemonApi();
		const pokemonDb = await getPokemonDb();
		let pokemons = [...pokemonApi, ...pokemonDb];

		return pokemons;
	} catch (error) {
		console.log('getPokemon ERROR!!!!!: ', error);
		return error;
	}
};

const pokemonModel = (pokemon) => {
	const pokemonModel = {
		id: pokemon.id,
		name: pokemon.name,
		image: pokemon.sprites.other.dream_world.front_default,
		hp: pokemon.stats[0].base_stat, //->
		strength: pokemon.stats[1].base_stat,
		defense: pokemon.stats[2].base_stat,
		speed: pokemon.stats[5].base_stat,
		height: pokemon.height,
		weight: pokemon.weight,
		type:
			pokemon.types.length < 2
				? [pokemon.types[0].type.name]
				: [pokemon.types[0].type.name, pokemon.types[1].type.name],
	};
	return pokemonModel;
};

module.exports = {
	getPokemonApi,
	getPokemonDb,
	getPokemons,
	pokemonModel,
};
