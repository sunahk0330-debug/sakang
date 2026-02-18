"use client"

import { useEffect, useRef } from "react"

const experiences = [
  {
    organization: "한국교육개발원 (KEDI)",
    role: "연구원",
    description:
      "대학역량진단 및 정량평가, 정부 재정지원제한대학 평가 및 맞춤형 컨설팅 총괄 지원.",
    tags: ["대학역량진단", "정량평가", "컨설팅"],
  },
  {
    organization: "한국문화관광연구원 (KCTI)",
    role: "연구원",
    description:
      "지역관광개발사업 및 문화관광축제 지정 효과 분석, 정책통계평가실 연구 수행.",
    tags: ["관광개발", "정책통계", "효과분석"],
  },
  {
    organization: "경희대학교",
    role: "강사 / 연구원(박사)",
    description:
      "호텔관광대학 강사/연구원(박사), 축제 평가분석 및 콘텐츠 개발 용역 총괄.",
    tags: ["연구", "강의", "콘텐츠개발"],
  },
]

export function ExperienceSection() {
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
    <section ref={sectionRef} id="experience" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div data-animate className="mb-16 opacity-0 duration-700">
          <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
            {"Professional Experience"}
          </p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {"경력 현황"}
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" />
        </div>

        <div className="relative space-y-0">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-border lg:block" />

          {experiences.map((exp, index) => (
            <div
              key={exp.organization}
              data-animate
              className="opacity-0 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative flex gap-8 pb-12 last:pb-0">
                {/* Timeline dot */}
                <div className="hidden flex-shrink-0 lg:block">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-background">
                    <span className="text-xs font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="flex-1 rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:shadow-accent/5 lg:p-8">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-bold text-card-foreground">
                      {exp.organization}
                    </h3>
                    <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {exp.role}
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
