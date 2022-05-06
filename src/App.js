import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Users from './pages/users/Users';

export default function App() {
  	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Navigate to="/users" />} />
				<Route path="/users" exact element={<Users />} />
				<Route path="/users/details" exact element={<Users />} />
			</Routes>
		</BrowserRouter>
  	)
}