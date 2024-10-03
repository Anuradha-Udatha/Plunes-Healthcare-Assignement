// src/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redirect if no token
            return;
        }

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/dashboard', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setMessage(response.data.message);
            } catch (error) {
                // Redirect on error (invalid token or server issue)
                localStorage.removeItem('token'); // Clear invalid token
                navigate('/login'); // Redirect to login
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <p>{message}</p>
            <button onClick={() => { localStorage.removeItem('token'); navigate('/login'); }}>Logout</button>
        </div>
    );
};

export default Dashboard;
