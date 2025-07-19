import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Lightbulb, Users, Target } from 'lucide-react';
import { mockData } from '../data/mockData';

const About = () => {
  const { personal, interests } = mockData;

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Expertise",
      description: "Proficient in both frontend and backend technologies with 2+ years of experience"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Passionate about finding elegant solutions to complex technical challenges"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Player",
      description: "Strong collaboration skills with experience mentoring junior developers"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Oriented",
      description: "Focused on delivering high-quality applications that exceed expectations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-medium mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Passionate About Creating
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Amazing Digital Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a full-stack developer based in Hyderabad, India, with a passion for building 
            scalable web applications and solving complex problems through code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">My Journey</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {personal.summary}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With expertise in modern frameworks like React, Node.js, and cloud technologies, 
                I've successfully delivered multiple production applications that serve thousands of users. 
                I believe in writing clean, maintainable code and creating intuitive user experiences.
              </p>
            </div>

            {/* Interests */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900">Interests & Hobbies</h4>
              <div className="space-y-4">
                {interests.map((interest, index) => (
                  <div key={index}>
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">{interest.category}</h5>
                    <div className="flex flex-wrap gap-2">
                      {interest.items.map((item, itemIndex) => (
                        <Badge 
                          key={itemIndex}
                          variant="outline"
                          className="text-sm px-3 py-1 border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors duration-200"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 border-0 bg-white shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                      {highlight.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;