import Image from "next/image";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.5-4.2A8.5 8.5 0 1 1 20.5 11.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c.6 1.1 1.5 2 2.7 2.6l.6-.6c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.3.6-.2 1-1 1.5-1.9 1.4-3.5-.4-6.3-3.2-6.7-6.7-.1-.4.3-.7.6-.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.2 8.3H2.1V21h3.1V8.3ZM3.7 3A1.8 1.8 0 1 0 3.7 6.6 1.8 1.8 0 0 0 3.7 3ZM21.9 13.7c0-3.8-2-5.6-4.8-5.6-2.2 0-3.2 1.2-3.8 2v-1.8h-3.1V21h3.1v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2 1.9 2 3.4V21h3.1l.1-7.3Z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5a4.7 4.7 0 0 1-2 3.1v2.5h3.2c1.9-1.7 3.1-4.2 3.1-7.4Z" />
      <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.4l-3.2-2.5c-.9.6-2 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.9v2.6A10.1 10.1 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.2 13.8a6 6 0 0 1 0-3.6V7.6H2.9a10 10 0 0 0 0 8.8l3.3-2.6Z" />
      <path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9C17 2.9 14.7 2 12 2A10.1 10.1 0 0 0 2.9 7.6l3.3 2.6C7 7.7 9.3 5.9 12 5.9Z" />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 18.5V6.2A2.2 2.2 0 0 1 6.5 4.4L12 8.5l5.5-4.1A2.2 2.2 0 0 1 21 6.2v12.3" stroke="#EA4335" strokeWidth="2" />
      <path d="M3 7l9 6.7L21 7" stroke="#EA4335" strokeWidth="2" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="4" fill="#FF0000" />
      <path d="m10 9 6 3-6 3V9Z" fill="white" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.2 4v10.1a3.4 3.4 0 1 1-2.5-3.3V7.7c1.2.1 2.4.1 3.5-.1A6.5 6.5 0 0 1 12 4h2.2Z"
        fill="currentColor"
      />
      <path d="M15.5 4c.3 1.6 1.3 2.7 3 3.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function StripeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13.7 9.4c0-.8.7-1.1 1.8-1.1 1.5 0 3.4.5 4.9 1.3V5.1A12.7 12.7 0 0 0 15 4c-4.1 0-6.8 2.1-6.8 5.6 0 5.5 7.6 4.6 7.6 7 0 .9-.8 1.2-2 1.2-1.7 0-3.8-.7-5.5-1.7v4.6c1.9.9 3.8 1.3 5.5 1.3 4.2 0 7-2.1 7-5.7-.1-5.9-7.1-4.8-7.1-6.9Z"
        fill="#635BFF"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 3v4M17 3v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 14h3M8 17h3M14 14h3M14 17h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="16" height="13" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3v3M8.5 12h.1M15.4 12h.1M8 16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function FlowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.3 7.2 10.5 16M15.7 7.2 13.5 16M8.5 6h7" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const platforms = [
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    className: "text-white bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
  },
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    className: "text-white bg-[#1877F2]",
  },
  {
    name: "WhatsApp",
    icon: <WhatsAppIcon />,
    className: "text-white bg-[#25D366]",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    className: "text-white bg-[#0A66C2]",
  },
  {
    name: "Google",
    icon: <GoogleIcon />,
    className: "bg-white border border-neutral-200",
  },
  {
    name: "Gmail",
    icon: <GmailIcon />,
    className: "bg-white border border-neutral-200",
  },
  {
    name: "YouTube",
    icon: <YouTubeIcon />,
    className: "bg-white border border-neutral-200",
  },
  {
    name: "TikTok",
    icon: <TikTokIcon />,
    className: "text-white bg-black",
  },
];

