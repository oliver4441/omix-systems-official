function Contact() {
  try {
    return (
      <>
        <section id="contact" className="section-padding relative overflow-hidden" data-name="contact-section" data-file="components/Contact.js">
          <div className="absolute inset-0 opacity-25">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80" alt="Kenya Satellite Map" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/85 via-[var(--bg-dark)]/80 to-[var(--bg-dark)]"></div>
          </div>
          
          <div className="overflow-hidden mb-8">
            <div className="news-ticker">
              <span className="ticker-item">Get Your Business Online Today</span>
              <span className="ticker-item">Launch in 7 Days Guaranteed</span>
              <span className="ticker-item">Free Consultations Available</span>
              <span className="ticker-item">Expert Web Development</span>
              <span className="ticker-item">Get Your Business Online Today</span>
              <span className="ticker-item">Launch in 7 Days Guaranteed</span>
              <span className="ticker-item">Free Consultations Available</span>
              <span className="ticker-item">Expert Web Development</span>
            </div>
          </div>
          
          <div className="container relative z-10">
            <div className="glass-slide rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Ready to Get Your Business Online?
              </h2>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
                Let's build something amazing together. Get started today and launch your high-converting website in just 7 days.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Flexible payment terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Free revisions included</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>7-day launch guarantee</span>
                </div>
              </div>
              
              <form action="https://formspree.io/f/mgolwpvv" method="POST" className="max-w-2xl mx-auto glass-slide rounded-2xl p-6 md:p-8" data-name="contact-form" data-file="components/Contact.js">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name *"
                    className="px-4 py-3 glass-slide border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] text-white bg-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email *"
                    className="px-4 py-3 glass-slide border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] text-white bg-transparent"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  <input
                    type="text"
                    name="business"
                    placeholder="Business Name"
                    className="px-4 py-3 glass-slide border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] text-white bg-transparent"
                  />
                  <select
                    name="service"
                    className="px-4 py-3 glass-slide border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] text-white bg-transparent"
                  >
                    <option value="">Select Service</option>
                    <option value="saas">SaaS Platform Development</option>
                    <option value="web">Website Development</option>
                    <option value="app">Mobile App Development</option>
                    <option value="consultation">Free Strategy Consultation</option>
                  </select>
                </div>
                
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 glass-slide border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] text-white bg-transparent mb-4 md:mb-6"
                ></textarea>
                
                <button type="submit" className="btn btn-primary w-full cta-pulse">
                  Send Message
                </button>
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
