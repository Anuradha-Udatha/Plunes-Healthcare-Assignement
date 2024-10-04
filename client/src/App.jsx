import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Login />} />
        </Routes>
    );
};

export default App;
