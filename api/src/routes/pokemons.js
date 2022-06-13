const { Router } = require('express');
const { getPokemons } = require('./controllers/pokemonsController.js');
const { Pokemon, Type } = require('../db.js');

const router = Router();

router.get('/', async (req, res, next) => {
	let name = req.query.name;

	try {
		let pokemons = await getPokemons();

		if (name) {
			let pokemonName = await pokemons.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(name.toLowerCase()),
			);

			pokemonName.length
				? res.status(200).json(pokemonName)
				: res.status(404).send('Pokemon name mismatch');
		} else {
			res.status(200).send(pokemons);
		}
	} catch (error) {
		console.log('get /pokemons/:name ERROR!:', error);
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	const pokemons = await getPokemons();
	try {
		if (id) {
			const pokemonId = await pokemons.filter((pokemon) => pokemon.id == id);
			pokemonId.length
				? res.status(200).json(pokemonId)
				: res.status(404).send([{ msg: 'Pokemon ID no match' }]);
		}
	} catch (error) {
		console.log('get /pokemons/:id ERROR!:', error);
		next(error);
	}
});

var id = 1001;
router.post('/', async (req, res, next) => {
	const {
		name,
		image,
		hp,
		strength,
		defense,
		speed,
		height,
		weight,
		createInDb,
		type,
	} = req.body;

	let pokemon = await Pokemon.create({
		id: id++,
		name,
		image,
		hp,
		strength,
		defense,
		speed,
		height,
		weight,
		createInDb,
	});

	let typeDb = await Type.findAll({
		where: {
			name: type,
		},
	});
	try {
		pokemon.addType(typeDb);
		res.send('Successfully created pokemon');
	} catch (error) {
		console.log('post /pokemons ERROR!:', error);
		next(error);
	}
});

module.exports = router;
