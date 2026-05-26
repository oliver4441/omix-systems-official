class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We are sorry, but something unexpected happened.</p>
            <button onClick={() => window.location.reload()} className="btn btn-black">Reload Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="min-h-screen bg-[var(--bg-dark)] relative overflow-hidden" data-name="omix-app" data-file="app.js">
        <Preloader />
        <div className="relative z-20">
          <Navigation />
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Contact />
          <Footer />
          <WhatsAppButton />
        </div>
      </div>
    );
  } catch (error) {
    console.error("App component error:", error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
