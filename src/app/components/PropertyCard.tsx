'use client';
import { MapPinIcon as MapPin } from '@heroicons/react/24/outline';
import Image from "next/image";


export interface PropertyCardProps {
  image: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  status: 'sold' | 'pending' | 'listed';
}

export const featuredProperties: PropertyCardProps[] = [
  {
    image: 'https://images.unsplash.com/photo-1605276373954-0c4a0dac5326?w=400',
    price: '$750,000',
    address: '123 Oak Street, Downtown',
    beds: 4,
    baths: 3,
    sqft: '2,400',
    status: 'sold'
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400',
    price: '$525,000',
    address: '456 Maple Avenue, Suburbs',
    beds: 3,
    baths: 2,
    sqft: '1,800',
    status: 'pending'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400',
    price: '$895,000',
    address: '789 Pine Road, Luxury District',
    beds: 5,
    baths: 4,
    sqft: '3,200',
    status: 'listed'
  }
];

const PropertyCard = ({ image, price, address, beds, baths, sqft, status }: PropertyCardProps) => {
  const statusColors = {
    sold: 'bg-green-500',
    pending: 'bg-yellow-500',
    listed: 'bg-blue-500'
  };

    return(
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <Image 
          src={image} 
          alt={address}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{price}</h3>
        <p className="text-gray-600 mb-4 flex items-center">
          <MapPin className="w-4 h-4 mr-2 text-blue-500" />
          {address}
        </p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{beds} beds</span>
          <span>{baths} baths</span>
          <span>{sqft} sqft</span>
        </div>
      </div>
    </div>
  );
};



export { PropertyCard };