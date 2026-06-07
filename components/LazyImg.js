function LazyImg({ src, alt, className = "" }) {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={className + " transition-opacity duration-500 " + (loaded ? "opacity-100" : "opacity-0")}
      onError={(e) => { e.target.style.opacity = "0"; }}
    />
  );
}

export default LazyImg;
