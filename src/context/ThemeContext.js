import React, { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)

  // Run only on client
  useEffect(() => {
    if (typeof window === "undefined") return

    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches

    const initialTheme = stored || (prefersDark ? "dark" : "light")

    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")

    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (typeof window === "undefined") return

    setTheme(prev => {
      const next = prev === "dark" ? "light" : "dark"

      document.documentElement.classList.toggle("dark", next === "dark")
      localStorage.setItem("theme", next)

      return next
    })
  }

  /**
   * During SSR + first paint, render children
   * without accessing browser APIs.
   * This prevents hydration & build crashes.
   */
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: "light", toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
