import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/assets/ClinicLogo.png';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white w-full px-4 py-3 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-16 h-16 object-contain" />
          <span className="text-xl font-bold text-slate-700">MediCare</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center font-medium flex-1">
          {/* Centered links */}
          <div className="flex-1 flex justify-center space-x-6">
            <a href="#" className="px-3 py-2 rounded text-slate-600 hover:bg-slate-100 transition-colors">
              Services
            </a>
            <a href="#" className="px-3 py-2 rounded text-slate-600 hover:bg-slate-100 transition-colors">
              About
            </a>
            <a href="#" className="px-3 py-2 rounded text-slate-600 hover:bg-slate-100 transition-colors">
              Doctors
            </a>
            <a href="#" className="px-3 py-2 rounded text-slate-600 hover:bg-slate-100 transition-colors">
              Contact
            </a>
          </div>
          {/* Remaining links + Book Now */}
          <div className="flex items-center space-x-4">

            <button className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-800 text-white transition-colors">
              Call Now
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded transition-colors text-slate-600 hover:bg-slate-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-sm md:hidden">
            <div className="flex flex-col p-4 gap-2">
              <a href="#" className="py-2 rounded text-slate-600 hover:bg-slate-100 text-center transition-colors">
                Services
              </a>
              <a href="#" className="py-2 rounded text-slate-600 hover:bg-slate-100 text-center transition-colors">
                About
              </a>
              <a href="#" className="py-2 rounded text-slate-600 hover:bg-slate-100 text-center transition-colors">
                Doctors
              </a>
              <a href="#" className="py-2 rounded text-slate-600 hover:bg-slate-100 text-center transition-colors">
                Contact
              </a>
              <button className="py-2 rounded bg-slate-700 hover:bg-slate-800 text-white transition-colors">
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