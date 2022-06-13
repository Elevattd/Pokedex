const axios = require('axios');
const { Type } = require('../../db');

const { API_TYPE_POKEMON } = require('../../extras/global.js');

const getType = async () => {
	const typeRequest = await axios.get(API_TYPE_POKEMON);
	const typeResult = typeRequest.data.results;
	const typeFiltered = typeResult.filter(
		(type) => type.name !== 'unknown' && type.name !== 'shadow',
	);
	typeFiltered.map((t) => {
		Type.findOrCreate({
			where: { name: t.name },
		});
	});
	const allTypes = await Type.findAll();
	return allTypes;
};

module.exports = {
	getType,
};
