function Pricing() {
  try {
    const plans = [
      {
        name: "Starter Website",
        price: 2100,
        note: "one-time",
        desc: "Perfect for small businesses getting online for the first time.",
        features: ["Up to 5 pages", "Mobile responsive design", "Contact form", "Google Maps integration", "Basic SEO setup", "2 rounds of revisions"],
        highlighted: false,
      },
      {
        name: "Business Website",
        price: 2500,
        note: "one-time",
        desc: "For growing businesses that need more than a basic site.",
        features: ["Up to 10 pages", "Custom design + branding", "Blog section", "Social media integration", "Booking / inquiry system", "Lighthouse 90+ performance", "30-day post-launch support", "SEO foundation with schema"],
        highlighted: true,
        badge: "Popular",
        badgeClass: "bg-[var(--accent-color)]/20 text-[var(--accent-color)]",
      },
      {
        name: "E-Commerce Store",
        price: 5000,
        note: "from",
        desc: "A full online store built to sell and scale.",
        features: ["Custom product catalogue", "M-Pesa + card payments", "Inventory management", "Customer accounts", "Order notifications", "SEO-optimised product pages", "60-day post-launch support"],
        highlighted: false,
      },
      {
        name: "Custom / SaaS",
        price: 8000,
        note: "from",
        desc: "Bespoke web applications, dashboards, and platforms.",
        features: ["Custom architecture", "API integrations", "User management", "Subscription billing", "Admin dashboard", "Scalable cloud hosting", "Dedicated project manager", "Ongoing support available"],
        highlighted: false,
      },
      {
        name: "Web App — Pay on Satisfaction",
        price: 8000,
        note: "from",
        desc: "We build your custom web app first. You only pay once you're fully satisfied with the result — zero risk to you.",
        features: ["Custom web app built to spec", "Live demo before any payment", "Pay KES 8,000 only when happy", "Unlimited revisions until approved", "Full source code handover", "Basic deployment included"],
        highlighted: false,
        badge: "Risk-Free",
        badgeClass: "bg-green-500/20 text-green-400",
      },
    ];

    const addons = [
      { service: "Website maintenance", low: 5000, high: 10000, unit: "/ month" },
      { service: "SEO optimisation", low: 15000, high: 30000, unit: "/ month" },
      { service: "Content updates", low: 3000, high: 5000, unit: "/ update" },
      { service: "Hosting + domain management", low: 2000, high: 5000, unit: "/ month" },
    ];

    const [currency, setCurrency] = React.useState("KES");
    const USD_RATE = 130; // approximate KES per USD

    const formatAmount = (kes) => {
      if (currency === "USD") {
        return "$" + Math.round(kes / USD_RATE).toLocaleString();
      }
      return "KES " + kes.toLocaleString();
    };

    const formatAmountPlain = (kes) => {
      if (currency === "USD") {
        return "$" + Math.round(kes / USD_RATE).toLocaleString();
      }
      return kes.toLocaleString();
    };


    const faqs = [
      { q: "How long does it take to build a website?", a: "Most projects are completed within 7-14 days depending on complexity. Starter packages take 5-7 days, while more complex projects may take 2-3 weeks." },
      { q: "Do you offer ongoing maintenance?", a: "Yes. We offer monthly maintenance packages starting at KES 5,000/month covering updates, fixes, and minor changes." },
      { q: "What payment methods do you accept?", a: "We accept M-Pesa, bank transfers, and payment splits (50% upfront, 50% after completion)." },
      { q: "Do you offer refunds?", a: "Yes, if we are unable to deliver as promised, full refunds are available. We want you fully satisfied." },
    ];

    return (
      <>
        {/* Pricing Page */}
        <section id="pricing" className="page-section relative overflow-hidden" data-name="pricing" data-file="components/Pricing.js">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)] via-[#0f172a] to-[var(--bg-dark)]"></div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="float-blob-a absolute -top-10 left-1/3 w-80 h-80 bg-[var(--accent-color)] rounded-full blur-[120px] opacity-[0.06]"></div>
            <div className="float-blob-b absolute bottom-0 right-0 w-72 h-72 bg-[var(--secondary-color)] rounded-full blur-[120px] opacity-[0.06]"></div>
          </div>
          <div className="container relative z-10">
            <div className="text-center mb-16 reveal">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                Pricing
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Transparent <span className="text-[var(--secondary-color)]">Pricing</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
                No hidden fees. No surprises. Pay once, own it forever.
              </p>
              <div className="inline-flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-full">
                {["KES", "USD"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={"px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer " +
                      (currency === c ? "bg-[var(--accent-color)] text-white" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]")}
                    aria-pressed={currency === c}
                  >
                    {c}
                  </button>
                ))}
              </div>
              {currency === "USD" && (
                <p className="text-xs text-[var(--text-secondary)] mt-3">Approximate conversion. Payment is processed in KES.</p>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-16">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={"reveal glass-card p-6 md:p-8 flex flex-col relative overflow-hidden transition-all duration-300 hover-lift w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]" + (plan.highlighted ? " border border-[var(--accent-color)]/50 shadow-lg shadow-blue-500/10" : "")}
                  style={{transitionDelay: (i * 0.1) + 's'}}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)]"></div>
                  )}
                  {plan.badge && (
                    <div className={"absolute top-4 right-4 px-2 py-0.5 text-xs font-bold rounded-full " + plan.badgeClass}>
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1 pr-20">{plan.name}</h3>
                  <div className="mb-3">
                    <span className="text-3xl font-bold text-[var(--text-primary)]">{formatAmount(plan.price)}</span>
                    <span className="text-sm text-[var(--text-secondary)] ml-1">{plan.note}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">{plan.desc}</p>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start text-sm text-[var(--text-secondary)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={"btn w-full text-center text-sm " + (plan.highlighted ? "btn-primary" : "btn-outline")}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            {/* Add-ons */}
            <div className="reveal max-w-3xl mx-auto glass-card p-6 md:p-8 mb-20">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 text-center">Add-on Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {addons.map((a, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-sm text-[var(--text-secondary)]">{a.service}</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">{formatAmountPlain(a.low)} – {formatAmount(a.high)} {a.unit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="page-section relative overflow-hidden" data-name="faq" data-file="components/Pricing.js">
          <div className="absolute inset-0">
            <ParallaxBg src="assets/pricing-bg.jpg" speed={0.12} className="opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/90 via-[var(--bg-dark)]/85 to-[var(--bg-dark)]/90"></div>
          </div>
          <div className="container relative z-10">
            <div className="text-center mb-16 reveal">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Frequently Asked <span className="text-[var(--secondary-color)]">Questions</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="reveal glass-card p-6 hover:border-[var(--accent-color)]/30 transition-colors duration-300" style={{transitionDelay: (i * 0.08) + 's'}}>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{faq.q}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error("Pricing component error:", error);
    return null;
  }
}
