import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../actions';
import './styled/PokeNotFound.css';

const PokeNotFound = () => {
	const dispatch = useDispatch();

	function timer() {
		dispatch(getPokemons());
	}

	useEffect(() => {
		setTimeout(timer, 5000);
	}, []);

	return (
		<div className="error-container">
			<h1>No match found for this type</h1>
			<h4>Will be redirected in 5 seconds..</h4>
		</div>
	);
};

export default PokeNotFound;
