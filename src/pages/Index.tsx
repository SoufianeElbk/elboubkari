
import { useNavigate } from "react-router-dom";
import { User, FileText, Briefcase, Trophy, Eye, Code, Target, Network } from "lucide-react";
import { ProfileImage } from "@/components/ProfileImage";
import { NavigationCard } from "@/components/NavigationCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { InfoPopup } from "@/components/InfoPopup";
import { ContactPopup } from "@/components/ContactPopup";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  const handleViewCV = () => {
    window.open('/cv-oracle.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-400/10 via-transparent to-transparent dark:from-blue-600/10"></div>
      
      {/* Header */}
      <div className="flex justify-between items-center p-4 lg:px-0 lg:max-w-7xl lg:mx-auto">
        <div className="flex items-center space-x-3">
          <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            SOUFIANE ELBOUBKARI
          </span>
        </div>
        <ThemeToggle />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 lg:pt-16">
        <div className="max-w-7xl w-full">


          {/* Main Grid Layout - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
            {/* Left Column - Navigation Cards */}
            <div className="space-y-4 sm:space-y-6 animate-fade-in order-2 lg:order-1" style={{ animationDelay: '0.2s' }}>
              <NavigationCard
                icon={<User />}
                title="Digital Portfolio"
                description="Explore my professional journey, skills, and projects"
                onClick={() => navigate('/portfolio')}
                className="w-full"
              />
              
              <NavigationCard
                icon={<Briefcase />}
                title="Job Applications"
                description="View job offers, resumes, and cover letters"
                onClick={() => navigate('/jobs')}
                className="w-full"
              />

              <NavigationCard
                icon={<Eye />}
                title="Hidden Job Market"
                description="Discover unadvertised opportunities"
                onClick={() => navigate('/hidden-job-market')}
                className="w-full"
              />

              <InfoPopup
                trigger={
                  <Button className="glassmorphism min-h-32 sm:min-h-36 md:min-h-40 lg:min-h-44 p-3 sm:p-4 md:p-5 lg:p-6 rounded-2xl hover:scale-105 transition-all duration-300 bg-white/10 hover:bg-blue-50/20 dark:hover:bg-blue-900/20 border-blue-200/30 dark:border-blue-700/30 w-full">
                    <div className="flex flex-col items-center text-center justify-center space-y-1 sm:space-y-2 md:space-y-3 w-full min-w-0">
                      <Network className="text-blue-600 dark:text-blue-400 text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0" />
                      <h3 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm md:text-base lg:text-lg leading-tight break-words overflow-wrap-anywhere w-full min-w-0 px-1 whitespace-normal">Networking Tips</h3>
                      <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-300 leading-tight break-words overflow-wrap-anywhere w-full min-w-0 px-1 whitespace-normal">
                        Why networking matters in your career
                      </p>
                    </div>
                  </Button>
                }
                title="The Power of Networking"
              >
                <div className="space-y-4">
                  <p>
                    Networking is one of the most powerful tools for career advancement. Here's why it matters:
                  </p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li><strong>Hidden Job Market:</strong> 80% of jobs are never publicly advertised</li>
                    <li><strong>Quality Referrals:</strong> Personal recommendations carry more weight</li>
                    <li><strong>Industry Insights:</strong> Stay updated with trends and opportunities</li>
                    <li><strong>Mentorship:</strong> Learn from experienced professionals</li>
                    <li><strong>Collaboration:</strong> Build partnerships for future projects</li>
                  </ul>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                    Remember: Networking is about building genuine relationships, not just collecting contacts.
                  </p>
                </div>
              </InfoPopup>
            </div>

            {/* Center Column - Profile Image */}
            <div className="flex flex-col items-center animate-scale-in order-1 lg:order-2 mt-16 sm:mt-12 md:mt-8 lg:mt-0" style={{ animationDelay: '0.4s' }}>
              <ProfileImage responsive={true} />
              <div className="mt-4 sm:mt-6 text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  SOUFIANE ELBOUBKARI
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                  Software Engineering Student <br></br> ENSET Mohammedia
                </p>
              </div>
            </div>

            {/* Right Column - Navigation Cards */}
            <div className="space-y-4 sm:space-y-6 animate-fade-in order-3 lg:order-3" style={{ animationDelay: '0.6s' }}>
              <NavigationCard
                icon={<FileText />}
                title="ATS-Friendly CV"
                description="View my resume"
                onClick={handleViewCV}
                className="w-full"
              />
              
              <ContactPopup />

              <NavigationCard
                icon={<Trophy />}
                title="GEIW 2025"
                description="My journey during the Global Entrepreneurship and Innovation Week 2025"
                onClick={() => navigate('/geiw-2025')}
                className="w-full"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 sm:mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm md:text-base">
              Ready to explore opportunities together?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
