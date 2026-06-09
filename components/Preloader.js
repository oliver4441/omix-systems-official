function Preloader() {
  try {
    const [isVisible, setIsVisible] = React.useState(true);
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const duration = 2500;
      const interval = 25;
      const steps = duration / interval;
      let current = 0;
      const timer = setInterval(() => {
        current++;
        setProgress(Math.min((current / steps) * 100, 100));
        if (current >= steps) clearInterval(timer);
      }, interval);
      const hideTimer = setTimeout(() => setIsVisible(false), duration + 300);
      return () => { clearInterval(timer); clearTimeout(hideTimer); };
    }, []);

    if (!isVisible) return null;

    const barWidth = progress + '%';

    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden" style={{background: '#0A0A0F'}}>
        {/* Glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] bg-[#6C63FF] rounded-full opacity-20 blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[180px] h-[180px] bg-[#00D4FF] rounded-full opacity-15 blur-[100px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-sm px-6">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#6C63FF] flex items-center justify-center text-white font-bold text-xl">o</div>
              <span className="font-bold text-2xl tracking-tight text-white">omix<span className="text-[#8888AA]">systems</span></span>
            </div>
            <p className="text-[#00D4FF] text-sm font-medium">Optimal Modular Integration Experts</p>
          </div>

          {/* Info card */}
          <div className="glass-card rounded-2xl p-5 mb-6" style={{background: 'rgba(19,19,26,0.8)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)'}}>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center">
                <div className="text-xl font-bold text-white mono">150+</div>
                <div className="text-[10px] text-[#8888AA] uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white mono">50+</div>
                <div className="text-[10px] text-[#8888AA] uppercase tracking-wider">Clients</div>
              </div>
            </div>
            <div className="border-t border-white/5 pt-3 mb-3">
              <div className="text-[10px] text-[#8888AA] uppercase tracking-wider mb-2 font-medium">Services</div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-1 text-[10px] text-[#00D4FF] font-medium" style={{background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '4px'}}>SaaS Dev</span>
                <span className="px-2 py-1 text-[10px] text-[#00D4FF] font-medium" style={{background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '4px'}}>Web Dev</span>
                <span className="px-2 py-1 text-[10px] text-[#00D4FF] font-medium" style={{background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '4px'}}>Mobile Apps</span>
                <span className="px-2 py-1 text-[10px] text-[#00D4FF] font-medium" style={{background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '4px'}}>APIs</span>
              </div>
            </div>
            <div className="border-t border-white/5 pt-3">
              <div className="text-[10px] text-[#8888AA] uppercase tracking-wider mb-2 font-medium">Contact</div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-[#8888AA]">
                  <span style={{color: '#00D4FF'}}>✉</span> omixsystems@gmail.com
                </div>
                <div className="flex items-center gap-2 text-xs text-[#8888AA]">
                  <span style={{color: '#00D4FF'}}>📍</span> Kericho, Kenya
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-2">
            <div className="h-full rounded-full" style={{width: barWidth, background: 'linear-gradient(90deg, #6C63FF, #00D4FF)', transition: 'width 100ms linear'}}></div>
          </div>
          <p className="text-[10px] text-center text-[#8888AA] uppercase tracking-wider">Loading...</p>
        </div>

        <div className="absolute bottom-6 text-center">
          <p className="text-[10px] text-[#8888AA] tracking-wider">Fast, Conversion-Focused Websites</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Preloader error:', error);
    return null;
  }
}
