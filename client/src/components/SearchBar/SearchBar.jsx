import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../../actions';
import './styled/SearchBar.css';

const SearchBar = () => {
	let dispatch = useDispatch();
	const [search, setSearch] = useState('');

	const handleInputChange = (e) => {
		e.preventDefault();

		console.log(e.target.value);
		setSearch(e.target.value);
	};

	const handleClick = (e) => {
		console.log(e);
		e.preventDefault();
		if (search === '') {
			alert('Please enter a pokemon name');
		}
		dispatch(searchPokemon(search));
		setSearch('');
	};

	return (
		<div className="searchbar-container">
			<div>
				<input
					placeholder="Search..."
					type="text"
					value={search}
					onChange={handleInputChange}
				/>
			</div>
			<div className="searchbar-btn">
				<button type="submit" onClick={handleClick}>
					🔍
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
