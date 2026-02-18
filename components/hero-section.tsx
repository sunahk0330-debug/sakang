"use client"

import { useEffect, useRef } from "react"
import { FileSearch, TrendingUp } from "lucide-react"

export function HeroSection() {
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
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center"
    >
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 lg:px-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 space-y-8">
            <div
              data-animate
              className="opacity-0 duration-700"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5 text-sm text-primary-foreground/80">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                {"R&D Strategy Consultant"}
              </div>
              <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                {"데이터를 넘어"}
                <br />
                {"정책의 로드맵을"}
                <br />
                {"설계합니다."}
              </h1>
            </div>

            <p
              data-animate
              className="max-w-lg text-pretty text-base leading-relaxed text-primary-foreground/70 opacity-0 duration-700 delay-200 sm:text-lg"
            >
              {"R&D 기획·전략 기반 컨설팅 연구원, "}
              <strong className="font-semibold text-primary-foreground">{"강선아"}</strong>
              {" 입니다."}
              <br />
              {"분석 결과를 실질적인 실행 전략으로 전환하는 통찰력을 제공합니다."}
            </p>

            <div
              data-animate
              className="flex flex-wrap gap-4 opacity-0 duration-700 delay-300"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                {"프로젝트 문의하기"}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                {"주요 실적 보기"}
              </a>
            </div>
          </div>

          <div
            data-animate
            className="hidden flex-shrink-0 opacity-0 duration-700 delay-500 lg:block"
          >
            <div className="relative">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                    <FileSearch className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-foreground">{"데이터 분석"}</p>
                    <p className="text-xs text-primary-foreground/60">{"SPSS · 통계분석 · 실증연구"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-foreground">{"전략 수립"}</p>
                    <p className="text-xs text-primary-foreground/60">{"정책 로드맵 · 성과 평가"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
