import React from "react"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        mx-auto max-w-6xl
        px-6 sm:px-8
        pt-24
        pb-20
      "
    >
      {/* Title */}
      <div className="mb-12 text-center sm:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Get in{" "}
          <span className="text-accent dark:text-accent-dark">Touch</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* LEFT — Contact Info */}
        <div
          className="
            rounded-3xl
            border border-black/30 dark:border-white/20
            bg-white/[0.015]
            backdrop-blur-[1.5px]
            backdrop-saturate-150
            px-6 sm:px-8 py-8
            text-center sm:text-left
            shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_16px_48px_rgba(0,0,0,0.35)]
          "
        >
          <p className="text-lg font-medium text-foreground dark:text-foreground-dark">
            Want to reach out?
          </p>

          <p className="mt-2 text-muted dark:text-muted-dark">
            I’m always open to opportunities, collaborations, or just a quick
            conversation.
          </p>
          {/* Email */}
          <a
            href="mailto:elijah.chang@email.com"
            className="
    mt-6
    block
    text-sm
    text-accent dark:text-accent-dark
    hover:underline
  "
          >
            elijah.chang@email.com
          </a>

          {/* Social icons */}
          <div className="mt-4 flex justify-center sm:justify-start gap-5">
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
      text-muted dark:text-muted-dark
      hover:text-accent dark:hover:text-accent-dark
      transition
    "
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="https://github.com/elijdh"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
      text-muted dark:text-muted-dark
      hover:text-accent dark:hover:text-accent-dark
      transition
    "
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT — Netlify Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="
            rounded-3xl
            border border-black/30 dark:border-white/20
            bg-white/[0.015]
            backdrop-blur-[1.5px]
            backdrop-saturate-150
            px-6 sm:px-8 py-8
            shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_16px_48px_rgba(0,0,0,0.35)]
          "
        >
          {/* Netlify required hidden fields */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <p className="text-lg font-medium text-foreground dark:text-foreground-dark mb-6">
            Or send a message
          </p>

          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm mb-1 text-muted dark:text-muted-dark"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="
                  w-full
                  rounded-xl
                  border border-black/30 dark:border-white/20
                  bg-white/[0.02]
                  backdrop-blur-[1px]
                  px-4 py-2.5
                  text-sm
                  text-foreground dark:text-foreground-dark
                  outline-none
                  focus:border-accent
                "
              />
            </div>

            <div>
              <label
                htmlfor="email"
                className="block text-sm mb-1 text-muted dark:text-muted-dark"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="
                  w-full
                  rounded-xl
                  border border-black/30 dark:border-white/20
                  bg-white/[0.02]
                  backdrop-blur-[1px]
                  px-4 py-2.5
                  text-sm
                  text-foreground dark:text-foreground-dark
                  outline-none
                  focus:border-accent
                "
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm mb-1 text-muted dark:text-muted-dark"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="
                  w-full
                  rounded-xl
                  border border-black/30 dark:border-white/20
                  bg-white/[0.02]
                  backdrop-blur-[1px]
                  px-4 py-2.5
                  text-sm
                  text-foreground dark:text-foreground-dark
                  outline-none
                  resize-none
                  focus:border-accent
                "
              />
            </div>

            <button
              type="submit"
              className="
                mt-2
                inline-flex items-center justify-center
                rounded-xl
                px-5 py-2.5
                text-sm font-medium
                bg-accent dark:bg-accent-dark
                text-white
                hover:opacity-90
                transition
              "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
