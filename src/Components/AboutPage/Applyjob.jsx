import React, { useState, useRef } from 'react';
import { 
  Upload, Send, CheckCircle, FileText, X, Briefcase, 
  Sparkles, ShieldCheck, Mail, Phone, User, FileDigit, 
  HelpCircle, AlertCircle, AlertTriangle 
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const api_url = import.meta.env.VITE_API_URL;

const ApplyJob = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  
  // Custom Validation & Confirmation States
  const [errors, setErrors] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);

  const positions = [
    "Software Developer",
    "Cybersecurity Analyst",
    "Cloud Engineer",
    "UI/UX Designer",
    "Data Scientist",
    "Product Manager"
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error dynamically when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: null }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
      if (errors.resume) {
        setErrors(prev => ({ ...prev, resume: null }));
      }
    }
  };

  // Form Validation Logic
  const validateForm = () => {
    let tempErrors = {};
    
    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required";
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please input a valid email address";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone Number is required";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.replace(/\s+/g, ""))) {
      tempErrors.phone = "Input a valid phone number (minimum 10 digits)";
    }

    if (!formData.position) {
      tempErrors.position = "Please select a target job position";
    }

    if (!selectedFile) {
      tempErrors.resume = "Please upload your Resume/CV document";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Trigger submission (Validates first, then opens confirmation modal)
  const handleTriggerSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirm(true);
    } else {
      // Scroll to the first error for enhanced mobile responsiveness
      const firstErrorId = Object.keys(errors)[0];
      if (firstErrorId) {
        const element = document.getElementById(firstErrorId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  };

  // Confirmed & Send API Trigger
  const handleConfirmSubmit = async () => {
    setShowConfirm(false);
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append('Candidate_name', formData.name);
    formDataToSend.append('Job_title', formData.position);
    formDataToSend.append('Candidate_Email', formData.email);
    formDataToSend.append('Candidate_Phone', formData.phone);
    if (selectedFile) {
      formDataToSend.append('Resume_path', selectedFile);
    }

    try {
      const response = await fetch(`${api_url}/candidates/Register`, {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit application. Please make sure the backend server is running.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 sm:p-12 my-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl max-w-lg mx-auto animate-in fade-in zoom-in duration-500 text-center">
        <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-full mb-6 shadow-md shadow-emerald-500/5 animate-bounce">
          <CheckCircle className="w-12 h-12 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Application Received!</h2>
        <p className="text-slate-500 text-sm mt-3 leading-relaxed max-w-sm">
          Thank you for applying. We have sent a confirmation email to <span className="text-blue-600 font-bold">{formData.email}</span>. Our recruitment board will review your profile shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFileName(""); setSelectedFile(null); setFormData({ name: '', email: '', phone: '', position: '', coverLetter: '' }); }}
          className="mt-8 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-lg shadow-blue-500/20 active:scale-95 font-bold text-sm tracking-wider uppercase cursor-pointer"
        >
          Return to Careers
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen py-6 sm:py-12 px-2 sm:px-6 flex items-center justify-center bg-slate-50/50">
      <div className="relative w-full max-w-5xl bg-white border border-slate-100 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row overflow-hidden min-h-[640px]">
        
        {onClose && (
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-[110] p-2.5 rounded-full bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all cursor-pointer animate-in fade-in"
          >
            <X size={18} />
          </button>
        )}

        {/* --- LEFT PANEL: HERO & BENEFITS SIDEBAR --- */}
        <div className="w-full lg:w-4/12 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden">
          
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-15%] w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 sm:space-y-6">
            <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-400 font-bold uppercase tracking-wider text-[9px] sm:text-[10px]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: "6s" }} />
              Tibos Careers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Scale your potential. Join us.
            </h2>
            <p className="text-blue-100/70 text-xs sm:text-sm leading-relaxed">
              We support remote-first collaboration, creative freedom, and structural paths to build high-performance cloud frameworks.
            </p>

            {/* Benefits list (Hides description on tiny screens to avoid overflow) */}
            <div className="space-y-3 sm:space-y-4 pt-4 border-t border-white/10">
              {[
                { title: "Remote-First Setup", desc: "Work comfortably from your space" },
                { title: "Training Incentives", desc: "Free Microsoft Certification paths" },
                { title: "Modern Stack Operations", desc: "Build utilizing advanced cyber frameworks" },
              ].map((item, i) => (
                <div key={i} className="flex gap-2.5 sm:gap-3 items-start">
                  <div className="p-1.5 bg-white/10 border border-white/25 rounded-lg text-emerald-400 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">{item.title}</div>
                    <div className="text-[10px] sm:text-[11px] text-blue-100/60 mt-0.5 hidden sm:block">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT PANEL: FORM WORKSPACE --- */}
        <form onSubmit={handleTriggerSubmit} className="w-full lg:w-8/12 p-5 sm:p-8 md:p-12 flex flex-col justify-between space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1">Apply for a Position</h2>
            <p className="text-slate-400 text-xs mb-6 sm:mb-8">Please enter your values into the recruitment parameters below.</p>

            {/* Validation Top Banner Banner */}
            {Object.keys(errors).length > 0 && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-700 animate-in fade-in slide-in-from-top-2 duration-300">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 animate-pulse" />
                <div className="text-xs font-bold">
                  Missing information: Please validate the {Object.keys(errors).length} mandatory highlighted fields below.
                </div>
              </div>
            )}

            <div className="space-y-5">
              {/* Personal Information Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    Full Name <span className="text-red-500 font-extrabold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none text-slate-800 placeholder:text-slate-400 transition-all text-sm ${
                      errors.name 
                        ? 'border-red-300 bg-red-50/10 focus:border-red-500 focus:ring-1 focus:ring-red-400/40' 
                        : 'bg-slate-50 border-slate-200/60 focus:border-blue-500 focus:bg-white shadow-inner'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-[10px] font-bold flex items-center gap-1 animate-pulse">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    Email Address <span className="text-red-500 font-extrabold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none text-slate-800 placeholder:text-slate-400 transition-all text-sm ${
                      errors.email 
                        ? 'border-red-300 bg-red-50/10 focus:border-red-500 focus:ring-1 focus:ring-red-400/40' 
                        : 'bg-slate-50 border-slate-200/60 focus:border-blue-500 focus:bg-white shadow-inner'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-[10px] font-bold flex items-center gap-1 animate-pulse">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    Phone Number <span className="text-red-500 font-extrabold">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number"
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none text-slate-800 placeholder:text-slate-400 transition-all text-sm ${
                      errors.phone 
                        ? 'border-red-300 bg-red-50/10 focus:border-red-500 focus:ring-1 focus:ring-red-400/40' 
                        : 'bg-slate-50 border-slate-200/60 focus:border-blue-500 focus:bg-white shadow-inner'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-[10px] font-bold flex items-center gap-1 animate-pulse">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                    Target Position <span className="text-red-500 font-extrabold">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none text-slate-600 transition-all text-sm appearance-none cursor-pointer ${
                        errors.position 
                          ? 'border-red-300 bg-red-50/10 focus:border-red-500' 
                          : 'bg-slate-50 border-slate-200/60 focus:border-blue-500 focus:bg-white'
                      }`}
                    >
                      <option value="">Select a role</option>
                      {positions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.position && (
                    <span className="text-red-500 text-[10px] font-bold flex items-center gap-1 animate-pulse">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.position}
                    </span>
                  )}
                </div>
              </div>

              {/* Enhanced File Upload Section */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                  <FileDigit className="w-3.5 h-3.5 text-slate-400" />
                  Resume / CV Document <span className="text-red-500 font-extrabold">*</span>
                </label>
                <div
                  onClick={() => fileInputRef.current.click()}
                  className={`relative border-2 border-dashed rounded-2xl p-5 sm:p-6 transition-all text-center cursor-pointer ${
                    errors.resume
                      ? 'border-red-300 bg-red-50/5'
                      : fileName 
                        ? 'border-blue-500 bg-blue-50/50 shadow-inner' 
                        : 'border-slate-200 hover:border-blue-400 hover:bg-slate-50/40'
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />

                  {fileName ? (
                    <div className="flex items-center justify-center space-x-3 text-blue-600 font-bold text-sm">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <span className="truncate max-w-[180px] sm:max-w-xs">{fileName}</span>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setFileName(""); setSelectedFile(null); }}
                        className="p-1 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors ml-2 cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1 sm:space-y-2">
                      <Upload className="mx-auto w-7 h-7 sm:w-8 sm:h-8 text-slate-400 animate-pulse" />
                      <p className="text-xs text-slate-600">
                        Drop your file here or <span className="text-blue-600 font-extrabold">browse</span>
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-semibold tracking-tighter">
                        PDF or Word documents (Max 5MB)
                      </p>
                    </div>
                  )}
                </div>
                {errors.resume && (
                  <span className="text-red-500 text-[10px] font-bold flex items-center gap-1 animate-pulse">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.resume}
                  </span>
                )}
              </div>

              {/* Cover Letter Section */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                  Cover Letter (Optional)
                </label>
                <textarea
                  id="coverLetter"
                  rows="3"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  placeholder="Describe your capabilities or tech stack alignment..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200/60 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white text-slate-800 placeholder:text-slate-400 transition-all text-sm resize-none shadow-inner"
                />
              </div>
            </div>
          </div>

          {/* Submission Trigger */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3.5 sm:py-4 px-6 rounded-2xl transition-all shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.99] flex items-center justify-center space-x-3 cursor-pointer text-xs sm:text-sm uppercase tracking-wider mt-4"
          >
            <Send className="w-4 h-4 text-white" />
            <span>Apply for position</span>
          </button>
        </form>

      </div>

      {/* --- HIGH-END GLASSMORPHIC CONFIRMATION ALERT MODAL --- */}
      <AnimatePresence>
        {showConfirm && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/60 backdrop-blur-md p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white border border-slate-100 rounded-[2rem] p-6 sm:p-8 w-full max-w-md shadow-2xl relative text-center flex flex-col space-y-6"
            >
              
              {/* Caution Icon */}
              <div className="mx-auto w-14 h-14 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-md">
                <AlertCircle className="w-7 h-7 text-blue-600 animate-pulse" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800">Confirm Submission</h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Are you absolutely sure you want to register your application parameters into the Tibos Recruitment Core?
                </p>
              </div>

              {/* Data Summary Overlay */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-left space-y-2.5 text-xs">
                <div className="flex justify-between border-b border-slate-200/50 pb-2">
                  <span className="text-slate-400">Position:</span>
                  <span className="font-bold text-slate-800">{formData.position}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/50 pb-2">
                  <span className="text-slate-400">Candidate:</span>
                  <span className="font-bold text-slate-800">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">CV Attachment:</span>
                  <span className="font-bold text-blue-600 truncate max-w-[180px]">{fileName}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowConfirm(false)}
                  className="py-3 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-500 font-bold text-xs uppercase tracking-wider cursor-pointer active:scale-95 transition-all"
                >
                  Cancel & Edit
                </button>
                <button
                  type="button"
                  onClick={handleConfirmSubmit}
                  className="py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/10 cursor-pointer active:scale-95 transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Confirm & Send
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ApplyJob;
