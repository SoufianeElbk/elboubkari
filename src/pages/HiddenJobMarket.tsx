import { ThemeToggle } from "../components/ThemeToggle";
import { Eye, Users, Network, TrendingUp, Search, MessageCircle, Code } from "lucide-react";

export default function HiddenJobMarket() {
  const statistics = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "80% of Jobs",
      description: "Are never publicly advertised",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "70% of Positions",
      description: "Are filled through networking",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "5x Higher",
      description: "Success rate through referrals",
      color: "text-purple-600 dark:text-purple-400"
    }
  ];

  const strategies = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Leverage Existing Contacts",
      description: "Tell your network what you're looking for and maintain consistent communication. A friendly check-in can lead to an unexpected opportunity.",
      tips: ["Tell your network what you're looking for", "Maintain consistent communication", "Make friendly check-ins"]
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Explore Internal Opportunities",
      description: "Look within your current company for open roles in other departments. Build connections discreetly and express your interest professionally.",
      tips: ["Look for roles in other departments", "Build connections discreetly", "Express interest professionally"]
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Join Networking Groups",
      description: "Attend events or meetups in your field to exchange leads and job search tips. Collaboration is key.",
      tips: ["Attend industry events", "Exchange leads and tips", "Focus on collaboration"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Engage with Professional Organizations",
      description: "Alumni and industry associations often hear about jobs before they're posted. These groups also offer exclusive events and connections.",
      tips: ["Join alumni associations", "Participate in industry groups", "Attend exclusive events"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Stay Active on Social Media",
      description: "Follow companies and key employees, engage with their content, and maintain an updated, keyword-rich profile.",
      tips: ["Follow target companies", "Engage with content", "Update your profile regularly"]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Connect with Recruiters",
      description: "Build relationships with industry recruiters instead of just asking for a job. Let your skills and experience speak for you.",
      tips: ["Build genuine relationships", "Showcase your skills", "Maintain regular contact"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950 p-8">
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            The Hidden Job Market
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Did you know that many job opportunities are never publicly advertised? Welcome to the hidden job market—a realm of unlisted roles often filled through internal promotions, referrals, or direct outreach.
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="glassmorphism rounded-3xl p-8 mb-12">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl h-64 sm:h-80 flex items-center justify-center">
            <div className="text-center">
              <Network className="w-16 h-16 sm:w-24 sm:h-24 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <p className="text-blue-800 dark:text-blue-200 text-lg font-semibold">
                Hidden Opportunities Await
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {statistics.map((stat, index) => (
            <div key={index} className="glassmorphism rounded-3xl p-6 text-center">
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* What is the Hidden Job Market */}
        <div className="glassmorphism rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-6">
            What is the Hidden Job Market?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The hidden job market refers to job opportunities that are not publicly advertised
                or posted on job boards. These positions are filled through internal promotions,
                employee referrals, networking, and direct approaches to companies.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Employers use this approach to save time, reduce costs, and find highly qualified
                candidates through trusted networks. Companies often prefer this method because
                it's faster, more cost-effective, and typically yields higher-quality candidates
                who come with recommendations.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <p className="text-blue-800 dark:text-blue-200 font-semibold">
                  💡 Key Insight: Most jobs are filled before they're ever posted online!
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <Eye className="w-20 h-20 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                <p className="text-indigo-800 dark:text-indigo-200 font-semibold">
                  Uncover Hidden Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">
            How to Access the Hidden Job Market
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {strategies.map((strategy, index) => (
              <div key={index} className="glassmorphism rounded-3xl p-6">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {strategy.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {strategy.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {strategy.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                    Action Steps:
                  </p>
                  <ul className="space-y-1">
                    {strategy.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Strategies */}
        <div className="glassmorphism rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-6 text-center">
            More Ways to Access Hidden Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Reach Out Directly</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Email or message hiring managers to introduce yourself and express interest</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 dark:text-green-400 font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Volunteer Strategically</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Choose roles aligned with your career goals to expand your network</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Attend Industry Events</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Conferences and trade shows are great places to meet decision-makers</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 dark:text-orange-400 font-bold">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Monitor Company News</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Stay informed about expansions or leadership changes that precede hiring</p>
            </div>
          </div>
        </div>

        {/* Success Stories Image Placeholder */}
        <div className="glassmorphism rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-6 text-center">
            Success Through Networking
          </h2>
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl h-48 flex items-center justify-center mb-6">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <p className="text-green-800 dark:text-green-200 text-lg font-semibold">
                Real Success Stories
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              "85% of professionals found their current job through networking and personal connections."
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              - LinkedIn Global Talent Trends Report
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="glassmorphism rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Ready to Tap Into the Hidden Job Market?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Landing your next job might not start with an online application. It may begin with a conversation,
            a connection, or a little initiative. Start networking today and uncover opportunities others might miss.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors"
            >
              Start Networking on LinkedIn
            </a>
            <a 
              href="/" 
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-xl font-semibold transition-colors"
            >
              Back to Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
