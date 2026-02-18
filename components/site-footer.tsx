export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {"© 2026 강선아. All rights reserved."}
          </p>
          <p className="text-xs text-muted-foreground">
            {"R&D 기획·전략 기반 컨설팅 연구원"}
          </p>
        </div>
      </div>
    </footer>
  )
}
