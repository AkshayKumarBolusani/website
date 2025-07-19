import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, MapPin, Mail, Phone } from 'lucide-react';
import { mockData } from '../data/mockData';

const Hero = () => {
  const { personal } = mockData;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-300">
                👋 Welcome to my portfolio
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                <span className="block">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl text-blue-200 font-light">
                {personal.title}
              </p>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                {personal.summary}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
              <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                <MapPin size={18} />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                <Mail size={18} />
                <span>{personal.email}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                <Phone size={18} />
                <span>{personal.phone}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Image container */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-2xl shadow-2xl">
                <img
                  src={personal.image}
                  alt={personal.name}
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-2 bg-gradient-to-t from-purple-900/20 to-transparent rounded-xl"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-lg shadow-lg animate-bounce">
                <span className="text-sm font-bold">Available for hire!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;