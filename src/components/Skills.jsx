import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { mockData } from '../data/mockData';

const Skills = () => {
  const { skills } = mockData;

  const skillCategories = [
    { key: 'frontend', title: 'Frontend', color: 'from-blue-500 to-cyan-500', bgColor: 'from-blue-50 to-cyan-50' },
    { key: 'backend', title: 'Backend', color: 'from-green-500 to-emerald-500', bgColor: 'from-green-50 to-emerald-50' },
    { key: 'tools', title: 'Tools & Platforms', color: 'from-purple-500 to-pink-500', bgColor: 'from-purple-50 to-pink-50' },
    { key: 'soft', title: 'Soft Skills', color: 'from-orange-500 to-red-500', bgColor: 'from-orange-50 to-red-50' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 text-sm font-medium mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Technical
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and expertise across different domains.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.key}
              className="group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105 border-0 bg-white/5 backdrop-blur-md"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-8 bg-gradient-to-b ${category.color} rounded-full`}></div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  {skills[category.key].map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-semibold text-white">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-300 font-medium">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-gray-700/50"
                        />
                        <div 
                          className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-black text-cyan-400">15+</div>
              <div className="text-gray-300 text-sm">Technologies</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-blue-400">2+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-purple-400">10+</div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-pink-400">5+</div>
              <div className="text-gray-300 text-sm">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;