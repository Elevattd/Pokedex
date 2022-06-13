import React from 'react';
import loaderGif from '../assets/images/loading.gif';
import './styled/Loader.css';

const Loader = () => {
	return (
		<div className="spinner">
			<img src={loaderGif} alt="pikachu Loader" width="300" height="250" />
			<div className="loading">
				<h2>Loading...</h2>
			</div>
		</div>
	);
};

export default Loader;
