export default function Home() {
  // Hero glass (keep same)
  const glass =
    "rounded-3xl bg-white/42 backdrop-blur-2xl border border-black/5 shadow-[0_16px_50px_rgba(0,0,0,0.08)]";

  // Three pane variants: progressively less glass (more subtle as you go down)
  const pane1 =
    "rounded-3xl bg-white/26 backdrop-blur-xl border border-black/5 shadow-[0_14px_40px_rgba(0,0,0,0.06)]";
  const pane2 =
    "rounded-3xl bg-white/16 backdrop-blur-lg border border-black/5 shadow-[0_10px_28px_rgba(0,0,0,0.05)]";
  const pane3 =
    "rounded-3xl bg-white/8 backdrop-blur-sm border border-black/5 shadow-[0_6px_18px_rgba(0,0,0,0.04)]";

  const textBody = "text-slate-700";
  const textMuted = "text-slate-500";

  const HeroPane = ({
    className,
    title,
    subtitle,
    bullets,
    body,
    left,
  }: {
    className: string;
    title: string;
    subtitle: string;
    bullets?: string[];
    body?: string[];
    left: "text" | "mock";
  }) => {
    // ✅ Make "How it works" a bit bigger (less weird)
    const Kicker = (
      <div className="text-sm font-semibold tracking-wide text-slate-600">
        How it works
      </div>
    );

    const TextBlock = (
      <div className="p-2 md:p-4">
        {Kicker}
        <h2 className="mt-2 text-balance text-2xl font-semibold leading-tight md:text-3xl">
          {title}
        </h2>
        <p className={`mt-3 max-w-xl text-pretty text-base leading-relaxed ${textBody}`}>
          {subtitle}
        </p>

        {bullets && bullets.length > 0 && (
          <ul className={`mt-5 space-y-2 text-sm ${textBody}`}>
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-emerald-500/80" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {body && body.length > 0 && (
          <div className="mt-5 space-y-3">
            {body.map((p) => (
              <p key={p} className={`text-sm leading-relaxed ${textMuted}`}>
                {p}
              </p>
            ))}
          </div>
        )}
      </div>
    );

    const MockBlock = (
      <div className="relative p-2 md:p-4">
        <div className="rounded-3xl border border-black/10 bg-white/25 backdrop-blur-2xl p-5 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between border-b border-black/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="text-xs text-slate-500">Preview</div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-2xl bg-[#0b0f14]/85 p-4 text-white">
              <div className="text-xs font-semibold text-white/80">Agent view</div>
              <div className="mt-2 text-sm text-white/85">{title}</div>
              <div className="mt-2 text-xs text-white/60">{subtitle}</div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-black/10 bg-white/40 p-3">
                <div className="text-xs font-semibold text-slate-800">Input</div>
                <div className="mt-2 text-xs text-slate-600">Source material → parsed</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/40 p-3">
                <div className="text-xs font-semibold text-slate-800">Output</div>
                <div className="mt-2 text-xs text-slate-600">Customer-ready structure</div>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/40 p-4">
              <div className="text-xs font-semibold text-slate-800">Signals</div>
              <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-600">
                <span className="rounded-full border border-black/10 bg-white/50 px-2 py-1">style</span>
                <span className="rounded-full border border-black/10 bg-white/50 px-2 py-1">formatting</span>
                <span className="rounded-full border border-black/10 bg-white/50 px-2 py-1">safety filters</span>
                <span className="rounded-full border border-black/10 bg-white/50 px-2 py-1">grounded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    const leftNode = left === "text" ? TextBlock : MockBlock;
    const rightNode = left === "text" ? MockBlock : TextBlock;

    return (
      <div className={`${className} p-6 md:p-10`}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          {leftNode}
          {rightNode}
        </div>
      </div>
    );
  };

  return (
    <main className="relative z-10 min-h-screen text-[#0b0f14]">
      {/* Top Nav */}
      <header className="sticky top-0 z-20 border-b border-black/10 bg-[#0b0f14]/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500/80 via-cyan-400/70 to-emerald-400/70" />
            <span className="text-sm font-semibold tracking-wide text-white">DocAgent</span>
          </div>

          <div className="flex items-center gap-3">

          </div>
        </div>
      </header>

      <section className="relative isolate">
        <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-14">
          {/* ===== HERO (unified glass) ===== */}
          <div className={`${glass} p-6 md:p-10`}>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
              {/* Left — Hero copy */}
              <div>
                <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
                  A documentation tool that turns PRDs into help docs — automatically
                </h1>

                <p className={`mt-4 max-w-xl text-pretty text-base leading-relaxed ${textBody}`}>
                  DocAgent helps product teams turn PRDs into customer-facing documentation that stays accurate as the product evolves.
                </p>

                <p className={`mt-3 max-w-xl text-pretty text-base leading-relaxed ${textBody}`}>
                  It takes how a feature was designed internally and converts it into explanations customers can actually use — without leaking internal context.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button className="rounded-xl bg-gradient-to-r from-indigo-500/95 via-cyan-400/90 to-emerald-400/90 px-5 py-3 text-sm font-semibold text-[#061018] shadow-lg hover:opacity-95">
                    Generate document
                  </button>
                  <button className="rounded-xl border border-black/10 bg-white/50 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white/70">
                    See sample output
                  </button>
                </div>
              </div>

              {/* Right — Product mock */}
              <div className="rounded-3xl border border-black/10 bg-white/25 backdrop-blur-2xl shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-500">docs.docagent.ai</div>
                </div>

                <div className="p-5 grid grid-cols-12 gap-4">
                  <aside className="col-span-5 rounded-2xl bg-[#0b0f14]/85 p-4 text-white">
                    <div className="text-xs font-semibold text-white/80">Help Center</div>
                    <ul className="mt-3 space-y-2 text-xs text-white/60">
                      <li className="rounded-lg bg-white/10 px-3 py-2 text-white">Introduction</li>
                      <li className="rounded-lg px-3 py-2 hover:bg-white/10">Using the feature</li>
                      <li className="rounded-lg px-3 py-2 hover:bg-white/10">FAQs</li>
                      <li className="rounded-lg px-3 py-2 hover:bg-white/10">Release notes</li>
                    </ul>
                  </aside>

                  <article className="col-span-7 rounded-2xl bg-[#0b0f14]/85 p-4 text-white">
                    <h3 className="text-sm font-semibold">Introduction</h3>
                    <p className="mt-2 text-sm text-white/70">
                      This help content was generated directly from the product’s PRD and structured for end users.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* ===== STACKED HERO PANES ===== */}
          <div className="mt-10 space-y-6">
            {/* Pane 1: text left */}
            <HeroPane
              className={pane1}
              left="text"
              title="What you give the agent"
              subtitle="Start from whatever you already have — polished or rough. The agent works across different levels of detail."
              bullets={["PRDs", "Technical specs", "Internal product notes", "Rough feature descriptions"]}
            />

            {/* Pane 2: ✅ text left as well (as requested) */}
            <HeroPane
              className={pane2}
              left="text"
              title="What the agent creates"
              subtitle="Structured, customer-ready content — written for end users, not internal teams."
              bullets={[
                "Customer-facing help documents",
                "Task-oriented user guidance",
                "FAQs and edge cases",
                "Release notes",
              ]}
            />

            {/* Pane 3: text left, nearly negligible glass */}
            <HeroPane
              className={pane3}
              left="text"
              title="How it stays grounded"
              subtitle="The agent responds only from your inputs, follows a defined style and format, and filters out internal-only or sensitive details."
              body={[
                "It distinguishes between what customers need to know and what must remain internal.",
                "This keeps the output customer-safe and easier to review from a legal and compliance perspective.",
              ]}
            />
          </div>

          <div className="mt-10 text-center text-xs text-slate-600">Scroll ↓</div>
        </div>
      </section>
    </main>
  );
}
