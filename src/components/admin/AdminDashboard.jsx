import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Users, 
  FolderOpen, 
  Award, 
  Briefcase, 
  MessageSquare, 
  Mail, 
  Settings,
  LogOut,
  PlusCircle,
  BarChart3,
  TrendingUp
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { portfolioApi } from '../../services/api';
import PersonalInfoManager from './PersonalInfoManager';
import ProjectsManager from './ProjectsManager';
import SkillsManager from './SkillsManager';
import ExperienceManager from './ExperienceManager';
import TestimonialsManager from './TestimonialsManager';
import ContactSubmissionsManager from './ContactSubmissionsManager';

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const { user, logout } = useAuth();

  useEffect(() => {
    loadDashboardStats();
  }, []);

  const loadDashboardStats = async () => {
    try {
      const response = await portfolioApi.getDashboardStats();
      setStats(response.data);
    } catch (error) {
      console.error('Failed to load dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  const statCards = [
    {
      title: 'Total Projects',
      value: stats.total_projects || 0,
      icon: <FolderOpen className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      title: 'Skills',
      value: stats.total_skills || 0,
      icon: <Award className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      title: 'Experience',
      value: stats.total_experience || 0,
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50'
    },
    {
      title: 'Testimonials',
      value: stats.total_testimonials || 0,
      icon: <MessageSquare className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      title: 'Contact Messages',
      value: stats.total_contact_submissions || 0,
      icon: <Mail className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50'
    },
    {
      title: 'New Messages',
      value: stats.new_contact_submissions || 0,
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Portfolio Admin</h1>
              <p className="text-gray-600 mt-1">Welcome back, {user?.username}!</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-green-100 text-green-800 px-3 py-1">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Online
              </Badge>
              <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <Card key={index} className={`border-0 shadow-lg bg-gradient-to-br ${stat.bgColor} hover:shadow-xl transition-all duration-300 hover:scale-105`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Management Tabs */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Settings className="w-6 h-6" />
              Content Management
            </h2>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-6 bg-gray-50 p-1 m-4 rounded-lg">
                <TabsTrigger value="personal" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline">Personal</span>
                </TabsTrigger>
                <TabsTrigger value="projects" className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4" />
                  <span className="hidden sm:inline">Projects</span>
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span className="hidden sm:inline">Skills</span>
                </TabsTrigger>
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span className="hidden sm:inline">Experience</span>
                </TabsTrigger>
                <TabsTrigger value="testimonials" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span className="hidden sm:inline">Reviews</span>
                </TabsTrigger>
                <TabsTrigger value="messages" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Messages</span>
                  {stats.new_contact_submissions > 0 && (
                    <Badge className="ml-1 bg-red-500 text-white text-xs px-1">
                      {stats.new_contact_submissions}
                    </Badge>
                  )}
                </TabsTrigger>
              </TabsList>

              <div className="p-6">
                <TabsContent value="personal" className="space-y-6">
                  <PersonalInfoManager onUpdate={loadDashboardStats} />
                </TabsContent>

                <TabsContent value="projects" className="space-y-6">
                  <ProjectsManager onUpdate={loadDashboardStats} />
                </TabsContent>

                <TabsContent value="skills" className="space-y-6">
                  <SkillsManager onUpdate={loadDashboardStats} />
                </TabsContent>

                <TabsContent value="experience" className="space-y-6">
                  <ExperienceManager onUpdate={loadDashboardStats} />
                </TabsContent>

                <TabsContent value="testimonials" className="space-y-6">
                  <TestimonialsManager onUpdate={loadDashboardStats} />
                </TabsContent>

                <TabsContent value="messages" className="space-y-6">
                  <ContactSubmissionsManager onUpdate={loadDashboardStats} />
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;