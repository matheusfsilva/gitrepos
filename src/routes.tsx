import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import HomePage from './pages/Home';
import RepositorysPage from './pages/Repositorys'

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/repositorys" element={<RepositorysPage />} />
            </Routes>
        </Router>
    )
}