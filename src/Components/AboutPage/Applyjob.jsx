import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, Send, CheckCircle, FileText, X, Briefcase, MapPin, DollarSign, 
  ChevronDown, ChevronUp, Award, BookOpen, User, Mail, Phone, FileDigit, 
  HelpCircle, AlertCircle 
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const api_url = import.meta.env.VITE_API_URL;
console.log("VITE_API_URL:", api_url);

const ApplyJob = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

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

  // Job Postings State
  const [jobPosts, setJobPosts] = useState([]);
  const [activeJobIndex, setActiveJobIndex] = useState(null);

  const [positions, setPositions] = useState([
    "Software Developer",
    "Cybersecurity Analyst",
    "Cloud Engineer",
    "UI/UX Designer",
    "Data Scientist",
    "Product Manager"
  ]);

  // Fetch active job postings from the backend
  useEffect(() => {
    const fetchJobPosts = async () => {
      try {
        const response = await fetch(`${api_url}/jobpost/details/all`);
        if (response.ok) {
          const resData = await response.json();
          if (resData && Array.isArray(resData.data)) {
            // Filter to only display active job posts
            const activePosts = resData.data.filter(post => post.is_active !== false);
            setJobPosts(activePosts);
            if (activePosts.length > 0) {
              const titles = activePosts.map(post => post.title);
              setPositions(titles);
            }
          }
        }
      } catch (err) {
        console.error("Error fetching job postings:", err);
      }
    };
    fetchJobPosts();
  }, []);

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

  const handleApplyClick = (jobTitle) => {
    setFormData(prev => ({ ...prev, position: jobTitle }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    return {
      isValid: Object.keys(tempErrors).length === 0,
      firstErrorId: Object.keys(tempErrors)[0]
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, firstErrorId } = validateForm();
    if (isValid) {
      setShowConfirm(true);
    } else {
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
        <h2 className="text-2xl font-bold text-gray-900">Application Received!</h2>
        <p className="text-gray-500 text-center mt-3 leading-relaxed">
          Thanks for reaching out!
          We've sent a confirmation to <span className="text-blue-600">{formData.email}</span>.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFileName(""); setSelectedFile(null); setFormData({ name: '', email: '', phone: '', position: '', coverLetter: '' }); }}
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 cursor-pointer transition-colors font-medium"
        >
          Return to Careers
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen mb-20 mt-5 px-4 space-y-16">

      {/* Modern Hero Header */}
      <div className="max-w-3xl mx-auto bg-blue-800 text-white rounded-3xl shadow-xl overflow-hidden relative">
        <div className="p-10 md:p-12 relative z-10">
          <span className="text-green-400 font-bold tracking-widest uppercase text-xs">Careers</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-1">Work with us.</h2>
          <p className="text-slate-200 mt-4 max-w-lg leading-relaxed">
            Join an outstanding, remote-first team building the next generation of cloud infrastructure and enterprise services.
          </p>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-[-20%] right-[-10%] w-80 h-80 bg-blue-600/30 rounded-full blur-3xl"></div>
      </div>

      {/* Open Positions Section */}
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Open Positions</h2>
          <p className="text-gray-500 mt-2 max-w-md mx-auto">
            Explore our current career opportunities and find a match for your skills and aspirations.
          </p>
        </div>

        {jobPosts.length > 0 ? (
          <div className="space-y-4">
            {jobPosts.map((job, idx) => {
              const isOpen = activeJobIndex === idx;
              return (
                <div
                  key={job.id || idx}
                  className="bg-white rounded-2xl border border-gray-100 shadow-md shadow-gray-100/30 hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">
                          {job.department || 'Engineering'}
                        </span>
                        {job.experience && (
                          <span className="px-3 py-0.5 bg-green-50 text-green-600 rounded-full text-xs font-bold">
                            {job.experience}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 font-medium">
                        {job.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            {job.location}
                          </span>
                        )}
                        {job.salary && (
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4 text-gray-400" />
                            {job.salary}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center mt-2 sm:mt-0">
                      <button
                        type="button"
                        onClick={() => setActiveJobIndex(isOpen ? null : idx)}
                        className="px-4 py-2 border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer bg-white"
                      >
                        Details
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleApplyClick(job.title)}
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-extrabold shadow-md shadow-blue-200 hover:shadow-blue-300 transition-all transform active:scale-95 cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>

                  {/* Accordion details container */}
                  {isOpen && (
                    <div className="border-t border-gray-100 bg-gray-50/50 p-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-200">
                      {job.Description && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">Job Description</h4>
                          <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">{job.Description}</p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        {job.stack && (
                          <div className="space-y-2">
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                              <Award className="w-4 h-4 text-blue-500" /> Key Skills / Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {job.stack.split(',').map((skill, sIdx) => (
                                <span key={sIdx} className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg text-xs font-semibold shadow-sm">
                                  {skill.trim()}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {job.education && (
                          <div className="space-y-2">
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                              <BookOpen className="w-4 h-4 text-green-500" /> Education Requirement
                            </h4>
                            <p className="text-sm text-gray-700 font-medium">{job.education}</p>
                          </div>
                        )}
                      </div>

                      {(job.perks || job.methods) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-4">
                          {job.perks && (
                            <div className="space-y-2">
                              <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">Perks & Benefits</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">{job.perks}</p>
                            </div>
                          )}
                          {job.methods && (
                            <div className="space-y-2">
                              <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">Interview Process</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">{job.methods}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white border border-dashed border-gray-200 rounded-3xl p-10 text-center space-y-4">
            <Briefcase className="w-12 h-12 text-gray-300 mx-auto animate-pulse" />
            <div>
              <h3 className="text-lg font-bold text-gray-800">No specific roles posted today</h3>
              <p className="text-gray-500 text-sm mt-1 max-w-sm mx-auto leading-relaxed">
                We are always looking for exceptional talent Feel free to submit a speculative application below for any role of your choice.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Form Section */}
      <div
        ref={formRef}
        className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden scroll-mt-6"
      >
        <h1 className="text-3xl text-center pt-10 pb-2 font-extrabold text-gray-900">Apply for a Job</h1>
        <p className="text-center text-sm text-gray-500 mb-6">Complete the form below to initiate your application process.</p>

        <form onSubmit={handleSubmit} className="p-10 pt-4 space-y-8">
          <div className="space-y-5">
            {/* Personal Information Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5" id="name">
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

              <div className="space-y-1.5" id="email">
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
              <div className="space-y-1.5" id="phone">
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

              <div className="space-y-1.5" id="position">
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

            {/* Enhanced File Upload */}
            <div className="space-y-1.5" id="resume">
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
