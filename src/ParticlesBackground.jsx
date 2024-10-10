import { useEffect } from 'react';
import particlesJS from 'particles.js/particles'; // Use this path if available

const ParticlesBackground = () => {
  useEffect(() => {
    // Load the particles configuration from the JSON file
    particlesJS.load('particles-js', '/particles.json', () => {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  return (
    <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: -1 }}>
    </div>
  );
};

export default ParticlesBackground;
