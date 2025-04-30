
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDarkMode(true);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-full transition-all duration-300 hover:bg-transparent"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Sun
          className={cn(
            "h-5 w-5 rotate-0 scale-100 transition-all duration-500",
            isDarkMode ? "rotate-90 scale-0" : "rotate-0 scale-100",
            "text-neon-coral hover:text-neon-cyan"
          )}
        />
        <Moon
          className={cn(
            "absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500",
            isDarkMode ? "rotate-0 scale-100" : "rotate-90 scale-0",
            "text-neon-cyan hover:text-neon-pink"
          )}
        />
      </div>
    </Button>
  );
};

export default ThemeToggle;
