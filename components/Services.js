function Services() {
  try {
    const portfolioItems = [
      {
        title: "Professional Services Website",
        client: "Golden Source Agencies",
        result: "Increased Bookings by 60%",
        description: "Complete website with service listings, online booking, and contact forms. Client: Golden Source Agencies, Kericho.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        tech: ["React", "Mobile-First", "Contact Forms", "Booking System"]
      },
      {
        title: "E-Commerce Platform",
        client: "Regional Retail Brand",
        result: "$50K+ Monthly Revenue",
        description: "Full-featured online store with payment integration, inventory management, and analytics dashboard.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tech: ["React", "Node.js", "Stripe", "PostgreSQL"]
      },
      {
        title: "SaaS Dashboard",
        client: "FinTech Startup",
        result: "10,000+ Active Users",
        description: "Real-time analytics platform with data visualization, user management, and API integrations.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tech: ["TypeScript", "GraphQL", "AWS", "MongoDB"]
      }
    ];

    const techStack = [
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "AWS", icon: "☁️" },
      { name: "Vercel", icon: "▲" },
      { name: "Docker", icon: "🐳" },
      { name: "TypeScript", icon: "📘" },
      { name: "GraphQL", icon: "◼️" }
    ];

    const faqs = [
      {
        question: "How long does it take to build a website?",
        answer: "Most projects are completed within 7-14 days depending on complexity. Starter packages take 5-7 days, while more complex projects may take 2-3 weeks."
      },
      {
        question: "Do you offer ongoing maintenance?",
        answer: "Yes! We offer monthly maintenance packages starting at KES 1,000/month covering updates, fixes, and minor changes."
      },
      {
        question: "Can I update the website myself?",
        answer: "Absolutely. We provide a simple dashboard for managing content, or we can update it for you as part of our maintenance package."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept M-Pesa, bank transfers, and payment splits (50% upfront, 50% after completion)."
      },
      {
        question: "Do you offer refunds?",
        answer: "Yes, if we're unable to deliver as promised, full refunds are available within the first 3 days. We want you fully satisfied."
      }
    ];

    const steps = [
      {
        title: "Discovery",
        description: "We analyze your requirements and create a detailed roadmap"
      },
      {
        title: "Development",
        description: "Our team builds your solution with clean, scalable code"
      },
      {
        title: "Deployment",
        description: "We deploy to production with monitoring & support"
      }
    ];

    const team = [
      {
        name: "Langat Gideon",
        title: "Founder & Lead Engineer",
        tagline: "Building conversion-focused web systems for modern businesses.",
        bio: "Full-stack developer specializing in React, Node.js, and scalable cloud infrastructure. Since 2019, has helped businesses transition online with performance-driven websites designed to generate leads and revenue—not just traffic.",
        highlights: [
          "5+ years in full-stack development",
          "50+ production websites",
          "Performance & SEO focused"
        ],
        image: "assets/langat.png"
      }
    ];

    const clientLogos = [
      "Golden Source Agencies",
      "Nairobi Food Hub",
      "Power Fitness",
      "Beauty & Style Salon"
    ];

    const whyChooseUs = [
      { title: "Expert Team", description: "Skilled developers with 5+ years experience in modern technologies", icon: "👨‍💻" },
      { title: "Agile Process", description: "Iterative development with regular updates and flexible scope", icon: "🔄" },
      { title: "Code Quality", description: "Clean, documented code following best practices", icon: "✨" },
      { title: "Ongoing Support", description: "Post-launch maintenance and 24/7 critical support", icon: "🛟" },
      { title: "Scalable Architecture", description: "Built to grow with your business needs", icon: "📈" },
      { title: "Competitive Pricing", description: "Enterprise quality at reasonable rates", icon: "💰" }
    ];

    const omixProjects = [
      {
        name: "Fairytale",
        description: "Project tracking app for teams - manage tasks, milestones, and progress with beautiful visualizations",
        url: "https://omnianalytics.vercel.app/",
        tech: ["Task Tracking", "Team Collaboration", "Analytics"]
      },
      {
        name: "Kora Hub",
        description: "Learn web development from scratch - interactive courses, hands-on projects, and community support",
        url: "https://kora-ivory.vercel.app",
        tech: ["Web Dev Courses", "Interactive Learning", "Community"]
      }
    ];

    return (
      <>
        <section className="section-padding relative overflow-hidden" data-name="tech-section" data-file="components/Services.js">
          <div className="container relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 glass-slide rounded-full text-[var(--accent-color)] text-sm font-medium mb-6">
                Technologies We Use
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Modern <span className="text-[var(--secondary-color)]">Tech Stack</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                We build with industry-standard technologies ensuring scalability, security, and performance
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {techStack.map((tech, index) => (
                <div key={index} className="glass-slide px-4 md:px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform cursor-default">
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-sm md:text-base font-medium text-[var(--text-primary)]">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="section-padding relative overflow-hidden" data-name="portfolio-section" data-file="components/Services.js">
          <div className="absolute inset-0 opacity-25">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80" alt="Kenya Satellite Map" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-soft)]/85 via-[var(--bg-soft)]/80 to-[var(--bg-soft)]"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 glass-slide rounded-full text-[var(--accent-color)] text-sm font-medium mb-6">
                Why Choose Omix
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Built by <span className="text-[var(--secondary-color)]">Experts</span>, Delivered with <span className="text-[var(--secondary-color)]">Purpose</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index} 
                  className="glass-slide p-6 text-center hover-lift hover-scale transition-all duration-300 scroll-animate fade-up" 
                  style={{animationDelay: `${index * 0.1}s`}}
                  data-name="why-choose-card" 
                  data-file="components/Services.js"
                >
                  <div className="text-4xl mb-4 float-element">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="glass-slide p-6 rounded-2xl">
              <p className="text-center text-sm text-[var(--text-secondary)] mb-4">Trusted by businesses across Kenya</p>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {clientLogos.map((client, index) => (
                  <div key={index} className="glass-slide px-4 py-2 rounded-lg">
                    <span className="text-sm font-medium text-[var(--text-primary)]">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section-padding relative overflow-hidden" data-name="portfolio-section" data-file="components/Services.js">
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 glass-slide rounded-full text-[var(--accent-color)] text-sm font-medium mb-6">
                Our Work
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Real Results for <span className="text-[var(--secondary-color)]">Real Businesses</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <div 
                  key={index} 
                  className="glass-slide overflow-hidden hover-lift hover-scale transition-all duration-500 scroll-animate scale" 
                  style={{animationDelay: `${index * 0.15}s`}}
                  data-name="portfolio-item" 
                  data-file="components/Services.js"
                >
                  <div className="overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 glass-slide rounded-full text-[var(--accent-color)] text-sm font-medium mb-4">
                      {item.result}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                    <p className="text-xs text-[var(--accent-color)] mb-3">Client: {item.client}</p>
                    <p className="text-[var(--text-secondary)] mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 glass-slide rounded-full text-xs text-[var(--text-secondary)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding relative overflow-hidden" data-name="omix-projects-section" data-file="components/Services.js">
          <div className="absolute inset-0 opacity-25">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80" alt="Kenya Satellite Map" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/85 via-[var(--bg-dark)]/80 to-[var(--bg-dark)]"></div>
          </div>
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 glass-slide rounded-full text-[var(--accent-color)] text-sm font-medium mb-6">
                More from Omix
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Other <span className="text-[var(--secondary-color)]">Projects</span> We've Built
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Expanding our ecosystem of digital tools for businesses and learners
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {omixProjects.map((project, index) => (
                <a 
                  key={index} 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-slide p-5 md:p-8 hover:scale-[1.02] transition-all duration-300 group block overflow-hidden"
                  data-name="project-card"
                  data-file="components/Services.js"
                >
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors truncate">
                      {project.name}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[var(--accent-color)] flex-shrink-0 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-[var(--text-secondary)] mb-4 md:mb-6 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 md:px-3 py-1 glass-slide rounded-full text-xs text-[var(--accent-color)] whitespace-nowrap">
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding relative overflow-hidden" data-name="team-section" data-file="components/Services.js">
          <div className="absolute inset-0 opacity-25">
            <img src="https://images.unsplash.com/photo-1522071820081-009f3209d78b?w=1920&q=80" alt="Team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/85 via-[var(--bg-dark)]/80 to-[var(--bg-dark)]"></div>
          </div>
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 glass-slide rounded-full text-[var(--accent-color)] text-sm font-medium mb-6">
                The Builder
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Meet the <span className="text-[var(--secondary-color)]">Founder</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Focused on building high-performance websites that convert visitors into customers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 gap-10 max-w-2xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="glass-slide p-6 md:p-8" data-name="team-card" data-file="components/Services.js">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src={member.image} alt={member.name} className="w-28 h-28 rounded-xl object-cover mx-auto md:mx-0 border border-white/20" />
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-[var(--text-primary)]">{member.name}</h3>
                      <p className="text-[var(--accent-color)] text-sm mb-2">{member.title}</p>
                      <p className="text-[var(--text-secondary)] text-sm mb-3">{member.tagline}</p>
                      <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">{member.bio}</p>
                      <ul className="space-y-1">
                        {member.highlights.map((item, i) => (
                          <li key={i} className="text-sm text-[var(--text-secondary)] flex items-center gap-2 justify-center md:justify-start">
                            <span className="w-1.5 h-1.5 bg-[var(--secondary-color)] rounded-full"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding relative overflow-hidden" data-name="how-it-works-section" data-file="components/Services.js">
          <div className="absolute inset-0 opacity-25">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80" alt="Kenya Satellite Map" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/85 via-[var(--bg-dark)]/80 to-[var(--bg-dark)]"></div>
          </div>
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                How It <span className="text-[var(--secondary-color)]">Works</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="glass-slide p-8 text-center" data-name="step-card" data-file="components/Services.js">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--secondary-color)] to-[var(--accent-color)] flex items-center justify-center mx-auto mb-6">
                    {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
                    {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
                    {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>}
                  </div>
                  <div className="text-5xl font-bold text-[var(--secondary-color)] mb-4">{index + 1}</div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{step.title}</h3>
                  <p className="text-[var(--text-secondary)]">{step.description}</p>
                </div>
              ))}
</div>
           </div>
        </section>

        <section className="section-padding relative overflow-hidden" data-name="faq-section" data-file="components/Services.js">
          <div className="absolute inset-0 opacity-25">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80" alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/85 via-[var(--bg-dark)]/80 to-[var(--bg-dark)]"></div>
          </div>
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 glass-slide rounded-full text-[var(--accent-color)] text-sm font-medium mb-6">
                FAQ
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Frequently <span className="text-[var(--secondary-color)]">Asked</span> Questions
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-slide p-6" data-name="faq-item" data-file="components/Services.js">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{faq.question}</h3>
                  <p className="text-[var(--text-secondary)]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error('Services component error:', error);
    return null;
  }
}