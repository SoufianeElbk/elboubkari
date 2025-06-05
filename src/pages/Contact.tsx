
import { Linkedin, Github, Mail, Phone, Code } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: <Github className="w-8 h-8" />,
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950 p-8">
      {/* Header */}
      <div className="flex justify-between items-center p-4 lg:px-0 lg:max-w-4xl lg:mx-auto">
        <div className="flex items-center space-x-3">
          <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            SOUFIANE ELBOUBKARI
          </span>
        </div>
        <ThemeToggle />
      </div>
      <div className="max-w-4xl mx-auto lg:mt-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Contact Me</h1>
          <p className="text-gray-600 dark:text-gray-300">Let's connect and discuss opportunities</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphism rounded-3xl p-6 hover:scale-105 transition-all duration-300 hover:bg-blue-50/20 dark:hover:bg-blue-900/20 block"
            >
              <div className="flex items-center space-x-4">
                <div className="text-blue-600 dark:text-blue-400">
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100">{method.label}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{method.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="glassmorphism rounded-3xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6 text-center">Get In Touch</h2>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation 
            about technology and innovation. Feel free to reach out through any of the channels above!
          </p>
        </div>
      </div>
    </div>
  );
}
