import { ThemeToggle } from "../components/ThemeToggle";
import { Code, Calendar, MapPin, Users, Trophy, Target, CheckCircle, Clock, Star, ChevronLeft, ChevronRight, X, Maximize } from "lucide-react";
import { useState } from "react";

export default function GEIW2025() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const geiwImages = [
    {
      src: "/img3.jpeg",
      alt: "GEIW Event"
    },
    {
      src: "/img6.jpeg",
      alt: "GEIW Event"
    },
    {
      src: "/img10.jpeg",
      alt: "GEIW Event"
    },

    {
      src: "/img9.jpeg",
      alt: "GEIW Event"
    },
    {
      src: "/img11.jpeg",
      alt: "GEIW Event"
    },
    {
      src: "/img12.jpeg",
      alt: "GEIW Event"
    },
    {
      src: "/img5.jpeg",
      alt: "GEIW Event"
    },
    {
      src: "/img8.jpeg",
      alt: "GEIW Event"
    },
    {
      src: "/img13.jpeg",
      alt: "GEIW Event"
    },
    {
      src: "/img14.jpeg",
      alt: "GEIW Event"
    },
    {
      src: "/img7.jpeg",
      alt: "GEIW Event"
    },
    {
      src: "/img2.jpeg",
      alt: "GEIW Event"
    },
    {
      src: "/img4.jpeg",
      alt: "GEIW Event"
    },
    {
      src: "/img1.jpeg",
      alt: "GEIW Event"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % geiwImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + geiwImages.length) % geiwImages.length);
  };

  const skills = [
    "Event Organization",
    "Public Speaking",
    "Team Leadership",
    "Project Management",
    "Communication",
    "Innovation",
    "Collaboration",
    "Problem Solving"
  ];

  const achievements = [
    {
      title: "Successful Event Execution",
      description: "Organized a professional public speaking competition with 30+ participants on AI and society"
    },
    {
      title: "Team Leadership",
      description: "Led Club ENSPEC team in coordinating all aspects of the AI-themed competition"
    },
    {
      title: "Thought-Provoking Discussions",
      description: "Facilitated meaningful conversations about AI's role in creating equitable societies"
    },
    {
      title: "Innovation in Education",
      description: "Promoted critical thinking about AI ethics and social responsibility among students"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950">
      {/* Header */}
      <div className="flex justify-between items-center p-4 lg:px-0 lg:max-w-6xl lg:mx-auto">
        <div className="flex items-center space-x-3">
          <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            SOUFIANE ELBOUBKARI
          </span>
        </div>
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto lg:mt-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img
              src="/geiw.png"
              alt="GEIW Logo"
              className="h-32 w-auto"
            />
          </div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My experience organizing and participating in the Global Entrepreneurship and Innovation Week
          </p>
        </div>

        {/* About GEIW */}
        <div className="glassmorphism rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-6">
            What is GEIW?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Recently, ENSET Mohammedia organized the Global Entrepreneurship and Innovation Week (GEIW),
            a dynamic event aimed at fostering innovation and collaboration among students.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This week-long event brings together students, entrepreneurs, and industry professionals to explore
            cutting-edge technologies, share innovative ideas, and build meaningful connections that drive
            entrepreneurial success.
          </p>
        </div>

        {/* Event Info */}
        <div className="glassmorphism rounded-3xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Duration</h3>
              <p className="text-gray-600 dark:text-gray-300">21-22-23 May 2025</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">ENSET Mohammedia</p>
            </div>
            <div>
              <Trophy className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">Entrepreneurship & Innovation</p>
            </div>
          </div>
        </div>

        {/* My Role - Speakathon Competition */}
        <div className="glassmorphism rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-6">
            Organizing the Speakathon Competition
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                As an active member of <strong className="text-blue-600 dark:text-blue-400">Club ENSPEC</strong>,
                I had the privilege of organizing the Speakathon competition during GEIW 2025. The competition
                focused on the compelling topic: <strong className="text-blue-600 dark:text-blue-400">"How AI can shape an equitable society and enhance human knowledge"</strong>.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                This thought-provoking theme challenged participants to explore the intersection of artificial intelligence,
                social equity, and knowledge advancement. Working alongside my dedicated club teammates, we coordinated
                every aspect of the competition, from participant registration to judging criteria, ensuring a professional
                and engaging experience for all participants.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <p className="text-blue-800 dark:text-blue-200 font-semibold">
                  🎯 Impact: Successfully engaged 30+ students in exploring AI's role in creating equitable societies
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/speakathon-poster.jpeg"
                alt="Speakathon Competition Poster - How AI can shape an equitable society and enhance human knowledge"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Competition Theme Details */}
        <div className="glassmorphism rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-6 text-center">
            Competition Theme: AI & Equitable Society
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">AI Ethics</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Exploring responsible AI development and deployment</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Social Equity</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Addressing bias and ensuring fair AI systems</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Knowledge Enhancement</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Leveraging AI to democratize education and information</p>
            </div>
          </div>
        </div>

        {/* GEIW Highlights Carousel */}
        <div className="glassmorphism rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">
            GEIW Highlights
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={geiwImages[currentImageIndex].src}
                alt={geiwImages[currentImageIndex].alt}
                className="w-full h-64 sm:h-80 lg:h-[28rem] object-cover transition-all duration-500 cursor-pointer"
                onClick={() => setIsFullscreen(true)}
              />
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 dark:hover:bg-black/30 transition-colors"
              >
                <Maximize className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 dark:hover:bg-black/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 dark:hover:bg-black/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {geiwImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex
                      ? 'bg-blue-600 dark:bg-blue-400'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Skills Developed */}
        <div className="glassmorphism rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">
            Skills Developed Through Organization
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 text-center">
                <span className="text-blue-800 dark:text-blue-200 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="glassmorphism rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">{achievement.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>



        {/* Call to Action */}
        <div className="glassmorphism rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            GEIW 2025 Experience
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            This experience organizing the AI-themed public speaking competition "How AI can shape an equitable society and enhance human knowledge" during GEIW has been instrumental in developing my leadership and event management skills while fostering critical discussions about technology's role in society.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors"
            >
              Back to Portfolio
            </a>
            <a 
              href="/portfolio" 
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-xl font-semibold transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Fullscreen Modal */}
        {isFullscreen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-full max-h-full">
              <img
                src={geiwImages[currentImageIndex].src}
                alt={geiwImages[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