const services = [
  {
    number: "01",
    title: "Business Websites",
    text: "Professional websites that communicate your value clearly and make it easy for customers to take action.",
  },
  {
    number: "02",
    title: "Landing Pages",
    text: "Focused pages built around a service, campaign, product, promotion, or specific customer action.",
  },
  {
    number: "03",
    title: "Digital Experiences",
    text: "Modern interfaces combining thoughtful design, responsive development, and practical technology.",
  },
  {
    number: "04",
    title: "WhatsApp Solutions",
    text: "Connect your website with WhatsApp for enquiries, conversations, bookings, and follow-ups.",
  },
  {
    number: "05",
    title: "Online Payments",
    text: "Design convenient payment experiences for deposits, bookings, services, products, and invoices.",
  },
  {
    number: "06",
    title: "Business Automation",
    text: "Connect leads, communication, payments, calendars, and repetitive tasks into smarter workflows.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ee] text-[#171717]">

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f7f4ee]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Pixel & Presence"
              width={180}
              height={180}
              className="h-14 w-auto object-contain md:h-16"
              priority
            />
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <a href="#work" className="transition hover:text-neutral-500">Work</a>
<a
  href="/small-business-web-design"
  className="transition hover:text-neutral-500"
>
  Services
</a>

<a
  href="/ai-automation-for-small-businesses"
  className="transition hover:text-neutral-500"
>
  AI
</a>
            <a href="#automation" className="transition hover:text-neutral-500">Automation</a>
            <a href="#about" className="transition hover:text-neutral-500">About</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-[#171717] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-700"
          >
            Start a Project
          </a>
        </nav>
      </header>

{/* Hero */}
<section className="relative overflow-hidden bg-[#f7f4ee]">
  <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl" />
  <div className="absolute right-1/4 top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

  <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
    
    {/* Hero Copy */}
    <div className="relative z-10 max-w-2xl">
      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-neutral-300 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-400" />
        Digital solutions for modern brands
      </div>

      <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#171717] sm:text-6xl lg:text-7xl">
        Beautiful websites.
        <br />
        Smart automation.
        <br />
        <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">
          Real growth.
        </span>
      </h1>

      <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-600">
        We build modern websites, connect your digital tools, and create
        practical AI-powered solutions that help businesses work smarter.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="rounded-full bg-[#171717] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
        >
          Start a Project →
        </a>

        <a
          href="#work"
          className="rounded-full border border-neutral-300 bg-white/70 px-7 py-4 text-sm font-semibold text-[#171717] transition hover:-translate-y-1 hover:bg-white"
        >
          View Our Work
        </a>
      </div>

      <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-500">
        <span>Web Design</span>
        <span className="h-1 w-1 rounded-full bg-neutral-300" />
        <span>AI</span>
        <span className="h-1 w-1 rounded-full bg-neutral-300" />
        <span>Automation</span>
        <span className="h-1 w-1 rounded-full bg-neutral-300" />
        <span>WhatsApp</span>
      </div>
    </div>

    {/* Hero Visual */}
    <div className="relative z-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/40 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur">
        <img
          src="/hero-visual.png"
          alt="Pixel & Presence digital website and automation solutions"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Floating accent */}
      <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur sm:block">
        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Digital Growth
        </div>
        <div className="mt-1 text-sm font-semibold text-[#171717]">
          Websites · AI · Automation
        </div>
      </div>
    </div>
  </div>
</section>
{/* Platforms */}
<section className="relative overflow-hidden bg-[#f0eafe] py-24">
  <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
  <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="max-w-2xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
        Connected ecosystem
      </p>

      <h2 className="text-4xl font-semibold tracking-tight text-[#171717] sm:text-5xl">
        Your tools.
        <br />
        <span className="text-neutral-500">Working together.</span>
      </h2>

      <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-600">
        We connect the platforms your business already uses into one smoother
        digital experience.
      </p>
    </div>

    <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {platforms.map((platform) => (
        <div
          key={platform.name}
          className="group flex min-h-[130px] flex-col items-center justify-center rounded-3xl border border-white bg-white/80 p-5 text-center shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${platform.className}`}
          >
            {platform.icon}
          </div>

          <span className="mt-4 text-sm font-semibold text-neutral-700">
            {platform.name}
          </span>
        </div>
      ))}
    </div>

    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      <div className="rounded-3xl border border-white bg-white/70 p-6">
        <div className="text-lg font-semibold text-[#171717]">Payments</div>
        <p className="mt-2 text-sm text-neutral-500">
          Connect online payments to your customer journey.
        </p>
      </div>

      <div className="rounded-3xl border border-white bg-white/70 p-6">
        <div className="text-lg font-semibold text-[#171717]">Bookings</div>
        <p className="mt-2 text-sm text-neutral-500">
          Connect calendars and appointment systems.
        </p>
      </div>

      <div className="rounded-3xl border border-white bg-white/70 p-6">
        <div className="text-lg font-semibold text-[#171717]">AI Agents</div>
        <p className="mt-2 text-sm text-neutral-500">
          Automate conversations and repetitive tasks.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Work */}
