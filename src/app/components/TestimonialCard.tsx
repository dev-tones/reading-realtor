'use client'
import { StarIcon as Star } from "@heroicons/react/24/outline";


export interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: TestimonialProps[] = [
{
    name: 'Sarah Johnson',
    role: 'First-time Homebuyer',
    content: 'Made my dream of homeownership a reality. The entire process was smooth and stress-free.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?w=100',
    rating: 5
},
{
    name: 'Michael Chen',
    role: 'Property Investor',
    content: 'Exceptional market knowledge and negotiation skills. Helped me find the perfect investment property.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    rating: 5
},
{
    name: 'Emily Rodriguez',
    role: 'Family Relocating',
    content: 'Understanding of our needs and went above and beyond to find us the perfect family home.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    rating: 5
}
];

const TestimonialCard = ({ name, role, content, avatar, rating }: TestimonialProps) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
      ))}
    </div>
    <p className="text-gray-700 mb-6 italic">"{content}"</p>
    <div className="flex items-center">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

export { TestimonialCard }