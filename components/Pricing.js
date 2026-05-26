function Pricing() {
  try {
    const plans = [
      {
        name: "Starter Website",
        price: "25,000",
        priceNote: "one-time",
        description: "Perfect for small businesses getting online for the first time.",
        features: [
          "Up to 5 pages",
          "Mobile responsive design",
          "Contact form",
          "Google Maps integration",
          "Basic SEO setup",
          "Fast loading (Lighthouse 80+)",
          "Free revisions (2 rounds)",
        ],
        cta: "Get Started",
        highlighted: false,
      },
      {
        name: "Business Website",
        price: "45,000",
        priceNote: "one-time",
        description: "For growing businesses that need more than a basic site.",
        features: [
          "Up to 10 pages",
          "Custom design + branding",
          "Blog section",
          "Social media integration",
          "Booking / inquiry system",
          "Performance optimised (Lighthouse 90+)",
          "30-day post-launch support",
          "SEO foundation with schema markup",
        ],
        cta: "Get Started",
        highlighted: true,
      },
      {
        name: "E-Commerce Store",
        price: "80,000",
        priceNote: "from",
        description: "A full online store built to sell and scale.",
        features: [
          "Custom product catalogue",
          "M-Pesa + card payments",
          "Inventory management",
          "Customer accounts",
          "Order notifications",
          "SEO-optimised product pages",
          "60-day post-launch support",
        ],
        cta: "Get Started",
        highlighted: false,
      },
      {
        name: "Custom / SaaS",
        price: "150,000",
        priceNote: "from",
        description: "Bespoke web applications, dashboards, and platforms.",
        features: [
          "Custom architecture",
          "API integrations",
          "User management",
          "Subscription billing",
          "Admin dashboard",
          "Scalable cloud hosting",
          "Dedicated project manager",
          "Ongoing support available",
        ],
        cta: "Let's Talk",
        highlighted: false,
      },
    ];

    const addons = [
      { service: "Website maintenance", price: "5,000 – 10,000 / month" },
      { service: "SEO optimisation", price: "15,000 – 30,000 / month" },
      { service: "Content updates", price: "3,000 – 5,000 / update" },
      { service: "Hosting + domain management", price: "2,000 – 5,000 / month" },
    ];

    return (
      <>
        <section id="pricing" className="section-padding relative overflow-hidden" data-name="pricing-section" data-file="components/Pricing.js">
          <div className="absolute inset-0 opacity-25">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80" alt="" role="presentation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/85 via-[var(--bg-dark)]/80 to-[var(--bg-dark)]"></div>
          </div>

          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 glass-slide rounded-full text-[var(--accent-color)] text-sm font-medium mb-6">
                Pricing
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Transparent <span className="text-[var(--secondary-color)]">Pricing</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                No hidden fees. No surprises. Pay once, own it forever.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`glass-slide p-6 md:p-8 flex flex-col relative overflow-hidden transition-all duration-300 hover-lift ${
                    plan.highlighted
                      ? 'border-[var(--accent-color)] shadow-lg shadow-blue-500/10'
                      : ''
                  }`}
                  data-name="pricing-card"
                  data-file="components/Pricing.js"
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)]"></div>
                  )}
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-sm text-[var(--text-secondary)]">KES </span>
                    <span className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">{plan.price}</span>
                    <span className="text-sm text-[var(--text-secondary)] ml-1">{plan.priceNote}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">{plan.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-sm text-[var(--text-secondary)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[var(--accent-color)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`btn w-full text-center ${plan.highlighted ? 'btn-primary' : 'btn-outline'}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="glass-slide p-6 md:p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 text-center">Add-on Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {addons.map((addon, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                      <span className="text-sm text-[var(--text-secondary)]">{addon.service}</span>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">KES {addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error('Pricing component error:', error);
    return null;
  }
}
