
import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "@/hooks/useTheme";
import type { Container, Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const { isDarkMode } = useTheme();
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded2 = useCallback(async (container: Container | undefined) => {
    if (container) {
      setParticlesLoaded(true);
    }
  }, []);

  useEffect(() => {
    // Force reload particles when theme changes
    if (particlesLoaded) {
      setParticlesLoaded(false);
      setTimeout(() => setParticlesLoaded(true), 100);
    }
  }, [isDarkMode]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded2}
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: isDarkMode 
              ? ["#00DDEB", "#FF00A3", "#9b87f5"]
              : ["#66E3F2", "#FF6F61", "#9b87f5"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: isDarkMode ? "#00DDEB" : "#66E3F2",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true,
        background: {
          color: {
            value: "transparent"
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;
