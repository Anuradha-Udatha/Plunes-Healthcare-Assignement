import React from 'react';
import '../cssfiles/PatientStatus.css';

const PatientStatus = () => {
  return (
    <div className="patient-status">
      <p className="status-header">Patient Status</p>
      <div className="status-container">
        <div className="status-item intimations">
          <p className="status-number">50</p>
          <p className="status-title">Intimations</p>
          <p className="status-subtitle">Patients</p>
        </div>
        <div className="status-item successful-claims">
          <p className="status-number">10</p>
          <p className="status-title">Successful</p>
          <p className="status-subtitle">Claims</p>
        </div>
        <div className="status-item rejected-claims">
          <p className="status-number">10</p>
          <p className="status-title">Rejected</p>
          <p className="status-subtitle">Claims</p>
        </div>
        <div className="status-item reimbursements">
          <p className="status-number">10</p>
          <p className="status-title">Reimbursements</p>
          <p className="status-subtitle">Cases</p>
        </div>
      </div>
    </div>
  );
};

export default PatientStatus;
