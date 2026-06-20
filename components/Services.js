function Services() {
  try {
    const [activeCaseStudy, setActiveCaseStudy] = React.useState(null);

    React.useEffect(() => {
      if (activeCaseStudy === null) return;
      const onKey = (e) => { if (e.key === "Escape") setActiveCaseStudy(null); };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [activeCaseStudy]);

    const services = [
      {
        title: "SaaS Platform Development",
        desc: "Custom cloud platforms built for scale. We help you transform your business logic into a scalable, multi-tenant digital product.",
        features: ["Multi-tenant Architecture", "Cloud Infrastructure", "API First Design", "Subscription Models"],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        ),
      },
      {
        title: "Website Development",
        desc: "Modern, high-converting websites for businesses. Focused on performance, SEO, and seamless user experiences on all devices.",
        features: ["Responsive Design", "Modern UI/UX", "SEO Optimization", "Fast Loading (Lighthouse 90+)"],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        ),
      },
      {
        title: "Mobile App Development",
        desc: "Native and cross-platform mobile solutions. We build powerful apps for iOS and Android that users love.",
        features: ["iOS & Android Apps", "React Native & Flutter", "App Store Deployment", "Offline Capabilities"],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        title: "API Development",
        desc: "Robust, secure APIs that power your applications. RESTful and GraphQL APIs designed for performance and scalability.",
        features: ["REST & GraphQL APIs", "Authentication & Security", "Documentation", "Third-party Integrations"],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        ),
      },
    ];

    const projects = [
      {
        name: "Fairytale",
        desc: "Project tracking app for teams — manage tasks, milestones, and progress.",
        url: "https://fairytale.omixsystems.store",
        tags: ["Task Tracking", "Team Collaboration", "Analytics"],
        img: "assets/project-laptop.jpg",
        caseStudy: {
          problem: "Small teams were juggling tasks across chat apps, spreadsheets, and notes, making it hard to see overall project progress or who owned what.",
          solution: "We built a centralized dashboard with task boards, milestone tracking, and progress analytics — giving every team member a single source of truth.",
          result: "Teams get a clear, real-time view of project health, reducing missed deadlines and duplicated work.",
        },
      },
      {
        name: "Omix Marketplace",
        desc: "Buy and sell in Kericho — our flagship local marketplace connecting buyers and sellers in the community.",
        url: "https://market.omixsystems.store",
        tags: ["E-Commerce", "Local Marketplace", "Kericho"],
        img: "assets/project-store.jpg",
        badge: "Flagship",
        caseStudy: {
          problem: "Local sellers in Kericho relied on word-of-mouth and social media posts that got lost in busy feeds, making it hard for buyers to discover what was for sale.",
          solution: "We built a simple, searchable marketplace where local sellers list products and buyers browse by category — a digital storefront for the community, now live on its own domain as part of the Omix Systems product family.",
          result: "Sellers gain a permanent, organized online presence, and buyers can find local products in seconds.",
        },
      },
      {
        name: "SentienX",
        desc: "All-in-one Deriv trading platform — automated bots, real-time analytics, and an affiliate program for traders.",
        url: "https://sentienx.omixsystems.store",
        tags: ["Trading Platform", "Automated Bots", "Affiliate Program"],
        img: "assets/project-analytics.jpg",
        badge: "New",
        badgeClass: "bg-green-500/90",
        caseStudy: {
          problem: "Deriv traders were juggling disconnected tools — manual chart analysis, separate bot scripts, and no easy way to track affiliate earnings — making consistent, organized trading difficult.",
          solution: "We built a unified workspace combining real-time charts, configurable automated trading bots, a structured trading academy, and bankroll tracking, with a built-in multi-tier affiliate and commission system powered by the Deriv API.",
          result: "Traders get one platform to execute, learn, and track earnings in one place, while affiliates see commissions calculated automatically. As with all trading, results vary and capital is at risk.",
        },
      },
    ];

    return (
      <>
        {/* Services Page */}
        <section id="services" className="page-section relative overflow-hidden" data-name="services" data-file="components/Services.js">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)] via-[#0a0a1a] to-[var(--bg-dark)]"></div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="float-blob-a absolute top-1/3 -left-20 w-80 h-80 bg-[var(--secondary-color)] rounded-full blur-[120px] opacity-[0.06]"></div>
            <div className="float-blob-b absolute bottom-0 -right-20 w-96 h-96 bg-[var(--accent-color)] rounded-full blur-[120px] opacity-[0.06]"></div>
          </div>
          <div className="container relative z-10">
            <div className="text-center mb-16 reveal">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                Our Services
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Everything You Need to{" "}
                <span className="text-[var(--secondary-color)]">Succeed Online</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                From design to launch, we handle everything so you can focus on growing your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
              {services.map((service, i) => (
                <div key={i} className="reveal glass-card p-6 md:p-8 hover-lift transition-all duration-300 group" style={{transitionDelay: (i * 0.1) + 's'}}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--secondary-color)] to-[var(--accent-color)] flex items-center justify-center mb-5 text-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-3">{service.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-5 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f, fi) => (
                      <li key={fi} className="flex items-center text-sm text-[var(--text-secondary)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[var(--accent-color)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Who this is for */}
            <div className="reveal max-w-4xl mx-auto glass-card p-6 md:p-8 mb-20">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 text-center">Who This Is For</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Local Businesses", desc: "Restaurants, salons, shops, clinics — any business that needs a professional online presence." },
                  { title: "Startups", desc: "Launch fast with a product that looks good, works well, and can scale as you grow." },
                  { title: "Online Sellers", desc: "E-commerce stores, service providers, and digital product creators ready to sell online." },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-2">{item.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internal Projects */}
        <section className="page-section relative overflow-hidden" data-name="projects" data-file="components/Services.js">
          <div className="absolute inset-0">
            <ParallaxBg src="assets/lab-bg.jpg" speed={0.18} className="opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/90 via-[var(--bg-dark)]/85 to-[var(--bg-dark)]/90"></div>
          </div>
          <div className="container relative z-10">
            <div className="text-center mb-16 reveal">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Our <span className="text-[var(--secondary-color)]">Innovation Lab</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
                Internal products demonstrating our modular integration approach.
              </p>
            </div>

            <Carousel
              items={projects}
              ariaLabel="Innovation Lab projects"
              className="max-w-2xl mx-auto reveal"
              renderItem={(p, i) => (
                <div className="px-2">
                  <TiltCard
                    as="div"
                    className="glass-card hover-lift transition-all duration-300 group overflow-hidden"
                  >
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <LazyImg src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] to-transparent"></div>
                      {p.badge && (
                        <div className={"absolute top-3 right-3 px-2 py-0.5 text-white text-xs font-bold rounded-full " + (p.badgeClass || "bg-[var(--accent-color)]/90")}>
                          {p.badge}
                        </div>
                      )}
                    </div>
                    <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2">{p.name}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tags.map((tag, ti) => (
                        <span key={ti} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-[var(--text-secondary)]">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setActiveCaseStudy(i)}
                        className="text-sm font-semibold text-[var(--accent-color)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                      >
                        Case Study
                      </button>
                      <span className="text-white/10">|</span>
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                        Visit Site
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    </div>
                  </TiltCard>
                </div>
              )}
            />

            {/* Case Study Modal */}
            {activeCaseStudy !== null && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                onClick={() => setActiveCaseStudy(null)}
                role="dialog"
                aria-modal="true"
                aria-label={projects[activeCaseStudy].name + " case study"}
              >
                <div
                  className="glass-card max-w-lg w-full p-6 md:p-8 relative max-h-[85vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setActiveCaseStudy(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Close case study"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1 pr-10">{projects[activeCaseStudy].name}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[activeCaseStudy].tags.map((tag, ti) => (
                      <span key={ti} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-[var(--text-secondary)]">{tag}</span>
                    ))}
                  </div>
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-[var(--secondary-color)] mb-2">The Problem</h4>
                      <p className="text-[var(--text-secondary)] leading-relaxed">{projects[activeCaseStudy].caseStudy.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-[var(--secondary-color)] mb-2">Our Solution</h4>
                      <p className="text-[var(--text-secondary)] leading-relaxed">{projects[activeCaseStudy].caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-[var(--secondary-color)] mb-2">The Result</h4>
                      <p className="text-[var(--text-secondary)] leading-relaxed">{projects[activeCaseStudy].caseStudy.result}</p>
                    </div>
                  </div>
                  <a
                    href={projects[activeCaseStudy].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full text-center mt-6"
                  >
                    Visit Live Site
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error("Services component error:", error);
    return null;
  }
}
