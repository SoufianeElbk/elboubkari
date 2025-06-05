import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { Code } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

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
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] lg:mt-8">
        <div className="text-center glassmorphism rounded-3xl p-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-900 dark:text-blue-100">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 underline">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
