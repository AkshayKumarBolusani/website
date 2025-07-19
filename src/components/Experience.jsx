import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Building, MapPin, Calendar, Users, TrendingUp } from 'lucide-react';
import { mockData } from '../data/mockData';

const Experience = () => {
  const { experience } = mockData;

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 text-sm font-medium mb-4">
            Professional Experience
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Career
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey and key contributions in building scalable software solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-indigo-300 to-blue-200 rounded-full hidden lg:block"></div>

            {experience.map((exp, index) => (
              <div key={exp.id} className={`relative mb-16 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} lg:w-1/2 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Experience Card */}
                <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 border-0 bg-white shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge 
                            className={`${exp.type === 'Full-time' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'} hover:scale-105 transition-transform duration-200`}
                          >
                            {exp.type}
                          </Badge>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <p className="text-xl font-semibold text-blue-600">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Building className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <TrendingUp size={18} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Users size={18} />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="text-sm px-3 py-1 border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 bg-gradient-to-br from-blue-500 to-indigo-600 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-black mb-2">2+</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-black mb-2">8+</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Projects Delivered</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-gradient-to-br from-purple-500 to-violet-600 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-black mb-2">3</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Developers Mentored</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;