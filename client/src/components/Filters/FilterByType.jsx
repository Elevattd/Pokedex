import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterbyType, getTypes } from '../../actions';
import typeImage from '../../consts';
import './styled/FilterByType.css';

const FilterByType = ({ setCurrentPage, setOrder }) => {
	const dispatch = useDispatch();
	const types = useSelector((state) => state.types);

	useEffect(() => {
		dispatch(getTypes());
	}, [dispatch]);

	const handleFilterbyType = (e) => {
		dispatch(filterbyType(e.target.alt));
		setCurrentPage(1);
		setOrder(`${e.target.alt}`);
	};

	return (
		<>
			<React.Fragment className="filterType">
				{types.map((type) => (
					<button key={type.name} onClick={handleFilterbyType}>
						<div className="img-filterType">
							<img
								src={typeImage[type.name]}
								value={type.name}
								alt={`${type.name}`}
							/>
						</div>
					</button>
				))}
			</React.Fragment>
		</>
	);
};

export default FilterByType;
