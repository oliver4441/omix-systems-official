function EmailSection() {
  try {
    const [emailData, setEmailData] = React.useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      const mailtoLink = `mailto:omixsystems@gmail.com?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(`Name: ${emailData.name}\nEmail: ${emailData.email}\n\nMessage:\n${emailData.message}`)}`;
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        setEmailData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      }, 1000);
    };

    const handleChange = (e) => {
      setEmailData({ ...emailData, [e.target.name]: e.target.value });
    };

    return (
      <section className="section-padding relative overflow-hidden" data-name="email-section" data-file="components/EmailSection.js">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 wave-text">
              <div className="inline-block px-4 py-2 bg-[var(--bg-soft)] rounded-full text-[var(--accent-color)] text-sm font-medium mb-6">
                📧 Get in Touch
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Send Us an <span className="text-[var(--secondary-color)]">Email</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)]">
                Drop us a message at <a href="mailto:omixsystems@gmail.com" className="text-[var(--accent-color)] hover:underline">omixsystems@gmail.com</a>
              </p>
            </div>

            <div className="underwater-glass p-8 md:p-12 rounded-3xl float-element">
              <form onSubmit={handleSubmit} data-name="email-form" data-file="components/EmailSection.js">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="drift-element">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name *"
                      value={emailData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--bg-dark)] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-[var(--text-primary)]"
                    />
                  </div>
                  <div className="drift-element" style={{animationDelay: '0.1s'}}>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email *"
                      value={emailData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--bg-dark)] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-[var(--text-primary)]"
                    />
                  </div>
                </div>
                
                <div className="mb-6 drift-element" style={{animationDelay: '0.2s'}}>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject *"
                    value={emailData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--bg-dark)] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-[var(--text-primary)]"
                  />
                </div>
                
                <div className="mb-6 drift-element" style={{animationDelay: '0.3s'}}>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    placeholder="Your Message *"
                    value={emailData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--bg-dark)] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-[var(--text-primary)] resize-none"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn btn-primary inline-flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {isSubmitting ? 'Sending...' : 'Send Email'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('EmailSection component error:', error);
    return null;
  }
}