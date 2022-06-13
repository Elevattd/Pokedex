import {
	CLEAR_POKEMON_CARD,
	FILTER_BY_TYPE,
	FILTER_CREATED,
	GET_POKEMONS,
	GET_POKEMON_DETAILS,
	GET_TYPES,
	ORDER_BY_NAME,
	ORDER_BY_STR,
	POST_POKEMON,
	SEARCH_POKEMON,
} from '../consts';

const initialState = {
	pokemons: [],
	details: [],
	types: [],
	pokemonsFiltered: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POKEMONS:
			return {
				...state,
				pokemons: action.payload,
				pokemonsFiltered: action.payload,
			};
		case GET_TYPES:
			return {
				...state,
				types: action.payload,
			};
		case SEARCH_POKEMON:
			return {
				...state,
				pokemonsFiltered: action.payload,
			};

		case FILTER_BY_TYPE:
			const pokemonsByType = state.pokemons;

			return {
				...state,
				pokemonsFiltered: pokemonsByType.filter((pokemon) =>
					pokemon.type.includes(action.payload),
				),
			};
		case ORDER_BY_NAME:
			let orderedNamePokemons = state.pokemonsFiltered.sort((a, b) =>
				a.name < b.name ? 1 : a.name > b.name ? -1 : 0,
			);

			if (action.payload === 'des') {
				return {
					...state,
					pokemonsFiltered: orderedNamePokemons,
				};
			}
			if (action.payload === 'asc') {
				return {
					...state,
					pokemonsFiltered: orderedNamePokemons.reverse(),
				};
			}
			break;
		case ORDER_BY_STR:
			let orderedPokemons = state.pokemonsFiltered.sort(
				(a, b) => a.strength - b.strength,
			);
			if (action.payload === 'weak') {
				return {
					...state,
					pokemonsFiltered: orderedPokemons,
				};
			}
			if (action.payload === 'str') {
				return {
					...state,
					pokemonsFiltered: orderedPokemons.reverse(),
				};
			}

			break;
		case FILTER_CREATED:
			let allPokemon = state.pokemons;
			state.pokemonsFiltered = allPokemon;
			if (action.payload === 'all') {
				return {
					...state,
					pokemonsFiltered: allPokemon,
				};
			}
			if (action.payload === 'api') {
				return {
					...state,
					pokemonsFiltered: state.pokemons.filter(
						(pokemon) => !pokemon.createInDb,
					),
				};
			}
			if (action.payload === 'db') {
				return {
					...state,
					pokemonsFiltered: state.pokemons.filter(
						(pokemon) => pokemon.createInDb,
					),
				};
			}
			const createdFilter =
				action.payload === 'created'
					? state.pokemonsFiltered.filter((pokemon) => pokemon.createInDb)
					: state.pokemonsFiltered.filter((pokemon) => !pokemon.createInDb);
			return {
				...state,
				pokemonsFiltered:
					action.payload === 'all' ? state.pokemons : createdFilter,
			};
		case POST_POKEMON:
			return {
				...state,
			};

		case GET_POKEMON_DETAILS:
			return {
				...state,
				details: action.payload,
			};
		case CLEAR_POKEMON_CARD:
			return {
				...state,
				details: [],
			};
		default:
			return state;
	}
};

export default rootReducer;
