function Hero() {
  try {
    const features = [
      { label: "7-Day Delivery", desc: "Fast turnaround, no excuses" },
      { label: "Money-Back Guarantee", desc: "If you are not happy, we fix it" },
      { label: "Free Revisions", desc: "Until you love the result" },
    ];

    const stats = [
      { value: "150+", label: "Projects" },
      { value: "50+", label: "Clients" },
      { value: "2x", label: "More Leads" },
    ];

    const scrollToContact = (e) => {
      e.preventDefault();
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToServices = (e) => {
      e.preventDefault();
      const el = document.getElementById("services");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" data-name="hero" data-file="components/Hero.js">
        {/* Background image */}
        <div className="absolute inset-0">
          <ParallaxBg src="assets/hero-bg.jpg" speed={0.2} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/90 via-[#0a0a1a]/80 to-[#0a0a1a]"></div>
          <div className="absolute inset-0">
            <div className="float-blob-a absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--secondary-color)] rounded-full blur-[128px] opacity-10"></div>
            <div className="float-blob-b absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-color)] rounded-full blur-[128px] opacity-10"></div>
          </div>
        </div>

        <div className="container relative z-10 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="hero-anim inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8" style={{animationDelay: '0.05s'}}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Optimal Modular Integration Experts
            </div>

            {/* Headline */}
            <h1 className="hero-anim text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-[var(--text-primary)]" style={{animationDelay: '0.15s'}}>
              Building Modern{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                SaaS Solutions
              </span>{" "}
              for Tomorrow's Businesses
            </h1>

            <p className="hero-anim text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto" style={{animationDelay: '0.25s'}}>
              Transforming ideas into scalable digital products with our modular integration approach. Based in{" "}
              <span className="text-white font-semibold">Kericho, Kenya</span> — delivering global standards.
            </p>

            {/* CTAs */}
            <div className="hero-anim flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{animationDelay: '0.35s'}}>
              <a href="#contact" onClick={scrollToContact} className="btn btn-primary cta-pulse group text-lg">
                Start Your Project
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#services" onClick={scrollToServices} className="btn btn-outline text-lg">
                View Services
              </a>
            </div>

            {/* Features */}
            <div className="hero-anim flex flex-wrap justify-center gap-6 md:gap-8 mb-12" style={{animationDelay: '0.45s'}}>
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-[var(--text-primary)]">{f.label}</div>
                    <div className="text-xs text-[var(--text-secondary)]">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="hero-anim flex flex-wrap justify-center gap-6 md:gap-10" style={{animationDelay: '0.55s'}}>
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">{s.value}</div>
                  <div className="text-sm text-[var(--text-secondary)] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-[var(--text-secondary)]">Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce"></div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Hero component error:", error);
    return null;
  }
}
