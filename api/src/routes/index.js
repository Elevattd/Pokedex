const { Router } = require('express');
const PokemonRoute = require('./pokemons.js');
const TypeRoute = require('./types.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', PokemonRoute);
router.use('/types', TypeRoute);

module.exports = router;
