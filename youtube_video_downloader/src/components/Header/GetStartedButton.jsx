import { Download } from 'lucide-react'

function GetStartedButton({ onClick, isMobile = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium hover:opacity-90 transition-opacity cursor-pointer active:scale-95 ${
        isMobile ? 'gap-1.5 px-3 py-1.5 text-sm' : 'gap-2 px-4 py-2'
      }`}
    >
      <Download className={isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'} />
      Get Started
    </button>
  )
}

export default GetStartedButton
