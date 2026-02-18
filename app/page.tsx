import { NavHeader } from "@/components/nav-header"
import { HeroSection } from "@/components/hero-section"
import { CompetencySection } from "@/components/competency-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <NavHeader />
      <main>
        <HeroSection />
        <CompetencySection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