<section id="work" className="bg-[#171717] py-24 text-white">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
          Selected work
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          A website should feel
          <br />
          <span className="text-neutral-500">as good as the business.</span>
        </h2>
      </div>

      <p className="max-w-md text-sm leading-7 text-neutral-400">
        Studio 16 is a website concept created by Pixel & Presence to
        demonstrate how a local business can turn its identity into a modern
        digital experience.
      </p>
    </div>

    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#222]">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        
        {/* Project information */}
        <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
          <div>
            <div className="mb-8 inline-flex rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-neutral-400">
              Website Concept
            </div>

            <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Studio 16
            </h3>

            <p className="mt-5 max-w-md text-base leading-7 text-neutral-400">
              A bold digital experience for a modern barbershop, combining
              strong visual identity, service information, gallery content,
              and clear booking actions.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="https://studio-16-demo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#171717] transition hover:-translate-y-1 hover:shadow-xl"
            >
              View Live Concept →
            </a>
          </div>
        </div>

        {/* Project gallery */}
        <div className="grid grid-cols-2 gap-2 bg-black p-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/studio16/cut-1.jpg"
              alt="Studio 16 barber haircut"
              className="h-full min-h-[220px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/studio16/cut-2.jpg"
              alt="Studio 16 haircut detail"
              className="h-full min-h-[220px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/studio16/cut-3.jpg"
              alt="Studio 16 barber style"
              className="h-[220px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/studio16/cut-4.jpg"
              alt="Studio 16 grooming"
              className="h-[220px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Services */}
