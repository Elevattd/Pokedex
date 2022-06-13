import errorMsg from '../../../assets/images/error-msg.png';

export default function validate(input) {
	let errors = {};

	if (!input.name || input.name.includes(' ')) {
		errors.name = errorMsg;
	}
	if (input.hp > 250 || input.hp < 1 || !input.hp) {
		errors.hp = errorMsg;
	}
	if (input.strength > 150 || input.strength < 1 || !input.strength) {
		errors.strength = errorMsg;
	}
	if (input.defense > 100 || input.defense < 1 || !input.defense) {
		errors.defense = errorMsg;
	}
	if (input.speed > 100 || input.speed < 1 || !input.speed) {
		errors.speed = errorMsg;
	}
	if (input.height > 30 || input.height < 1 || !input.height) {
		errors.height = errorMsg;
	}
	if (input.weight > 5000 || input.weight < 1 || !input.weight) {
		errors.weight = errorMsg;
	}
	if (input.type.length < 0) {
		errors.type = errorMsg;
	}

	return errors;
}
