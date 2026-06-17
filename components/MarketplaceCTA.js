function MarketplaceCTA() {
  try {
    const otherApps = [
      { name: "Fairytale", desc: "Team task tracking", url: "https://fairytale.omixsystems.store" },
      { name: "SentienX", desc: "Deriv trading platform", url: "https://sentienx.omixsystems.store" },
    ];

    return (
      <section className="page-section relative overflow-hidden" data-name="marketplace-cta" data-file="components/MarketplaceCTA.js">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-color)]/15 via-[var(--bg-dark)] to-[var(--accent-color)]/10"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="float-blob-a absolute top-0 left-1/4 w-96 h-96 bg-[var(--secondary-color)] rounded-full blur-[140px] opacity-[0.08]"></div>
          <div className="float-blob-b absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-color)] rounded-full blur-[140px] opacity-[0.08]"></div>
        </div>
        <div className="container relative z-10">
          <div className="reveal-scale max-w-4xl mx-auto text-center glass-card p-8 md:p-14 border border-[var(--accent-color)]/20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 rounded-full text-[var(--accent-color)] text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-color)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-color)]"></span>
              </span>
              Live Now — Built by Omix Systems
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-5">
              Meet <span className="text-[var(--secondary-color)]">Omix Marketplace</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 leading-relaxed">
              Our own e-commerce platform for Kericho — buy and sell locally with M-Pesa payments built in.
              It is a real, running product from the same team that will build yours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="https://market.omixsystems.store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary cta-pulse group text-lg"
              >
                Explore Omix Marketplace
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-[var(--text-secondary)] mb-4">More from the Omix Systems Innovation Lab</p>
              <div className="flex flex-wrap justify-center gap-3">
                {otherApps.map((app, i) => (
                  <a
                    key={i}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-[var(--accent-color)]/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="font-semibold text-[var(--text-primary)]">{app.name}</span>
                    <span className="text-[var(--text-secondary)]">— {app.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("MarketplaceCTA component error:", error);
    return null;
  }
}
