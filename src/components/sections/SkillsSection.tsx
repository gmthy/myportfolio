
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Skill = {
  name: string;
  level: number;
  color: string;
};

type SkillBarProps = {
  skill: Skill;
  delay: number;
};

const SkillBar = ({ skill, delay }: SkillBarProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

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
        hidden: { opacity: 0, y: 20 }
      }}
      transition={{ duration: 0.5, delay }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-focus-in">{skill.name}</span>
        <span className="text-focus-in">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeInOut" }}
          className={`h-full rounded-full ${skill.color} animate-pulse-glow`}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const frontendSkills: Skill[] = [
    { name: "HTML & CSS", level: 95, color: "bg-gradient-to-r from-neon-cyan to-neon-pink" },
    { name: "JavaScript", level: 90, color: "bg-gradient-to-r from-neon-cyan to-neon-pink" },
    { name: "React", level: 88, color: "bg-gradient-to-r from-neon-cyan to-neon-pink" },
    { name: "Tailwind CSS", level: 85, color: "bg-gradient-to-r from-neon-cyan to-neon-pink" },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", level: 85, color: "bg-gradient-to-r from-neon-pink to-neon-cyan" },
    { name: "Python", level: 80, color: "bg-gradient-to-r from-neon-pink to-neon-cyan" },
    { name: "SQL", level: 75, color: "bg-gradient-to-r from-neon-pink to-neon-cyan" },
    { name: "MongoDB", level: 78, color: "bg-gradient-to-r from-neon-pink to-neon-cyan" },
  ];

  return (
    <section id="skills" className="py-20 bg-light dark:bg-dark relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(0,221,235,0.3)_0%,transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle,rgba(255,0,163,0.3)_0%,transparent_70%)]"></div>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-glow mb-4 tracking-in-expand">
            <span className="text-gradient">ជំនាញ</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-focus-in">
            ខាងក្រោមនេះគឺជាជំនាញបច្ចេកទេសរបស់ខ្ញុំ ដែលខ្ញុំបានអភិវឌ្ឍន៍អស់រយៈពេលជាច្រើនឆ្នាំ។
          </p>
        </motion.div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <motion.h3
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl font-bold mb-6 text-center lg:text-left text-shadow-drop"
            >
              បច្ចេកវិទ្យាផ្នែកខាងមុខ
            </motion.h3>
            
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} delay={0.4 + index * 0.1} />
            ))}
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <motion.h3
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl font-bold mb-6 text-center lg:text-left text-shadow-drop"
            >
              បច្ចេកវិទ្យាផ្នែកខាងក្រោយ
            </motion.h3>
            
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} delay={0.4 + index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
