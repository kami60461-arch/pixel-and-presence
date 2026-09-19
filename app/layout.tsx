import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pixel-and-presence.vercel.app"),

  title: {
    default: "Pixel & Presence | Web Design, AI & Automation",
    template: "%s | Pixel & Presence",
  },

  description:
    "Pixel & Presence creates modern websites, AI solutions, WhatsApp integrations and business automation for small businesses.",

  keywords: [
    "web design for small businesses",
    "small business website design",
    "website designer",
    "business website design",
    "AI automation for small businesses",
    "WhatsApp automation",
    "business automation",
    "landing page design",
    "Next.js web development",
    "AI solutions for businesses",
  ],

  authors: [{ name: "Pixel & Presence" }],
  creator: "Pixel & Presence",
  publisher: "Pixel & Presence",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "Pixel & Presence",
    title: "Pixel & Presence | Web Design, AI & Automation",
    description:
      "Modern websites, AI solutions, WhatsApp integrations and business automation for small businesses.",
    images: [
      {
        url: "/hero-visual.png",
        width: 1200,
        height: 630,
        alt: "Pixel & Presence — Web Design, AI and Automation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pixel & Presence | Web Design, AI & Automation",
    description:
      "Modern websites, AI solutions, WhatsApp integrations and business automation for small businesses.",
    images: ["/hero-visual.png"],
  },

  icons: {
    icon: "/logo.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pixel & Presence",
  url: "https://pixel-and-presence.vercel.app",
  logo: "https://pixel-and-presence.vercel.app/logo.png",
  description:
    "Modern websites, AI solutions, WhatsApp integrations and business automation for small businesses.",
  sameAs: [
    "https://www.instagram.com/pixelandpresence.web/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}