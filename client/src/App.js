import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Users from './pages/users/Users';

import './App.css';

export default function App() {
  	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Navigate to="/users" />} />
				<Route path="/users/details/:id" element={<Users />} />
				<Route path="/users/details" exact element={<Navigate to="/users" />} />
				<Route path="/users" exact element={<Users />} />
			</Routes>
		</BrowserRouter>
  	)
}