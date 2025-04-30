
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const navLinks = [
    { name: "ទំព័រដើម", href: "#home" },
    { name: "អំពីខ្ញុំ", href: "#about" },
    { name: "សេវាកម្ម", href: "#services" },
    { name: "ជំនាញ", href: "#skills" },
    { name: "គម្រោង", href: "#projects" },
    { name: "ទំនាក់ទំនង", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (logoClickCount === 3) {
      setShowEasterEgg(true);
      setTimeout(() => {
        setShowEasterEgg(false);
        setLogoClickCount(0);
      }, 3000);
    }
  }, [logoClickCount]);

  const handleLogoClick = () => {
    setLogoClickCount((prev) => prev + 1);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-light/80 dark:bg-dark/80 backdrop-blur-md py-2 shadow-md"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold relative cursor-pointer"
            onClick={handleLogoClick}
          >
            <span
              className={cn(
                "text-gradient font-bold transition-all duration-300 text-flicker-in",
                isScrolled ? "text-xl" : "text-2xl"
              )}
            >
              ផលប័ត្រ
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`story-link text-foreground hover:text-neon-cyan dark:hover:text-neon-pink transition-colors duration-300 slide-in-bottom animate-delay-${index * 100}`}
              >
                {link.name}
              </a>
            ))}
            <div className="slide-in-bottom animate-delay-500">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative ml-2 h-10 w-10 text-foreground"
            >
              <div
                className={cn(
                  "absolute inset-0 flex flex-col items-center justify-center",
                  "transition-all duration-300"
                )}
              >
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-gradient-neon dark:bg-gradient-neon-light rounded transition-all duration-300",
                    mobileMenuOpen
                      ? "rotate-45 translate-y-1.5"
                      : "translate-y-[-4px]"
                  )}
                ></span>
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-gradient-neon dark:bg-gradient-neon-light rounded transition-all duration-300",
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                ></span>
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-gradient-neon dark:bg-gradient-neon-light rounded transition-all duration-300",
                    mobileMenuOpen
                      ? "-rotate-45 translate-y-[-4px]"
                      : "translate-y-[4px]"
                  )}
                ></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 px-2 glassmorphism rounded-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-foreground hover:text-neon-cyan dark:hover:text-neon-pink px-4 py-2 rounded-md transition-colors duration-300 slide-in-right animate-delay-${index * 100}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* Easter egg animation */}
      {showEasterEgg && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
          <div className="absolute animate-rocket">
            <div className="w-20 h-32 bg-gradient-neon rounded-t-full relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-16 bg-red-500 clip-triangle animate-flame"></div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-light flex items-center justify-center">
                <span className="text-dark">🚀</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
