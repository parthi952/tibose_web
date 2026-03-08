
import { motion } from "framer-motion";

const FiberOpticBackground = () => {
  // Generate 15 unique wave lines
  const waveCount = 15;
  const colors = ["#00f2fe", "#4facfe", "#7400b8", "#ff00ff", "#00ffcc", "#70e000"];
  // const colors = ["#0A84FF", "#5856D6", "#AF52DE", "#007AFF", "#5AC8FA", "#34C759"];
// Deep Blues, Purples, and a sharp Teal/Green
// const colors = ["#FF3B30", "#FF9500", "#FF2D55", "#5856D6", "#AF52DE", "#FF2D55"];
// Pinks, Oranges, and Indigo

  return (
    <svg width="100%" height="100%" viewBox="0 0 4000 1000" style={{ position: "absolute", top: 0, left: 0, overflow: "hidden" }}>
      {Array.from({ length: waveCount }).map((_, i) => {
        const color = colors[i % colors.length];
        
        // 1. DURATION: Increased to 25-40 seconds for a very slow drift
        const horizontalSpeed = 25 + Math.random() * 15; 
        
        // 2. VERTICAL SLOWDOWN: Slower "floating" oscillation
        const verticalSpeed = 8 + Math.random() * 6;
        
        const delay = Math.random() * -30; 
        


        const offset = 1000 + Math.random() * 600; 
  
  const highPoint = 500 - offset;
  const lowPoint = 150 + offset;  
  
  const pathD = `M0 500 C 750 ${highPoint}, 2250 ${lowPoint}, 3000 500 C 3750 ${highPoint}, 5250 ${lowPoint}, 6000 500`;

        return (
          <motion.path
            key={i}
            d={pathD}
            fill="none"
            stroke={color}
            strokeWidth="1.5" // Thinner lines look more elegant when moving slowly
            animate={{ 
              x: [-3000, 0], 
              y: [i * 3, i * -3, i * 3] 
            }}
            transition={{
              x: { 
                duration: horizontalSpeed, 
                repeat: Infinity, 
                ease: "linear", 
                delay 
              },
              y: { 
                duration: verticalSpeed, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
            style={{
              filter: `drop-shadow(0 0 10px ${color})`,
              opacity: 1 + Math.random() * 0.9, // Slightly lower opacity for a subtle look
            }}
          />
        );
      })}
    </svg>
  );
};

export default FiberOpticBackground;

