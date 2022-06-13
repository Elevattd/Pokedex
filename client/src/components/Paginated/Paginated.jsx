import React from 'react';
import './styled/Paginated.css';

const Paginated = ({
	pokemonPerPage,
	pokemonsFiltered,
	setCurrentPage,
	currentPage,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(pokemonsFiltered / pokemonPerPage); i++) {
		pageNumbers.push(i);
	}

	// const handleClickNext = (e) => {
	// 	setCurrentPage(currentPage + 1);
	// };

	// const handleClickPrev = (e) => {
	// 	setCurrentPage(currentPage - 1);
	// };

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div>
			<div className="paginate-container">
				<p>
					{pageNumbers &&
						pageNumbers.map((number) => (
							<button
								onClick={() => paginate(number)}
								className="btn-number"
								key={number}
							>
								{number}
							</button>
						))}
				</p>
			</div>
		</div>
	);
};

export default Paginated;
