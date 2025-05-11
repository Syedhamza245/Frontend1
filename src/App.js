import logo from './logo.svg';
import './App.css';
import '@fontsource/poppins'; // Defaults to weight 400
import Hero from './pages/Hero';
import TemplateSelection from './pages/TemplateSelection ';
import Pricing from './pages/Pricing';



function App() {
  return (
    <div className="App">
     <Hero/>
     {/* <TemplateSelection/>
     <Pricing/> */}
    </div>
  );
}

export default App;
