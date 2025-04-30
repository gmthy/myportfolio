
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/hooks/useTheme';

const ProfileScene = () => {
  const mount = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const profileRef = useRef<HTMLImageElement | null>(null);

  // Set up the scene
  useEffect(() => {
    if (!mount.current) return;

    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      1, // Aspect ratio is 1 since we're using a square container
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create renderer with square dimensions
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(400, 400); // Perfect square dimensions and slightly larger
    renderer.setClearColor(0x000000, 0);
    mount.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create a square plane for the profile picture (instead of sphere)
    const geometry = new THREE.PlaneGeometry(4, 4); // Square plane
    
    // Profile picture texture
    const texture = new THREE.TextureLoader().load(
      'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=400&h=400'
    );
    
    // Create material with the texture
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide // Show the texture from both sides
    });
    
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    // Add point light for the glowing effect
    const pointLight = new THREE.PointLight(0x00DDEB, 2, 50);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    
    // Render once - no animation loop since we don't want movement
    renderer.render(scene, camera);
    
    // Clean up
    return () => {
      if (rendererRef.current && mount.current) {
        mount.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  // Update the point light color based on theme
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.traverse((object) => {
        if (object instanceof THREE.PointLight) {
          object.color.set(isDarkMode ? 0x00DDEB : 0xFF6F61);
          
          // Re-render the scene when theme changes
          if (rendererRef.current && sceneRef.current) {
            const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            camera.position.z = 5;
            rendererRef.current.render(sceneRef.current, camera);
          }
        }
      });
    }
  }, [isDarkMode]);

  return <div ref={mount} className="w-full h-full" />;
};

export default ProfileScene;
