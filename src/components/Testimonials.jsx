import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Quote, Star } from 'lucide-react';
import { mockData } from '../data/mockData';

const Testimonials = () => {
  const { testimonials } = mockData;

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 text-sm font-medium mb-4">
            What People Say
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Client
            <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear what colleagues and clients have to say about working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105 border-0 bg-white/5 backdrop-blur-md"
            >
              <CardContent className="p-8 space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Content */}
                <blockquote className="text-gray-300 leading-relaxed text-center italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center space-y-3 pt-4 border-t border-gray-600/30">
                  <Avatar className="w-16 h-16 border-2 border-pink-500/30 group-hover:border-pink-400 transition-colors duration-300">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-pink-500 to-rose-500 text-white text-lg font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="text-center space-y-1">
                    <h4 className="text-white font-semibold group-hover:text-pink-400 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-pink-400 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-300 text-sm">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                5.0
              </div>
              <div className="text-gray-300 text-sm">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {testimonials.length}+
              </div>
              <div className="text-gray-300 text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;