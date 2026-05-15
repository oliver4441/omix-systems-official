function Contact() {
  try {
    const pricingPlans = [
      {
        name: "Starter",
        price: "$50",
        priceKes: "KES 6,500",
        description: "FREE for first 10 customers!",
        features: ["5-Page Website", "Responsive Design", "Basic SEO", "1 Month Support", "Contact Form", "Fast Delivery"],
        popular: false,
        badge: "70% OFF"
      },
      {
        name: "Business",
        price: "$500",
        priceKes: "KES 65,000",
        description: "Most popular choice",
        features: ["10-Page Website", "Custom Design", "Advanced SEO", "2 Months Support", "E-commerce Ready", "Analytics Setup", "WhatsApp Integration"],
        popular: true
      },
      {
        name: "Pro",
        price: "$750",
        priceKes: "KES 95,000",
        description: "For growing businesses",
        features: ["Unlimited Pages", "Premium Design", "Full SEO Package", "3 Months Support", "E-commerce Full", "Marketing Tools", "Priority Support", "Free Maintenance*"],
        popular: false,
        note: "*Optional maintenance: KES 1,000/month after free period"
      },
      {
        name: "Enterprise",
        price: "Custom",
        priceKes: "Custom",
        description: "For large organizations",
        features: ["Unlimited Custom Features", "API Development", "Database Design", "Cloud Infrastructure", "6 Months Support", "Dedicated Developer", "SLA Guarantee", "24/7 Priority Support"],
        popular: false
      }
    ];

    return (
      <>
        <section id="pricing" className="section-padding relative overflow-hidden" data-name="pricing-section" data-file="components/Contact.js">
          <div className="absolute inset-0 opacity-25">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80" alt="Kenya Satellite Map" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-soft)]/85 via-[var(--bg-soft)]/80 to-[var(--bg-soft)]"></div>
          </div>
          
          <div className="overflow-hidden mb-12">
            <div className="news-ticker">
              <span className="ticker-item">Starter - FREE (First 10 Customers) - 5 Pages</span>
              <span className="ticker-item">Business - $500 - 10 Pages</span>
              <span className="ticker-item">Pro - $750 - Unlimited Pages</span>
              <span className="ticker-item">Enterprise - Custom Pricing</span>
              <span className="ticker-item">Starter - FREE (First 10 Customers) - 5 Pages</span>
              <span className="ticker-item">Business - $500 - 10 Pages</span>
              <span className="ticker-item">Pro - $750 - Unlimited Pages</span>
              <span className="ticker-item">Enterprise - Custom Pricing</span>
            </div>
          </div>
          
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 glass-slide rounded-full text-[var(--accent-color)] text-sm font-medium mb-6">
                Pricing
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Simple, <span className="text-[var(--secondary-color)]">Transparent Pricing</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`glass-slide p-5 md:p-8 ${plan.popular ? 'border-2 border-[var(--accent-color)]' : 'border border-white/10'} hover:scale-[1.02] transition-all duration-500`}
                  data-name="pricing-card" 
                  data-file="components/Contact.js"
                >
                  {plan.popular && (
                    <div className="inline-block px-3 py-1 glass-slide rounded-full text-[var(--accent-color)] text-xs font-bold mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  {plan.badge && (
                    <div className="inline-block px-3 py-1 bg-green-500 rounded-full text-white text-xs font-bold mb-4">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2">{plan.name}</h3>
                  <p className="text-sm md:text-base text-[var(--text-secondary)] mb-4 md:mb-6">{plan.description}</p>
                  <div className="mb-4 md:mb-6">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-lg text-[var(--text-secondary)]"> ({plan.priceKes})</span>}
                  </div>
                  <ul className="space-y-2 md:space-y-4 mb-6 md:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs md:text-sm text-[var(--text-secondary)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 md:w-4 h-3 md:h-4 text-[var(--accent-color)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`btn w-full ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                    Choose {plan.name}
                  </button>
                  {plan.note && (
                    <p className="text-xs text-[var(--text-secondary)] mt-4 text-center">{plan.note}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="glass-slide p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Money-Back Guarantee</h4>
                <p className="text-xs text-[var(--text-secondary)]">Not satisfied? Full refund within 7 days</p>
              </div>
              <div className="glass-slide p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">🚀</div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">7-Day Delivery</h4>
                <p className="text-xs text-[var(--text-secondary)]">Or we rebuild your site for FREE</p>
              </div>
              <div className="glass-slide p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">🔄</div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Free Revisions</h4>
                <p className="text-xs text-[var(--text-secondary)]">Unlimited changes until you're happy</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <div className="inline-block glass-slide px-6 py-4 rounded-xl">
                <p className="text-[var(--text-secondary)] mb-2">
                  <span className="text-[var(--accent-color)] font-semibold">Need ongoing support?</span>
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Add maintenance for just <span className="text-[var(--text-primary)] font-bold">KES 1,000/month</span> — Updates, fixes & peace of mind
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding relative overflow-hidden" data-name="contact-section" data-file="components/Contact.js">
          <div className="absolute inset-0 opacity-25">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80" alt="Kenya Satellite Map" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/85 via-[var(--bg-dark)]/80 to-[var(--bg-dark)]"></div>
          </div>
          
          <div className="overflow-hidden mb-8">
            <div className="news-ticker">
              <span className="ticker-item">Get Your Business Online Today</span>
              <span className="ticker-item">Launch in 7 Days Guaranteed</span>
              <span className="ticker-item">Free Consultations Available</span>
              <span className="ticker-item">Pay 50% Upfront - 50% After Delivery</span>
              <span className="ticker-item">Get Your Business Online Today</span>
              <span className="ticker-item">Launch in 7 Days Guaranteed</span>
              <span className="ticker-item">Free Consultations Available</span>
              <span className="ticker-item">Pay 50% Upfront - 50% After Delivery</span>
            </div>
          </div>
          
          <div className="container relative z-10">
            <div className="glass-slide rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Ready to Get Your Business Online?
              </h2>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
                Let's build something amazing together. Get started today and launch in 7 days.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Pay 50% upfront, 50% after delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Free revisions included</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>7-day launch guarantee</span>
                </div>
              </div>
              
              <form action="https://formspree.io/f/mgolwpvv" method="POST" className="max-w-2xl mx-auto glass-slide rounded-2xl p-6 md:p-8" data-name="contact-form" data-file="components/Contact.js">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name *"
                    className="px-4 py-3 glass-slide border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] text-white bg-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email *"
                    className="px-4 py-3 glass-slide border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] text-white bg-transparent"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  <input
                    type="text"
                    name="business"
                    placeholder="Business Name"
                    className="px-4 py-3 glass-slide border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] text-white bg-transparent"
                  />
                  <select
                    name="budget"
                    className="px-4 py-3 glass-slide border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] text-white bg-transparent"
                  >
                    <option value="">Select Budget</option>
                    <option value="FREE">FREE - Starter (First 10 Customers)</option>
                    <option value="KES 5,500">KES 5,500 - Business (10 Pages)</option>
                    <option value="KES 8,000">KES 8,000 - Pro (Unlimited)</option>
                    <option value="KES 1,000/month">KES 1,000/month - Maintenance</option>
                  </select>
                </div>
                
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 glass-slide border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] text-white bg-transparent mb-4 md:mb-6"
                ></textarea>
                
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
