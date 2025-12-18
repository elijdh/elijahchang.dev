import React, { useState } from "react"
import { useTheme } from "../context/ThemeContext"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

const HEADER_HEIGHT = 52

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(p => !p)
  const closeMenu = () => setOpen(false)

  return (
    <>
      {/* Header */}
      <header
        className="
          fixed top-0 z-50 w-full
          border-b border-white/15
          bg-white/[0.04]
          backdrop-blur-[2px]
          backdrop-saturate-150
        "
        style={{ height: HEADER_HEIGHT }}
      >
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 h-full flex items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-semibold tracking-tight"
          >
            elijahchang
            <span className="text-accent dark:text-accent-dark">.dev</span>
          </a>

          {/* Desktop Nav */}
          <nav className="ml-auto hidden md:flex items-center gap-8 text-sm">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}

            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </nav>

          {/* Mobile Controls */}
          <div className="ml-auto md:hidden flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className={`
                h-10 w-10
                flex items-center justify-center
                rounded-md
                border border-white/20
                bg-white/[0.03]
                backdrop-blur-[2px]
                transition
                ${open ? "border-accent/40" : "hover:bg-white/[0.06]"}
              `}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {open && (
        <button
          aria-label="Close menu"
          onClick={closeMenu}
          className="fixed inset-0 z-30 bg-black/40"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`
          fixed right-0 z-40
          w-72
          border-l border-white/15
          bg-white/[0.06]
          backdrop-blur-[6px]
          backdrop-saturate-150
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        style={{
          top: HEADER_HEIGHT,
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <nav className="flex flex-col justify-center h-full px-8 gap-8">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="text-xl font-medium text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}

/* Theme Toggle */

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        h-10 w-10
        flex items-center justify-center
        rounded-md
        border border-white/20
        bg-white/[0.03]
        backdrop-blur-[2px]
        text-muted hover:text-foreground
        transition
      "
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  )
}
