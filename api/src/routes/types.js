const { Router } = require('express');
const { getType } = require('./controllers/typesController.js');
const router = Router();

router.get('/', async (req, res, next) => {
	let result = await getType();
	try {
		res.status(200).json(result);
	} catch (error) {
		next(error);
	}
});
module.exports = router;
