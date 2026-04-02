import React, { useState, useEffect, useRef } from "react";
import { X, Send, UserCheck, Loader2 } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("initial"); // 'initial', 'connecting', 'chat'
  const [messages, setMessages] = useState([
    { text: "Hello! Our team is now online. How can we help?", sender: "bot", id: Date.now() },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll for positioning
  
  const scrollRef = useRef(null);

  // 1. Detect scroll to move the button up (avoiding the ScrollToTop button)
  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls down more than 300px, assume ScrollToTop button is visible
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll chat messages to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, status]);

  const handleContactExpert = () => {
    setStatus("connecting");
    setTimeout(() => {
      setStatus("chat");
    }, 3000);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user", id: Date.now() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    setTimeout(() => {
      const botReply = { 
        text: "Understood. Our expert is looking into this for you.", 
        sender: "bot", 
        id: Date.now() + 1 
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1500);
  };

  const closeChat = () => {
    setOpen(false);
    setStatus("initial");
  };

  return (
    <div className="font-sans">
      {/* 💬 Floating Lottie Button - Smaller Size & Dynamic Bottom Position */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className={`fixed right-6 z-[60] cursor-pointer flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 shadow-xl rounded-full 
            w-14 h-14 bg-gradient-to-tr from-blue-600 to-blue-400 p-1.5
            ${isScrolled ? "bottom-24" : "bottom-6"}`} // Moves up when ScrollToTop appears
        >
          <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <DotLottieReact
              src="https://lottie.host/1b8296c0-1e5e-4d13-a0b3-81bfa9221c87/G3VA49Xko8.lottie"
              loop
              autoplay
            />
          </div>
        </button>
      )}

      {/* 📦 Chat Window */}
      <div
        className={`fixed right-6 w-[90vw] sm:w-80 bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden z-50 transition-all duration-300 transform 
          ${open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95 pointer-events-none"} 
          ${isScrolled ? "bottom-24" : "bottom-6"} h-[450px] max-h-[70vh] border border-gray-100`}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center shadow-md">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${status === 'chat' ? 'bg-green-400 animate-pulse' : 'bg-gray-300'}`} />
            <span className="font-bold text-sm tracking-wide">Expert Support</span>
          </div>
          <button onClick={closeChat} className="hover:bg-white/20 p-1 rounded-full transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
          
          {/* STAGE 1: INITIAL */}
          {status === "initial" && (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="w-32 h-32">
                <DotLottieReact
                  src="https://lottie.host/b0373632-e6de-41ee-a3f2-c557716c6e74/jb1E2uah3k.lottie"
                  loop
                  autoplay
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Need Help?</h3>
                <p className="text-gray-500 text-xs mt-1 px-4">Our experts are ready to chat with you in real-time.</p>
              </div>
              <button
                onClick={handleContactExpert}
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:bg-blue-900 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <UserCheck size={16} />
                Contact Our Expert
              </button>
            </div>
          )}

          {/* STAGE 2: CONNECTING */}
          {status === "connecting" && (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-3">
              <Loader2 size={36} className="text-blue-600 animate-spin" />
              <h3 className="text-md font-semibold text-gray-700">Connecting...</h3>
              <p className="text-gray-400 text-xs">Waiting for an expert to join.</p>
            </div>
          )}

          {/* STAGE 3: CHAT */}
          {status === "chat" && (
            <>
              <div ref={scrollRef} className="flex-1 p-3 overflow-y-auto space-y-3 scroll-smooth">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`p-2.5 rounded-2xl text-xs shadow-sm max-w-[85%] ${
                      msg.sender === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-white text-gray-800 border border-gray-200 rounded-tl-none"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                   <div className="flex justify-start">
                     <div className="bg-white border border-gray-200 p-2 rounded-xl rounded-tl-none">
                       <div className="flex gap-1">
                         <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" />
                         <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                         <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                       </div>
                     </div>
                   </div>
                )}
              </div>

              <div className="p-3 bg-white border-t">
                <div className="flex gap-2 items-center bg-gray-100 rounded-full px-3 py-1.5 focus-within:ring-1 ring-blue-500">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type..."
                    className="flex-1 bg-transparent border-none focus:outline-none text-xs"
                  />
                  <button onClick={sendMessage} disabled={!input.trim()} className="text-blue-600 disabled:text-gray-400">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBot;