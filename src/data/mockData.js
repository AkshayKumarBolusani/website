// Mock data for the portfolio website
export const mockData = {
  personal: {
    name: "Akshay Kumar Bolusani",
    title: "Full Stack Developer & Problem Solver",
    image: "https://raw.githubusercontent.com/AkshayKumarBolusani/new/main/passport-photo.jpg",
    email: "akshaykumarbolusani@gmail.com",
    phone: "7396991624",
    location: "Hyderabad, India",
    summary: "Passionate full-stack developer with expertise in modern web technologies and a love for solving complex problems. I specialize in creating scalable applications and have a keen interest in emerging technologies."
  },

  education: [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology",
      location: "Hyderabad",
      duration: "2019 - 2023",
      grade: "8.5 CGPA",
      highlights: ["Data Structures & Algorithms", "Software Engineering", "Machine Learning"]
    },
    {
      id: 2,
      degree: "Intermediate in MPC",
      institution: "Sri Chaitanya Junior College",
      location: "Hyderabad",
      duration: "2017 - 2019",
      grade: "95.2%",
      highlights: ["Mathematics", "Physics", "Chemistry"]
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "JavaScript/ES6+", level: 88, icon: "🟨" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "HTML5/CSS3", level: 92, icon: "🎨" },
      { name: "Tailwind CSS", level: 87, icon: "💨" },
      { name: "Next.js", level: 83, icon: "▲" }
    ],
    backend: [
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Express.js", level: 85, icon: "🚀" },
      { name: "Python", level: 82, icon: "🐍" },
      { name: "FastAPI", level: 80, icon: "⚡" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "PostgreSQL", level: 78, icon: "🐘" }
    ],
    tools: [
      { name: "Git/GitHub", level: 90, icon: "📱" },
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "AWS", level: 72, icon: "☁️" },
      { name: "Postman", level: 85, icon: "📮" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Figma", level: 70, icon: "🎨" }
    ],
    soft: [
      { name: "Problem Solving", level: 95, icon: "🧩" },
      { name: "Team Collaboration", level: 88, icon: "🤝" },
      { name: "Communication", level: 85, icon: "💬" },
      { name: "Project Management", level: 80, icon: "📋" },
      { name: "Creative Thinking", level: 87, icon: "💡" }
    ]
  },

  certificates: [
    {
      id: 1,
      title: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "https://images.unsplash.com/photo-1560732488-6b0df240254a?w=400&h=300&fit=crop&crop=center",
      credentialId: "AWS-CDA-2023-001"
    },
    {
      id: 2,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center",
      credentialId: "META-REACT-2023-002"
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "2022",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop&crop=center",
      credentialId: "FCC-FSWD-2022-003"
    }
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/akshay/ecommerce-platform",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "https://demo-taskapp.com",
      githubUrl: "https://github.com/akshay/task-management",
      featured: true
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "A comprehensive weather analytics dashboard with data visualization, forecasting, and location-based weather tracking.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      liveUrl: "https://demo-weather.com",
      githubUrl: "https://github.com/akshay/weather-dashboard",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "An analytics platform for social media performance tracking with automated reporting and insights generation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
      technologies: ["Next.js", "Chart.js", "Node.js", "MongoDB", "Bull Queue"],
      liveUrl: "https://demo-analytics.com",
      githubUrl: "https://github.com/akshay/social-analytics",
      featured: false
    }
  ],

  experience: [
    {
      id: 1,
      position: "Full Stack Developer",
      company: "TechCorp Solutions",
      location: "Hyderabad, India",
      duration: "Jan 2023 - Present",
      type: "Full-time",
      description: "Led development of scalable web applications serving 10,000+ users. Implemented microservices architecture and improved application performance by 40%.",
      achievements: [
        "Developed and deployed 5+ production applications",
        "Reduced API response time by 40% through optimization",
        "Mentored 3 junior developers",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"]
    },
    {
      id: 2,
      position: "Software Development Intern",
      company: "InnovateLab",
      location: "Bangalore, India",
      duration: "Jun 2022 - Dec 2022",
      type: "Internship",
      description: "Worked on developing modern web applications and contributed to open-source projects. Gained hands-on experience with full-stack development.",
      achievements: [
        "Built 3 complete web applications from scratch",
        "Contributed to 2 open-source projects",
        "Improved code coverage from 60% to 85%",
        "Collaborated with cross-functional teams"
      ],
      technologies: ["JavaScript", "Python", "Flask", "PostgreSQL", "Git"]
    }
  ],

  interests: [
    {
      category: "Development",
      items: ["Developing and Problem Solving", "Web Development", "Mobile App Development"]
    },
    {
      category: "Technology",
      items: ["Gaining expertise in emerging technologies", "Data Analytics", "UI/UX Design"]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Tech Lead",
      company: "TechCorp Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      content: "Akshay is an exceptional developer with a keen eye for detail. His problem-solving skills and ability to deliver high-quality code under tight deadlines make him a valuable team member.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      content: "Working with Akshay was a pleasure. He brings creativity and technical expertise to every project. His contributions significantly improved our application's performance and user experience.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "UI/UX Designer",
      company: "DesignStudio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      content: "Akshay has an excellent understanding of both frontend and backend development. He seamlessly translates design concepts into functional, beautiful applications.",
      rating: 5
    }
  ]
};