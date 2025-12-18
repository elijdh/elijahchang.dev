import React from "react"

export default function Hero() {
  return (
    <section
      id="home"
      className="
    relative mx-auto max-w-6xl
    px-6 sm:px-8

    min-h-[100svh] sm:min-h-0
    flex items-center

    pt-[120px] sm:pt-32 md:pt-[180px]
    pb-16 sm:pb-24
  "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 sm:gap-16 md:gap-24">
        {/* LEFT */}
        <div className="flex flex-col gap-6 sm:gap-10 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Hey, I’m{" "}
            <span className="text-accent dark:text-accent-dark">Elijah</span>
          </h1>

          <div className="flex flex-col gap-2 max-w-xl mx-auto md:mx-0">
            <div className="flex flex-col gap-1">
              <p className="text-lg font-medium text-foreground dark:text-foreground-dark">
                Software & Data Engineer
              </p>
              <p className="text-sm sm:text-base text-muted dark:text-muted-dark">
                Computer Engineering Student at UBC
              </p>
            </div>

            <p className="text-lg text-muted dark:text-muted-dark">
              Building production data pipelines, backend systems, and applied
              engineering work
            </p>
          </div>
        </div>

        {/* RIGHT — Focus */}
        <div className="flex justify-center md:justify-end">
          <div
            className="
              w-full max-w-sm
              rounded-2xl
              border border-black/30 dark:border-white/20
              dark:bg-white/[0.04] dark:sm:bg-white/[0.02]
              backdrop-blur-[1.5px] sm:backdrop-blur-[1.25px]
              backdrop-saturate-150
              px-6 py-6
              text-muted dark:text-muted-dark
              shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_32px_rgba(0,0,0,0.35)]
            "
          >
            <p className="uppercase tracking-wider text-xs font-medium mb-4 text-center md:text-left">
              Focus
            </p>

            <ul className="space-y-2 text-base sm:text-lg text-center md:text-left">
              <li>Backend systems & APIs</li>
              <li>Data pipelines & analytics</li>
              <li>Internal platforms & applied systems projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
