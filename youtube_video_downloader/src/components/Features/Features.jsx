import { Globe, Headphones, Shield, Smartphone, Video, Zap } from 'lucide-react'

const featureItems = [
  {
    title: 'Lightning Fast',
    description: 'Download videos at maximum speed with our optimized servers.',
    icon: Zap,
    iconClass: 'text-yellow-400',
    iconBgClass: 'bg-yellow-500/15',
    glowClass: 'group-hover:shadow-[0_0_22px_rgba(250,204,21,0.55)]',
  },
  {
    title: '100% Secure',
    description: 'Your privacy is protected. No data collection or tracking.',
    icon: Shield,
    iconClass: 'text-green-400',
    iconBgClass: 'bg-green-500/15',
    glowClass: 'group-hover:shadow-[0_0_22px_rgba(74,222,128,0.5)]',
  },
  {
    title: 'No Registration',
    description: 'Start downloading immediately. No sign-up required.',
    icon: Globe,
    iconClass: 'text-blue-400',
    iconBgClass: 'bg-blue-500/15',
    glowClass: 'group-hover:shadow-[0_0_22px_rgba(96,165,250,0.55)]',
  },
  {
    title: 'Mobile Friendly',
    description: 'Works perfectly on all devices - phone, tablet, or desktop.',
    icon: Smartphone,
    iconClass: 'text-purple-400',
    iconBgClass: 'bg-purple-500/15',
    glowClass: 'group-hover:shadow-[0_0_22px_rgba(192,132,252,0.55)]',
  },
  {
    title: 'Multiple Formats',
    description: 'Download in MP4, MP3, and various quality options.',
    icon: Video,
    iconClass: 'text-red-400',
    iconBgClass: 'bg-red-500/15',
    glowClass: 'group-hover:shadow-[0_0_22px_rgba(248,113,113,0.55)]',
  },
  {
    title: 'Audio Extraction',
    description: 'Extract audio from any video in high-quality MP3 format.',
    icon: Headphones,
    iconClass: 'text-orange-400',
    iconBgClass: 'bg-orange-500/15',
    glowClass: 'group-hover:shadow-[0_0_22px_rgba(251,146,60,0.55)]',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative px-4 py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#ff6a5c] via-[#ff8c42] to-[#ffbf4d] bg-clip-text text-transparent">
              GrabVid
            </span>
            ?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            The most reliable and feature-rich YouTube downloader available online.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featureItems.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-[#111827] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
              >
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-shadow duration-300 ${item.iconBgClass} ${item.glowClass}`}
                >
                  <Icon className={`h-6 w-6 ${item.iconClass}`} />
                </div>
                <h3 className="mb-3 text-sm font-semibold text-white sm:text-xl">{item.title}</h3>
                <p className="max-w-md text-m leading-relaxed text-slate-400">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
