function Footer() {
  try {
    return (
      <footer className="relative overflow-hidden" data-name="footer" data-file="components/Footer.js">
        <div className="absolute inset-0 opacity-25">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80" alt="Kenya Map" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/90 via-[var(--bg-dark)]/85 to-[var(--bg-dark)]"></div>
        </div>
        
        <div className="overflow-hidden mb-8">
          <div className="news-ticker">
            <span className="ticker-item">Omix - Full-Stack Development Agency</span>
            <span className="ticker-item">150+ Projects Completed</span>
            <span className="ticker-item">Serving Clients Globally</span>
            <span className="ticker-item">Modern Tech Stack</span>
            <span className="ticker-item">Omix - Full-Stack Development Agency</span>
            <span className="ticker-item">150+ Projects Completed</span>
            <span className="ticker-item">Serving Clients Globally</span>
            <span className="ticker-item">Modern Tech Stack</span>
          </div>
        </div>
        
        <div className="container relative z-10 py-12">
          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            <div className="glass-slide p-6 rounded-2xl" data-name="brand-info" data-file="components/Footer.js">
              <h3 className="brand-font text-xl md:text-2xl font-bold mb-4 text-[var(--text-primary)]">
                <span className="text-[var(--secondary-color)]">
                  <span className="font-bold italic">O</span>mix
                </span>
              </h3>
              <p className="text-sm md:text-base text-[var(--text-secondary)] mb-4 md:mb-6 leading-relaxed">
                Building premium web applications and digital solutions for businesses worldwide.
              </p>
              <div className="flex space-x-3">
              </div>
            </div>

            <div className="glass-slide p-6 rounded-2xl" data-name="services-links" data-file="components/Footer.js">
              <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Services</h4>
              <ul className="space-y-2 text-sm md:text-base text-[var(--text-secondary)]">
                <li><a href="#services" className="hover:text-[var(--accent-color)] transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-[var(--accent-color)] transition-colors">E-commerce</a></li>
                <li><a href="#services" className="hover:text-[var(--accent-color)] transition-colors">SaaS Platforms</a></li>
                <li><a href="#services" className="hover:text-[var(--accent-color)] transition-colors">API Development</a></li>
              </ul>
            </div>

            <div className="glass-slide p-6 rounded-2xl" data-name="company-links" data-file="components/Footer.js">
              <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Company</h4>
              <ul className="space-y-2 text-sm md:text-base text-[var(--text-secondary)]">
                <li><a href="#work" className="hover:text-[var(--accent-color)] transition-colors">Portfolio</a></li>
                <li><a href="#pricing" className="hover:text-[var(--accent-color)] transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-[var(--accent-color)] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="glass-slide p-6 rounded-2xl" data-name="contact-info" data-file="components/Footer.js">
              <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Contact</h4>
              <div className="space-y-2 text-sm md:text-base text-[var(--text-secondary)]">
                <p><a href="mailto:omixsystems@gmail.com" className="hover:text-[var(--accent-color)] transition-colors">omixsystems@gmail.com</a></p>
                <p>+254 732 649 442</p>
                <a href="https://wa.me/0732649442" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors block">
                  WhatsApp: 0732649442
                </a>
              </div>
            </div>
          </div>

          <div className="glass-slide mt-8 md:mt-12 p-4 md:p-6 rounded-2xl text-center text-[var(--text-secondary)] text-sm md:text-base">
            <p>&copy; 2026 <b>Omix</b>. All rights reserved. Full-Stack Web Development Agency.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}