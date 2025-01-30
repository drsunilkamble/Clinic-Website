import { useState } from 'react';
import { Star, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DoctorPNG from '@/assets/doctor.png';
const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}


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
          {/* Headline */}
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">
            Healthcare
            <div className="inline-flex items-center gap-2 ml-2">
              <span className="text-blue-600">reimagined</span>
            </div>
            <div className="">
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
              Call Now
              <ArrowUpRight className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
            </Button>
          </div>

        </div>

        {/* Right Column */}
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative">
            <div className="aspect-square rounded-[2.5rem] bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden">
              <img
                src={DoctorPNG}
                alt="Doctor placeholder"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;