import React from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  return (
    <footer
      className="
        mt-24
        border-t 
        border-black/20 dark:border-white/20
        px-6 sm:px-8
        py-10
        text-sm
        text-muted dark:text-muted-dark
      "
    >
      <div
        className="
          mx-auto max-w-6xl
          grid grid-cols-1
          gap-4
          text-center
          sm:grid-cols-3
          sm:items-center
        "
      >
        {/* Left */}
        <span className="sm:text-left">
          elijahchang
          <span className="text-accent dark:text-accent-dark">.dev</span>
        </span>

        {/* Center */}
        <span className="sm:text-center">© {new Date().getFullYear()}</span>

        {/* Right */}
        <div className="flex justify-center sm:justify-end gap-4">
          <a
            href="https://github.com/elijdh"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition"
          >
            <FaGithub size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
