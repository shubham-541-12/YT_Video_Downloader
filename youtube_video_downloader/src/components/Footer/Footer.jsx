import { Heart, Mail, Play, ShieldCheck } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Downloader', href: '#downloader' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-12 border-t border-white/10 bg-slate-950/80 px-4 py-10 backdrop-blur">
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <a href="#home" className="inline-flex items-center gap-2 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f04d23] shadow-md shadow-[#f04d23]/35">
              <Play className="h-5 w-5 fill-white text-white" />
            </span>
            <span className="text-2xl font-bold tracking-tight">
              Grab<span className="gradient-text">Vid</span>
            </span>
          </a>
          <p className="mt-4 max-w-md text-sm text-slate-400">
            Fast and simple YouTube video and playlist downloading, built for desktop and mobile.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-slate-400 transition hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Trust & Support</h3>
          <div className="mt-4 space-y-3 text-slate-400">
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Privacy focused and secure downloads
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-sky-400" />
              saklanishubham91@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col gap-2 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} GrabVid. All rights reserved.</p>
        <p className="inline-flex items-center gap-1">
          Made with <Heart className="h-4 w-4 text-red-400" /> for creators
        </p>
      </div>
    </footer>
  )
}

export default Footer