<section id="services" className="relative overflow-hidden bg-[#f7f4ee] py-24">
  <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="max-w-2xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
        What we build
      </p>

      <h2 className="text-4xl font-semibold tracking-tight text-[#171717] sm:text-5xl">
        Digital tools that
        <br />
        <span className="text-neutral-400">move your business forward.</span>
      </h2>

      <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-600">
        From your first website to connected AI and automation, we create
        practical digital experiences around the way your business works.
      </p>
    </div>

    <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div
          key={service.number}
          className="group relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div
            className={`absolute right-0 top-0 h-32 w-32 rounded-full blur-3xl ${
              index % 3 === 0
                ? "bg-purple-300/30"
                : index % 3 === 1
                  ? "bg-blue-300/30"
                  : "bg-orange-300/30"
            }`}
          />

          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-neutral-400">
                {service.number}
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-white transition duration-300 group-hover:rotate-45">
                ↗
              </span>
            </div>

            <div
              className={`mt-14 h-2 w-14 rounded-full ${
                index % 3 === 0
                  ? "bg-purple-500"
                  : index % 3 === 1
                    ? "bg-blue-500"
                    : "bg-orange-500"
              }`}
            />

            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[#171717]">
              {service.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-neutral-500">
              {service.text}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8 rounded-[2rem] bg-[#171717] p-8 text-white sm:p-10">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            One connected system
          </p>

          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Website + AI + WhatsApp + Automation
          </h3>
        </div>

        <a
          href="#contact"
          className="inline-flex shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#171717] transition hover:-translate-y-1 hover:shadow-xl"
        >
          Let's Build →
        </a>
      </div>
    </div>
  </div>
</section>

      {/* AI */}
<section
  id="ai"
  className="relative overflow-hidden bg-[#151515] py-24 text-white"
>
  {/* Background glow */}
  <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
  <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
  <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Left */}
      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
          AI & Business Intelligence
        </p>

        <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Put repetitive work
          <br />
          <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-orange-300 bg-clip-text text-transparent">
            on autopilot.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
          We design practical AI-powered workflows that can help businesses
          capture leads, answer questions, manage enquiries, automate
          follow-ups, and streamline repetitive processes.
        </p>

        <a
          href="#contact"
          className="mt-9 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#171717] transition hover:-translate-y-1 hover:shadow-xl"
        >
          Discuss an AI Idea →
        </a>
      </div>

      {/* Right — AI workflow visual */}
      <div className="relative">

        {/* Decorative glow */}
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur sm:p-7">

          {/* Visual header */}
          <div className="mb-7 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                Example workflow
              </p>
              <p className="mt-2 text-lg font-semibold">
                AI Customer Assistant
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20">
              <span className="text-lg">✦</span>
            </div>
          </div>

          {/* Workflow */}
          <div className="space-y-3">

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-sm font-semibold text-purple-300">
                01
              </div>

              <div className="min-w-0">
                <p className="font-medium">Customer visits website</p>
                <p className="mt-1 text-xs text-neutral-500">Website</p>
              </div>

              <span className="ml-auto text-neutral-600">→</span>
            </div>

            <div className="ml-5 h-5 w-px bg-gradient-to-b from-purple-500/50 to-blue-500/50" />

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-sm font-semibold text-blue-300">
                02
              </div>

              <div className="min-w-0">
                <p className="font-medium">AI understands enquiry</p>
                <p className="mt-1 text-xs text-neutral-500">AI Agent</p>
              </div>

              <span className="ml-auto text-neutral-600">→</span>
            </div>

            <div className="ml-5 h-5 w-px bg-gradient-to-b from-blue-500/50 to-orange-500/50" />

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-sm font-semibold text-orange-300">
                03
              </div>

              <div className="min-w-0">
                <p className="font-medium">Customer receives a response</p>
                <p className="mt-1 text-xs text-neutral-500">WhatsApp / Email</p>
              </div>

              <span className="ml-auto text-neutral-600">→</span>
            </div>

            <div className="ml-5 h-5 w-px bg-gradient-to-b from-orange-500/50 to-purple-500/50" />

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-sm font-semibold text-purple-300">
                04
              </div>

              <div className="min-w-0">
                <p className="font-medium">Lead is captured</p>
                <p className="mt-1 text-xs text-neutral-500">CRM / Database</p>
              </div>

              <span className="ml-auto text-neutral-600">→</span>
            </div>

            <div className="ml-5 h-5 w-px bg-gradient-to-b from-purple-500/50 to-blue-500/50" />

            <div className="flex items-center gap-4 rounded-2xl border border-purple-400/20 bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-semibold">
                05
              </div>

              <div className="min-w-0">
                <p className="font-medium">Follow-up happens automatically</p>
                <p className="mt-1 text-xs text-neutral-500">Automation</p>
              </div>

              <span className="ml-auto text-green-400">✓</span>
            </div>

          </div>

          {/* Bottom status */}
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-xs text-neutral-400">
                Workflow ready
              </span>
            </div>

            <span className="text-xs font-medium text-neutral-500">
              5 automated steps
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* WhatsApp + Payments */}
<section className="relative overflow-hidden bg-[#f7f4ee] py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid gap-6 lg:grid-cols-2">

      {/* WhatsApp */}
      <div className="group relative overflow-hidden rounded-[2rem] bg-[#25D366] p-8 text-white sm:p-10">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-black/10 blur-3xl" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#25D366] shadow-lg">
              <WhatsAppIcon />
            </div>

            <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
              Messaging
            </span>
          </div>

          <div className="mt-16 max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Turn conversations
              <br />
              into opportunities.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-white/80">
              Make it easy for customers to ask questions, request information,
              book services, and start a conversation directly through WhatsApp.
            </p>
          </div>

          <a
            href="https://wa.me/923129814214"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#171717] transition hover:-translate-y-1 hover:shadow-xl"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </div>

      {/* Payments */}
      <div className="group relative overflow-hidden rounded-[2rem] bg-[#171717] p-8 text-white sm:p-10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
              <StripeIcon />
            </div>

            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Payments
            </span>
          </div>

          <div className="mt-16 max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Make getting paid
              <br />
              feel effortless.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-neutral-400">
              Create simple payment experiences for deposits, bookings,
              services, products, invoices, and other customer transactions.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-300">
              Online payments
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-300">
              Deposits
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-300">
              Bookings
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Automation */}
<section
  id="automation"
  className="relative overflow-hidden bg-[#eef4ff] py-24"
