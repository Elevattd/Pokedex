import React from 'react';
import { Link } from 'react-router-dom';
import './styled/Pokemon.css';

const Pokemon = ({ name, image, type, id }) => {
	return (
		<div className="pokemon-card">
			<Link to={`/pokemons/${id}`}>
				<button>
					<div className="pokemon-img">
						<img src={image} alt={name} />
					</div>
					<div className="pokemon-info">
						<span className="pokemon-number">#{id}</span>
						<div className="pokemon-name">
							<h3>
								{name.replace(name.charAt(0), name.charAt(0).toUpperCase())}
							</h3>
						</div>
						<div>
							<div className="pokemon-types">
								{type?.map((t) => {
									return (
										<div key={t}>
											{t.replace(t.charAt(0), t.charAt(0).toUpperCase())}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</button>
			</Link>
		</div>
	);
};

export default Pokemon;
