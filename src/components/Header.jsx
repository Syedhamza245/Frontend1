import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
<nav className="bg-gradient-to-r from-[#e6f0fa] to-[#ffffff] px-6 py-4 shadow-md font-poppins">
<div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-ramp-blue-700 text-2xl font-bold">MyApp</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-ramp-blue-700 hover:text-ramp-blue-700">Templates</a>
          <a href="#" className="text-ramp-blue-700 hover:text-ramp-blue-700">Pricing</a>
          <button className="bg-ramp-purple-600 text-white px-4 py-2 rounded-md hover:opacity-90">Signup</button>
          <button className="bg-ramp-purple-600 text-white px-4 py-2 rounded-md hover:opacity-90">Login</button>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-ramp-blue-700">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-ramp-blue-700">
          <a href="#">Templates</a>
          <a href="#">Pricing</a>
          <button className="bg-ramp-purple-600 text-white px-4 py-2 rounded-md">Signup</button>
          <button className="bg-ramp-purple-600 text-white px-4 py-2 rounded-md">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Header;
