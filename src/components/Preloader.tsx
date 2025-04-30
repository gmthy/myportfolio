
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-light dark:bg-dark transition-opacity duration-500">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-neon-cyan dark:border-neon-pink rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neon-cyan dark:text-neon-pink font-bold">
          {/* Binary code element */}
          <div className="absolute -inset-8 opacity-30 text-[8px] overflow-hidden animate-rotate-slow text-neon-cyan dark:text-neon-pink">
            10101<br/>01010<br/>10101<br/>01010<br/>10101
          </div>
          <span className="text-2xl animate-pulse text-flicker-in">ផលប័ត្រ</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
