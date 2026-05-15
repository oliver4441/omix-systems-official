function Navigation() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    };

    return (
      <nav className={`fixed top-0 w-full z-50 border-b border-white/10 transition-all duration-300 ${isScrolled ? 'navbar-shrink glass-slide' : 'glass-slide'}`} data-name="navigation" data-file="components/Navigation.js">
        <div className="container">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-4'}`}>
            <div 
              className="brand-font text-xl sm:text-2xl font-bold text-[var(--text-primary)] cursor-pointer flex items-center"
              onClick={() => scrollToSection('home')}
              data-name="logo"
              data-file="components/Navigation.js"
            >
              <span className="text-[var(--secondary-color)]">
                <span className="font-bold italic">O</span>mix
              </span>
              <span className="text-[var(--text-secondary)] text-sm ml-2 hidden sm:inline">Full-Stack Development</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-6 lg:space-x-8" data-name="nav-menu" data-file="components/Navigation.js">
              <button onClick={() => scrollToSection('home')} className="text-sm lg:text-base text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm lg:text-base text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('work')} className="text-sm lg:text-base text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-primary text-sm">
                Get Started
              </button>
            </div>

            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-name="menu-toggle"
              data-file="components/Navigation.js"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden glass-slide border-t border-white/10 py-4" data-name="mobile-menu" data-file="components/Navigation.js">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('home')} className="text-left text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors py-2">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors py-2">
                  Services
                </button>
                <button onClick={() => scrollToSection('work')} className="text-left text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors py-2">
                  Portfolio
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-[var(--accent-color)] font-semibold py-2">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    return null;
  }
}