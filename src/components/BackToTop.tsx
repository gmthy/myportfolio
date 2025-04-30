
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        "fixed right-4 bottom-4 z-50 rounded-full p-2 border-neon-cyan dark:border-neon-pink text-neon-cyan dark:text-neon-pink bg-transparent backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-neon-cyan/30 dark:hover:shadow-neon-pink/30",
        show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      )}
    >
      <ArrowUp size={20} />
    </Button>
  );
};

export default BackToTop;
