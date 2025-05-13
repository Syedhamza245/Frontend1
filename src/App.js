import logo from './logo.svg';
import './App.css';
import '@fontsource/poppins'; // Defaults to weight 400
import Hero from './pages/Hero';
import TemplateSelection from './pages/TemplateSelection ';
import Pricing from './pages/Pricing';
import { Routes, Route } from "react-router-dom";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/templates" element={<TemplateSelection />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default App;
