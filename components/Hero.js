function Hero() {
  try {
    const [bgIndex, setBgIndex] = React.useState(0);
    
    const backgrounds = [
      { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6da7d?w=1920&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1920&q=80' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1522071820081-009f3209d78b?w=1920&q=80' },
    ];

    React.useEffect(() => {
      const interval = setInterval(() => {
        setBgIndex(prev => (prev + 1) % backgrounds.length);
      }, 30 * 60 * 1000);
      return () => clearInterval(interval);
    }, []);

    const scrollToContact = () => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const currentBg = backgrounds[bgIndex];

    return (
      <section id="home" className="min-h-screen bg-[var(--bg-dark)] flex items-center justify-center relative pt-16 sm:pt-20 lg:pt-24 overflow-hidden" data-name="hero-section" data-file="components/Hero.js">
        <div className="absolute inset-0">
          {currentBg.type === 'video' ? (
            <video key={`video-${bgIndex}`} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40" poster={currentBg.poster}>
              <source src={currentBg.src} type="video/mp4" />
            </video>
          ) : (
            <img key={`img-${bgIndex}`} src={currentBg.src} alt="Background" className="w-full h-full object-cover opacity-40 gpu-accelerated" loading="lazy" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/70 via-[var(--bg-dark)]/50 to-[var(--bg-dark)]"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-[var(--secondary-color)] rounded-full blur-3xl opacity-15 -top-32 sm:-top-48 -left-20 sm:-left-48"></div>
          <div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-[var(--accent-color)] rounded-full blur-3xl opacity-15 -bottom-32 sm:-bottom-48 -right-20 sm:-right-48"></div>
        </div>
        
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left" data-name="hero-content" data-file="components/Hero.js">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] rounded-full text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                🚀 First 5 Clients Get Free Setup
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight scroll-animate blur">
                Websites That Get You{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] float-fast inline-block">
                  More Customers
                </span>{' '}
                — Guaranteed
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 scroll-animate fade-up" style={{animationDelay: '0.2s'}}>
                Brand new website in <span className="text-[var(--accent-color)] font-bold">7 days</span> or we rebuild for free. Designed for Kenyan businesses to double their leads and grow revenue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10 md:mb-12">
                <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary btn-interactive cta-pulse text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 font-bold text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-5 h-4 sm:h-5 mr-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Get Free Website Audit
                </a>
                <a href="https://wa.me/0732649442?text=Hi,%20I%20want%20a%20website%20from%20Omix" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-4 font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-5 h-4 sm:h-5 mr-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Chat Now
                </a>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--text-secondary)]">7-Day Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--text-secondary)]">Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--text-secondary)]">Free Revisions</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6">
                <div className="glass-slide px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-center min-w-[90px] sm:min-w-[100px] stagger-item" style={{animationDelay: '0.1s'}}>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] stats-animate">150+</div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)]">Projects</div>
                </div>
                <div className="glass-slide px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-center min-w-[90px] sm:min-w-[100px] stagger-item" style={{animationDelay: '0.2s'}}>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] stats-animate">50+</div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)]">Clients</div>
                </div>
                <div className="glass-slide px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-center min-w-[90px] sm:min-w-[100px] stagger-item" style={{animationDelay: '0.3s'}}>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] stats-animate">2x</div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)]">More Leads</div>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block" data-name="hero-visual" data-file="components/Hero.js">
              <div className="relative glass-slide p-4 sm:p-6 md:p-8 shadow-2xl rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern website dashboard"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 glass-slide p-3 sm:p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-5 h-4 sm:h-5 text-[var(--accent-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <div className="text-xs sm:text-sm text-[var(--text-secondary)]">Conversions</div>
                      <div className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">+40%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}