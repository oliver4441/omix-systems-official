function Contact() {
  try {
    const [step, setStep] = React.useState(1);
    const [formData, setFormData] = React.useState({ name: "", email: "", business: "", service: "", message: "" });
    const [errors, setErrors] = React.useState({});
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateStep = (s) => {
      const e = {};
      if (s === 1) {
        if (!formData.name.trim()) e.name = "Name is required";
        if (!formData.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email";
      }
      if (s === 2 && !formData.service) e.service = "Please select a service";
      setErrors(e);
      return Object.keys(e).length === 0;
    };

    const nextStep = () => { if (validateStep(step)) setStep(step + 1); };
    const prevStep = () => setStep(step - 1);
    const handleSubmit = (e) => { e.preventDefault(); if (validateStep(step)) setIsSubmitted(true); };

    const stepClass = (n) => "h-2 w-12 rounded-full transition-colors duration-300 " + (step >= n ? "bg-[var(--secondary-color)]" : "bg-white/10");
    const inputClass = (field) => "w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-colors " + (errors[field] ? "border-red-500" : "border-white/10");

    if (isSubmitted) {
      return (
        <section id="contact" className="page-section relative overflow-hidden" data-name="contact" data-file="components/Contact.js">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)] via-[#0f172a] to-[var(--bg-dark)]"></div>
          <div className="container relative z-10">
            <div className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto mt-20">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Message Sent</h2>
              <p className="text-lg text-[var(--text-secondary)] mb-6">Thanks for reaching out. We will get back to you within 24 hours.</p>
              <button onClick={() => { setIsSubmitted(false); setStep(1); setFormData({ name: "", email: "", business: "", service: "", message: "" }); }} className="btn btn-primary">
                Send Another Message
              </button>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section id="contact" className="page-section relative overflow-hidden" data-name="contact" data-file="components/Contact.js">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)] via-[#0f172a] to-[var(--bg-dark)]"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="float-blob-a absolute top-0 left-0 w-72 h-72 bg-[var(--secondary-color)] rounded-full blur-[120px] opacity-[0.06]"></div>
          <div className="float-blob-b absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--accent-color)] rounded-full blur-[120px] opacity-[0.06]"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16 reveal">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Ready to <span className="text-[var(--secondary-color)]">Get Started</span>?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Tell us about your project. We will get back to you within one business day.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="reveal lg:col-span-2 space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[var(--accent-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-secondary)]">Email</div>
                      <a href="mailto:omixsystems@gmail.com" className="text-sm text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors">omixsystems@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-secondary)]">WhatsApp</div>
                      <a href="https://wa.me/254732649442" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors">+254 732 649 442</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[var(--accent-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-secondary)]">Location</div>
                      <span className="text-sm text-[var(--text-primary)]">Kericho, Kenya</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Why Work With Us</h3>
                <ul className="space-y-3">
                  {["7-day delivery guarantee", "Money-back guarantee", "Free revisions until you are happy", "50+ successful projects", "M-Pesa & bank transfer accepted"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-[var(--text-secondary)]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal lg:col-span-3" style={{transitionDelay: '0.1s'}}>
              <div className="glass-card rounded-2xl p-6 md:p-8">
                {/* Step indicator */}
                <div className="flex justify-center mb-8 gap-2">
                  <div className={stepClass(1)}></div>
                  <div className={stepClass(2)}></div>
                  <div className={stepClass(3)}></div>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Tell us about yourself</h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">Step 1 of 3</p>
                      <div>
                        <label htmlFor="c-name" className="sr-only">Your Name</label>
                        <input id="c-name" type="text" name="name" required placeholder="Your Name *" value={formData.name} onChange={handleInputChange} className={inputClass("name")} />
                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="c-email" className="sr-only">Your Email</label>
                        <input id="c-email" type="email" name="email" required placeholder="Your Email *" value={formData.email} onChange={handleInputChange} className={inputClass("email")} />
                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                      </div>
                      <button type="button" onClick={nextStep} className="btn btn-primary w-full">Next</button>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Project details</h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">Step 2 of 3</p>
                      <label htmlFor="c-business" className="sr-only">Business Name</label>
                      <input id="c-business" type="text" name="business" placeholder="Business Name (optional)" value={formData.business} onChange={handleInputChange} className={inputClass("business")} />
                      <div>
                        <label htmlFor="c-service" className="sr-only">Select Service</label>
                        <select id="c-service" name="service" value={formData.service} onChange={handleInputChange} className={inputClass("service")}>
                          <option value="" className="bg-[#171717]">Select Service *</option>
                          <option value="saas" className="bg-[#171717]">SaaS Platform Development</option>
                          <option value="web" className="bg-[#171717]">Website Development</option>
                          <option value="app" className="bg-[#171717]">Mobile App Development</option>
                          <option value="api" className="bg-[#171717]">API Development</option>
                          <option value="consultation" className="bg-[#171717]">Free Strategy Consultation</option>
                        </select>
                        {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
                      </div>
                      <div className="flex gap-4">
                        <button type="button" onClick={prevStep} className="btn btn-outline w-1/2">Back</button>
                        <button type="button" onClick={nextStep} className="btn btn-primary w-1/2">Next</button>
                      </div>
                    </div>
                  )}
                  {step === 3 && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Your message</h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">Step 3 of 3</p>
                      <label htmlFor="c-message" className="sr-only">Your Message</label>
                      <textarea id="c-message" name="message" rows="5" placeholder="Tell us about your project..." value={formData.message} onChange={handleInputChange} className={inputClass("message") + " resize-none"}></textarea>
                      <div className="flex gap-4">
                        <button type="button" onClick={prevStep} className="btn btn-outline w-1/2">Back</button>
                        <button type="submit" className="btn btn-primary w-1/2">Send Message</button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Contact component error:", error);
    return null;
  }
}
