import React from 'react';
import '../cssfiles/PatientCard.css';

const PatientCard = ({ patient }) => {
  return (
    <div className="patient-card">
      <div className="header">
        <span className="ip-number">IP:{patient.id}</span>
        <span className="patient-details">
          {patient.name} {patient.age} yrs
        </span>
        <span className="contact">{patient.contact}</span>
      </div>

      <div className="details">
        <p>Service Provider: {patient.serviceProvider}</p>
        <p>Hospital: {patient.hospital}</p>
        <p>Treatment: {patient.treatment}</p>
      </div>

      <div className="status-section">
        <div className="status-box">
          <p>Admitted</p>
          <p>{patient.admittedDate}</p>
        </div>
        <div className={`claim-status ${patient.claimStatus.toLowerCase()}`}>
          <p>Claim Status</p>
          <p>{patient.claimStatus}</p>
        </div>
        <div className={`hospital-ops-status ${patient.hospitalOpsStatus.toLowerCase()}`}>
          <p>Hospital Ops Status</p>
          <p>{patient.hospitalOpsStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
