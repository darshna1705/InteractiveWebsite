export default function Home() {
  // Glass surfaces — extra blur, lighter opacity (non-intrusive)
  const glass =
    "rounded-3xl bg-white/42 backdrop-blur-2xl border border-black/5 shadow-[0_16px_50px_rgba(0,0,0,0.08)]";
  const glassSoft =
    "rounded-3xl bg-white/35 backdrop-blur-2xl border border-black/5 shadow-[0_14px_40px_rgba(0,0,0,0.06)]";

  const textBody = "text-slate-700";
  const textMuted = "text-slate-500";

  return (
    <main className="relative z-10 min-h-screen text-[#0b0f14]">
      {/* Top Nav – dark for contrast */}
      <header className="sticky top-0 z-20 border-b border-black/10 bg-[#0b0f14]/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500/80 via-cyan-400/70 to-emerald-400/70" />
            <span className="text-sm font-semibold tracking-wide text-white">
              DocAgent
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 md:inline-flex">
              Sign in
            </button>
            <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0b0f14] hover:bg-white/90">
              Start free
            </button>
          </div>
        </div>
      </header>

      {/* SECTION 1 (single-page scroll) */}
      {/* SECTION 1 (single unified block) */}
<section className="relative isolate flex min-h-[100svh] items-center">
  <div className="mx-auto max-w-6xl px-5 pb-20 pt-14">
    {/* ONE unified glass container */}
    <div className={`${glass} p-6 md:p-8`}>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        {/* Left (no separate glass) */}
        <div className="p-2 md:p-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/45 px-3 py-1 text-xs text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Generate help docs from PRDs — fast & consistent
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight md:text-5xl">
            A documentation site that feels calm, premium — and writes itself.
          </h1>

          <p className={`mt-4 max-w-xl text-pretty text-base leading-relaxed ${textBody}`}>
            Turn PRDs into customer-facing help docs, FAQs, and release notes.
            Ship a clean, searchable portal without manual rewriting.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button className="rounded-xl bg-gradient-to-r from-indigo-500/95 via-cyan-400/90 to-emerald-400/90 px-5 py-3 text-sm font-semibold text-[#061018] shadow-lg hover:opacity-95">
              Generate document
            </button>
            <button className="rounded-xl border border-black/10 bg-white/50 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white/70">
              See sample docs
            </button>
          </div>

          <div className={`mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs ${textMuted}`}>
            <span>✓ Clean IA</span>
            <span>✓ Search-ready</span>
            <span>✓ Agentic workflow</span>
            <span>✓ Light & Dark</span>
          </div>
        </div>

        {/* Right (no separate glass, just the mock) */}
        <div className="relative p-2 md:p-4">
          {/* “browser” frame sits directly inside unified glass */}
          <div className="rounded-3xl border border-black/10 bg-white/25 backdrop-blur-2xl shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="text-xs text-slate-500">docs.docagent.ai</div>
            </div>

            <div className="p-5">
              <div className="grid grid-cols-12 gap-4">
                <aside className="col-span-5 rounded-2xl bg-[#0b0f14]/85 p-4 text-white">
                  <div className="text-xs font-semibold text-white/80">
                    Getting Started
                  </div>
                  <ul className="mt-3 space-y-2 text-xs text-white/60">
                    <li className="rounded-lg bg-white/10 px-3 py-2 text-white">
                      Introduction
                    </li>
                    <li className="rounded-lg px-3 py-2 hover:bg-white/10">
                      Connect PRDs
                    </li>
                    <li className="rounded-lg px-3 py-2 hover:bg-white/10">
                      Generate docs
                    </li>
                    <li className="rounded-lg px-3 py-2 hover:bg-white/10">
                      Publish
                    </li>
                  </ul>
                </aside>

                <article className="col-span-7 rounded-2xl bg-[#0b0f14]/85 p-4 text-white">
                  <h3 className="text-sm font-semibold">Introduction</h3>
                  <p className="mt-2 text-sm text-white/70">
                    This help center is generated from your PRD and kept in sync
                    as features evolve.
                  </p>

                  <div className="mt-4 grid gap-3">
                    {[
                      "Feature overview",
                      "Step-by-step guides",
                      "FAQs & edge cases",
                      "Release notes",
                    ].map((t) => (
                      <div
                        key={t}
                        className="rounded-xl bg-white/5 p-3 text-xs text-white/80"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Optional glow accents */}
          <div className="pointer-events-none absolute -right-10 -top-10 hidden h-36 w-36 rounded-full bg-cyan-400/25 blur-3xl md:block" />
          <div className="pointer-events-none absolute -bottom-12 -left-10 hidden h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl md:block" />
        </div>
      </div>
    </div>

    <div className="mt-6 text-center text-xs text-slate-600">Scroll ↓</div>
  </div>
</section>

    </main>
  );
}
