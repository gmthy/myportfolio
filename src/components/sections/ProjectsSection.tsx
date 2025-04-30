
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="w-full md:w-1/2 lg:w-1/3 p-4"
    >
      <div
        className="h-full rounded-xl overflow-hidden bg-card border border-neon-cyan/30 dark:border-neon-pink/30 shadow-lg hover:shadow-xl transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden" style={{ paddingBottom: "60%" }}>
          <img
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6 animate-fade-in">
              <div className="flex space-x-3">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-white/60 text-white hover:bg-white/20 hover:text-white bg-transparent"
                  >
                    <Github size={18} />
                  </Button>
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-white/60 text-white hover:bg-white/20 hover:text-white bg-transparent"
                  >
                    <ExternalLink size={18} />
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const projects: Project[] = [
    {
      title: "កម្មវិធីគ្រប់គ្រងហាង",
      description: "កម្មវិធីគ្រប់គ្រងហាង សម្រាប់ការលក់ និងតាមដានផលិតផល",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "គេហទំព័រសិក្សា",
      description: "គេហទំព័រសម្រាប់ការសិក្សាតាមអនឡាញ ជាមួយវគ្គសិក្សាជាច្រើន",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      tags: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "កម្មវិធីប្រតិទិន",
      description: "កម្មវិធីប្រតិទិនសម្រាប់ការគ្រប់គ្រងការណាត់ជួប និងការងារ",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 dark:bg-muted/10 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 dark:bg-neon-pink/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-pink/20 dark:bg-neon-cyan/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-glow mb-4">
            <span className="text-gradient">គម្រោង</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            ទាំងនេះគឺជាគម្រោងមួយចំនួនដែលខ្ញុំបានបង្កើត។ អ្នកអាចមើលកូដនៅលើ GitHub ឬចូលទៅកាន់គេហទំព័រផ្ទាល់។
          </p>
        </motion.div>

        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
