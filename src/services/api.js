import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE = `${BACKEND_URL}/api`;

// Create axios instance
const api = axios.create({
  baseURL: API_BASE,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Portfolio API endpoints
export const portfolioApi = {
  // Personal Info
  getPersonalInfo: () => api.get('/personal'),
  updatePersonalInfo: (data) => api.put('/personal', data),
  createPersonalInfo: (data) => api.post('/personal', data),

  // Education
  getEducation: () => api.get('/education'),
  createEducation: (data) => api.post('/education', data),
  updateEducation: (id, data) => api.put(`/education/${id}`, data),
  deleteEducation: (id) => api.delete(`/education/${id}`),

  // Skills
  getSkills: (category = null) => api.get('/skills', { params: category ? { category } : {} }),
  createSkill: (data) => api.post('/skills', data),
  updateSkill: (id, data) => api.put(`/skills/${id}`, data),
  deleteSkill: (id) => api.delete(`/skills/${id}`),

  // Certificates
  getCertificates: () => api.get('/certificates'),
  createCertificate: (data) => api.post('/certificates', data),
  updateCertificate: (id, data) => api.put(`/certificates/${id}`, data),
  deleteCertificate: (id) => api.delete(`/certificates/${id}`),

  // Projects
  getProjects: (featured = null) => api.get('/projects', { params: featured !== null ? { featured } : {} }),
  createProject: (data) => api.post('/projects', data),
  updateProject: (id, data) => api.put(`/projects/${id}`, data),
  deleteProject: (id) => api.delete(`/projects/${id}`),

  // Experience
  getExperience: () => api.get('/experience'),
  createExperience: (data) => api.post('/experience', data),
  updateExperience: (id, data) => api.put(`/experience/${id}`, data),
  deleteExperience: (id) => api.delete(`/experience/${id}`),

  // Testimonials
  getTestimonials: () => api.get('/testimonials'),
  createTestimonial: (data) => api.post('/testimonials', data),
  updateTestimonial: (id, data) => api.put(`/testimonials/${id}`, data),
  deleteTestimonial: (id) => api.delete(`/testimonials/${id}`),

  // Contact
  createContactSubmission: (data) => api.post('/contact-submissions', data),
  getContactSubmissions: () => api.get('/contact-submissions'),
  updateContactSubmission: (id, data) => api.put(`/contact-submissions/${id}`, data),

  // File Upload
  uploadFile: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  // Dashboard
  getDashboardStats: () => api.get('/dashboard/stats'),
};

// Admin API endpoints
export const adminApi = {
  login: (credentials) => api.post('/auth/login', credentials),
  getCurrentUser: () => api.get('/auth/me'),
};

export default api;