
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Typed from "typed.js";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileScene from "../three/ProfileScene";

const HeroSection = () => {
  const typedEl = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [letterAnimationIndex, setLetterAnimationIndex] = useState(0);
  const firstHeading = "សួស្តី! ខ្ញុំគឺជា";
  const nameText = "វណ្ណដា";
  const [animatedLetters, setAnimatedLetters] = useState(nameText.split('').map(char => ({ 
    char, 
    animation: ''
  })));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!typedEl.current) return;

    const typed = new Typed(typedEl.current, {
      strings: [
        "សូមស្វាគមន៍មកកាន់ផលប័ត្ររបស់ខ្ញុំ",
        "ខ្ញុំជា​អ្នក​អភិវឌ្ឍន៍​ផ្នែក​កម្មវិធី",
        "ខ្ញុំ​ជំនាញ​ក្នុង​ការ​បង្កើត​គេហទំព័រ",
        "ខ្ញុំ​ជា​អ្នក​អភិវឌ្ឍន៍​អ៊ីនធើហ្វេស"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Enhanced animations with more variety and frequent cycling
  useEffect(() => {
    // More diverse animation effects
    const animations = [
      'text-pop-up-top', 
      'text-shadow-drop', 
      'tracking-in-contract',
      'color-change-2x',
      'vibrate-1',
      'text-focus-in',
      'text-flicker-in'
    ];
    
    // Faster animation cycling
    const interval = setInterval(() => {
      setLetterAnimationIndex(prevIndex => (prevIndex + 1) % animations.length);
      
      // Apply different animation to each letter
      setAnimatedLetters(letters => 
        letters.map((letter, idx) => ({
          ...letter,
          animation: animations[(idx + letterAnimationIndex) % animations.length]
        }))
      );
    }, 1200); // Faster cycling of animations
    
    return () => clearInterval(interval);
  }, [letterAnimationIndex]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background dark:from-transparent dark:to-background opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div 
            className={cn(
              "lg:w-1/2 text-center lg:text-left space-y-6",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-glow tracking-in-expand">
                {firstHeading}{" "}
                <span className="text-gradient inline-flex">
                  {animatedLetters.map((letter, idx) => (
                    <span 
                      key={idx} 
                      className={`${letter.animation} inline-block transition-all duration-500`}
                      style={{animationDelay: `${idx * 150}ms`, animationDuration: '0.8s', animationIterationCount: 'infinite'}}
                    >
                      {letter.char}
                    </span>
                  ))}
                </span>
              </h2>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-focus-in">
                <span ref={typedEl}></span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground slide-in-bottom animate-delay-300">
                ខ្ញុំជាអ្នកសរសេរកម្មវិធីដែលមានបទពិសោធន៍ជាង ៥ ឆ្នាំ ដែលអាចបង្កើតកម្មវិធីប្រកបដោយគុណភាព និងបច្ចេកវិទ្យាទំនើប
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4 slide-in-bottom animate-delay-400">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-scale text-foreground hover:text-neon-cyan dark:hover:text-neon-pink transition-colors duration-300"
              >
                <Github size={24} className="animate-pulse hover:animate-[vibrate-1_0.3s_linear_infinite_both]" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-scale text-foreground hover:text-neon-cyan dark:hover:text-neon-pink transition-colors duration-300"
              >
                <Linkedin size={24} className="animate-pulse hover:animate-[vibrate-1_0.3s_linear_infinite_both]" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-scale text-foreground hover:text-neon-cyan dark:hover:text-neon-pink transition-colors duration-300"
              >
                <Twitter size={24} className="animate-pulse hover:animate-[vibrate-1_0.3s_linear_infinite_both]" />
              </a>
            </div>

            <div className="pt-4 slide-in-bottom animate-delay-500">
              <Button
                onClick={scrollToNext}
                className="relative px-6 py-6 overflow-hidden rounded-full group border-2 border-neon-cyan dark:border-neon-pink bg-transparent hover:bg-neon-cyan/10 dark:hover:bg-neon-pink/10 transition-all duration-300 scale-in-center hover:animate-pulse-glow"
              >
                <span className="relative z-10 text-foreground tracking-in-expand animate-pulse">
                  ស្វែងយល់បន្ថែម
                </span>
              </Button>
            </div>
          </div>

          <div 
            className={cn(
              "lg:w-1/2 flex justify-center lg:justify-end",
              isVisible ? "animate-fade-in scale-in-center" : "opacity-0"
            )}
          >
            <div className="relative w-96 h-96 sm:w-[400px] sm:h-[400px]">
              <ProfileScene />
              <div className="absolute inset-0 rounded-full border-2 border-neon-cyan dark:border-neon-pink animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-foreground flex justify-center pt-2">
          <div className="w-1 h-3 bg-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
