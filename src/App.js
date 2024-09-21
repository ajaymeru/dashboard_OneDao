import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Verification/Login/Login';
import OtpVerify from './Verification/OtpVerify/OtpVerify';
import Register from './Verification/Register/Register';
import Home from './MainDashBoard/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OtpVerify />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
