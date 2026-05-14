import React from 'react';

export const FormInput = ({ label, id, type = 'text', placeholder, value, onChange, required = false }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
      />
    </div>
  );
};

export const FormSelect = ({ label, id, options, value, onChange, required = false, placeholder = "Select an option" }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all appearance-none"
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={typeof opt === 'string' ? opt : opt.value} value={typeof opt === 'string' ? opt : opt.value}>
              {typeof opt === 'string' ? opt : opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const FormTextArea = ({ label, id, rows = 4, placeholder, value, onChange, required = false }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all resize-none"
      ></textarea>
    </div>
  );
};
