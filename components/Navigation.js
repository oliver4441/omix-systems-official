function Navigation() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [activePage, setActivePage] = React.useState("home");

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        const sections = ["home", "about", "services", "pricing", "contact"];
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && window.scrollY >= el.offsetTop - 100) {
            setActivePage(sections[i]);
            break;
          }
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    };

    const navItems = [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "pricing", label: "Pricing" },
      { id: "contact", label: "Contact" },
    ];

    const navClass = isScrolled ? "py-2 sm:py-3" : "py-3 sm:py-4";
    const navBg = isScrolled ? "bg-[var(--bg-dark)]/95 backdrop-blur-xl shadow-lg shadow-black/20" : "bg-transparent";

    return (
      <nav className={"fixed top-0 w-full z-50 transition-all duration-300 " + navBg} data-name="navigation" data-file="components/Navigation.js" aria-label="Main navigation">
        <div className="container">
          <div className={"flex items-center justify-between transition-all duration-300 " + navClass}>
            <div
              className="brand-font text-xl sm:text-2xl font-bold text-[var(--text-primary)] cursor-pointer flex items-center"
              onClick={() => scrollToSection("home")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && scrollToSection("home")}
            >
              <span className="text-[var(--secondary-color)]">
                <span className="font-bold">omix</span>systems
              </span>
            </div>

            <div className="hidden lg:flex items-center space-x-1" data-name="nav-menu">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={"px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 " +
                    (activePage === item.id
                      ? "text-[var(--accent-color)] bg-white/5"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5")}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="ml-4 btn btn-primary text-sm py-2 px-6"
              >
                Get Started
              </button>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
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
            <div className="lg:hidden pb-4 border-t border-white/5 mt-2 pt-4 hero-anim" style={{animationDuration: '0.3s'}}>
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={"text-left px-4 py-3 rounded-lg text-sm font-medium transition-all " +
                      (activePage === item.id
                        ? "text-[var(--accent-color)] bg-white/5"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5")}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="mt-2 btn btn-primary text-sm py-3 text-center"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  } catch (error) {
    console.error("Navigation component error:", error);
    return null;
  }
}
