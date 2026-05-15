function Products() {
  try {
    const services = [
      {
        title: "SaaS Platform Development",
        description: "Custom cloud platforms built for scale. We help you transform your business logic into a scalable, multi-tenant digital product.",
        features: ["Multi-tenant Architecture", "Cloud Infrastructure", "API First Design", "Subscription Models"]
      },
      {
        title: "Website Development", 
        description: "Modern, high-converting websites for businesses. Focused on performance, SEO, and seamless user experiences on all devices.",
        features: ["Responsive Design", "Modern UI/UX", "SEO Optimization", "Fast Loading (Lighthouse 90+)"]
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile solutions. We build powerful apps for iOS and Android that users love to interact with.",
        features: ["iOS & Android Apps", "React Native & Flutter", "App Store Deployment", "Offline Capabilities"]
      }
    ];

    return (
      <section id="services" className="section-padding relative overflow-hidden" data-name="services-section" data-file="components/Products.js">
        <div className="absolute inset-0 opacity-25">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80" alt="Kenya Satellite Map" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)] via-[var(--bg-dark)]/85 to-[var(--bg-dark)]"></div>
        </div>
        
        <div className="overflow-hidden mb-12">
            <div className="news-ticker">
              <span className="ticker-item">Website Design - Responsive & Fast</span>
              <span className="ticker-item">E-commerce - Secure Payments</span>
              <span className="ticker-item">Website Optimization - Speed & SEO</span>
              <span className="ticker-item">FREE Website - First 10 Customers!</span>
              <span className="ticker-item">Website Design - Responsive & Fast</span>
              <span className="ticker-item">E-commerce - Secure Payments</span>
              <span className="ticker-item">Website Optimization - Speed & SEO</span>
              <span className="ticker-item">FREE Website - First 10 Customers!</span>
            </div>
          </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 glass-slide rounded-full text-[var(--accent-color)] text-sm font-medium mb-6">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Everything You Need to <span className="text-[var(--secondary-color)]">Succeed Online</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
              From design to launch, we handle everything so you can focus on growing your business
            </p>
            
            <div className="max-w-3xl mx-auto glass-slide p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Who This Is For</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[var(--accent-color)] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-[var(--text-secondary)]">Local businesses (restaurants, salons, shops)</p>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[var(--accent-color)] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <p className="text-[var(--text-secondary)]">Startups launching fast</p>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[var(--accent-color)] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-[var(--text-secondary)]">Online sellers & service providers</p>
                </div>
              </div>
            </div>
          </div>
          
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
                <div 
                  key={index} 
                  className="glass-slide p-5 md:p-8 hover-lift hover-scale transition-all duration-500 cursor-pointer overflow-hidden scroll-animate fade-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                <div className="w-12 md:w-16 h-12 md:h-16 rounded-2xl bg-gradient-to-br from-[var(--secondary-color)] to-[var(--accent-color)] flex items-center justify-center mb-4 md:mb-6 float-element">
                  {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 h-6 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>}
                  {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 h-6 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                  {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 h-6 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-3 md:mb-4">{service.title}</h3>
                <p className="text-sm md:text-base text-[var(--text-secondary)] mb-4 md:mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 md:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs md:text-sm text-[var(--text-secondary)]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 md:w-4 h-3 md:h-4 text-[var(--accent-color)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Products component error:', error);
    return null;
  }
}