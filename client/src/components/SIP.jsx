import React from 'react';
import '../cssfiles/SIP.css';

const SIP = () => {
    return (
        <div className="sip-container">
            <div className="sip-header">
                <h2>SIP (Service In Progress)</h2>
                <select>
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>Custom</option>
                </select>
            </div>
            <div className="sip-item">
                <span className="sip-title">Under Process</span>
                <span className="sip-count">10</span>
                <button className="view-button">View</button>
            </div>
            <div className="sip-item">
                <span className="sip-title">Query</span>
                <span className="sip-count orange">10</span>
                <button className="view-button">View</button>
            </div>
            <div className="sip-item">
                <span className="sip-title">Initial Pending</span>
                <span className="sip-count">10</span>
                <button className="view-button">View</button>
            </div>
            <div className="sip-item">
                <span className="sip-title">Initial Received</span>
                <span className="sip-count">10</span>
                <button className="view-button">View</button>
            </div>
            <div className="sip-item">
                <span className="sip-title">Discharge Under Review</span>
                <span className="sip-count green">10</span>
                <button className="view-button">View</button>
            </div>
        </div>
    );
};

export default SIP;
