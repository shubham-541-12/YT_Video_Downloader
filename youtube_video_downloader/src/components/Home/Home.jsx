
import HeroBadge from './HeroBadge'
import HeroHeading from './HeroHeading'
import HeroSubtitle from './HeroSubtitle'
import HeroFeaturePills from './HeroFeaturePills'

export default function Home() {
  return (
    <section id="home" className="relative px-4 pb-16 pt-32 scroll-mt-24">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <HeroBadge />
        <HeroHeading />
        <HeroSubtitle />
        <HeroFeaturePills />
      </div>
    </section>
  )
}
