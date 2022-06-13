import axios from 'axios';

import {
	CLEAR_POKEMON_CARD,
	FILTER_BY_TYPE,
	FILTER_CREATED,
	GET_POKEMONS,
	GET_POKEMON_DETAILS,
	GET_TYPES,
	ORDER_BY_NAME,
	ORDER_BY_STR,
	SEARCH_POKEMON,
} from '../consts';

export const getPokemons = () => {
	return async function (dispatch) {
		let json = await axios.get('https://app-pokedex-pi.herokuapp.com/pokemons');

		try {
			return dispatch({
				type: GET_POKEMONS,
				payload: json.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const getTypes = () => {
	return async function (dispatch) {
		try {
			let json = await axios.get('https://app-pokedex-pi.herokuapp.com/types');

			return dispatch({
				type: GET_TYPES,
				payload: json.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const searchPokemon = (name) => {
	return async function (dispatch) {
		try {
			let json = await axios.get(
				`https://app-pokedex-pi.herokuapp.com/pokemons?name=${name}`,
			);
			return dispatch({
				type: SEARCH_POKEMON,
				payload: json.data,
			});
		} catch (error) {
			alert('Pokemon name it`s not found');
			console.log(error);
		}
	};
};

export const filterbyType = (type) => {
	return async (dispatch) =>
		dispatch({
			type: FILTER_BY_TYPE,
			payload: type,
		});
};

export const orderByName = (payload) => {
	return {
		type: ORDER_BY_NAME,
		payload,
	};
};

export const filterStrongest = (payload) => {
	return {
		type: ORDER_BY_STR,
		payload,
	};
};

export const filterCreated = (payload) => {
	return {
		type: FILTER_CREATED,
		payload,
	};
};

export const getPokemonDetails = (id) => {
	return function (dispatch) {
		axios
			.get(`https://app-pokedex-pi.herokuapp.com/pokemons/${id}`)
			.then((res) => {
				dispatch({
					type: GET_POKEMON_DETAILS,
					payload: res.data,
				});
			})
			.catch((error) => {
				return dispatch({
					type: GET_POKEMON_DETAILS,
					payload: error.response.data,
				});
			});
	};
};

export const postPokemon = (payload) => {
	return async function (dispatch) {
		const response = await axios.post(
			'https://app-pokedex-pi.herokuapp.com/pokemons/',
			payload,
		);
		console.log('you have created a pokemon', response);
		return response;
	};
};

export const clearPokemon = () => {
	return {
		type: CLEAR_POKEMON_CARD,
	};
};
