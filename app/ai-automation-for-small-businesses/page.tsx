import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Small Businesses",
  description:
    "AI automation for small businesses that helps answer customer questions, capture leads, automate repetitive tasks and improve customer communication.",
  keywords: [
    "AI automation for small businesses",
    "AI solutions for small businesses",
    "business automation",
    "AI customer assistant",
    "WhatsApp AI automation",
    "small business automation",
  ],
};

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#171717]">
      {/* Hero */}
      <section className="px-6 pb-20 pt-12 md:px-12 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <a
            href="/"
            className="text-sm font-semibold text-[#7C3AED] hover:underline"
          >
            ← Pixel & Presence
          </a>

          <div className="mt-16 max-w-4xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
              AI Automation for Small Businesses
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Put repetitive business tasks on autopilot.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
              Pixel & Presence helps small businesses explore practical AI
              automation for customer communication, lead capture, repetitive
              tasks and everyday workflows.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-full bg-[#171717] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1"
              >
                Discuss Your Workflow →
              </a>

              <a
                href="/"
                className="rounded-full border border-black/15 px-7 py-4 text-sm font-semibold transition hover:bg-white"
              >
                Back to Pixel & Presence
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What AI can help with */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
              Practical AI
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              AI should solve real business problems.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              We focus on useful workflows rather than adding AI simply for
              the sake of having AI.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Customer Questions",
                text: "Help organize and respond to common customer questions using AI-assisted workflows.",
              },
              {
                title: "Lead Capture",
                text: "Collect useful information from potential customers and organize enquiries for follow-up.",
              },
              {
                title: "WhatsApp Workflows",
                text: "Connect customer conversations with practical business processes and follow-up workflows.",
              },
              {
                title: "Content Assistance",
                text: "Use AI to support repetitive content tasks such as drafts, summaries and customer responses.",
              },
              {
                title: "Task Automation",
                text: "Identify repetitive steps in everyday operations that may be suitable for automation.",
              },
              {
                title: "Business Workflows",
                text: "Design connected workflows around the tools your business already uses.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-black/10 bg-[#F7F4EE] p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EDE9FE] text-xl">
                  ✦
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-7 text-black/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer assistant */}
      <section className="bg-[#151515] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C4B5FD]">
              AI Customer Assistant
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Your business can keep responding when you are busy.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              An AI-assisted customer workflow can help handle common
              questions, collect enquiry details and organize conversations for
              human follow-up.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
            <div className="space-y-4">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-xs uppercase tracking-widest text-white/40">
                  Customer
                </p>
                <p className="mt-2 text-white/90">
                  “Hi, what are your prices and when are you available?”
                </p>
              </div>

              <div className="ml-8 rounded-2xl bg-[#7C3AED] p-5">
                <p className="text-xs uppercase tracking-widest text-white/60">
                  AI Assistant
                </p>
                <p className="mt-2 text-white">
                  “Thanks for reaching out. Here’s the information you need.
                  Would you like us to help you with the next step?”
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-xs uppercase tracking-widest text-white/40">
                  Business
                </p>
                <p className="mt-2 text-white/90">
                  Lead details and conversation are organized for follow-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
            How it works
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Start with the workflow, then choose the technology.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Map the problem",
                text: "Identify repetitive tasks, customer questions and bottlenecks in the current workflow.",
              },
              {
                number: "02",
                title: "Design the solution",
                text: "Choose where AI, automation and integrations can provide practical support.",
              },
              {
                number: "03",
                title: "Build and improve",
                text: "Create the workflow, test it and refine it around real business needs.",
              },
            ].map((step) => (
              <div key={step.number} className="border-t border-black/10 pt-6">
                <span className="text-sm font-bold text-[#7C3AED]">
                  {step.number}
                </span>

                <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>

                <p className="mt-3 leading-7 text-black/60">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="bg-[#F0EAFE] px-6 py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
            Explore automation
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Have a repetitive task? Let’s see if AI can help.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
            Tell us what currently takes too much time. We can explore a
            practical workflow around your business.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kami60461@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#171717] px-7 py-4 text-sm font-semibold text-white"
            >
              Email Us →
            </a>

            <a
              href="https://wa.me/923129814214"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-white"
            >
              WhatsApp Us →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}