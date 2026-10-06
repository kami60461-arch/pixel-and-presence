import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Content Writing Portfolio | German E-commerce SEO",
  description:
    "German SEO content writing samples for e-commerce: category-page copy, educational blog content, search intent, keyword strategy, internal linking and AI-assisted content workflows.",
  keywords: [
    "German SEO content writer",
    "German SEO copywriting",
    "ecommerce SEO content",
    "SEO content writing portfolio",
    "CBD SEO content",
  ],
  alternates: {
    canonical: "/seo-content-writing",
  },
};

const categorySample = {
  title: "CBD Öl kaufen – Worauf Sie beim Kauf achten sollten",
  intent: "Commercial investigation",
  primary: "CBD Öl kaufen",
  secondary: ["CBD Öl", "CBD Tropfen", "CBD Öl Qualität", "CBD Öl online kaufen"],
};

const blogSample = {
  title: "CBD Öl für Anfänger: Was sollte man vor dem Kauf wissen?",
  intent: "Informational + commercial investigation",
  primary: "CBD Öl für Anfänger",
  secondary: [
    "CBD Öl Anwendung",
    "CBD Öl Dosierung",
    "CBD Öl Konzentration",
    "CBD Tropfen",
    "CBD für Einsteiger",
  ],
};

export default function SeoContentWritingPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#171717]">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f7f4ee]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="/" className="font-semibold tracking-tight">Pixel &amp; Presence</a>
          <a
            href="/#contact"
            className="rounded-full bg-[#171717] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Contact
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#171717] py-20 text-white md:py-28">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              SEO Content Writing Portfolio
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              German SEO • E-commerce Content • Search Intent • AI-Assisted Writing
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-300">
              Two demonstration projects showing how I approach German-language
              SEO content for e-commerce: from keyword and search-intent research
              to structured copy, internal linking, metadata and conversion-focused UX.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {["German SEO", "E-commerce", "Keyword Strategy", "Search Intent", "AI-Assisted Workflow"].map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-neutral-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-600">Sample 01 · Category Page</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{categorySample.title}</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Commercial-investigation content designed to support product discovery,
              organic visibility and purchase consideration.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p><strong>Primary keyword:</strong> {categorySample.primary}</p>
              <p><strong>Secondary:</strong> {categorySample.secondary.join(" · ")}</p>
              <p><strong>Search intent:</strong> {categorySample.intent}</p>
            </div>
            <a href="#sample-01" className="mt-7 inline-flex rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white">
              View sample ↓
            </a>
          </article>

          <article className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Sample 02 · SEO Blog Article</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{blogSample.title}</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Educational content built around beginner search intent, topical relevance,
              useful structure and a natural path toward product discovery.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p><strong>Primary keyword:</strong> {blogSample.primary}</p>
              <p><strong>Secondary:</strong> {blogSample.secondary.join(" · ")}</p>
              <p><strong>Search intent:</strong> {blogSample.intent}</p>
            </div>
            <a href="#sample-02" className="mt-7 inline-flex rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white">
              View sample ↓
            </a>
          </article>
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#eeeaff] py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">My SEO workflow</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "Search intent", "Understand what the user actually wants to find."],
              ["02", "Keyword strategy", "Map primary, secondary and semantic terms."],
              ["03", "Content brief", "Plan headings, entities, FAQs and internal links."],
              ["04", "German copy", "Write natural, useful and conversion-aware content."],
              ["05", "Optimization", "Refine metadata, structure and on-page relevance."],
            ].map(([n, title, text]) => (
              <div key={n} className="rounded-3xl bg-white/80 p-5">
                <span className="text-xs font-bold text-neutral-400">{n}</span>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-500">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-2 text-sm text-neutral-600">
            {["Semrush", "Ahrefs", "Google Search Console", "Google Keyword Planner", "Google Trends", "ChatGPT", "Google Docs"].map((tool) => (
              <span key={tool} className="rounded-full border border-white bg-white px-4 py-2">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="sample-01" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">Sample 01</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">{categorySample.title}</h2>
          <p className="mt-4 text-neutral-600">Speculative portfolio sample / demonstration project.</p>
        </div>

        <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-10">
          <div className="rounded-2xl bg-neutral-50 p-5 text-sm">
            <p><strong>SEO Title:</strong> CBD Öl kaufen – Qualität, Auswahl &amp; wichtige Kaufkriterien</p>
            <p className="mt-2"><strong>Meta Description:</strong> CBD Öl kaufen? Erfahren Sie, worauf es bei Qualität, Konzentration, Inhaltsstoffen und Auswahl ankommt.</p>
            <p className="mt-2"><strong>Suggested URL:</strong> /cbd-oel-kaufen</p>
          </div>

          <h3 className="mt-10 text-2xl font-semibold">CBD Öl kaufen: Was sollte man beachten?</h3>
          <p className="mt-4 leading-8 text-neutral-700">
            Wer CBD Öl kaufen möchte, findet heute eine große Auswahl an Produkten,
            Konzentrationen und Darreichungsformen. Für Einsteiger ist deshalb vor allem
            wichtig, die Unterschiede zwischen den Produkten zu verstehen und auf
            nachvollziehbare Qualitätsmerkmale zu achten.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">1. Inhaltsstoffe und Produktqualität prüfen</h3>
          <p className="mt-4 leading-8 text-neutral-700">
            Ein Blick auf die Produktinformationen hilft dabei, Herkunft, Inhaltsstoffe,
            CBD-Konzentration und verfügbare Laborinformationen besser einzuordnen.
            Transparente Angaben schaffen Vertrauen und erleichtern den Vergleich verschiedener Produkte.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">2. Die passende CBD-Konzentration auswählen</h3>
          <p className="mt-4 leading-8 text-neutral-700">
            CBD Öle werden in unterschiedlichen Konzentrationen angeboten. Welche Variante
            sinnvoll ist, hängt unter anderem vom Produkt, den individuellen Umständen und
            der vorgesehenen Anwendung ab. Statt allein auf einen Prozentwert zu achten,
            sollten Käufer die vollständigen Produktangaben vergleichen.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">3. Herstellerangaben und Transparenz vergleichen</h3>
          <p className="mt-4 leading-8 text-neutral-700">
            Seriöse Produktseiten sollten verständliche Angaben zu Inhaltsstoffen,
            Herkunft, Herstellung und Qualitätskontrollen bereitstellen. Gut strukturierte
            Produktinformationen helfen Kunden dabei, eine informierte Kaufentscheidung zu treffen.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">4. Produktform und Anwendung verstehen</h3>
          <p className="mt-4 leading-8 text-neutral-700">
            Neben CBD Öl gibt es beispielsweise CBD Tropfen und weitere Produktformen.
            Ein klarer Überblick über Anwendung, Konzentration und Produkteigenschaften
            verbessert die Nutzererfahrung und macht die Auswahl einfacher.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">Häufige Fragen</h3>
          <div className="mt-5 space-y-4">
            {[
              ["Worauf sollte ich beim Kauf von CBD Öl achten?", "Achten Sie auf transparente Produktinformationen, nachvollziehbare Inhaltsstoffe, Konzentration und verfügbare Qualitätsnachweise."],
              ["Welche CBD-Konzentration ist die richtige?", "Das hängt vom konkreten Produkt und der vorgesehenen Anwendung ab. Produktangaben sollten immer vollständig geprüft werden."],
              ["Wo kann man CBD Öl kaufen?", "Je nach Markt und rechtlicher Situation sind unterschiedliche Bezugsquellen verfügbar. Käufer sollten Anbieter und Produktinformationen sorgfältig prüfen."],
            ].map(([q, a]) => (
              <div key={q} className="rounded-2xl border border-neutral-100 p-5">
                <h4 className="font-semibold">{q}</h4>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sample-02" className="scroll-mt-24 bg-[#171717] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Sample 02</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">{blogSample.title}</h2>
            <p className="mt-4 text-neutral-400">Speculative portfolio sample / demonstration project.</p>
          </div>

          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-10">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm text-neutral-300">
              <p><strong>SEO Title:</strong> CBD Öl für Anfänger: Anwendung, Konzentration &amp; Kauf-Tipps</p>
              <p className="mt-2"><strong>Meta Description:</strong> CBD Öl für Anfänger: Erfahren Sie, worauf Einsteiger bei Auswahl, Konzentration, Anwendung und Produktqualität achten sollten.</p>
              <p className="mt-2"><strong>Suggested URL:</strong> /blog/cbd-oel-fuer-anfaenger</p>
            </div>

            <h3 className="mt-10 text-2xl font-semibold">CBD Öl für Anfänger: Was sollte man vor dem Kauf wissen?</h3>
            <p className="mt-4 leading-8 text-neutral-300">
              CBD Öl ist für viele Menschen ein neues Produkt. Wer sich zum ersten Mal
              damit beschäftigt, stößt schnell auf unterschiedliche Konzentrationen,
              Produktformen und Anwendungshinweise. Dieser Überblick zeigt, welche
              Punkte Einsteiger vor dem Kauf prüfen können.
            </p>

            <h3 className="mt-10 text-2xl font-semibold">Was ist CBD Öl?</h3>
            <p className="mt-4 leading-8 text-neutral-300">
              CBD Öl bezeichnet Produkte, die Cannabidiol (CBD) enthalten und meist mit
              einem Trägeröl kombiniert werden. Je nach Produkt unterscheiden sich
              Konzentration, Inhaltsstoffe, Herstellung und Darreichungsform.
            </p>

            <h3 className="mt-10 text-2xl font-semibold">Wie findet man ein passendes Produkt?</h3>
            <p className="mt-4 leading-8 text-neutral-300">
              Ein sinnvoller erster Schritt ist der Vergleich der Produktinformationen.
              Dazu gehören CBD-Konzentration, Zutaten, Herkunft, Verzehrempfehlungen und
              verfügbare Qualitätsnachweise. Besonders bei Produkten für Einsteiger ist
              eine verständliche Produktseite hilfreich.
            </p>

            <div className="my-8 overflow-hidden rounded-2xl border border-white/10">
              <div className="grid grid-cols-3 bg-white/10 p-4 text-xs font-semibold uppercase tracking-wider text-neutral-300">
                <span>Aspekt</span><span>Warum wichtig?</span><span>Was prüfen?</span>
              </div>
              {[
                ["Konzentration", "Vergleichbarkeit", "Angabe pro Produkt / Portion"],
                ["Inhaltsstoffe", "Transparenz", "Vollständige Zutatenliste"],
                ["Qualität", "Vertrauen", "Nachweise / Labordaten"],
              ].map((row) => (
                <div key={row[0]} className="grid grid-cols-3 border-t border-white/10 p-4 text-sm text-neutral-300">
                  <span className="font-semibold text-white">{row[0]}</span><span>{row[1]}</span><span>{row[2]}</span>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-2xl font-semibold">Anwendung und Dosierung</h3>
            <p className="mt-4 leading-8 text-neutral-300">
              Anwendungshinweise können sich je nach Produkt unterscheiden. Deshalb sollten
              Einsteiger die Herstellerangaben und die jeweils geltenden rechtlichen
              Vorgaben beachten. Bei Fragen zu gesundheitlichen Themen ist fachkundiger
              Rat sinnvoll.
            </p>

            <h3 className="mt-10 text-2xl font-semibold">FAQ für Einsteiger</h3>
            <div className="mt-5 space-y-4">
              {[
                ["Was sollte ich als Anfänger beim Kauf von CBD Öl beachten?", "Vergleichen Sie Produktinformationen, Konzentration, Inhaltsstoffe, Qualitätshinweise und Anbietertransparenz."],
                ["Welche Konzentration ist für Anfänger geeignet?", "Es gibt keine allgemeingültige Empfehlung für alle Personen. Die konkrete Produktinformation und fachkundige Beratung sind entscheidend."],
                ["Kann ich CBD Öl online kaufen?", "Die Verfügbarkeit und rechtliche Einordnung können je nach Land und Produkt variieren. Prüfen Sie daher die aktuell geltenden Regeln."],
              ].map(([q, a]) => (
                <div key={q} className="rounded-2xl border border-white/10 p-5">
                  <h4 className="font-semibold">{q}</h4>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">{a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-orange-400/20 bg-orange-400/5 p-5 text-sm leading-6 text-neutral-400">
              <strong className="text-neutral-200">Editorial note:</strong> This portfolio
              sample is for SEO/content-writing demonstration only. It is not medical advice.
              Product, health and legal claims should be reviewed against current legislation,
              authoritative sources and the client’s compliance requirements before publication.
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#f7f4ee] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Ready to discuss a project?</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">German SEO content with strategy behind every page.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-neutral-600">
            I combine search intent, keyword research, structured writing and AI-assisted
            workflows to produce content designed for both search visibility and human readers.
          </p>
          <a
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-[#171717] px-7 py-4 text-sm font-semibold text-white"
          >
            Contact Pixel &amp; Presence →
          </a>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-[#f7f4ee] py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Pixel &amp; Presence · SEO Content Writing Portfolio
      </footer>
    </main>
  );
}
