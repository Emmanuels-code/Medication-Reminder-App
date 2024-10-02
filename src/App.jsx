import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MedicationForm from './components/MedicationForm';
import MedicationList from './components/MedicationList';
import { useState } from 'react';
import './App.css'; // Ensure you have styles applied here

function App() {
  const [medications, setMedications] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const addMedication = (medication) => {
    setMedications((prev) => [...prev, medication]);
  };

  const removeMedication = (index) => {
    setMedications((prev) => prev.filter((_, i) => i !== index));
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      <div id="root">
        <header>
          <h1 className="app-title">Medication Reminder</h1>
          <p className="app-tagline">Stay on top of your health.</p>
        </header>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
          <Route path="/medications" element={<MedicationList medications={medications} removeMedication={removeMedication} />} />
          <Route path="/add-medication" element={<MedicationForm addMedication={addMedication} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
