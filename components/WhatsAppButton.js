function WhatsAppButton() {
  try {
    const handleWhatsAppClick = () => {
      window.open('https://wa.me/254732649442?text=Hi,%20I%20want%20a%20website%20from%20Omix', '_blank');
    };

    return (
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 left-auto z-40 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        data-name="whatsapp-button"
        data-file="components/WhatsAppButton.js"
        aria-label="Chat on WhatsApp"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40"></span>
        <svg xmlns="http://www.w3.org/2000/svg" className="relative w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    );
  } catch (error) {
    console.error('WhatsAppButton component error:', error);
    return null;
  }
}
