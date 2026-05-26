function Footer() {
  try {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="relative overflow-hidden border-t border-white/5" data-name="footer" data-file="components/Footer.js">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)] to-[#0a0a1a]"></div>
        <div className="container relative z-10 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <h3 className="brand-font text-2xl font-bold mb-4 text-[var(--text-primary)]">
                <span className="text-[var(--secondary-color)]">
                  <span className="font-bold italic">O</span>mix
                </span>
                systems
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Building premium web applications and digital solutions for businesses worldwide. Based in Kericho, Kenya.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Pages</h4>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><a href="#home" className="hover:text-[var(--accent-color)] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[var(--accent-color)] transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-[var(--accent-color)] transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-[var(--accent-color)] transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-[var(--accent-color)] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Services</h4>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><a href="#services" className="hover:text-[var(--accent-color)] transition-colors">SaaS Development</a></li>
                <li><a href="#services" className="hover:text-[var(--accent-color)] transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-[var(--accent-color)] transition-colors">Mobile Apps</a></li>
                <li><a href="#services" className="hover:text-[var(--accent-color)] transition-colors">API Development</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Contact</h4>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>
                  <a href="mailto:omixsystems@gmail.com" className="hover:text-[var(--accent-color)] transition-colors">omixsystems@gmail.com</a>
                </p>
                <p>
                  <a href="https://wa.me/254732649442" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">WhatsApp: +254 732 649 442</a>
                </p>
                <p>Kericho, Kenya</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--text-secondary)]">
              &copy; {currentYear} <b className="text-[var(--text-primary)]">Omix</b>. All rights reserved. Full-Stack Web Development Agency.
            </p>
            <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
              <span>Built in Kenya</span>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error("Footer component error:", error);
    return null;
  }
}
