import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, SquarePlay } from "lucide-react";

const IntroVideo = ({ onComplete }) => {
  const [muted, setMuted] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  // 1. Attempt unmuted autoplay on mount with muted fallback (defensive UX against browser policies)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      setMuted(false);

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Autoplay with sound successful");
          })
          .catch((error) => {
            console.log("Autoplay with sound blocked, falling back to muted autoplay");
            video.muted = true;
            setMuted(true);
            video.play().catch(err => console.error("Fallback autoplay failed:", err));
          });
      }
    }
  }, []);

  // 2. Defensive programming: auto-skip intro after 10 seconds in case video gets stuck or blocked
  useEffect(() => {
    const backupTimer = setTimeout(() => {
      handleComplete();
    }, 10000);

    return () => clearTimeout(backupTimer);
  }, []);

  const handleComplete = () => {
    setIsFading(true);
    // Wait for fade animation to complete before unmounting
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <AnimatePresence>
      {!isFading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 w-screen h-screen bg-black z-[99999] flex items-center justify-center overflow-hidden"
        >
          {/* Video Player - muted attribute removed to start unmuted via JS */}
          <video
            ref={videoRef}
            src="/TIBOS intro.mp4"
            autoPlay
            playsInline
            onEnded={handleComplete}
            className="w-full h-full object-cover"
          />

          {/* Premium Video Controls Overlay */}
          <div className="absolute inset-x-0 bottom-10 px-8 flex items-center justify-between z-10 pointer-events-auto">
            {/* Unmute / Mute control */}
            <button
              onClick={toggleMute}
              className="flex items-center gap-2 bg-black/40 hover:bg-black/60 border border-white/20 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-full cursor-pointer transition-all active:scale-95 shadow-lg"
            >
              {muted ? (
                <>
                  <VolumeX className="w-4 h-4 text-red-400" />
                  Unmute Sound
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-green-400" />
                  Mute Sound
                </>
              )}
            </button>

            {/* Skip Intro control */}
            <button
              onClick={handleComplete}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full cursor-pointer transition-all active:scale-95 shadow-lg hover:border-white/50"
            >
              Skip Intro
              <span className="text-[10px]">▶▶</span>
            </button>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroVideo;
