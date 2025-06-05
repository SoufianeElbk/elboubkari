
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface NavigationCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  className?: string;
}

export function NavigationCard({ icon, title, description, onClick, className = "" }: NavigationCardProps) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={`glassmorphism min-h-32 sm:min-h-36 md:min-h-40 lg:min-h-44 p-3 sm:p-4 md:p-5 lg:p-6 rounded-2xl hover:scale-105 transition-all duration-300 bg-white/10 hover:bg-blue-50/20 dark:hover:bg-blue-900/20 border-blue-200/30 dark:border-blue-700/30 ${className}`}
    >
      <div className="flex flex-col items-center text-center justify-center space-y-1 sm:space-y-2 md:space-y-3 w-full min-w-0">
        <div className="text-blue-600 dark:text-blue-400 text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0">
          {icon}
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm md:text-base lg:text-lg leading-tight break-words overflow-wrap-anywhere w-full min-w-0 px-1 whitespace-normal">
          {title}
        </h3>
        <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-300 leading-tight break-words overflow-wrap-anywhere w-full min-w-0 px-1 whitespace-normal">
          {description}
        </p>
      </div>
    </Button>
  );
}
