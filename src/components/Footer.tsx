
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-muted/30 dark:bg-muted/10 relative">
      <div className="container mx-auto px-4">
        <div className="border-t border-neon-cyan/30 dark:border-neon-pink/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground tracking-in-expand">
                រក្សាសិទ្ធិ © ២០២៥ ដោយ វណ្ណដា
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-cyan dark:hover:text-neon-pink transition-colors hover:vibrate-1"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-cyan dark:hover:text-neon-pink transition-colors hover:vibrate-1"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-cyan dark:hover:text-neon-pink transition-colors hover:vibrate-1"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
