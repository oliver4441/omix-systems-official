function Blog() {
  try {
    const points = [
      {
        title: "It's your digital storefront — open 24/7",
        body: "A physical shop or office closes at the end of the day. A website never does. Whether someone is browsing at 9am or midnight, your business is there to answer questions, show your work, and take inquiries — without you lifting a finger.",
      },
      {
        title: "Credibility: people check before they trust",
        body: "Today, most people search for a business or person online before they engage. No website (or an outdated one) quietly raises doubts — even if your work is excellent. A clean, professional site signals that you're established, serious, and worth doing business with.",
      },
      {
        title: "You own your audience — social media doesn't",
        body: "Posts on Instagram, Facebook, or TikTok can get buried by an algorithm overnight, and accounts can be restricted without warning. A website is the one online asset you fully control — your content, your design, your rules, permanently searchable on Google.",
      },
      {
        title: "Reach beyond word-of-mouth",
        body: "Referrals are powerful, but limited to who already knows you. A website with basic SEO lets new customers discover you through search — extending your reach from your immediate network to anyone searching for what you offer, anywhere.",
      },
      {
        title: "Sell and get paid without a physical presence",
        body: "With M-Pesa and card integration, a website becomes a sales channel — not just a brochure. Customers can browse, order, and pay from anywhere in Kenya (or beyond), opening revenue you couldn't reach with a shopfront alone.",
      },
      {
        title: "For individuals: your work speaks for itself",
        body: "Freelancers, consultants, and creatives benefit just as much. A simple portfolio site lets your past work, testimonials, and contact details do the talking — so opportunities can find you even while you're focused on your craft.",
      },
    ];

    return (
      <section id="blog" className="page-section relative overflow-hidden" data-name="blog" data-file="components/Blog.js">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)] via-[var(--bg-soft)] to-[var(--bg-dark)]"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="float-blob-a absolute top-0 right-1/4 w-80 h-80 bg-[var(--secondary-color)] rounded-full blur-[120px] opacity-[0.06]"></div>
          <div className="float-blob-b absolute bottom-0 -left-10 w-72 h-72 bg-[var(--accent-color)] rounded-full blur-[120px] opacity-[0.06]"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16 reveal">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-700 text-sm font-medium mb-6">
              Insights
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Why You Need a <span className="text-[var(--secondary-color)]">Website</span> — Business or Individual
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              In 2026, a website isn't a luxury — it's the foundation of how customers, clients, and opportunities find and trust you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {points.map((p, i) => (
              <div key={i} className="reveal glass-card p-6 md:p-8 hover-lift transition-all duration-300" style={{transitionDelay: (i * 0.08) + 's'}}>
                <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-3">{p.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="reveal text-center">
            <a href="#pricing" className="btn btn-primary">
              See Pricing &amp; Get Started
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Blog component error:", error);
    return null;
  }
}
