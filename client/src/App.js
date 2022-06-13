import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateForm from './pages/CreateForm';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

function App() {
	return (
		<div className="app-container">
			<Routes>
				<Route exath path="/" element={<Landing />} />
				<Route exath path="/home" element={<Home />} />
				<Route exath path="/pokemons/create" element={<CreateForm />} />
				<Route exath path="/pokemons/:id" element={<Detail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
