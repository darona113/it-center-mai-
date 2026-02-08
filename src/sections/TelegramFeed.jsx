import { useEffect, useState } from 'react'

export default function TelegramFeed() {
  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState('loading') // loading | ok | error

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch('http://localhost:3001/api/telegram')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if (cancelled) return
        setPosts(Array.isArray(data) ? data : [])
        setStatus('ok')
      } catch (e) {
        if (cancelled) return
        setStatus('error')
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="py-28 bg-gradient-to-b from-deep to-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Новости IT-центра</h2>

        {status === 'loading' && (
          <p className="text-white/60">Загружаем ленту из Telegram…</p>
        )}

        {status === 'error' && (
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-white/70">
              Backend для Telegram-ленты пока не запущен (это нормально на первом запуске).
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://t.me/itcmai"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                Открыть канал @itcmai →
              </a>
              <span className="text-white/50 text-sm">
                Чтобы включить авто-ленту: запусти server на :3001
              </span>
            </div>
          </div>
        )}

        {status === 'ok' && (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition shadow-xl"
              >
                <p className="text-white/80 mb-4 whitespace-pre-wrap">{post.text}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blueglow hover:underline"
                >
                  Читать в Telegram →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
