import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemons } from '../../actions';
import buttonClear from '../../assets/images/clean-btn.png';
import './styled/CleanButton.css';

const CleanButton = () => {
	const dispatch = useDispatch();

	const handleFilterClear = () => {
		dispatch(getPokemons());
	};

	return (
		<div className="container-filterClear">
			<Link to={'/home'}>
				<button type="button" onClick={handleFilterClear}>
					<img
						src={buttonClear}
						alt="clear filters"
						width="60px"
						height="60px"
					/>
				</button>
			</Link>
		</div>
	);
};

export default CleanButton;
