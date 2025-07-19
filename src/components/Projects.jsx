import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';
import { mockData } from '../data/mockData';

const Projects = () => {
  const { projects } = mockData;
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(p => p.featured)
      : projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-6 py-2 text-sm font-medium mb-4">
            My Projects
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Featured
            <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-800/50 backdrop-blur-sm p-2 rounded-lg border border-gray-700">
            {['all', 'featured', 'other'].map((filterOption) => (
              <Button
                key={filterOption}
                variant="ghost"
                size="sm"
                className={`px-6 py-2 mx-1 rounded-md transition-all duration-300 ${
                  filter === filterOption
                    ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
                onClick={() => setFilter(filterOption)}
              >
                {filterOption === 'all' ? 'All Projects' : 
                 filterOption === 'featured' ? 'Featured' : 'Others'}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 hover:scale-105 border-0 bg-gray-800/50 backdrop-blur-md overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                      <Star size={14} className="mr-1 fill-current" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Project Links Overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <Eye size={16} />
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs px-3 py-1 border-gray-600 text-gray-300 hover:bg-gray-700/50 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Interested in seeing more of my work or discussing a potential collaboration?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-lg shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;