function Contact() {
  try {
    const [step, setStep] = React.useState(1);
    const [formData, setFormData] = React.useState({ name: '', email: '', business: '', service: '', message: '' });
    const [errors, setErrors] = React.useState({});
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      if (errors[e.target.name]) {
        setErrors({ ...errors, [e.target.name]: '' });
      }
    };

    const validateStep = (currentStep) => {
      const newErrors = {};
      if (currentStep === 1) {
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        }
      }
      if (currentStep === 2) {
        if (!formData.service) newErrors.service = 'Please select a service';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
      if (validateStep(step)) {
        setStep(step + 1);
      }
    };

    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateStep(step)) {
        setIsSubmitted(true);
      }
    };

    if (isSubmitted) {
      return (
        <section id="contact" className="section-padding relative overflow-hidden" data-name="contact-section" data-file="components/Contact.js">
          <div className="absolute inset-0 opacity-25">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80" alt="" role="presentation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/85 via-[var(--bg-dark)]/80 to-[var(--bg-dark)]"></div>
          </div>
          <div className="container relative z-10">
            <div className="glass-slide rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Message Sent!</h2>
              <p className="text-lg text-[var(--text-secondary)] mb-6">Thanks for reaching out. We'll get back to you within 24 hours.</p>
              <button onClick={() => { setIsSubmitted(false); setStep(1); setFormData({ name: '', email: '', business: '', service: '', message: '' }); }} className="btn btn-primary">
                Send Another Message
              </button>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section id="contact" className="section-padding relative overflow-hidden" data-name="contact-section" data-file="components/Contact.js">
        <div className="absolute inset-0 opacity-25">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80" alt="" role="presentation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/85 via-[var(--bg-dark)]/80 to-[var(--bg-dark)]"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="glass-slide rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Ready to Get Your Business Online?
            </h2>
            
            <div className="flex justify-center mb-8 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-2 w-12 rounded-full transition-colors duration-300 ${step >= i ? 'bg-[var(--secondary-color)]' : 'bg-white/10'}`}></div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="glass-slide rounded-2xl p-6 md:p-8" data-name="contact-form" data-file="components/Contact.js">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Your Name</label>
                    <input type="text" id="contact-name" name="name" required placeholder="Your Name *" value={formData.name} onChange={handleInputChange} className={`w-full px-4 py-3 glass-slide border rounded-lg text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] ${errors.name ? 'border-red-500' : 'border-white/10'}`} />
                    {errors.name && <p className="text-red-400 text-sm mt-1 text-left">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">Your Email</label>
                    <input type="email" id="contact-email" name="email" required placeholder="Your Email *" value={formData.email} onChange={handleInputChange} className={`w-full px-4 py-3 glass-slide border rounded-lg text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] ${errors.email ? 'border-red-500' : 'border-white/10'}`} />
                    {errors.email && <p className="text-red-400 text-sm mt-1 text-left">{errors.email}</p>}
                  </div>
                  <button type="button" onClick={nextStep} className="btn btn-primary w-full">Next</button>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="contact-business" className="sr-only">Business Name</label>
                    <input type="text" id="contact-business" name="business" placeholder="Business Name (optional)" value={formData.business} onChange={handleInputChange} className="w-full px-4 py-3 glass-slide border border-white/10 rounded-lg text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]" />
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="sr-only">Select Service</label>
                    <select id="contact-service" name="service" value={formData.service} onChange={handleInputChange} className={`w-full px-4 py-3 glass-slide border rounded-lg text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] ${errors.service ? 'border-red-500' : 'border-white/10'}`}>
                      <option value="" className="bg-[var(--bg-dark)]">Select Service *</option>
                      <option value="saas" className="bg-[var(--bg-dark)]">SaaS Platform Development</option>
                      <option value="web" className="bg-[var(--bg-dark)]">Website Development</option>
                      <option value="app" className="bg-[var(--bg-dark)]">Mobile App Development</option>
                      <option value="consultation" className="bg-[var(--bg-dark)]">Free Strategy Consultation</option>
                    </select>
                    {errors.service && <p className="text-red-400 text-sm mt-1 text-left">{errors.service}</p>}
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={prevStep} className="btn btn-outline w-1/2">Back</button>
                    <button type="button" onClick={nextStep} className="btn btn-primary w-1/2">Next</button>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="contact-message" className="sr-only">Your Message</label>
                    <textarea id="contact-message" name="message" rows="4" placeholder="Tell us about your project..." value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 glass-slide border border-white/10 rounded-lg text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] resize-none"></textarea>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={prevStep} className="btn btn-outline w-1/2">Back</button>
                    <button type="submit" className="btn btn-primary w-1/2">Send Message</button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
