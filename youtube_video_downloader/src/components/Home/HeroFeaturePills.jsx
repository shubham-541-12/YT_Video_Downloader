import { Shield, Smartphone, Zap } from 'lucide-react'

export default function HeroFeaturePills() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md">
        <Zap className="w-4 h-4 text-yellow-500" />
        <span className="text-sm text-foreground">Lightning Fast</span>
      </div>
      <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md">
        <Shield className="w-4 h-4 text-green-500" />
        <span className="text-sm text-foreground">100% Secure</span>
      </div>
      <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md">
        <Smartphone className="w-4 h-4 text-blue-500" />
        <span className="text-sm text-foreground">Mobile Friendly</span>
      </div>
    </div>
  )
}
