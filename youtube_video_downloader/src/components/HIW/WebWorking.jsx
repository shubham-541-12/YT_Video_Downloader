import { Download, Link2, Search } from 'lucide-react'

const steps = [
  {
    badge: 'Step 01',
    title: 'Paste URL',
    description: 'Copy the YouTube video or playlist URL and paste it into the input field.',
    icon: Link2,
  },
  {
    badge: 'Step 02',
    title: 'Choose Quality',
    description: 'Select your preferred format (Audio/Video) and quality from available options.',
    icon: Search,
  },
  {
    badge: 'Step 03',
    title: 'Download',
    description: 'Click download and your file will start downloading instantly.',
    icon: Download,
  },
]

export default function WebWorking() {
  return (
    <section id="how-it-works" className="relative px-4 py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            How It{' '}
            <span className="bg-gradient-to-r from-[#ff6a5c] via-[#ff8c42] to-[#ffbf4d] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Download your favorite videos in just 3 simple steps
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-12 hidden h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent md:block" />

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <article
                key={step.badge}
                className="relative rounded-3xl border border-white/10 bg-[#111827] px-8 pb-8 pt-12 text-center shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-5 py-1 text-sm font-semibold text-white">
                  {step.badge}
                </div>

                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/20">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mx-auto max-w-xs text-sm leading-relaxed text-slate-400">{step.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
