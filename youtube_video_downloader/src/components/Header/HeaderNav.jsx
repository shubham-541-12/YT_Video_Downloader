const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
]

function HeaderNav() {
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
  }

  return (
    <nav className="hidden items-center gap-7 text-xl text-slate-400 md:flex">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(event) => handleSmoothScroll(event, item.href)}
          className="transition hover:text-white"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

export default HeaderNav
