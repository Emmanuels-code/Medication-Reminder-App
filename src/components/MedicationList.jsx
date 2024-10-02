import React from 'react';
import './MedicationList.css';

function MedicationList({ medications, removeMedication }) {
  return (
    <div className="medication-list">
      <h2 className="medication-title">Your Medications</h2>
      <ul className="medication-items">
        {medications.length > 0 ? (
          medications.map((med, index) => (
            <li key={index} className="medication-item">
              <span className="medication-info">
                {med.name} - {med.dosage} - {med.frequency} at {med.time}
              </span>
              <button className="remove-button" onClick={() => removeMedication(index)}>Remove</button>
            </li>
          ))
        ) : (
          <li className="no-medications">No medications added yet.</li>
        )}
      </ul>
    </div>
  );
}

export default MedicationList;
