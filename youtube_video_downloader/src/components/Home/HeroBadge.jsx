export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-white/5 border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md">
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      <span className="text-sm text-muted-foreground">Free & No Registration Required</span>
    </div>
  )
}
