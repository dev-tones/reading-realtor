'use client';
import { 
    StarIcon as Star,
    HomeIcon as Home,
    ArrowTrendingUpIcon as TrendingUp, 
    UsersIcon as Users,
} from '@heroicons/react/24/outline';

export interface StatProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

export const stats: StatProps[] = [
{
    number: '500+',
    label: 'Properties Sold',
    icon: <Home className='w-8 h-8 text-blue-500' />
},
{
    number: '98%',
    label: 'Client Satisfaction',
    icon: <Star className='w-8 h-8 text-blue-500' />
},
{
    number: '15+',
    label: 'Years Experience',
    icon: <TrendingUp className='w-8 h-8 text-blue-500' />
},
{
    number: '24/7',
    label: 'Available Support',
    icon: <Users className='w-8 h-8 text-blue-500' />
}
];

const StatCard = ({ number, label, icon }: StatProps) => (
  <div className='text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
    <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4'>
      {icon}
    </div>
    <h3 className='text-4xl font-bold text-gray-900 mb-2'>{number}</h3>
    <p className='text-gray-600'>{label}</p>
  </div>
);

export { StatCard }