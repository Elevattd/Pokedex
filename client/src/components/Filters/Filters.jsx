import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCreated, filterStrongest, orderByName } from '../../actions';
import CleanButton from '../Button/CleanButton';
import './styled/Filters.css';

const Filters = ({ setCurrentPage, setOrder }) => {
	const dispatch = useDispatch();

	const handleSortName = (e) => {
		e.preventDefault();
		dispatch(orderByName(e.target.value));
		setCurrentPage(1);
		setOrder(`${e.target.value}`);
	};

	const handlefilterStrongest = (e) => {
		e.preventDefault();
		dispatch(filterStrongest(e.target.value));
		setCurrentPage(1);
		setOrder(`${e.target.value}`);
	};

	const handleFilterCreate = (e) => {
		e.preventDefault();
		dispatch(filterCreated(e.target.value));
		setCurrentPage(1);
		setOrder(`${e.target.value}`);
	};

	return (
		<div className="filters-container">
			<div className="container">
				<div>
					<div className="filters-container">
						<select
							name="filters"
							onChange={handleSortName}
							defaultValue="default"
						>
							<option disabled value="default">
								Filter by name..
							</option>
							<option value="asc">A → Z</option>
							<option value="des">Z → A</option>
						</select>
					</div>
				</div>
				<div>
					<div className="filters-container">
						<select
							name="filters"
							onChange={handlefilterStrongest}
							defaultValue="default"
						>
							<option disabled value="default">
								Filter by strength...
							</option>
							<option value="str">STR</option>
							<option value="weak">Weak</option>
						</select>
					</div>
				</div>
				<div>
					<div className="filters-container">
						<select
							name="filters"
							onChange={handleFilterCreate}
							defaultValue="default"
						>
							<option disabled value="default">
								Filter by created...
							</option>
							<option value="all">All</option>
							<option value="api">API</option>
							<option value="created">DB</option>
						</select>
					</div>
				</div>
			</div>
			<div>
				<CleanButton />
			</div>
		</div>
	);
};

export default Filters;
