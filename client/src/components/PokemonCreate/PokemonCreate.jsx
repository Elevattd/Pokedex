import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemon } from '../../actions';
import validate from './hooks';
import './styled/PokemonCreate.css';
import imgDefault from '../../assets/images/pokebola.png';

const PokemonCreate = () => {
	// ↓↓ el dispatch se asigna a una variable para dispachar una accion
	const dispatch = useDispatch();
	// ↓↓ el useSelector se utiliza para traerme el estado global
	const types = useSelector((state) => state.types);
	const navigate = useNavigate();
	const [errors, setErrors] = useState({});

	// para crear mi pokemon, en la pagina voy necesitar un estado local asi guardo lo que creo.
	// tengo que pasarle como parametro un objeto, con las propiedades del .post que determine el el back
	const [input, setInput] = useState({
		name: '',
		hp: '',
		strength: '',
		defense: '',
		speed: '',
		height: '',
		weight: '',
		image: '',
		type: [],
	});

	useEffect(() => {
		dispatch(getTypes());
	}, [dispatch]);

	const handleInputChange = (e) => {
		setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		setErrors(validate({ ...input, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.image === '') {
			input.image = imgDefault;
		}

		dispatch(postPokemon(input));
		alert('Successfully created pokemon!');
		setInput({
			name: '',
			hp: '',
			strength: '',
			defense: '',
			speed: '',
			height: '',
			image: '',
			weight: '',
			type: [],
		});

		navigate('/home');
	};

	const handleSelect = (e) => {
		if (input.type === e.target.value) alert('Type was already selected');
		else if (input.type.length < 2) {
			setInput({
				...input,
				type: [...input.type, e.target.value],
			});
			setErrors(
				validate({
					...input,
					[e.target.name]: e.target.value,
				}),
			);
		} else {
			alert('2 Types max!');
		}
	};

	return (
		<div className="page-container">
			<main className="form-container">
				<div className="title-container">
					<h2 className="title"> Create your pokemon!</h2>
				</div>
				<div className="div-form-container">
					<form onSubmit={(e) => handleSubmit(e)} className="form-create">
						<div className="inputs-container">
							<div className="div-form">
								<div className="form-input">
									<input
										type="text"
										name="name"
										onChange={handleInputChange}
										placeholder="name"
										value={input.name.toLowerCase()}
										required
										autocomplete="off"
										className="input-create"
										pattern="[a-zA-Z ]{2,30}"
									/>
									<p>Name just letters</p>
								</div>

								<div className="error-msg">
									{errors.name && (
										<img src={errors.name} alt={errors.name} width="15px" />
									)}
								</div>
							</div>

							<div className="div-form">
								<div className="form-input">
									<input
										type="number"
										name="hp"
										onChange={handleInputChange}
										placeholder="Hp"
										min="1"
										max="250"
										value={input.hp}
										required
										className="input-create"
									/>
									<p>Hp has to be less than 250 and greater than 1</p>
								</div>

								<div className="error-msg">
									{errors.hp && (
										<img src={errors.hp} alt={errors.hp} width="15px" />
									)}
								</div>
							</div>

							<div className="div-form">
								<div className="form-input">
									<input
										type="number"
										name="strength"
										onChange={handleInputChange}
										placeholder="Strength"
										min="1"
										max="150"
										value={input.strength}
										required
										className="input-create"
									/>
									<p>Strength has to be less than 150 and greater than 1</p>
								</div>

								<div className="error-msg">
									{errors.strength && (
										<img
											src={errors.strength}
											alt={errors.strength}
											width="15px"
										/>
									)}
								</div>
							</div>

							<div className="div-form">
								<div className="form-input">
									<input
										type="number"
										name="defense"
										onChange={handleInputChange}
										placeholder="Defense"
										min="1"
										max="100"
										value={input.defense}
										required
										className="input-create"
									/>
									<p>Defense has to be less than 100 and greater than 1</p>
								</div>

								<div className="error-msg">
									{errors.defense && (
										<img
											src={errors.defense}
											alt={errors.defense}
											width="15px"
										/>
									)}
								</div>
							</div>

							<div className="div-form">
								<div className="form-input">
									<input
										type="number"
										name="speed"
										onChange={handleInputChange}
										placeholder="Speed"
										min="1"
										max="100"
										value={input.speed}
										required
										className="input-create"
									/>
									<p>Speed has to be less than 100 and greater than 1</p>
								</div>

								<div className="error-msg">
									{errors.speed && (
										<img src={errors.speed} alt={errors.speed} width="15px" />
									)}
								</div>
							</div>

							<div className="div-form">
								<div className="form-input">
									<input
										type="number"
										name="height"
										onChange={handleInputChange}
										placeholder="Height"
										min="1"
										max="100"
										value={input.height}
										required
										className="input-create"
									/>
									<p>Height has to be less than 30 and greater than 1</p>
								</div>

								<div className="error-msg">
									{errors.height && (
										<img src={errors.height} alt={errors.height} width="15px" />
									)}
								</div>
							</div>

							<div className="div-form">
								<div className="form-input">
									<input
										type="number"
										name="weight"
										onChange={handleInputChange}
										placeholder="Weight"
										min="1"
										max="5000"
										value={input.weight}
										required
										className="input-create"
									/>
									<p>Weight has to be less than 5000 and greater than 1</p>
								</div>

								<div className="error-msg">
									{errors.weight && (
										<img src={errors.weight} alt={errors.weight} width="15px" />
									)}
								</div>
							</div>

							<div className="select-container">
								<select
									className="select"
									required={true}
									onChange={handleSelect}
								>
									{types.map((t) => (
										<>
											<option value="Select type..." selected disabled hidden>
												Select types.
											</option>
											<option value={t.name}>{`${t.name
												.charAt(0)
												.toUpperCase()}${t.name.slice(1)}`}</option>
										</>
									))}
								</select>
								{errors.type && (
									<img src={errors.type} alt={errors.type} width="15px" />
								)}
							</div>
							<div>
								<ul>
									<p>
										{input.type.map(
											(t) => `${t.charAt(0).toUpperCase()}${t.slice(1)}, `,
										)}
									</p>
								</ul>
							</div>
							<button
								type="submit"
								className="btn-submit"
								disabled={
									!input.name ||
									errors.name ||
									errors.hp ||
									errors.strength ||
									errors.defense ||
									errors.speed ||
									errors.height ||
									errors.weight ||
									!input.type ||
									errors.type
										? true
										: false
								}
							>
								Create
							</button>
						</div>
					</form>
				</div>
			</main>
		</div>
	);
};

export default PokemonCreate;
