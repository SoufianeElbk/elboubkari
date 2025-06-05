
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    // Default to dark mode if no saved theme
    const isDark = savedTheme === null ? true : savedTheme === "dark";

    setTheme(isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);

    // Set default theme in localStorage if not already set
    if (savedTheme === null) {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="glassmorphism hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      ) : (
        <Sun className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      )}
    </Button>
  );
}
