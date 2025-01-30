import React from 'react';
import { Heart, Menu, X } from 'lucide-react';
import Logo from '@/assets/ClinicLogo.jpg';
const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="w-full px-4 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <Heart className="w-5 h-5 text-blue-600" />
          <span className="text-lg font-semibold text-slate-900">MediCare</span> */}
            <img src={Logo} alt="Logo" className="w-20 h-20 " />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Doctors</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" style={{background: 'none'}}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-slate-600" />
          ) : (
            <Menu className="w-6 h-6 text-slate-600" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Doctors</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg transition-colors">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;