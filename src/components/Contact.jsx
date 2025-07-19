import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { mockData } from '../data/mockData';

const Contact = () => {
  const { personal } = mockData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission (replace with actual API call later)
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: personal.location,
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, name: "GitHub", href: "https://github.com" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", href: "https://linkedin.com" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", href: "https://twitter.com" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 text-sm font-medium mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Let's Work
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-cyan-500/20 transition-all duration-500">
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Me a Message</h3>
              <p className="text-gray-600">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
                <p className="text-gray-600">
                  Prefer to reach out directly? Here are my contact details.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group cursor-pointer"
                    onClick={() => info.href !== '#' && window.open(info.href)}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-600">{info.icon}</div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        {info.label}
                      </p>
                      <p className="text-lg text-gray-900 font-medium group-hover:text-cyan-600 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Follow Me</h3>
                <p className="text-gray-600">
                  Connect with me on social media for updates and tech discussions.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="flex-1 border-gray-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105"
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      {social.icon}
                      <span className="ml-2 hidden sm:inline">{social.name}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <CardContent className="p-8 text-center">
                <div className="w-4 h-4 bg-green-300 rounded-full mx-auto mb-4 animate-pulse"></div>
                <h3 className="text-2xl font-bold mb-2">Available for New Projects</h3>
                <p className="opacity-90">
                  I'm currently accepting new freelance projects and full-time opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;