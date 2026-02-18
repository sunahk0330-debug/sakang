"use client"

import { useEffect, useRef } from "react"
import { FileSearch, TrendingUp, BookOpen } from "lucide-react"

const projects = [
  {
    icon: TrendingUp,
    period: "2021 - 2023",
    title: "대학기본역량진단 및 후속 컨설팅",
    description:
      "대학 역량 강화를 위한 기본역량진단 총괄 수행 및 진단 결과에 기반한 후속 맞춤형 컨설팅 프로젝트를 주도하였습니다.",
    tags: ["역량진단", "컨설팅", "정량평가"],
  },
  {
    icon: FileSearch,
    period: "2010 - 2016",
    title: "문화관광축제 지정 등급 기준 효과 분석",
    description:
      "문화관광축제 지정 등급 기준의 효과성을 분석하여 축제 평가 체계 개선 및 정책 제안에 기여하였습니다.",
    tags: ["효과분석", "정책연구", "문화관광"],
  },
  {
    icon: BookOpen,
    period: "연구 논문",
    title: "K-Food 수용의도에 미치는 영향",
    description:
      "한류수준 및 혁신수용단계에 따른 8개국을 중심으로 K-Food 수용의도에 미치는 영향 요인을 실증적으로 분석하였습니다.",
    tags: ["K-Food", "한류", "실증분석"],
  },
]

export function ProjectsSection() {
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
    <section ref={sectionRef} id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div data-animate className="mb-16 opacity-0 duration-700">
          <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
            {"Major Projects"}
          </p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {"주요 실적"}
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-animate
              className="opacity-0 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 lg:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {project.period}
                  </span>
                </div>
                <h3 className="mb-3 text-base font-bold text-card-foreground leading-snug">
                  {project.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
