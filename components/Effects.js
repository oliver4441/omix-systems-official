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
