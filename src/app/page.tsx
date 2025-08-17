'use client';

// page.tsx - Realtor Landing Page
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { TestimonialCard, testimonials } from './components/TestimonialCard';
import { PropertyCard, featuredProperties } from './components/PropertyCard';
import { StatCard, stats } from './components/StatCard';
import { 
  ChevronDownIcon as ChevronDown, 
  MapPinIcon as MapPin, 
  PhoneIcon as Phone, 
  EnvelopeIcon as Mail,  
  HomeIcon as Home, 
  CheckCircleIcon as CheckCircle, 
  ArrowRightIcon as ArrowRight, 
  Bars3Icon as Menu, 
  XMarkIcon as X 
} from '@heroicons/react/24/outline';


export default function RealtorLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Jennifer Twigg</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#properties" className="text-gray-700 hover:text-blue-600 transition-colors">Properties</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#properties" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Properties</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Reviews</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-[85svh] sm:min-h-screen flex items-center relative overflow-hidden scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}`}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 sm:mb-6 leading-tight">
              Your Dream Home
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Awaits
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {"With over 15 years of experience in luxury real estate, I help clients find their perfect home and maximize their property investments in today\'s dynamic market."}
            </p>

            {/* mobile-first buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-0">
              <button className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                View Properties
              </button>
            </div>
          </div>

          {/* Responsive image: fill + aspect, or width/height */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'}`}>
             <div className="relative w-full aspect-[4/3] lg:max-w-[560px] lg:ml-auto">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80"
                alt="Luxury Home"
                fill
                className="rounded-3xl shadow-2xl object-cover"
                priority
                sizes="(min-width:1280px) 560px, (min-width:1024px) 520px, 100vw"
              />
            </div>

            <div className="absolute -bottom-6 -left-3 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Just Sold!</p>
                  <p className="text-sm text-gray-600">$1.2M in 3 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ... */}
      </section>


      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-gradient-to-r from-blue-50 to-purple-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full max-w-xl mx-auto lg:mx-0 aspect-[4/3]">
              <Image
                src="/jennifer.jpg"
                alt="Jennifer Twigg"
                fill
                className="rounded-3xl shadow-2xl object-cover"
                sizes="(min-width:1024px) 560px, 100vw"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Jennifer Twigg
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {"As a top-performing realtor with over 15 years in luxury real estate, I\'ve built my reputation on trust, expertise, and delivering exceptional results for my clients."}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Certified Luxury Home Marketing Specialist</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Top 1% of agents in the metro area</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">$50M+ in sales annually</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-0">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-12 sm:py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover exceptional homes that showcase quality, luxury, and prime locations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProperties.map((p, i) => <PropertyCard key={i} {...p} />)}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-0">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 sm:py-20 bg-gradient-to-r from-gray-50 to-blue-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read what my clients say about their experience working with me.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {"Let\'s discuss your real estate goals and find the perfect solution for you."}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <p className="opacity-90">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="opacity-90">Jennifer.Twigg@Twiggabyte.com</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Me</h3>
              <p className="opacity-90">Downtown Office Plaza</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-0">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">Jennifer Twigg</span>
              </div>
              <p className="text-gray-400">Your trusted partner in luxury real estate.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Buying</li>
                <li>Selling</li>
                <li>Property Management</li>
                <li>Investment Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Downtown</li>
                <li>Suburbs</li>
                <li>Luxury District</li>
                <li>Waterfront</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 The Reading Realtor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}