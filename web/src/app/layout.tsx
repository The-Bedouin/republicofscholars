import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Republic of Scholars Initiative",
    template: "%s | Republic of Scholars",
  },
  description:
    "Shaping legal trailblazers in Nigeria by fostering academic excellence and career development for law students.",
  metadataBase: new URL("https://republic-of-scholars.example"),
  openGraph: {
    title: "Republic of Scholars Initiative",
    description:
      "Shaping legal trailblazers in Nigeria by fostering academic excellence and career development for law students.",
    type: "website",
    locale: "en_NG",
    siteName: "Republic of Scholars",
    images: ["/og.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Republic of Scholars Initiative",
    description:
      "Shaping legal trailblazers in Nigeria by fostering academic excellence and career development for law students.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md">Skip to content</a>
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <nav className="container flex h-14 items-center justify-between">
            <Link href="/" className="flex items-center gap-3 font-bold text-black !text-black text-lg">
              <Image 
                src="/republic_of_scholars_logo.png" 
                alt="Republic of Scholars Logo" 
                width={48} 
                height={48} 
                className="object-contain"
              />
              Republic of Scholars
            </Link>
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
              <li><Link className="text-black !text-black hover:text-[--color-brand] transition-colors duration-200 py-2 px-1" href="/about">About</Link></li>
              <li><Link className="text-black !text-black hover:text-[--color-brand] transition-colors duration-200 py-2 px-1" href="/programs">Programs</Link></li>
              <li><Link className="text-black !text-black hover:text-[--color-brand] transition-colors duration-200 py-2 px-1" href="/ambassadors">Ambassadors</Link></li>
              <li><Link className="text-black !text-black hover:text-[--color-brand] transition-colors duration-200 py-2 px-1" href="/resources">Resources</Link></li>
              <li><Link className="text-black !text-black hover:text-[--color-brand] transition-colors duration-200 py-2 px-1" href="/contact">Contact</Link></li>
              <li><Link className="ml-4 inline-flex items-center justify-center rounded-full px-6 py-2.5 bg-[--color-gold] text-white font-semibold hover:bg-[color-mix(in_oklab,_var(--color-gold),_black_12%)] focus:outline-none focus:ring-2 focus:ring-[--color-gold] transition-all duration-200 shadow-sm hover:shadow-md" href="/donate">Donate</Link></li>
            </ul>
          </nav>
        </header>
        <main id="main" className="min-h-[calc(100dvh-8rem)]">
          {children}
        </main>
        <footer className="relative overflow-hidden border-t border-[--color-brand-200] bg-gradient-to-br from-[--color-brand-500] via-[--color-brand-600] to-[--color-brand-700]">
          <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_0%,_black,_transparent)]">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[60%] rounded-full bg-[--color-gold]/20 blur-3xl"></div>
          </div>
          <div className="container relative py-14">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 text-xl font-semibold text-white">
                  <div className="bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center">
                    <Image 
                      src="/republic_of_scholars_logo.png" 
                      alt="Republic of Scholars Logo" 
                      width={24} 
                      height={24} 
                      className="object-contain"
                    />
                  </div>
                  Republic of Scholars
                </div>
                <p className="mt-4 text-sm text-white/90 leading-relaxed">
                  Shaping legal trailblazers through mentorship, research, and career development for Nigerian law students.
                </p>
                <div className="mt-6 flex items-center gap-3 text-white/80">
                  <a aria-label="Twitter" href="https://x.com" target="_blank" rel="noopener" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4l8.3 9.7L4.7 20H8l5-5.2L17.8 20H20l-8.2-9.6L19.2 4H16L11.5 8.7 8.7 4H4z" fill="currentColor"/></svg>
                  </a>
                  <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noopener" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.8 2.7 4.8 6.2V24h-4v-7.2c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V24h-4V8z"/></svg>
                  </a>
                  <a aria-label="Email" href="mailto:info@republicofscholars.org" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.2l9 5.3 9-5.3V7H3zm18 10V9.1l-8.4 5a2 2 0 0 1-2 0L2.2 9.1V17a0 0 0 0 0 0 0h18z" fill="currentColor"/></svg>
                  </a>
                </div>
            </div>
              <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
                  <div className="text-sm font-semibold text-white">Explore</div>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li><Link href="/about" className="hover:text-[--color-gold] transition-colors">About</Link></li>
                    <li><Link href="/programs" className="hover:text-[--color-gold] transition-colors">Programs</Link></li>
                    <li><Link href="/ambassadors" className="hover:text-[--color-gold] transition-colors">Ambassadors</Link></li>
                    <li><Link href="/resources" className="hover:text-[--color-gold] transition-colors">Resources</Link></li>
              </ul>
            </div>
            <div>
                  <div className="text-sm font-semibold text-white">Get Involved</div>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li><Link href="/donate" className="hover:text-[--color-gold] transition-colors">Donate</Link></li>
                    <li><Link href="/contact" className="hover:text-[--color-gold] transition-colors">Contact</Link></li>
              </ul>
            </div>
              </div>
              <div className="md:col-span-3">
                <div className="text-sm font-semibold text-white">Stay in touch</div>
                <p className="mt-3 text-sm text-white/80">Join our newsletter for updates.</p>
                <form className="mt-4 flex items-center gap-2" action="/api/subscribe" method="post">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input id="newsletter-email" name="email" type="email" required placeholder="you@example.com" className="w-full rounded-md border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-[--color-gold] focus:border-[--color-gold]" />
                  <button type="submit" className="inline-flex items-center rounded-md bg-[--color-gold] px-4 py-2 text-sm font-medium text-[--color-brand] hover:bg-[color-mix(in_oklab,_var(--color-gold),_black_12%)] focus:outline-none focus:ring-2 focus:ring-[--color-gold] transition-colors">
                    Subscribe
                  </button>
                </form>
                <p className="mt-2 text-xs text-white/60">We respect your privacy. Unsubscribe anytime.</p>
              </div>
            </div>
            <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
              <span>© {new Date().getFullYear()} Republic of Scholars</span>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-[--color-gold] transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-[--color-gold] transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
