function Contact() {
  try {
    const [step, setStep] = React.useState(1);
    const [formData, setFormData] = React.useState({ name: '', email: '', business: '', service: '', message: '' });

    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
      <>
        <section id="contact" className="section-padding relative overflow-hidden" data-name="contact-section" data-file="components/Contact.js">
          <div className="absolute inset-0 opacity-25">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80" alt="Kenya Satellite Map" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/85 via-[var(--bg-dark)]/80 to-[var(--bg-dark)]"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="glass-slide rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Ready to Get Your Business Online?
              </h2>
              
              {/* Multi-step indicator */}
              <div className="flex justify-center mb-8 gap-2">
                {[1, 2, 3].map((i) => (
                    <div key={i} className={`h-2 w-12 rounded-full ${step >= i ? 'bg-[var(--secondary-color)]' : 'bg-white/10'}`}></div>
                ))}
              </div>

              <form action="https://formspree.io/f/mgolwpvv" method="POST" className="glass-slide rounded-2xl p-6 md:p-8" data-name="contact-form" data-file="components/Contact.js">
                {step === 1 && (
                    <div className="space-y-4">
                        <input type="text" name="name" required placeholder="Your Name *" onChange={handleInputChange} className="w-full px-4 py-3 glass-slide border border-white/10 rounded-lg text-white bg-transparent" />
                        <input type="email" name="email" required placeholder="Your Email *" onChange={handleInputChange} className="w-full px-4 py-3 glass-slide border border-white/10 rounded-lg text-white bg-transparent" />
                        <button type="button" onClick={nextStep} className="btn btn-primary w-full">Next</button>
                    </div>
                )}
                {step === 2 && (
                    <div className="space-y-4">
                        <input type="text" name="business" placeholder="Business Name" onChange={handleInputChange} className="w-full px-4 py-3 glass-slide border border-white/10 rounded-lg text-white bg-transparent" />
                        <select name="service" onChange={handleInputChange} className="w-full px-4 py-3 glass-slide border border-white/10 rounded-lg text-white bg-transparent">
                            <option value="">Select Service</option>
                            <option value="saas">SaaS Platform Development</option>
                            <option value="web">Website Development</option>
                            <option value="app">Mobile App Development</option>
                            <option value="consultation">Free Strategy Consultation</option>
                        </select>
                        <div className="flex gap-4">
                            <button type="button" onClick={prevStep} className="btn btn-outline w-1/2">Back</button>
                            <button type="button" onClick={nextStep} className="btn btn-primary w-1/2">Next</button>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div className="space-y-4">
                        <textarea name="message" rows="4" placeholder="Tell us about your project..." onChange={handleInputChange} className="w-full px-4 py-3 glass-slide border border-white/10 rounded-lg text-white bg-transparent"></textarea>
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
      </>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
