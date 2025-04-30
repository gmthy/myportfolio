
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

const AboutSection = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const timeline: TimelineEntry[] = [
    {
      year: "២០១៨",
      title: "ចាប់ផ្តើមអាជីព",
      description: "ចាប់ផ្តើមការងារជាអ្នកអភិវឌ្ឍន៍គេហទំព័រ ជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យាក្នុងស្រុក។",
    },
    {
      year: "២០២០",
      title: "ក្លាយជាអ្នកអភិវឌ្ឍន៍ពេញលេញ",
      description: "បានក្លាយជាអ្នកអភិវឌ្ឍន៍ពេញលេញ ដោយបន្ថែមជំនាញផ្នែក Node.js និង React។",
    },
    {
      year: "២០២២",
      title: "អ្នកដឹកនាំបច្ចេកវិទ្យា",
      description: "ដឹកនាំក្រុមអ្នកអភិវឌ្ឍន៍ ដើម្បីបង្កើតគម្រោងធំៗជាច្រើន។",
    },
    {
      year: "២០២៥",
      title: "បច្ចុប្បន្ន",
      description: "កំពុងផ្តោតលើការអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ និងគេហទំព័រប្រកបដោយគុណភាព។",
    },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section id="about" className="py-20 relative bg-light dark:bg-dark">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTM2IDM0aDJ2MmgtMnpNNDAgMzBoMnYyaC0yek0zNiAyNmgydjJoLTJ6TTQwIDIyaDJ2MmgtMnpNMzQgMjRoMnYyaC0yek0zOCAyNGgydjJoLTJ6TTM0IDI4aDJ2MmgtMnpNMzggMjhoMnYyaC0yek0zNCAzMmgydjJoLTJ6TTM4IDMyaDJ2MmgtMnpNMzIgMzRoMnYyaC0yek0zMiAyNmgydjJoLTJ6TTMyIDMwaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
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
            <span className="text-gradient">អំពី​ខ្ញុំ</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            ខ្ញុំជាអ្នកអភិវឌ្ឍន៍កម្មវិធីដែលមានបទពិសោធន៍ជាច្រើនឆ្នាំ ហើយមានចំណង់ចំណូលចិត្តក្នុងការបង្កើតគេហទំព័រប្រកបដោយគុណភាពខ្ពស់។ ខ្ញុំចូលចិត្តធ្វើការជាមួយបច្ចេកវិទ្យាទំនើបៗ និងចែករំលែកចំណេះដឹងរបស់ខ្ញុំជាមួយអ្នកដទៃ។
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neon-cyan via-neon-pink to-neon-cyan dark:from-neon-pink dark:via-neon-cyan dark:to-neon-pink"></div>

          {/* Timeline entries */}
          <div className="space-y-16">
            {timeline.map((entry, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 }
                }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={cn(
                  "flex flex-col items-center",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                <div className={cn(
                  "w-full md:w-1/2 px-4 mb-8 md:mb-0",
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                )}>
                  <h3 className="text-xl font-bold text-glow mb-2">{entry.title}</h3>
                  <p className="text-muted-foreground">{entry.description}</p>
                </div>

                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-neon dark:bg-gradient-neon-light animate-pulse-glow z-10">
                  <span className="text-white font-bold text-sm">{entry.year}</span>
                </div>

                <div className={cn(
                  "w-full md:w-1/2 px-4 mt-8 md:mt-0",
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                )}>
                  <div className="opacity-0">Spacer</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
