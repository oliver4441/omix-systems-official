// Shared visual-effect components: scroll parallax backgrounds and 3D tilt cards.
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Moves a background image at a different speed than the page scroll,
// creating a layered, 3D-like depth effect without heavy video assets.
function ParallaxBg({ src, alt = "", speed = 0.15, className = "" }) {
  try {
    const ref = React.useRef(null);

    React.useEffect(() => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      let ticking = false;
      const update = () => {
        const rect = el.parentElement.getBoundingClientRect();
        const offset = rect.top * speed;
        el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`;
        ticking = false;
      };
      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      };

      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }, [speed]);

    return (
      <div className="absolute inset-0 overflow-hidden" data-name="parallax-bg" data-file="components/Effects.js">
        <div ref={ref} className="absolute inset-0 will-change-transform">
          <LazyImg src={src} alt={alt} role="presentation" className={"w-full h-full object-cover " + className} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("ParallaxBg component error:", error);
    return null;
  }
}

// Wraps a card so it gently tilts in 3D toward the cursor, giving a
// lightweight "3D object" feel on hover without extra assets.
function TiltCard({ as: Tag = "div", className = "", style = {}, maxTilt = 7, children, ...rest }) {
  try {
    const ref = React.useRef(null);
    const [tiltStyle, setTiltStyle] = React.useState({});
    const reduced = React.useRef(prefersReducedMotion());

    const handleMouseMove = (e) => {
      if (reduced.current || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * maxTilt * 2;
      const rotateX = (0.5 - y) * maxTilt * 2;
      setTiltStyle({
        transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
      });
    };

    const handleMouseLeave = () => {
      setTiltStyle({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)" });
    };

    return (
      <Tag
        ref={ref}
        className={className}
        style={{ transition: "transform 0.25s ease-out", transformStyle: "preserve-3d", ...style, ...tiltStyle }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-name="tilt-card"
        data-file="components/Effects.js"
        {...rest}
      >
        {children}
      </Tag>
    );
  } catch (error) {
    console.error("TiltCard component error:", error);
    return null;
  }
}

// Generic swipeable carousel: arrow navigation, dot indicators, touch/drag
// swipe, and keyboard support. `renderItem` receives (item, index) and
// should return the slide content; the component handles positioning.
function Carousel({ items, renderItem, className = "", slideClassName = "", showArrows = true, showDots = true, ariaLabel = "Carousel" }) {
  try {
    const [index, setIndex] = React.useState(0);
    const trackRef = React.useRef(null);
    const dragState = React.useRef({ startX: 0, dragging: false, delta: 0 });
    const count = items.length;

    const goTo = (i) => {
      const next = ((i % count) + count) % count;
      setIndex(next);
    };
    const prev = () => goTo(index - 1);
    const next = () => goTo(index + 1);

    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    };

    const onPointerDown = (e) => {
      dragState.current.dragging = true;
      dragState.current.startX = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
      dragState.current.delta = 0;
    };
    const onPointerMove = (e) => {
      if (!dragState.current.dragging) return;
      const x = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
      dragState.current.delta = x - dragState.current.startX;
    };
    const endDrag = () => {
      if (!dragState.current.dragging) return;
      dragState.current.dragging = false;
      if (dragState.current.delta > 50) prev();
      else if (dragState.current.delta < -50) next();
      dragState.current.delta = 0;
    };

    if (!count) return null;

    return (
      <div
        className={"relative " + className}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={onKeyDown}
        data-name="carousel"
        data-file="components/Effects.js"
      >
        <div
          className="overflow-hidden touch-pan-y select-none"
          onMouseDown={onPointerDown}
          onMouseMove={onPointerMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={onPointerDown}
          onTouchMove={onPointerMove}
          onTouchEnd={endDrag}
        >
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((item, i) => (
              <div key={i} className={"w-full flex-shrink-0 " + slideClassName} aria-hidden={i !== index}>
                {renderItem(item, i)}
              </div>
            ))}
          </div>
        </div>

        {showArrows && count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 cursor-pointer z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 cursor-pointer z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {showDots && count > 1 && (
          <div className="flex items-center justify-center gap-2 mt-5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={"Go to slide " + (i + 1)}
                aria-current={i === index}
                className={"h-2 rounded-full transition-all duration-300 cursor-pointer " + (i === index ? "w-6 bg-[var(--accent-color)]" : "w-2 bg-white/20 hover:bg-white/40")}
              ></button>
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Carousel component error:", error);
    return null;
  }
}
