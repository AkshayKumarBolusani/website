import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';
import { Save, Upload, User } from 'lucide-react';
import { portfolioApi } from '../../services/api';
import { useToast } from '../../hooks/use-toast';

const PersonalInfoManager = ({ onUpdate }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    title: '',
    image: '',
    email: '',
    phone: '',
    location: '',
    summary: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    loadPersonalInfo();
  }, []);

  const loadPersonalInfo = async () => {
    try {
      const response = await portfolioApi.getPersonalInfo();
      setPersonalInfo(response.data);
    } catch (error) {
      console.error('Failed to load personal info:', error);
      setError('Failed to load personal information');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      if (personalInfo.id) {
        await portfolioApi.updatePersonalInfo(personalInfo);
      } else {
        await portfolioApi.createPersonalInfo(personalInfo);
      }
      
      toast({
        title: "Success!",
        description: "Personal information updated successfully.",
      });
      
      onUpdate();
    } catch (error) {
      setError(error.response?.data?.detail || 'Failed to update personal information');
      toast({
        title: "Error",
        description: "Failed to update personal information.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const response = await portfolioApi.uploadFile(file);
      setPersonalInfo({
        ...personalInfo,
        image: response.data.file_url
      });
      
      toast({
        title: "Success!",
        description: "Image uploaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload image.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <User className="w-6 h-6" />
          Personal Information
        </h3>
      </div>

      {error && (
        <Alert className="border-red-500 bg-red-50 text-red-700">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Image */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <h4 className="text-lg font-semibold">Profile Image</h4>
            </CardHeader>
            <CardContent className="space-y-4">
              {personalInfo.image && (
                <div className="flex justify-center">
                  <img
                    src={personalInfo.image}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                  />
                </div>
              )}
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <Label htmlFor="image-upload" className="cursor-pointer">
                  <Button type="button" variant="outline" className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Upload Image
                  </Button>
                </Label>
                <div className="flex-1">
                  <Input
                    name="image"
                    placeholder="Or paste image URL"
                    value={personalInfo.image}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Basic Info */}
          <Card>
            <CardHeader>
              <h4 className="text-lg font-semibold">Basic Information</h4>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={personalInfo.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={personalInfo.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={personalInfo.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <h4 className="text-lg font-semibold">Contact Information</h4>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={personalInfo.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={personalInfo.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <h4 className="text-lg font-semibold">Professional Summary</h4>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                  id="summary"
                  name="summary"
                  rows={4}
                  value={personalInfo.summary}
                  onChange={handleChange}
                  required
                  placeholder="Write a brief professional summary..."
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={saving}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-2"
          >
            {saving ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Saving...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Changes
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoManager;