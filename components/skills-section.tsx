"use client"

import { useEffect, useRef } from "react"

const skillCategories = [
  {
    label: "Analysis",
    items: ["SPSS", "R&D 설문조사", "통계분석", "데이터 전처리"],
  },
  {
    label: "Certificates",
    items: ["데이터분석준전문가 (ADsP)", "무역영어 1급"],
  },
  {
    label: "Education",
    items: [
      "경희대학교 조리외식경영학 박사",
      "최우수학위논문상 수상",
    ],
  },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4")
            entry.target.classList.remove("opacity-0")
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div data-animate className="mb-16 opacity-0 duration-700">
          <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
            {"Technical Skills & Certifications"}
          </p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {"기술 역량 및 자격"}
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.label}
              data-animate
              className="opacity-0 duration-700"
              style={{ animationDelay: `${catIndex * 150}ms` }}
            >
              <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
                <h3 className="mb-6 text-xs font-semibold tracking-widest text-accent uppercase">
                  {category.label}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span className="text-sm leading-relaxed text-card-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
