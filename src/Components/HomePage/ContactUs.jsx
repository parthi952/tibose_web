import React from "react";
import Animation from "./Contact/Animation";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center p-4 md:p-10 font-sans">
      <div className="relative max-w-6xl w-full rounded-[3rem] shadow-2xl overflow-hidden min-h-175 flex flex-col md:flex-row ">
        

        <div className="absolute inset-0 z-0">
          <Animation />
        </div>

 
        <div className="hidden md:flex md:w-5/12 pointer-events-none">
        </div>

        <div className="relative z-10  p-8 md:p-14 flex items-center backdrop-blur-sm ">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Get in touch</h2>
            <p className="text-slate-600 mb-8">We'd love to hear from you. Please fill out the form.</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/50 backdrop-blur-sm focus:bg-white/90 outline-none transition-all placeholder:text-slate-400 shadow-sm"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/50 backdrop-blur-sm focus:bg-white/90 outline-none transition-all placeholder:text-slate-400 shadow-sm"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/50 backdrop-blur-sm focus:bg-white/90 outline-none transition-all placeholder:text-slate-400 shadow-sm"
              />

              <div className="relative">
                <select className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/50 backdrop-blur-sm focus:bg-white/90 outline-none appearance-none transition-all text-slate-500 shadow-sm">
                    <option >Select Subject</option>
                    <option >Sales Inquiry</option>
                    <option >Technical Support</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <textarea 
                placeholder="Message"
                rows="4"
                className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/50 backdrop-blur-sm focus:bg-white/90 outline-none transition-all placeholder:text-slate-400 shadow-sm"
              ></textarea>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-blue-600 hover:border border-blue-600  text-white font-bold text-lg hover:bg-blue-50 hover:text-blue-600 hover:-translate-y-0.5 active:scale-95 transition-all shadow-3xl"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;