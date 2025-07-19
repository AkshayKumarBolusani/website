import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Award, Calendar, Building, ExternalLink } from 'lucide-react';
import { mockData } from '../data/mockData';

const Certificates = () => {
  const { certificates } = mockData;

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 text-sm font-medium mb-4">
            Certificates & Achievements
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Professional
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development achievements that validate my expertise.
          </p>
        </div>

        {/* Certificates Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {certificates.map((cert, index) => (
                <CarouselItem key={cert.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group h-full hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 border-0 bg-white shadow-lg">
                    <CardContent className="p-0">
                      {/* Certificate Image */}
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-emerald-500 text-white shadow-lg">
                            <Award size={14} className="mr-1" />
                            Certified
                          </Badge>
                        </div>
                      </div>

                      {/* Certificate Content */}
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
                          {cert.title}
                        </h3>
                        
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Building size={16} />
                            <span>{cert.issuer}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{cert.date}</span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 group-hover:border-emerald-300 transition-all duration-300"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            View Certificate
                          </Button>
                        </div>

                        {/* Credential ID */}
                        <div className="text-xs text-gray-400 font-mono bg-gray-50 p-2 rounded">
                          ID: {cert.credentialId}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-black mb-2">{certificates.length}+</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Certifications</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-gradient-to-br from-blue-500 to-indigo-600 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-black mb-2">100%</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Pass Rate</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-gradient-to-br from-purple-500 to-pink-600 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-black mb-2">2023</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Latest Cert</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;