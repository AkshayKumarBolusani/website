import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { mockData } from '../data/mockData';

const Education = () => {
  const { education } = mockData;

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 text-sm font-medium mb-4">
            Education
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Academic
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Foundation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My educational journey that shaped my technical expertise and problem-solving mindset.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-200 via-purple-300 to-indigo-200 rounded-full"></div>

            {education.map((edu, index) => (
              <div key={edu.id} className={`relative mb-12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Card */}
                <div className={`${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                  <Card className="group hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-lg font-semibold text-indigo-600">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="w-6 h-6 text-indigo-600" />
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award size={16} />
                          <span className="font-semibold text-green-600">{edu.grade}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-900">Key Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <Badge 
                              key={highlightIndex}
                              variant="outline"
                              className="text-xs px-3 py-1 border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition-colors duration-200"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;