function Preloader() {
  try {
    return (
      <div className="fixed inset-0 bg-[var(--bg-dark)] z-[9999] flex flex-col items-center justify-center overflow-hidden" data-name="preloader" data-file="components/Preloader.js">
        <div className="absolute inset-0">
          <img src="favicon.png" alt="Omix Logo" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/80 via-[var(--bg-dark)]/60 to-[var(--bg-dark)]"></div>
        </div>
        <div className="text-center relative z-10 px-4">
          <div className="brand-font text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 sm:mb-8 animate-pulse">
            <span className="text-[var(--secondary-color)]">omix</span>systems
          </div>
          
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[var(--secondary-color)] animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[var(--accent-color)] animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[var(--secondary-color)] animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
          
          <p className="text-sm sm:text-lg text-[var(--text-secondary)]">connecting to our servers...</p>
          
          <div className="mt-6 sm:mt-8 w-48 sm:w-64 h-1 bg-[var(--bg-soft)] rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="absolute bottom-6 sm:bottom-8 text-[var(--text-secondary)] text-xs sm:text-sm px-4 text-center">
          Crafting your experience...
        </div>
      </div>
    );
  } catch (error) {
    console.error('Preloader component error:', error);
    return null;
  }
}