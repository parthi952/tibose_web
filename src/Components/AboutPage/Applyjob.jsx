import React, { useState, useRef, useEffect } from 'react';
import { Upload, Send, CheckCircle, FileText, X, Briefcase, MapPin, DollarSign, Calendar, ChevronDown, ChevronUp, Clock, Award, BookOpen } from 'lucide-react';
import { FormInput, FormSelect, FormTextArea } from '../Common/FormComponents';

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
    resume_path: '',
    coverLetter: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);

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
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
    }
  };

  const handleApplyClick = (jobTitle) => {
    setFormData(prev => ({ ...prev, position: jobTitle }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <div className="flex flex-col items-center justify-center p-12 mb-20 bg-white rounded-3xl shadow-2xl max-w-md mx-auto mt-20 animate-in fade-in zoom-in duration-500">
        <div className="bg-green-100 p-4 rounded-full mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Application Received!</h2>
        <p className="text-gray-500 text-center mt-3 leading-relaxed">
          Thanks for reaching out!
          We've sent a confirmation to <span className="text-blue-600">{formData.email}</span>.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFileName(""); setSelectedFile(null); setFormData({ name: '', email: '', phone: '', position: '', resume_path: '', coverLetter: '' }); }}
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
                We are always looking for exceptional talent! Feel free to submit a speculative application below for any role of your choice.
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
          <section className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Full Name"
                id="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />

              <FormInput
                label="Email Address"
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Phone Number"
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter mobile number"
              />

              <FormSelect
                label="Position"
                id="position"
                required
                value={formData.position}
                onChange={handleInputChange}
                options={positions}
                placeholder="Select a role"
              />
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Documents</h3>

            {/* Enhanced File Upload */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Resume / CV</label>
              <div
                onClick={() => fileInputRef.current.click()}
                className={`relative border-2 border-dashed rounded-2xl p-8 transition-all text-center cursor-pointer ${fileName ? 'border-blue-500 bg-blue-50/50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                  }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  required={!fileName}
                />

                {fileName ? (
                  <div className="flex items-center justify-center space-x-3 text-blue-700 font-semibold">
                    <FileText className="w-6 h-6 text-blue-500 animate-bounce" />
                    <span>{fileName}</span>
                    <X
                      className="w-5 h-5 ml-2 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                      onClick={(e) => { e.stopPropagation(); setFileName(""); setSelectedFile(null); }}
                    />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="mx-auto w-10 h-10 text-gray-400" />
                    <p className="text-sm text-gray-600 italic">Drop your file here or <span className="text-blue-600 font-bold not-italic">browse</span></p>
                    <p className="text-xs text-gray-400 uppercase font-semibold tracking-tighter">Maximum size: 5MB (PDF or Word)</p>
                  </div>
                )}
              </div>
            </div>

            <FormTextArea
              label="Cover Letter (Optional)"
              id="coverLetter"
              rows="4"
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder="Briefly describe your experience..."
            />
          </section>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 px-6 rounded-2xl transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 transform active:scale-[0.99] flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Processing Application...</span>
              </>
            ) : (
              <>
                <span>Submit My Application</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;

