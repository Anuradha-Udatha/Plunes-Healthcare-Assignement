import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PatientsData from '../data/PatientsData';  
import PatientCard from '../components/PatientCard'; 
import PatientStatus from '../components/PatientStatus'; 
import '../cssfiles/Dashboard.css';
import SIP from '../components/SIP';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redirecting if no token
            return;
        }

        const fetchData = async () => {
            try {
                await axios.get('http://localhost:5000/dashboard', {
                    headers: { Authorization: `Bearer ${token}` },
                });
            } catch (error) {
                console.error("Error during fetch:", error.response || error);

                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('token'); 
                    navigate('/login'); 
                }
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
        <div className="dashboard">
            <div className="dashboard-content">
                <div className="dashboard-section">
                    <PatientStatus />
                    <SIP/>
                </div>
                <div className="cards-container">
                    {PatientsData.map((patient) => (
                        <PatientCard key={patient.id} patient={patient} />
                    ))}
                </div>
            </div>
            <button onClick={() => { 
                localStorage.removeItem('token'); 
                navigate('/login'); 
            }} className='logoutbutton'>Logout</button>
        </div>
    );
};
export default Dashboard;
