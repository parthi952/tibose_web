import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Img from "../../Constents";

const Cinematic3DIntro = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [stage, setStage] = useState("stacked"); // "stacked" -> "split" -> "complete"
  const { scrollY } = useScroll();

  // Mouse coordinate state with inertia interpolation
  const [mouse, setMouse] = useState({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Scroll transforms for the Hero section to create a 3D parallax zoom out
  const introScale = useTransform(scrollY, [0, 800], [1, 0.75]);
  const introOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const introRotateX = useTransform(scrollY, [0, 800], [0, 15]);
  const introTranslateY = useTransform(scrollY, [0, 800], [0, 120]);

  // Card definitions with high-resolution tech partner assets
  const cards = [
    { 
      name: "Microsoft", 
      icon: Img.HomePage.OurPartners.Microsoft,
      desc: "Enterprise Solution Suite",
      x: -240, y: -160, z: 80, rx: 15, ry: -25, rz: -10, color: "rgba(0,120,212,0.12)"
    },
    { 
      name: "Tata Tele", 
      icon: Img.HomePage.OurPartners.TT, 
      desc: "Business Connectivity",
      x: 240, y: -160, z: -100, rx: -15, ry: 20, rz: 15, color: "rgba(0,163,224,0.12)"
    },
    { 
      name: "AWS Cloud", 
      icon: Img.Slide_4.AWS,
      desc: "Amazon Web Services",
      x: -300, y: 30, z: 120, rx: 20, ry: -15, rz: -5, color: "rgba(255,153,0,0.12)"
    },
    { 
      name: "Google Workspace", 
      icon: Img.Slide_4.GoogleWorkspace,
      desc: "Collaboration Suite",
      x: 300, y: 30, z: 50, rx: -20, ry: 25, rz: 20, color: "rgba(234,67,53,0.12)"
    },
    { 
      name: "Azure Cloud", 
      icon: Img.Slide_4.Azure,
      desc: "Microsoft Cloud Platform",
      x: -160, y: 220, z: -60, rx: 25, ry: -30, rz: -15, color: "rgba(0,137,214,0.12)"
    },
    { 
      name: "Zoom", 
      icon: Img.Slide_4.Zoom,
      desc: "Virtual Video Meetings",
      x: 160, y: 220, z: 100, rx: -25, ry: 30, rz: 25, color: "rgba(45,140,255,0.12)"
    }
  ];

  // Particle constellation engine inside background canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0, 120, 212, 0.05)";
      
      // Draw grid coordinates
      ctx.strokeStyle = "rgba(59, 130, 246, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 45;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw and update animated node paths
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.25)";
        ctx.fill();

        // Connect nodes inside radius
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.12 * (1 - dist / 140)})`;
            ctx.stroke();
          }
        }
      });
      animationId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Storyboard triggers
  useEffect(() => {
    const splitTimer = setTimeout(() => setStage("split"), 1200);
    const mouseTimer = setTimeout(() => {
      const handleMouseMove = (e) => {
        setMouse((prev) => ({
          ...prev,
          targetX: (e.clientX - window.innerWidth / 2) / 32,
          targetY: (e.clientY - window.innerHeight / 2) / 32,
        }));
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, 2000);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(mouseTimer);
    };
  }, []);

  // Mouse inertia loop
  useEffect(() => {
    let active = true;
    const updateInertia = () => {
      setMouse((prev) => {
        const dx = prev.targetX - prev.x;
        const dy = prev.targetY - prev.y;
        return {
          ...prev,
          x: prev.x + dx * 0.08,
          y: prev.y + dy * 0.08,
        };
      });
      if (active) requestAnimationFrame(updateInertia);
    };
    updateInertia();
    return () => { active = false; };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      style={{ 
        scale: introScale, 
        opacity: introOpacity, 
        rotateX: introRotateX, 
        y: introTranslateY,
        perspective: 1200 
      }}
      className="relative w-full min-h-screen bg-slate-50 flex items-center justify-center overflow-hidden z-10 pb-12 origin-bottom select-none"
    >
      {/* 3D background canvas layer */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Floating airy atmospheric mesh gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-tr from-blue-300/30 to-indigo-300/20 rounded-full blur-[130px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-bl from-cyan-300/20 to-sky-300/25 rounded-full blur-[130px]" />
      </div>

      {/* 3D Visual Constellation Workspace */}
      <div 
        style={{
          transform: `rotateY(${mouse.x}deg) rotateX(${-mouse.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out"
        }}
        className="relative w-full max-w-6xl flex items-center justify-center h-[90vh] z-10"
      >
        
        {/* Glowing centerpiece core aura */}
        <motion.div
          animate={{
            scale: stage === "split" ? [1, 1.4, 1.25] : [0.75, 1.15],
            opacity: stage === "split" ? [0.15, 0.45, 0.2] : 0.45,
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-blue-400/20 to-indigo-500/25 blur-3xl pointer-events-none"
        />

        {/* 3D Product Glassmorphism Cards */}
        {cards.map((card, index) => (
          <motion.div
            key={index}
            style={{ 
              position: "absolute",
              transformStyle: "preserve-3d"
            }}
            initial={{ 
              x: 0, y: 0, z: 0, 
              scale: 0, 
              rotateX: 0, rotateY: 0, rotateZ: 0, 
              opacity: 0 
            }}
            animate={{
              x: stage === "split" ? card.x : 0,
              y: stage === "split" ? card.y : 0,
              z: stage === "split" ? card.z : 0,
              scale: stage === "split" ? 1 : 0.65,
              rotateX: stage === "split" ? card.rx : 0,
              rotateY: stage === "split" ? card.ry : 0,
              rotateZ: stage === "split" ? card.rz : 0,
              opacity: stage === "split" ? 1 : 0.85,
            }}
            transition={{
              type: "spring",
              stiffness: 45,
              damping: 12,
              delay: stage === "split" ? index * 0.08 : index * 0.05,
            }}
            className="w-56 p-5 rounded-[2rem] border border-white/60 bg-white/45 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:scale-105 hover:bg-white/70 hover:border-blue-300 group select-none"
          >
            {/* Soft inner color reflection */}
            <div 
              style={{ backgroundColor: card.color }}
              className="absolute inset-0 rounded-[2rem] opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none"
            />
            
            <div className="relative z-10 w-14 h-14 p-2.5 rounded-2xl bg-white shadow-md mb-4 group-hover:scale-110 transition-transform">
              <img src={card.icon} alt={card.name} className="w-full h-full object-contain" />
            </div>

            <h3 className="relative z-10 text-sm font-extrabold text-slate-800 tracking-wide uppercase">{card.name}</h3>
            <p className="relative z-10 text-[10px] font-bold text-blue-600/80 mt-1 tracking-wider uppercase">{card.desc}</p>
          </motion.div>
        ))}

        {/* Corporate Branding Reveal */}
        {stage === "split" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, letterSpacing: "-0.05em" }}
            animate={{ opacity: 1, scale: 1, letterSpacing: "0.15em" }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col items-center justify-center text-center z-20 absolute max-w-lg px-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 uppercase tracking-widest leading-none drop-shadow-sm select-text">
              TIBOS
            </h1>
            <h3 className="text-xs sm:text-sm font-bold text-slate-650 tracking-[0.22em] uppercase mt-3">
              Solutions & Services
            </h3>

            <button
              onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
              className="mt-8 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-650 hover:shadow-lg hover:shadow-blue-500/20 text-white font-extrabold text-sm tracking-widest uppercase transition-all active:scale-95 shadow-md"
            >
              Contact Our Expert
            </button>
          </motion.div>
        )}
      </div>

      {/* Floating dynamic scroll-down indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 text-slate-400 text-[10px] font-bold uppercase tracking-[0.25em]"
      >
        <span>Scroll down</span>
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
      </motion.div>
    </motion.div>
  );
};

export default Cinematic3DIntro;
