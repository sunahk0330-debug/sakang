"use client"

import { useEffect, useRef } from "react"
import { Mail } from "lucide-react"

export function ContactSection() {
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
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div data-animate className="opacity-0 duration-700">
            <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
              {"Contact"}
            </p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {"프로젝트를 함께 논의해 보세요"}
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-accent" />
          </div>

          <p
            data-animate
            className="mt-6 text-base leading-relaxed text-muted-foreground opacity-0 duration-700 delay-150"
          >
            {"정책 담당자 및 기업 고객을 위한 맞춤형 컨설팅을 제공합니다."}
            <br />
            {"새로운 프로젝트에 대해 편하게 문의해 주세요."}
          </p>

          <div
            data-animate
            className="mt-10 opacity-0 duration-700 delay-300"
          >
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-3 rounded-xl border border-border bg-card px-8 py-4 text-sm font-medium text-card-foreground transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <Mail className="h-5 w-5 text-accent" />
              {"이메일로 문의하기"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
