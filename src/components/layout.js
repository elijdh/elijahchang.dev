import React from "react"

export default function Layout({ children }) {
  return (
    <div className="relative min-h-[100dvh] bg-background dark:bg-background-dark">
      {/* Base vignette */}
      {/* Halftone glow layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
      radial-gradient(900px 500px at 26% 5%, rgba(255,120,80,0.32), transparent 60%),
      radial-gradient(600px 600px at 66% 15%, rgba(255,120,80,0.22), transparent 60%),
      radial-gradient(700px 900px at 35% 35%, rgba(255,120,80,0.17), transparent 60%),
      radial-gradient(800px 900px at 85% 35%, rgba(255,120,80,0.27), transparent 60%),
      radial-gradient(700px 900px at 59% 55%, rgba(255,120,80,0.17), transparent 60%),
      radial-gradient(700px 900px at 35% 65%, rgba(255,120,80,0.22), transparent 60%),
      radial-gradient(600px 500px at 70% 80%, rgba(255,120,80,0.34), transparent 65%),
      radial-gradient(700px 600px at 15% 90%, rgba(255,120,80,0.22), transparent 60%),
      radial-gradient(700px 600px at 50% 95%, rgba(255,120,80,0.17), transparent 60%)
    `,
          WebkitMaskImage: `radial-gradient(circle, #000 42%, transparent 43%)`,
          WebkitMaskSize: `6px 6px`,
          WebkitMaskRepeat: `repeat`,
          maskImage: `radial-gradient(circle, #000 42%, transparent 43%)`,
          maskSize: `6px 6px`,
          maskRepeat: `repeat`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-foreground dark:text-foreground-dark">
        {children}
      </div>
    </div>
  )
}
