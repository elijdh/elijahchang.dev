import React from "react"
import experience from "../data/experience"
import education from "../data/education"

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        mx-auto max-w-6xl
        px-6 sm:px-8
        pt-24
        sm:pb-24
      "
    >
      {/* Title */}
      <div className="mb-12 sm:mb-24 text-center sm:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Experience &{" "}
          <span className="text-accent dark:text-accent-dark">Education</span>
        </h2>
      </div>

      {/* EXPERIENCE */}
      <div className="mb-16 sm:mb-32">
        <p className="mb-6 sm:mb-14 text-sm uppercase tracking-wider text-muted dark:text-muted-dark text-center sm:text-left">
          Experience
        </p>
        <div className="relative border-l border-black/20 dark:border-white/15 pl-10 sm:pl-14 space-y-12 sm:space-y-20">
          {experience.map(item => (
            <div key={item.company} className="relative">
              {/* Timeline dot */}
              <span
                className="
                  absolute
                  left-[-18px]
                  top-[18px]
                  h-3 w-3
                  rounded-full
                  bg-accent dark:bg-accent-dark
                "
              />

              {/* Glass reading panel */}
              <div
                className="
                  rounded-2xl
                  border border-black/20 dark:border-white/15
                  bg-white/[0.015]
                  backdrop-blur-[1px]
                  backdrop-saturate-150
                  px-6 sm:px-8 py-6
                  shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_32px_rgba(0,0,0,0.35)]
                "
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                    {item.company}
                  </h3>

                  <p className="text-sm italic text-muted dark:text-muted-dark">
                    {item.role} · {item.location} · {item.period}
                  </p>

                  <ul className="mt-4 space-y-2 text-muted dark:text-muted-dark">
                    {item.bullets.map((b, i) => (
                      <li key={i}>— {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div>
        <p className="mb-6 sm:mb-14 text-sm uppercase tracking-wider text-muted dark:text-muted-dark text-center sm:text-left">
          Education
        </p>

        <div className="relative border-l border-black/20 dark:border-white/15 pl-10 sm:pl-14 space-y-10 sm:space-y-16">
          {education.map(edu => (
            <div key={edu.school} className="relative">
              {/* Timeline dot */}
              <span
                className="
                  absolute
                  left-[-18px]
                  top-[18px]
                  h-3 w-3
                  rounded-full
                  bg-accent dark:bg-accent-dark
                "
              />

              {/* Glass reading panel */}
              <div
                className="
                  rounded-2xl
                  border border-black/20 dark:border-white/15
                  bg-white/[0.015]
                  backdrop-blur-[1px]
                  backdrop-saturate-150
                  px-6 sm:px-8 py-6
                  shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_32px_rgba(0,0,0,0.35)]
                "
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                    {edu.school}
                  </h3>

                  <p className="text-sm italic text-muted dark:text-muted-dark">
                    {edu.degree} · {edu.period}
                  </p>

                  <ul className="mt-3 space-y-1 text-muted dark:text-muted-dark">
                    {edu.details && (
                      <ul className="mt-3 space-y-1 text-muted dark:text-muted-dark">
                        {edu.details.map((d, i) => (
                          <li key={i}>— {d}</li>
                        ))}
                      </ul>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
