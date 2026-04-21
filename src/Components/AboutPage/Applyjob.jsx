import React, { useState, useRef } from 'react';
import { Upload, Send, CheckCircle, FileText, X } from 'lucide-react';

const ApplyJob = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  // Manage all form data in one state object
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: ''
  });

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
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-12 mb-20 bg-white rounded-3xl shadow-2xl max-w-md mx-auto mt-20 animate-in fade-in zoom-in duration-500">
        <div className="bg-green-100 p-4 rounded-full mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Application Received!</h2>
        <p className="text-gray-500 text-center mt-3 leading-relaxed">
          Thanks for reaching out,! 
          We've sent a confirmation to <span className="text-blue-600">{formData.email}</span>.
        </p>
        <button 
          onClick={() => { setSubmitted(false); setFileName(""); }}
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 cursor-pointer transition-colors font-medium"
        >
          Return to Careers
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen mb-20 mt-5 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-white overflow-hidden">
      <h1
      className='text-3xl text-center p-10 font-bold text-blue-600'
      >Apply Job</h1>
        
        {/* Modern Hero Header */}
        <div className="bg-blue-800 p-10 text-white relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-green-400 font-bold tracking-widest uppercase text-xs">Careers</span>
            <h2 className="text-4xl font-extrabold mt-1">Work with us.</h2>
            <p className="text-slate-300 mt-3 max-w-md">Join a remote-first team building the next generation of cloud infrastructure.</p>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-8">
          
          <section className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter mobile number"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Position</label>
                <select
                  id="position"
                  required
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all appearance-none"
                >
                  <option value="">Select a role</option>
                  {positions.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Documents</h3>
            
            {/* Enhanced File Upload */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Resume / CV</label>
              <div 
                onClick={() => fileInputRef.current.click()}
                className={`relative border-2 border-dashed rounded-2xl p-8 transition-all text-center cursor-pointer ${
                  fileName ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
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
                  <div className="flex items-center justify-center space-x-3 text-blue-700 font-medium">
                    <FileText className="w-6 h-6" />
                    <span>{fileName}</span>
                    <X 
                      className="w-5 h-5 ml-2 text-gray-400 hover:text-red-500 transition-colors" 
                      onClick={(e) => { e.stopPropagation(); setFileName(""); }}
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

            <div>
              <label htmlFor="coverLetter" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Cover Letter (Optional)</label>
              <textarea
                id="coverLetter"
                rows="4"
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Briefly describe your experience..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all resize-none"
              ></textarea>
            </div>
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