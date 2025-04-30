
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Code, Smartphone, PenTool } from "lucide-react";
import VanillaTilt from "vanilla-tilt";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
};

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init(ref.current, {
        max: 15,
        scale: 1.05,
        speed: 300,
        glare: true,
        "max-glare": 0.2,
      });
    }
    
    // Clean up
    return () => {
      if (ref.current instanceof HTMLElement) {
        (ref.current as any)?.vanillaTilt?.destroy();
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5, delay }}
      className="w-full md:w-1/2 lg:w-1/3 p-4"
    >
      <div className="h-full p-6 rounded-xl relative overflow-hidden glassmorphism border border-neon-cyan/30 dark:border-neon-pink/30">
        <div className="relative z-10">
          <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-gradient-neon dark:bg-gradient-neon-light text-white scale-in-center">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-focus-in">{title}</h3>
          <p className="text-muted-foreground slide-in-bottom">{description}</p>
        </div>
        
        {/* Abstract background animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute w-32 h-32 -top-8 -right-8 bg-neon-cyan dark:bg-neon-pink rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute w-24 h-24 bottom-0 left-0 bg-neon-pink dark:bg-neon-cyan rounded-full filter blur-3xl animate-pulse"></div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const services = [
    {
      title: "ការអភិវឌ្ឍន៍គេហទំព័រ",
      description: "ខ្ញុំបង្កើតគេហទំព័រប្រកបដោយភាពទាក់ទាញ និងមានដំណើរការលឿន ដោយប្រើបច្ចេកវិទ្យាទំនើបបំផុត។",
      icon: <Code size={32} />,
    },
    {
      title: "ការអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ",
      description: "ខ្ញុំបង្កើតកម្មវិធីទូរស័ព្ទសម្រាប់ Android និង iOS ដោយប្រើបច្ចេកវិទ្យា React Native និង Flutter។",
      icon: <Smartphone size={32} />,
    },
    {
      title: "ការរចនា UI/UX",
      description: "ខ្ញុំរចនាអ៊ីនធើហ្វេសប្រើប្រាស់ដែលទាក់ទាញ និងងាយស្រួលប្រើប្រាស់ ដើម្បីបង្កើតបទពិសោធន៍ដ៏ល្អបំផុតសម្រាប់អ្នកប្រើប្រាស់។",
      icon: <PenTool size={32} />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4">
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
            <span className="text-gradient">សេវាកម្ម</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-focus-in">
            ខ្ញុំផ្តល់សេវាកម្មប្រកបដោយគុណភាពខ្ពស់ សម្រាប់គម្រោងព័ត៌មានវិទ្យាគ្រប់ប្រភេទ។
          </p>
        </motion.div>

        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
