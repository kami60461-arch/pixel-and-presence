import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Business Web Design",
  description:
    "Professional small business web design for companies that want a modern website, more enquiries and a stronger online presence.",
  keywords: [
    "small business web design",
    "small business website design",
    "website design for small businesses",
    "small business web designer",
    "business website design",
  ],
};

export default function SmallBusinessWebDesignPage() {
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
              Small Business Web Design
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              A website that makes your small business look ready for its next
              customer.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
              Pixel & Presence creates modern, mobile-friendly websites for
              small businesses that want to build credibility, showcase their
              services and make it easier for customers to get in touch.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-full bg-[#171717] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1"
              >
                Start a Project →
              </a>

              <a
                href="/#work"
                className="rounded-full border border-black/15 px-7 py-4 text-sm font-semibold transition hover:bg-white"
              >
                See Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why a website */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
              Why your website matters
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Your online presence should work as hard as you do.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-black/65">
            <p>
              A professional website gives potential customers a place to
              understand what you offer, see your work and contact your
              business.
            </p>

            <p>
              Instead of relying only on social media, your website gives your
              business a dedicated online home that you control.
            </p>

            <p>
              We focus on clear messaging, responsive design, strong calls to
              action and a smooth experience across phones, tablets and
              computers.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#151515] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C4B5FD]">
            What we build
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Everything a growing small business needs online.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Business Websites",
                text: "Professional websites designed around your business, services and customers.",
              },
              {
                title: "Landing Pages",
                text: "Focused pages built to communicate one clear offer and encourage enquiries.",
              },
              {
                title: "Mobile-Friendly Design",
                text: "Responsive layouts that work smoothly across phones, tablets and desktops.",
              },
              {
                title: "WhatsApp Integration",
                text: "Make it easy for customers to contact your business directly through WhatsApp.",
              },
              {
                title: "Online Payments",
                text: "Connect suitable payment options so customers can move from interest to action.",
              },
              {
                title: "Business Automation",
                text: "Reduce repetitive work with practical automation and AI-powered workflows.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-white/60">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
            Our approach
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Simple process. Clear communication. Purposeful design.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                text: "We learn about your business, customers, services and goals.",
              },
              {
                number: "02",
                title: "Design",
                text: "We create a modern visual direction with clear content and calls to action.",
              },
              {
                number: "03",
                title: "Build",
                text: "We turn the design into a responsive website ready for your customers.",
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
            Ready to build?
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Let’s create a website your business can grow with.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
            Tell us what your business does, what you need and where you want
            to go. We’ll help turn that into a clear digital experience.
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