function About() {
  try {
    const values = [
      {
        title: "Modular Approach",
        desc: "Flexible, scalable solutions built with a modular architecture for easy integration and future growth.",
      },
      {
        title: "Local Expertise",
        desc: "Deep understanding of the African and Kenyan market needs, infrastructure, and business culture.",
      },
      {
        title: "Modern Stack",
        desc: "Built using cutting-edge technologies like React, Next.js, Node.js, and cloud-native architectures.",
      },
      {
        title: "Fast Delivery",
        desc: "Agile development methodology ensuring your project launches on time without compromising quality.",
      },
    ];

    const steps = [
      { num: "01", title: "Discovery", desc: "We analyze your requirements and create a detailed roadmap." },
      { num: "02", title: "Design & Dev", desc: "Our team builds your solution with clean, modular, scalable code." },
      { num: "03", title: "Deploy & Support", desc: "We handle production deployment and provide ongoing monitoring." },
    ];

    return (
      <>
        {/* About Section */}
        <section id="about" className="page-section relative overflow-hidden" data-name="about" data-file="components/About.js">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)] via-[#0f172a] to-[var(--bg-dark)]"></div>
          <div className="container relative z-10">
            <div className="text-center mb-16 reveal">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                About Us
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Why <span className="text-[var(--secondary-color)]">Omixsystems</span>?
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Founded in Kericho, Kenya in 2025, we make enterprise-grade technology accessible to businesses of all sizes. No fluff — just clean code, fast delivery, and results that matter.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {values.map((v, i) => (
                <div key={i} className="reveal glass-card p-6 text-center hover-lift transition-all duration-300" style={{transitionDelay: (i * 0.1) + 's'}}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--secondary-color)] to-[var(--accent-color)] flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg transition-transform duration-300 group-hover:rotate-6">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{v.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="text-center mb-16 reveal">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8">Our Tech Stack</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["React", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Vercel", "Docker", "TypeScript", "GraphQL"].map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:border-[var(--accent-color)]/30 hover:text-[var(--text-primary)] hover:-translate-y-0.5 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="page-section relative overflow-hidden" data-name="how-it-works" data-file="components/About.js">
          <div className="absolute inset-0">
            <LazyImg src="assets/how-bg.jpg" alt="" role="presentation" className="w-full h-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/90 via-[var(--bg-dark)]/85 to-[var(--bg-dark)]/90"></div>
          </div>
          <div className="container relative z-10">
            <div className="text-center mb-16 reveal">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                How It <span className="text-[var(--secondary-color)]">Works</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
                A simple, transparent process from idea to launch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, i) => (
                <div key={i} className="reveal-scale text-center relative" style={{transitionDelay: (i * 0.15) + 's'}}>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-[var(--secondary-color)]/40 to-transparent"></div>
                  )}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--secondary-color)] to-[var(--accent-color)] flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold hover:scale-110 hover:rotate-3 transition-transform duration-300">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{step.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error("About component error:", error);
    return null;
  }
}
