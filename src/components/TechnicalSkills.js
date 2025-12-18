import React from "react"
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiFlutter,
} from "react-icons/si"
import { TbBrandCSharp, TbSql } from "react-icons/tb"
import { FaJava } from "react-icons/fa"

const coreLanguages = [
  { name: "SQL", icon: TbSql },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Java", icon: FaJava },
  { name: "Python", icon: SiPython },
  { name: "C#", icon: TbBrandCSharp },
]

const systemsLanguages = [
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "Assembly", label: "RISC-V" },
  { name: "SystemVerilog", label: "SV" },
  { name: "MATLAB", label: "MATLAB" },
]

const frameworks = [
  "React",
  "Next.js",
  "Angular",
  "ASP.NET",
  "Firebase",
  "Flutter",
  "Dart",
]

const tools = ["Teradata", "Oracle", "SAS", "Alteryx", "Power BI"]

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="
        mx-auto max-w-6xl
        px-6 sm:px-8
        pt-24
        sm:pb-20 md:pb-24
      "
    >
      {/* Title */}
      <div className="mb-12 sm:mb-20 text-center sm:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Technical{" "}
          <span className="text-accent dark:text-accent-dark">Skills</span>
        </h2>
      </div>

      <div className="space-y-14 sm:space-y-20 md:space-y-16">
        {/* Core Languages */}
        <div>
          <p className="mb-2 text-sm uppercase tracking-wider text-muted dark:text-muted-dark text-center sm:text-left">
            Core Engineering Languages
          </p>
          <p className="mb-6 text-sm text-muted/80 dark:text-muted-dark/80 text-center sm:text-left">
            Languages I’ve used in production systems, internships, and shipped
            projects
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {coreLanguages.map(({ name, icon: Icon }) => (
              <SkillCard key={name} name={name} Icon={Icon} />
            ))}
          </div>
        </div>

        {/* Systems & Low-Level */}
        <div>
          <p className="mb-2 text-sm uppercase tracking-wider text-muted dark:text-muted-dark text-center sm:text-left">
            Systems & Low-Level Development
          </p>
          <p className="mb-6 text-sm text-muted/80 dark:text-muted-dark/80 text-center sm:text-left">
            Actively used through coursework and systems-focused projects
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {systemsLanguages.map(({ name, icon: Icon, label }) => (
              <SkillCard key={name} name={name} Icon={Icon} label={label} />
            ))}
          </div>
        </div>

        {/* Frameworks & Platforms */}
        <div>
          <p className="mb-4 sm:mb-6 text-sm uppercase tracking-wider text-muted dark:text-muted-dark text-center sm:text-left">
            Frameworks & Platforms
          </p>

          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            {frameworks.map(item => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>

        {/* Data & Tools */}
        <div>
          <p className="mb-4 sm:mb-6 text-sm uppercase tracking-wider text-muted dark:text-muted-dark text-center sm:text-left">
            Data & Analytics Tools
          </p>

          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            {tools.map(item => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Small UI helpers ---------- */

function SkillCard({ name, Icon, label }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        rounded-2xl
        border border-black/30 dark:border-white/20
        backdrop-blur-[1.5px]
        backdrop-saturate-150
        bg-white/[0.02]
        p-5 sm:p-6
        text-muted dark:text-muted-dark
        transition
        hover:-translate-y-[2px]
        hover:text-foreground dark:hover:text-foreground-dark
        shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_10px_32px_rgba(0,0,0,0.35)]
      "
    >
      {Icon ? (
        <Icon className="text-4xl mb-2 sm:mb-3" />
      ) : (
        <div className="text-sm font-semibold tracking-wide mb-2 sm:mb-3">
          {label}
        </div>
      )}
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

function Tag({ children }) {
  return (
    <span
      className="
        rounded-full
        px-4 py-2
        text-sm
        border border-black/30 dark:border-white/20
        bg-white/[0.015]
        backdrop-blur-[1px]
        backdrop-saturate-150
        text-muted dark:text-muted-dark
      "
    >
      {children}
    </span>
  )
}
