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
import ForgotPassword from './pages/ForgotPassword';
import MultiStepSlider from './pages/MultiStepSlider';
import Admin from './pages/Admin';
// import Appearance from './pages/Appearence';
// import Analytics from './pages/Analytics';




function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/templates" element={<TemplateSelection />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/forgot-password" element={<ForgotPassword />}/>
      <Route path="/MultiStepSlider" element={<MultiStepSlider />}/>
      {/* <Route path="/Appearence" element={<Appearance />}/> */}
      <Route path="/Admin" element={<Admin />}/>

    </Routes>
  );
}

export default App;
