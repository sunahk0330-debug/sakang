"use client"

import { useEffect, useRef } from "react"
import { FileSearch, TrendingUp, Award, BookOpen } from "lucide-react"

const competencies = [
  {
    icon: TrendingUp,
    title: "R&D 전략 기획",
    description: "정책 및 사업 성과평가, 발전전략 수립 총괄.",
  },
  {
    icon: FileSearch,
    title: "데이터 기반 분석",
    description: "SPSS, ADsP 기반의 정밀한 통계 및 실증 분석.",
  },
  {
    icon: Award,
    title: "맞춤형 컨설팅",
    description: "이해관계자 맞춤형 메시지 구성 및 의사결정 지원.",
  },
  {
    icon: BookOpen,
    title: "프로젝트 리딩",
    description: "기획부터 보고까지 전 과정 책임 수행(End-to-End).",
  },
]

export function CompetencySection() {
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
    <section ref={sectionRef} id="competency" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div data-animate className="mb-16 opacity-0 duration-700">
          <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
            {"Core Competency"}
          </p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {"핵심 역량"}
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {competencies.map((item, index) => (
            <div
              key={item.title}
              data-animate
              className="opacity-0 duration-700 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
