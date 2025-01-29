import  { useState } from 'react';
import { Star, ArrowUpRight, Heart, Calendar, Phone, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Heart className="w-7 h-7 text-blue-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full" />
          </div>
          <span className="text-2xl font-bold text-slate-900">MediCare</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Doctors</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex border-slate-300 hover:border-blue-600 hover:text-blue-600 rounded-full px-6">
            Login
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
            Book Now
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Reviews Badge */}
          <div className="flex items-center gap-3 bg-white py-2.5 px-5 rounded-full w-fit shadow-sm hover:shadow-md transition-shadow">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-slate-900">4.9</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-600">4,230 Reviews</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl font-bold text-slate-900 leading-tight">
            Healthcare
            <div className="inline-flex items-center gap-3 ml-3">
              <span className="bg-blue-100 px-4 py-1 rounded-lg text-blue-600">reimagined</span>
            </div>
            <div className="mt-3">
              for the modern age
            </div>
          </h1>

          <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
            Experience the perfect blend of compassionate care and cutting-edge technology. 
            Your health journey begins with personalized attention that puts you first.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <Button 
              className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-7 text-lg rounded-2xl flex items-center gap-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Schedule Consultation
              <ArrowUpRight className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
            </Button>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-7 text-lg rounded-2xl">
              Virtual Tour
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-6 h-6 text-blue-600 mb-2" />
              <div className="text-sm font-semibold text-slate-900">24/7</div>
              <div className="text-slate-600 text-sm">Emergency Care</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Calendar className="w-6 h-6 text-green-600 mb-2" />
              <div className="text-sm font-semibold text-slate-900">Same Day</div>
              <div className="text-slate-600 text-sm">Appointments</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Phone className="w-6 h-6 text-purple-600 mb-2" />
              <div className="text-sm font-semibold text-slate-900">Online</div>
              <div className="text-slate-600 text-sm">Consultations</div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative">
            <div className="aspect-square rounded-[2.5rem] bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden">
              <img 
                src="/api/placeholder/800/800"
                alt="Doctor placeholder" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Achievement Card */}
            <div className="absolute -left-12 top-1/4 bg-white p-6 rounded-2xl shadow-lg max-w-xs animate-float">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Top Rated</h3>
                  <p className="text-slate-600 text-sm">Best in Healthcare 2024</p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -right-8 bottom-1/4 bg-white p-6 rounded-2xl shadow-lg animate-float-delayed">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Patient Satisfaction</span>
                  <span className="text-blue-600 font-semibold">99%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '99%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;