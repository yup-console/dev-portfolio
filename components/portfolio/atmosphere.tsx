export function Atmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      {/* Animated terminal grid */}
      <div className="terminal-grid terminal-grid-drift absolute inset-0" />
      {/* Ambient glow behind hero */}
      <div
        className="absolute top-[-20%] left-1/2 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full opacity-25"
        style={{
          background:
            'radial-gradient(ellipse at center, oklch(0.78 0.17 155 / 30%), transparent 65%)',
        }}
      />
      {/* CRT scanlines */}
      <div className="crt-scanlines absolute inset-0 opacity-60" />
      {/* Slow sweep line */}
      <div className="crt-sweep absolute inset-x-0 h-32" />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, oklch(0 0 0 / 35%) 100%)',
        }}
      />
    </div>
  )
}
