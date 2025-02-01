import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ServicesImage from "@/assets/services-4.png"

const services = [
  {
    title: "General Medicine",
    description: "Comprehensive primary healthcare services including preventive care and health screenings.",
    features: ["Regular Check-ups", "Vaccinations", "Health Screenings"],
    image : ServicesImage
  },
  {
    title: "Orthopedics",
    description: "Expert care for musculoskeletal conditions with advanced treatment options.",
    features: ["Joint Replacement", "Sports Medicine", "Fracture Care"],
    image : ServicesImage
  },
  {
    title: "Gastroenterology",
    description: "Specialized diagnosis and treatment of digestive system disorders.",
    features: ["Endoscopy", "Colonoscopy", "Nutritional Counseling"],
    image : ServicesImage
  },
  {
    title: "Cardiology",
    description: "Comprehensive heart care including advanced diagnostics and prevention.",
    features: ["ECG Testing", "Heart Disease Treatment", "Cardiac Rehabilitation"],
    image : ServicesImage
  }
];

interface ServiceProps {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, features, image }) => (
  <Card className="group overflow-hidden">
    <div className="flex flex-col sm:flex-row h-full">
      <div className="w-full sm:w-48 h-48 sm:h-full flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="flex-grow p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-slate-900">{title}</h3>
          <ArrowUpRight 
            className="w-4 h-4 text-slate-400 group-hover:text-blue-500 
            transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
          />
        </div>
        
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
              <span className="w-1 h-1 rounded-full bg-blue-500 opacity-75" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Card>
);

const ServicesSection = () => (
  <section className="py-20 max-w-7xl">
    <div className="max-w-7xl mx-auto px-4">
      <div className="space-y-2 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
                Our Medical Services
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                What we offer to our patients
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
              Experience excellence in healthcare through our specialized medical services.
              </p>
            </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;