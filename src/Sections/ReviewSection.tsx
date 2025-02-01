import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Wilson",
    role: "Patient",
    rating: 5,
    comment: "The level of care and attention I received was exceptional.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "James Martinez",
    role: "Patient",
    rating: 5,
    comment: "State-of-the-art facilities and incredibly knowledgeable doctors.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Emily Chen",
    role: "Patient",
    rating: 5,
    comment: "Professional, caring, and efficient. Best healthcare experience.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Robert Parker",
    role: "Patient",
    rating: 5,
    comment: "Outstanding medical care with a personal touch.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

interface Review {
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
}

const ReviewCard = ({ name, role, rating, comment, image }: Review) => (
    <div className="min-w-[400px] bg-white/80 backdrop-blur-sm p-8 rounded-3xl 
      border border-white/20 hover:border-white/40 
      shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
      hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
      transition-all duration-300">
      <div className="flex flex-col h-full justify-between gap-6">
        <div>
          <div className="flex items-center mb-6 gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
            ))}
          </div>
          <p className="text-slate-600 text-lg leading-relaxed">"{comment}"</p>
        </div>
        
        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
          <div className="relative">
            <img src={image} alt={name} 
              className="w-12 h-12 rounded-full ring-2 ring-white" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">{name}</h4>
            <p className="text-sm text-slate-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  const ReviewSection = () => {
    return (
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 opacity-90" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid gap-16 items-center">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
                Patient Reviews
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                What Our Patients Say About Their Experience
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Join thousands of satisfied patients who have experienced our exceptional care and modern approach to healthcare.
              </p>
            </div>
  
            <div className="relative">
              <div className="absolute inset-0 " />
              <div className="overflow-hidden">
                <div className="flex gap-6 animate-marquee hover:pause">
                  {[...reviews, ...reviews, ...reviews].map((review, index) => (
                    <ReviewCard key={index} {...review} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="absolute top-1/2 -left-12 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20" />
      </section>
    );
  };
  
  export default ReviewSection;