function Navigation() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [activePage, setActivePage] = React.useState("home");

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        const sections = ["home", "about", "services", "blog", "pricing", "contact"];
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
      { id: "blog", label: "Insights" },
      { id: "pricing", label: "Pricing" },
      { id: "contact", label: "Contact" },
    ];

    const apps = [
      { name: "Omix Marketplace", url: "https://market.omixsystems.store" },
      { name: "Fairytale", url: "https://fairytale.omixsystems.store" },
      { name: "SentienX", url: "https://sentienx.omixsystems.store" },
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
              <div className="relative group">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 inline-flex items-center gap-1.5"
                  aria-haspopup="true"
                >
                  Our Apps
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 top-full mt-1 w-60 glass-card p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                  {apps.map((app, i) => (
                    <a
                      key={i}
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-colors"
                    >
                      {app.name}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
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
                <div className="px-4 pt-3 pb-1">
                  <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wide">Our Apps</p>
                </div>
                {apps.map((app, i) => (
                  <a
                    key={i}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 inline-flex items-center gap-1.5"
                  >
                    {app.name}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
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
