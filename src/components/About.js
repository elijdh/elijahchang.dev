import React from "react"

export default function About() {
  return (
    <section
      id="about"
      className="
        mx-auto max-w-6xl
        px-6 sm:px-8
        pt-24
        sm:pb-20 md:pb-24
      "
    >
      {/* Glass container */}
      <div
        className="
          relative
          mx-auto sm:mx-0
          rounded-3xl
          border border-black/30 dark:border-white/20
          backdrop-blur-[1.5px]
          backdrop-saturate-150
          px-6 sm:px-10
          pt-10 sm:pt-14
          pb-8 sm:pb-14
          shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_16px_48px_rgba(0,0,0,0.35)]
        "
      >
        {/* Title */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground dark:text-foreground-dark">
            About <span className="text-accent dark:text-accent-dark">Me</span>
          </h2>
        </div>

        {/* Content */}
        <div
          className="
            mx-auto sm:mx-0
            space-y-5 sm:space-y-6
            text-lg leading-relaxed
            text-muted dark:text-muted-dark
            text-center sm:text-left
          "
        >
          <p>
            I’m a Computer Engineering student at the University of British
            Columbia with experience building software and data systems in
            production environments. Through internships and project work, I’ve
            worked on backend services, internal platforms, and data pipelines
            used by real teams.
          </p>

          <p>
            My background spans full-stack development, analytics
            infrastructure, and systems-oriented projects; from schema and API
            design to workflow automation and production monitoring. I enjoy
            working close to the system, understanding constraints, and making
            practical engineering tradeoffs.
          </p>

          <p>
            I’m currently focused on deepening my experience in lower-level and
            systems-focused development, building a stronger foundation in how
            software interacts with hardware, performance, and underlying
            infrastructure.
          </p>
        </div>
      </div>
    </section>
  )
}