>
  <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
  <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">

      {/* Heading */}
      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Business automation
        </p>

        <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#171717] sm:text-5xl">
          Your business
          <br />
          <span className="text-neutral-400">keeps moving.</span>
        </h2>

        <p className="mt-6 max-w-md text-lg leading-8 text-neutral-600">
          Connect the important parts of your customer journey so fewer
          enquiries, leads, and follow-ups fall through the cracks.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex rounded-full bg-[#171717] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
        >
          Automate a Process →
        </a>
      </div>

      {/* Customer journey */}
      <div className="relative">
        <div className="rounded-[2rem] border border-white bg-white/80 p-5 shadow-xl backdrop-blur sm:p-7">

          <div className="mb-7 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Customer journey
              </p>
              <p className="mt-2 text-xl font-semibold text-[#171717]">
                From enquiry to follow-up
              </p>
            </div>

            <div className="hidden rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600 sm:block">
              Connected
            </div>
          </div>

          <div className="space-y-3">

            <div className="flex items-center gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-sm font-bold text-purple-600">
                01
              </div>
              <div>
                <p className="font-semibold text-[#171717]">
                  Customer discovers you
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  Website / Social media
                </p>
              </div>
            </div>

            <div className="ml-5 h-5 w-px bg-blue-200" />

            <div className="flex items-center gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-600">
                02
              </div>
              <div>
                <p className="font-semibold text-[#171717]">
                  Customer sends enquiry
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  WhatsApp / Form
                </p>
              </div>
            </div>

            <div className="ml-5 h-5 w-px bg-blue-200" />

            <div className="flex items-center gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-sm font-bold text-orange-600">
                03
              </div>
              <div>
                <p className="font-semibold text-[#171717]">
                  Information is captured
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  CRM / Database
                </p>
              </div>
            </div>

            <div className="ml-5 h-5 w-px bg-blue-200" />

            <div className="flex items-center gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-sm font-bold text-purple-600">
                04
              </div>
              <div>
                <p className="font-semibold text-[#171717]">
                  Booking or payment happens
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  Calendar / Payments
                </p>
              </div>
            </div>

            <div className="ml-5 h-5 w-px bg-blue-200" />

            <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                05
              </div>
              <div>
                <p className="font-semibold text-[#171717]">
                  Follow-up is automated
                </p>
                <p className="mt-1 text-xs text-blue-600">
                  AI / Automation
                </p>
              </div>
              <span className="ml-auto text-blue-600">✓</span>
            </div>

          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-neutral-500 shadow-sm">
            Website
          </span>
          <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-neutral-500 shadow-sm">
            WhatsApp
          </span>
          <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-neutral-500 shadow-sm">
            AI
          </span>
          <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-neutral-500 shadow-sm">
            CRM
          </span>
          <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-neutral-500 shadow-sm">
            Payments
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
{/* About */}
<section id="about" className="relative overflow-hidden bg-[#f7f4ee] py-24">
  <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
          About Pixel & Presence
        </p>

        <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
          Modern design
          <br />
          meets
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">
            practical technology.
          </span>
        </h2>
      </div>

      <div>
        <p className="text-lg leading-8 text-neutral-600">
          Pixel & Presence creates modern digital experiences for businesses
          that want a stronger online presence. We combine thoughtful design,
          responsive development, AI, messaging, payments, and automation.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-600">
          The goal is simple: build technology that looks professional,
          communicates clearly, and makes it easier for customers to connect
          with your business.
        </p>

        <div className="mt-9 flex flex-wrap gap-2">
          {[
            "Next.js",
            "Node.js",
            "TypeScript",
            "AI",
            "WhatsApp",
            "Automation",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
{/* Contact */}
<section id="contact" className="relative overflow-hidden bg-[#171717] py-24 text-white">
  <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
  <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">

      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
          Start a project
        </p>

        <h2 className="max-w-3xl text-5xl font-semibold leading-[1] tracking-tight sm:text-6xl lg:text-7xl">
          Have a business
          <br />
          that deserves
          <br />
          <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-orange-300 bg-clip-text text-transparent">
            a better presence?
          </span>
        </h2>

        <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-400">
          Tell us what you're building, what you need, or what you'd like to
          improve. Let's turn the idea into a practical digital experience.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur sm:p-8">

        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Get in touch
        </p>

        <div className="mt-7 space-y-3">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kami60461@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:bg-white/10"
          >
            <div>
              <p className="text-xs text-neutral-500">Email</p>
              <p className="mt-1 font-medium">kami60461@gmail.com</p>
            </div>

            <span className="text-xl">↗</span>
          </a>

          <a
            href="https://wa.me/923129814214"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl bg-[#25D366] p-5 text-[#071b0d] transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div>
              <p className="text-xs font-medium opacity-70">WhatsApp</p>
              <p className="mt-1 font-semibold">Start a conversation</p>
            </div>

            <span className="text-xl">↗</span>
          </a>

          <a
            href="https://www.instagram.com/pixelandpresence.web/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:bg-white/10"
          >
            <div>
              <p className="text-xs text-neutral-500">Instagram</p>
              <p className="mt-1 font-medium">@pixelandpresence.web</p>
            </div>

            <span className="text-xl">↗</span>
          </a>

        </div>
      </div>
    </div>
  </div>
</section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/923129814214?text=Hi%20Pixel%20%26%20Presence%2C%20I%27d%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Pixel & Presence on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-2xl transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(37,211,102,.35)]"
      >
        <span className="h-5 w-5">
          <WhatsAppIcon />
        </span>
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>

    </main>
  );
}