
import { ThemeToggle } from "../components/ThemeToggle";
import { Code } from "lucide-react";

export default function Jobs() {
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
          <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Job Applications</h1>
          <p className="text-gray-600 dark:text-gray-300">Track my job applications and related documents</p>
        </div>
        
        <div className="grid gap-6">
          <div className="glassmorphism rounded-3xl p-6">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Recent Applications</h3>
            
            <div className="space-y-4">
              <div className="border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                <div className="mb-3">
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs font-medium">
                    Applied
                  </span>
                </div>
                <div className="mb-2">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100">Research Assistant OIP 2025 (Summer Internship)</h4>
                  <p className="text-orange-600 dark:text-orange-400 font-medium text-sm">Oracle</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Applied: 03/04/2025</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://careers.oracle.com/en/sites/jobsearch/job/274317"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors inline-block"
                  >
                    View Job Offer
                  </a>
                  <a
                    href="/cv-oracle.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm hover:bg-green-200 dark:hover:bg-green-800 transition-colors inline-block"
                  >
                    Resume
                  </a>
                  <a
                    href="/cover-letter.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors inline-block"
                  >
                    Cover Letter
                  </a>
                </div>
              </div>

              <div className="border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                <div className="mb-3">
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs font-medium">
                    Applied
                  </span>
                </div>
                <div className="mb-2">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100">Backend Developers</h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium text-sm">TalentMind</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Applied: 13/05/2025</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.linkedin.com/posts/talentmindhub_talentmind-stagepfa-stagepfe-activity-7326241722584215553-Czoy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQE640BZ7mYc7_DO01bJXoBLDLAgWHH9G4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors inline-block"
                  >
                    View Job Offer
                  </a>
                  <a
                    href="/cv-talentmind.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm hover:bg-green-200 dark:hover:bg-green-800 transition-colors inline-block"
                  >
                    Resume
                  </a>
                  <a
                    href="/demande_stage.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors inline-block"
                  >
                    Cover Letter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
