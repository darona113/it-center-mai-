import { useEffect, useMemo, useState } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Directions from './sections/Directions'
import Admission from './sections/Admission'
import TelegramFeed from './sections/TelegramFeed'
import Department from './sections/Department'
import Projects from './sections/Projects'
import Partners from './sections/Partners'
import Teachers from './sections/Teachers'
import Daily from './sections/Daily'
import Facts from './sections/Facts'
import Footer from './sections/Footer'

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )
  const [menuOpen, setMenuOpen] = useState(false)

  const nav = useMemo(
    () => [
      { id: 'about', label: 'О центре' },
      { id: 'directions', label: 'Направления' },
      { id: 'admission', label: 'Поступление' },
      { id: 'daily', label: 'Задача дня' },
      { id: 'projects', label: 'Проекты' },
      { id: 'partners', label: 'Партнёры' },
      { id: 'teachers', label: 'Преподаватели' },
      { id: 'news', label: 'Новости' },
      { id: 'dept', label: 'Кафедра 806' }
    ],
    []
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--in')
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-deep dark:bg-black text-white overflow-x-hidden transition-colors duration-500">
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <a href="#top" className="font-semibold tracking-tight hover:opacity-90">IT-центр МАИ</a>

          <nav className="hidden lg:flex items-center gap-5 text-sm text-white/80">
            {nav.map(item => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-white transition">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>

            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Menu"
            >
              {menuOpen ? '✕' : '≡'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-black/60">
            <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 gap-3 text-sm">
              {nav.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top" className="pt-20">
        <Hero />

        <section id="about" data-reveal className="reveal"><About /></section>
        <section id="directions" data-reveal className="reveal"><Directions /></section>
        <section id="admission" data-reveal className="reveal"><Admission /></section>
        <section id="daily" data-reveal className="reveal"><Daily /></section>
        <section id="projects" data-reveal className="reveal"><Projects /></section>
        <section id="partners" data-reveal className="reveal"><Partners /></section>
        <section id="teachers" data-reveal className="reveal"><Teachers /></section>
        <section id="news" data-reveal className="reveal"><TelegramFeed /></section>
        <section id="dept" data-reveal className="reveal"><Facts /></section>
        <section data-reveal className="reveal"><Department /></section>
      </main>

      <Footer />
    </div>
  )
}
