import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import GetStartedButton from './GetStartedButton'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import { useIsMobile } from '../../hooks/mobile'

function Header({ onGetStartedClick }) {
  const isMobile = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
  ]

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false)
    }
  }, [isMobile])

  const handleSmoothScroll = (event, targetId) => {
    if (!targetId.startsWith('#')) {
      return
    }

    const targetElement = document.querySelector(targetId)
    if (!targetElement) {
      return
    }

    event.preventDefault()
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMenuOpen(false)
  }

  const handleGetStarted = () => {
    onGetStartedClick?.()
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-700 bg-slate-900/95 backdrop-blur ${
        isMobile ? 'px-4 py-2' : 'px-6 py-2.5'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <HeaderLogo />
        <div className="ml-auto hidden items-center gap-6 md:flex">
          <HeaderNav />
          <GetStartedButton onClick={handleGetStarted} />
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="ml-auto inline-flex items-center justify-center rounded-lg p-2 text-slate-200 transition hover:bg-white/5 md:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobile && isMenuOpen && (
        <div className="mx-auto mt-2 w-full max-w-7xl rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-xl md:hidden">
          <nav className="flex flex-col gap-2 text-lg text-slate-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleSmoothScroll(event, item.href)}
                className="rounded-lg px-2 py-2 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4">
            <GetStartedButton onClick={handleGetStarted} isMobile />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
