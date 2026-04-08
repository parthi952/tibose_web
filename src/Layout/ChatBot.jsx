import React, { useState, useEffect, useRef } from "react";
import { X, Send, UserCheck, Loader2 } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("initial"); 
  const [messages, setMessages] = useState([
    { text: "Hello! Our team is now online. How can we help?", sender: "bot", id: Date.now() },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 
  
  const scrollRef = useRef(null);

  // External Trigger Listener
  useEffect(() => {
    const triggerChat = () => setOpen(true);
    window.addEventListener("open-chatbot", triggerChat);
    return () => window.removeEventListener("open-chatbot", triggerChat);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, status]);

  const handleContactExpert = () => {
    setStatus("connecting");
    setTimeout(() => {
      setStatus("chat");
    }, 2500);
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
    // Optional: Reset status after animation finishes
    setTimeout(() => setStatus("initial"), 300);
  };

  return (
    <div className="font-sans">
      {/* Floating Toggle Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className={`fixed right-6 z-[60] cursor-pointer flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 shadow-xl rounded-full 
            w-14 h-14 bg-gradient-to-tr from-blue-600 to-blue-400 p-1.5
            ${isScrolled ? "bottom-24" : "bottom-6"}`}
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

      {/* Chat Window */}
      <div
        className={`fixed right-6 w-[90vw] sm:w-80 bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden z-50 transition-all duration-500 ease-in-out transform 
          ${open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-90 pointer-events-none"} 
          ${isScrolled ? "bottom-24" : "bottom-6"} h-[500px] max-h-[75vh] border border-gray-100`}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
          <div className="flex items-center gap-3">
            <div className="relative">
                <div className={`w-3 h-3 rounded-full border-2 border-blue-600 ${status === 'chat' ? 'bg-green-400 animate-pulse' : 'bg-gray-300'}`} />
            </div>
            <span className="font-bold text-sm tracking-wide">Expert Support</span>
          </div>
          <button onClick={closeChat} className="hover:bg-white/20 p-1 rounded-full transition-colors cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
          
          {status === "initial" && (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
              <div className="w-32 h-32 scale-125">
                <DotLottieReact
                  src="https://lottie.host/b0373632-e6de-41ee-a3f2-c557716c6e74/jb1E2uah3k.lottie"
                  loop
                  autoplay
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Need Expert Advice?</h3>
                <p className="text-gray-500 text-xs mt-2 px-4">Our specialized team is available now to discuss your requirements.</p>
              </div>
              <button
                onClick={handleContactExpert}
                className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg hover:bg-blue-700 cursor-pointer transition-all duration-300 hover:shadow-blue-200 active:scale-95"
              >
                <UserCheck size={18} />
                Start Chat Now
              </button>
            </div>
          )}

          {status === "connecting" && (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="relative">
                <Loader2 size={48} className="text-blue-600 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-700">Connecting you...</h3>
              <p className="text-gray-400 text-xs animate-pulse">Finding the best expert for you.</p>
            </div>
          )}

          {status === "chat" && (
            <>
              <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 scroll-smooth">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`p-3 rounded-2xl text-[13px] shadow-sm max-w-[85%] leading-relaxed ${
                      msg.sender === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                   <div className="flex justify-start">
                     <div className="bg-white border border-gray-100 p-3 rounded-xl rounded-tl-none">
                       <div className="flex gap-1.5">
                         <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" />
                         <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                         <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                       </div>
                     </div>
                   </div>
                )}
              </div>

              <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex gap-2 items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus-within:border-blue-400 focus-within:bg-white transition-all">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent border-none focus:outline-none text-[13px] placeholder:text-gray-400"
                  />
                  <button 
                    onClick={sendMessage} 
                    disabled={!input.trim()} 
                    className="text-blue-600 disabled:text-gray-300 transition-colors cursor-pointer"
                  >
                    <Send size={18} />
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