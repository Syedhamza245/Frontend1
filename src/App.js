import logo from './logo.svg';
import './App.css';
import '@fontsource/poppins'; // Defaults to weight 400
import Hero from './pages/Hero';
import TemplateSelection from './pages/TemplateSelection ';
import Pricing from './pages/Pricing';
import { Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';




function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/templates" element={<TemplateSelection />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  );
}

export default App;
