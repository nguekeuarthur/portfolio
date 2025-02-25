import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, MapPin, Download, Code, Database, Brain, Award, BookOpen, Users, Terminal, Globe, Cpu } from 'lucide-react';
import { Particles } from './components/Particles';
import { LocationMap } from './components/LocationMap';
import { ETLAnimation } from './components/ETLAnimation';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  const skills = [
    { name: 'Data Science', icon: <Database className="w-6 h-6" />, items: ['Python', 'R', 'TensorFlow', 'PyTorch', 'Scikit-learn'] },
    { name: 'Development', icon: <Code className="w-6 h-6" />, items: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Docker'] },
    { name: 'AI & ML', icon: <Brain className="w-6 h-6" />, items: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'MLOps'] }
  ];

  const stats = [
    { icon: <Terminal className="w-8 h-8" />, value: '5+', label: 'Years Experience' },
    { icon: <Globe className="w-8 h-8" />, value: '20+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8" />, value: '15+', label: 'Happy Clients' },
    { icon: <Cpu className="w-8 h-8" />, value: '10+', label: 'ML Models Deployed' }
  ];

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Built a machine learning platform for predictive analytics using Python, TensorFlow, and React.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'React']
    },
    {
      title: 'Real-time Data Visualization',
      description: 'Developed a real-time dashboard for data visualization using D3.js and Node.js.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'web',
      technologies: ['D3.js', 'Node.js', 'WebSocket']
    },
    {
      title: 'NLP Text Analysis Tool',
      description: 'Created a natural language processing tool for sentiment analysis and text classification.',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'ai',
      technologies: ['Python', 'BERT', 'FastAPI']
    },
    {
      title: 'IoT Data Platform',
      description: 'Built a scalable platform for collecting and analyzing IoT sensor data.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'web',
      technologies: ['AWS IoT', 'React', 'Node.js']
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-red-900">
        <Particles />
        <div className="max-w-3xl text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hi! I'm <span className="text-blue-300">Yannick Zangue</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Data Scientist & Full Stack Developer passionate about creating innovative solutions
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/yannickzangue" target="_blank" rel="noopener noreferrer" 
               className="text-gray-200 hover:text-blue-300 transition-colors p-2 hover:bg-white/10 rounded-full">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yannickzangue" target="_blank" rel="noopener noreferrer" 
               className="text-gray-200 hover:text-blue-300 transition-colors p-2 hover:bg-white/10 rounded-full">
              <Linkedin size={24} />
            </a>
            <a href="mailto:yannickzangue@gmail.com" 
               className="text-gray-200 hover:text-blue-300 transition-colors p-2 hover:bg-white/10 rounded-full">
              <Mail size={24} />
            </a>
          </div>
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Download CV <Download size={16} className="ml-2" />
          </a>
        </div>
        
        <div className="absolute bottom-20 w-full">
          <ETLAnimation />
        </div>

        <Link to="about" smooth={true} duration={500} className="absolute bottom-10 cursor-pointer animate-bounce text-gray-200">
          <ChevronDown size={32} />
        </Link>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-lg transform translate-x-3 translate-y-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-8">
                I'm a data scientist and full stack developer with expertise in machine learning, AI, and web development. 
                My work combines analytical thinking with creative problem-solving to build innovative solutions.
              </p>
              
              {/* Experience Timeline */}
              <div className="relative mb-12">
                <div className="absolute left-0 w-full h-1 bg-blue-200 top-4"></div>
                <div className="relative flex justify-between">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 relative z-10"></div>
                    <p className="text-sm text-gray-500">2024 - Present</p>
                    <p className="font-bold">Senior Data Scientist</p>
                    <p className="text-sm text-gray-600">Independent Consultant</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 relative z-10"></div>
                    <p className="text-sm text-gray-500">2020 - 2024</p>
                    <p className="font-bold">Data Scientist</p>
                    <p className="text-sm text-gray-600">Tech Innovation Labs</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 relative z-10"></div>
                    <p className="text-sm text-gray-500">2018 - 2020</p>
                    <p className="font-bold">Web Developer</p>
                    <p className="text-sm text-gray-600">Digital Solutions Inc.</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8">
                Currently focused on developing scalable applications using Python, React, and Node.js. 
                I'm passionate about leveraging technology to solve real-world problems.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Data Analysis</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Machine Learning</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          
          {/* Project Filters */}
          <div className="flex justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveTab('ai')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === 'ai' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              AI & ML
            </button>
            <button 
              onClick={() => setActiveTab('web')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === 'web' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Web Dev
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Publications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <ul className="space-y-4">
                <li className="border-l-2 border-blue-500 pl-4">
                  <p className="text-sm text-gray-500">2018 - 2020</p>
                  <p className="font-bold">Master in Data Science</p>
                  <p className="text-gray-600">École Polytechnique Fédérale de Lausanne</p>
                </li>
                <li className="border-l-2 border-blue-500 pl-4">
                  <p className="text-sm text-gray-500">2014 - 2018</p>
                  <p className="font-bold">Bachelor in Computer Science</p>
                  <p className="text-gray-600">University of Geneva</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold">Publications</h3>
              </div>
              <ul className="space-y-4">
                <li className="hover:bg-gray-50 p-3 rounded-lg transition-colors">
                  <p className="font-bold">Machine Learning in Healthcare</p>
                  <p className="text-gray-600 mb-2">Published in International Journal of AI in Medicine, 2023</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm">
                    Read Paper <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
                <li className="hover:bg-gray-50 p-3 rounded-lg transition-colors">
                  <p className="font-bold">Deep Learning for Time Series Analysis</p>
                  <p className="text-gray-600 mb-2">IEEE Conference on Machine Learning, 2022</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm">
                    Read Paper <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <img 
                src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b17c.png"
                alt="AWS Cloud Practitioner"
                className="w-32 h-32 mx-auto mb-4 hover:scale-105 transition-transform"
              />
              <h3 className="text-xl font-bold mb-2">AWS Cloud Practitioner</h3>
              <p className="text-gray-600">Issued Dec 2023</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <img 
                src="https://www.tensorflow.org/site-assets/images/marketing/resources/cert-badge.png"
                alt="TensorFlow Developer"
                className="w-32 h-32 mx-auto mb-4 hover:scale-105 transition-transform"
              />
              <h3 className="text-xl font-bold mb-2">TensorFlow Developer</h3>
              <p className="text-gray-600">Issued Sep 2023</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <img 
                src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg"
                alt="Azure Data Scientist"
                className="w-32 h-32 mx-auto mb-4 hover:scale-105 transition-transform"
              />
              <h3 className="text-xl font-bold mb-2">Azure Data Scientist</h3>
              <p className="text-gray-600">Issued Jun 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a 
            href="mailto:yannickzangue@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-12 hover:scale-105 transform"
          >
            Send me an email <Mail size={20} className="ml-2" />
          </a>
          
          <div className="space-y-6">
            <div className="flex items-center justify-center text-gray-600">
              <MapPin size={24} className="mr-2" />
              <p className="text-lg">Suisse</p>
            </div>
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <LocationMap />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Yannick Zangue. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;