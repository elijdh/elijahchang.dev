import React, { useEffect, useRef, useState, useCallback } from "react"
import projects from "../data/projects"

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section
      id="projects"
      className="
        mx-auto max-w-6xl
        px-6 sm:px-8
        pt-24
        pb-12 sm:pb-24
      "
    >
      {/* Title */}
      <div className="mb-12 sm:mb-20 text-center sm:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold">
          <span className="text-accent dark:text-accent-dark">Projects</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.map((project, i) => (
          <button
            key={project.id}
            onClick={() => setActiveIndex(i)}
            className="
              text-center sm:text-left
              rounded-2xl
              border border-black/30 dark:border-white/20
              bg-white/[0.015]
              backdrop-blur-[1.5px]
              backdrop-saturate-150
              p-5 sm:p-6
              transition
              hover:-translate-y-[2px]
              hover:border-black/40
              dark:hover:border-white/30
              shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_32px_rgba(0,0,0,0.35)]
            "
          >
            {/* Context pill */}
            {project.context && (
              <span
                className="
                  inline-block mb-2
                  text-xs
                  px-2 py-1
                  rounded-full
                  border border-black/30 dark:border-white/20
                  bg-white/[0.02]
                  backdrop-blur-[1px]
                  text-muted dark:text-muted-dark
                "
              >
                {project.context}
              </span>
            )}

            <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
              {project.title}
            </h3>

            <p className="mt-1 text-sm text-muted dark:text-muted-dark">
              {project.purpose}
            </p>

            {/* Tags */}
            {project.tags && (
              <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                {project.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="
                      text-[11px]
                      px-2 py-1
                      rounded-full
                      border border-black/30 dark:border-border-dark
                      text-muted dark:text-muted-dark
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <p className="mt-3 text-xs text-muted dark:text-muted-dark">
              {project.period}
            </p>
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <ProjectModal
          index={activeIndex}
          setIndex={setActiveIndex}
          projects={projects}
        />
      )}
    </section>
  )
}

/* Modal */
function ProjectModal({ index, setIndex, projects }) {
  const project = projects[index]

  const touchStart = useRef({ x: 0, y: 0 })
  const touchEnd = useRef({ x: 0, y: 0 })

  const SWIPE_THRESHOLD = 70

  const close = useCallback(() => {
    setIndex(null)
  }, [setIndex])

  const prev = useCallback(() => {
    setIndex(i => (i - 1 + projects.length) % projects.length)
  }, [setIndex, projects.length])

  const next = useCallback(() => {
    setIndex(i => (i + 1) % projects.length)
  }, [setIndex, projects.length])

  /* Keyboard navigation */
  useEffect(() => {
    const handler = e => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [close, prev, next])

  /* Touch handlers */
  const onTouchStart = e => {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }

  const onTouchMove = e => {
    const t = e.touches[0]
    touchEnd.current = { x: t.clientX, y: t.clientY }
  }

  const onTouchEnd = () => {
    const dx = touchEnd.current.x - touchStart.current.x
    const dy = touchEnd.current.y - touchStart.current.y

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      dx > 0 ? prev() : next()
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      {/* Backdrop */}
      <button
        aria-label="Close project modal"
        onClick={close}
        className="absolute inset-0"
      />

      {/* OUTER container (no overflow) */}
      <div className="relative z-10 w-full max-w-3xl">
        {/* Desktop arrows */}
        <button
          onClick={prev}
          aria-label="Previous project"
          className="
            hidden md:flex
            absolute left-[-3.5rem] top-1/2 -translate-y-1/2
            h-12 w-12
            rounded-full
            border border-black/30 dark:border-border-dark
            bg-background dark:bg-background-dark
            items-center justify-center
            text-xl
            hover:scale-105 transition
          "
        >
          ←
        </button>

        <button
          onClick={next}
          aria-label="Next project"
          className="
            hidden md:flex
            absolute right-[-3.5rem] top-1/2 -translate-y-1/2
            h-12 w-12
            rounded-full
            border border-black/30 dark:border-border-dark
            bg-background dark:bg-background-dark
            items-center justify-center
            text-xl
            hover:scale-105 transition
          "
        >
          →
        </button>

        {/* INNER scroll container */}
        <div
          className="
            max-h-[90vh]
            overflow-y-auto
            rounded-3xl
            bg-background dark:bg-background-dark
            px-6 sm:px-8 py-8
            shadow-[0_20px_80px_rgba(0,0,0,0.6)]
          "
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Close */}
          <button
            onClick={close}
            className="
              absolute top-4 right-4
              h-10 w-10
              rounded-full
              border border-black/30 dark:border-border-dark
              flex items-center justify-center
              text-lg
              hover:bg-background/80 dark:hover:bg-background-dark/80
            "
            aria-label="Close"
          >
            ✕
          </button>

          {/* Header */}
          <div className="mb-6 pr-12">
            {project.context && (
              <span className="inline-block mb-2 text-xs px-2 py-1 rounded-full border border-black/30 dark:border-border-dark text-muted dark:text-muted-dark">
                {project.context}
              </span>
            )}

            <h3 className="text-2xl font-semibold">{project.title}</h3>

            <p className="text-sm italic text-muted dark:text-muted-dark">
              {project.position} · {project.purpose} · {project.period}
            </p>
          </div>

          {/* Mobile hint */}
          <p className="md:hidden mb-4 text-xs text-muted dark:text-muted-dark text-center">
            Swipe left or right to view more projects
          </p>

          {/* Highlights */}
          {project.highlights && (
            <ul className="space-y-2 mb-6 text-muted dark:text-muted-dark">
              {project.highlights.map((h, i) => (
                <li key={i}>— {h}</li>
              ))}
            </ul>
          )}

          {/* Images */}
          {project.images?.length > 0 && (
            <div
              className="mb-6 flex gap-4 overflow-x-auto snap-x snap-mandatory"
              onTouchStart={e => e.stopPropagation()}
              onTouchMove={e => e.stopPropagation()}
            >
              {project.images.map(img => (
                <img
                  key={img}
                  src={`/images/${img}`}
                  alt={project.title}
                  className="h-56 sm:h-64 rounded-xl object-cover snap-center flex-shrink-0"
                />
              ))}
            </div>
          )}

          {/* Video */}
          {project.embedVideo && (
            <div className="mb-6 aspect-video">
              <iframe
                src={project.embedVideo}
                title={project.title}
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Tech */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map(t => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full border border-black/30 dark:border-border-dark text-muted dark:text-muted-dark"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4 text-sm">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="text-accent dark:text-accent-dark hover:underline"
              >
                Website
              </a>
            )}

            {Array.isArray(project.github)
              ? project.github.map(url => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent dark:text-accent-dark hover:underline"
                  >
                    GitHub
                  </a>
                ))
              : project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent dark:text-accent-dark hover:underline"
                  >
                    GitHub
                  </a>
                )}

            {project.additionalLinks?.map(link => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-accent dark:text-accent-dark hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
