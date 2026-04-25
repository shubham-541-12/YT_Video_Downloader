import { Play } from 'lucide-react'

function HeaderLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500">
        <Play className="h-6 w-6 fill-white text-white" />
      </div>
      <span className="text-xl font-bold text-foreground">
        Grab<span className="gradient-text">Vid</span>
      </span>
    </div>
  )
}

export default HeaderLogo
