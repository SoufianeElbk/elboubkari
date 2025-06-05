
import { useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { Code, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar, Award, BookOpen, User, Briefcase, MessageCircle, Menu, X } from "lucide-react";

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const skillCategories = [
    {
      category: "Web Development",
      skills: [
        { name: "HTML", iconUrl: "https://icon.icepanel.io/Technology/svg/HTML5.svg" },
        { name: "CSS", iconUrl: "https://icon.icepanel.io/Technology/svg/CSS3.svg" },
        { name: "JavaScript", iconUrl: "https://icon.icepanel.io/Technology/svg/JavaScript.svg" },
        { name: "React", iconUrl: "https://icon.icepanel.io/Technology/svg/React.svg" },
        { name: "Laravel", iconUrl: "https://icon.icepanel.io/Technology/svg/Laravel.svg" },
        { name: "Bootstrap", iconUrl: "https://icon.icepanel.io/Technology/svg/Bootstrap.svg" },
        { name: "Tailwind CSS", iconUrl: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" },
        { name: "Node.js", iconUrl: "https://icon.icepanel.io/Technology/svg/Node.js.svg" },
        { name: "Spring", iconUrl: "https://icon.icepanel.io/Technology/svg/Spring.svg" }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", iconUrl: "https://icon.icepanel.io/Technology/svg/MySQL.svg" },
        { name: "MongoDB", iconUrl: "https://icon.icepanel.io/Technology/svg/MongoDB.svg" },
        { name: "Oracle Database", iconUrl: "https://icon.icepanel.io/Technology/svg/Oracle.svg" },
        { name: "Redis", iconUrl: "https://icon.icepanel.io/Technology/svg/Redis.svg" }
      ]
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", iconUrl: "https://icon.icepanel.io/Technology/svg/Java.svg" },
        { name: "C", iconUrl: "https://icon.icepanel.io/Technology/svg/C.svg" },
        { name: "C++", iconUrl: "https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg" },
        { name: "PHP", iconUrl: "https://icon.icepanel.io/Technology/svg/PHP.svg" },
        { name: "Python", iconUrl: "https://icon.icepanel.io/Technology/svg/Python.svg" }
      ]
    }
  ];

  const projects = [
    {
      title: "LogAnno",
      description: "Design and development of a web application for publishing legal announcements in Morocco.",
      technologies: ["Web Development", "Publishing Platform"],
      link: "https://github.com/SoufianeElbk/LegAnno"
    },
    {
      title: "Brain Tumor Detection",
      description: "This project aims to detect brain tumors from MRI using deep learning. By exploiting a convolutional neural network (CNN), the model classifies MRI images to determine the presence of a tumor.",
      technologies: ["Deep Learning", "CNN", "Python"],
      link: "https://github.com/SoufianeElbk/brain-tumor-detection"
    },
    {
      title: "Faseeh",
      description: "Faseeh is an interactive language learning platform that allows you to transform your preferred content — books, podcasts, videos, social networks — into personalized learning material.",
      technologies: ["Web Development", "Interactive Learning"],
      link: "https://github.com/faseeh-app/Faseeh"
    }
  ];

  const education = [
    {
      degree: "Engineering Cycle in Software Engineering and Distributed Information Systems",
      institution: "Normal Higher School of Technical Education (ENSET)",
      period: "2023 - Present",
      location: "Mohammedia, Morocco",
      description: "Specialized in software development, algorithms, and modern programming practices."
    },
    {
      degree: "University Diploma of Technology (DUT), Computer Engineering",
      institution: "Higher School of Technology (EST)",
      period: "2021 - 2023",
      location: "Meknes, Morocco",
      description: "Technical education focused on computer engineering and programming fundamentals."
    },
    {
      degree: "Baccalaureate in Physical Sciences",
      institution: "Oued El Makhazine High School",
      period: "2020 - 2021",
      location: "Meknes, Morocco",
      description: "Scientific baccalaureate with focus on physics and mathematics."
    }
  ];

  const experience = [
    {
      position: "Web Developer | Internship",
      company: "WEHELP",
      period: "July 2024 - September 2024",
      location: "Meknes, Maroc",
      description: "LogAnno: Design and development of a web application for publishing legal announcements in Morocco."
    },
    {
      position: "Web Developer | Internship",
      company: "CONNECTPUB",
      period: "April 2023 - June 2023",
      location: "Meknes, Maroc",
      description: "Design and development of a web application for medical appointment management."
    }
  ];

  const navItems = [
    { id: "education", label: "Education", icon: <BookOpen className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Award className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <MessageCircle className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950">
      {/* Header with Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="flex justify-between items-center p-4 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="flex items-center space-x-3">
            <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              SOUFIANE ELBOUBKARI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center space-x-2 px-4 py-2 rounded-2xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30"
              >
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="font-bold text-gray-900 dark:text-white text-sm">MENU</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mt-6 text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-xl font-semibold text-justify">
                  I'm a passionate software engineering student at ENSET Mohammedia, dedicated to creating
                  innovative solutions and continuously learning new technologies. With a strong foundation
                  in programming and problem-solving, I enjoy tackling complex challenges and building
                  applications that make a difference.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-md">
                    <MapPin className="w-4 h-4" />
                    <span>Mohammedia, Morocco</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/profile.jpg"
                  alt="Soufiane Elboubkari"
                  className="w-full md:w-5/6 object-cover rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">{edu.degree}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.location}</p>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                      <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">{exp.position}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.location}</p>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                      <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">• {exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">Knowledge and Skills</h2>
            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">• {category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl px-6 py-4 hover:scale-105 transition-transform duration-300">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center overflow-hidden">
                          <img
                            src={skill.iconUrl}
                            alt={`${skill.name} icon`}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">Contact Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-6">Get In Touch</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and innovation. Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-400">elboubkarisoufiane03@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                      <p className="text-gray-600 dark:text-gray-400">+212 663057516</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">Mohammedia, Morocco</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://github.com/soufianeElbk" target="_blank" className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl hover:scale-105 transition-transform duration-300">
                    <Github className="w-8 h-8 text-gray-800 dark:text-gray-200" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">GitHub</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">View my code</p>
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/soufiane-elboubkari" target="_blank" className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl hover:scale-105 transition-transform duration-300">
                    <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Professional network</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
