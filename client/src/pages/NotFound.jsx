import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import pageNotFound from '../assets/images/page-not-found.png';
import './styled/NotFound.css';

const NotFound = () => {
	const navigate = useNavigate();

	function timer() {
		navigate('/home');
	}

	useEffect(() => {
		setTimeout(timer, 5000);
	}, []);

	return (
		<div className="not-found">
			<NavBar />
			<div>
				<div className="img-container">
					<img src={pageNotFound} alt="page-not-found" />
				</div>
			</div>
		</div>
	);
};

export default NotFound;
