import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });

    // Simple validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({ message: 'Please fill all fields', isError: true });
      setIsSubmitting(false);
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setSubmitStatus({ message: 'Please enter a valid email', isError: true });
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would typically send data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // On successful submission
      setSubmitStatus({ message: 'Message sent successfully!', isError: false });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({ message: 'Failed to send message. Please try again.', isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-black py-16 overflow-hidden flex flex-col items-center justify-center">
      {/* Gradient Divider */}
      <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-12"></div>

      {/* Form Container */}
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 w-full max-w-md">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Contact us
        </h2>
        
        {submitStatus.message && (
          <div className={`mb-4 p-3 rounded-lg ${
            submitStatus.isError 
              ? 'bg-red-900/50 text-red-100' 
              : 'bg-green-900/50 text-green-100'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              disabled={isSubmitting}
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              disabled={isSubmitting}
            />
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium rounded-lg transition-all ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;