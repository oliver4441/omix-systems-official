function OurApps() {
  try {
    const apps = [
      {
        name: "Omix Marketplace",
        tagline: "Buy and sell locally, with M-Pesa built in",
        desc: "Our flagship e-commerce platform for Kericho — a real, running marketplace connecting local buyers and sellers every day.",
        url: "https://market.omixsystems.store",
        badge: "Flagship",
        badgeClass: "bg-[var(--accent-color)]/90",
        highlighted: true,
      },
      {
        name: "Fairytale",
        tagline: "Project tracking that teams actually use",
        desc: "Task boards, milestones, and progress analytics — a single source of truth for teams shipping real work.",
        url: "https://fairytale.omixsystems.store",
        badge: null,
        highlighted: false,
      },
      {
        name: "SentienX",
        tagline: "All-in-one Deriv trading workspace",
        desc: "Automated bots, real-time analytics, a trading academy, and a multi-tier affiliate program in one platform.",
        url: "https://sentienx.omixsystems.store",
        badge: "New",
        badgeClass: "bg-green-500/90",
        highlighted: false,
      },
    ];

    return (
      <section id="our-apps" className="page-section relative overflow-hidden" data-name="our-apps" data-file="components/OurApps.js">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-color)]/15 via-[var(--bg-dark)] to-[var(--accent-color)]/10"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="float-blob-a absolute top-0 left-1/4 w-96 h-96 bg-[var(--secondary-color)] rounded-full blur-[140px] opacity-[0.08]"></div>
          <div className="float-blob-b absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-color)] rounded-full blur-[140px] opacity-[0.08]"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 rounded-full text-[var(--accent-color)] text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-color)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-color)]"></span>
              </span>
              Live Now — Built by Omix Systems
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-5">
              The <span className="text-[var(--secondary-color)]">Omix Systems</span> Product Family
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Real products, running today, built by the same team that will build yours. Every app below lives under the Omix Systems brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {apps.map((app, i) => (
              <div
                key={i}
                className={"reveal glass-card p-6 md:p-8 flex flex-col relative overflow-hidden hover-lift transition-all duration-300" + (app.highlighted ? " border border-[var(--accent-color)]/40 shadow-lg shadow-blue-500/10" : "")}
                style={{transitionDelay: (i * 0.1) + 's'}}
              >
                {app.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)]"></div>
                )}
                {app.badge && (
                  <div className={"absolute top-4 right-4 px-2 py-0.5 text-white text-xs font-bold rounded-full " + app.badgeClass}>
                    {app.badge}
                  </div>
                )}
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1 pr-16">{app.name}</h3>
                <p className="text-sm font-medium text-[var(--secondary-color)] mb-4">{app.tagline}</p>
                <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed flex-1">{app.desc}</p>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={"btn w-full text-center text-sm group " + (app.highlighted ? "btn-primary" : "btn-outline")}
                >
                  Explore {app.name}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("OurApps component error:", error);
    return null;
  }
}
