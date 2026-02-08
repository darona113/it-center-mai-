import { motion } from 'framer-motion'

const partners = [
  { name: 'Ozon', note: 'эксперты и кейсы', href: 'https://www.ozon.ru' },
  { name: 'МТС', note: 'индустриальные практики', href: 'https://www.mts.ru' },
  { name: 'Сбер', note: 'AI / прикладные проекты', href: 'https://www.sber.ru' },
  { name: 'Avito', note: 'продуктовая разработка', href: 'https://www.avito.ru' },
  { name: 'ivi', note: 'медиа и рекомендации', href: 'https://www.ivi.ru' },
  { name: 'SAP', note: 'enterprise‑решения', href: 'https://www.sap.com' },
  { name: 'hh.ru', note: 'карьера и рынок труда', href: 'https://hh.ru' },
  { name: 'Mail.ru / VK', note: 'платформы и сервисы', href: 'https://vk.company' }
]

export default function Partners() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="kicker">Индустрия рядом</p>
            <h2 className="h2">Партнёры и эксперты</h2>
            <p className="lead max-w-2xl">
              IT‑центр МАИ регулярно делает образовательные активности совместно с индустрией —
              от гостевых лекций до проектных кейсов.
            </p>
          </div>

          <a
            className="btn btn-ghost"
            href="https://www.instagram.com/itcmai/"
            target="_blank"
            rel="noreferrer"
          >
            Источник списка →
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="card card-hover"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold tracking-tight">{p.name}</div>
                  <div className="text-sm text-white/70 mt-1">{p.note}</div>
                </div>
                <span className="pill">↗</span>
              </div>
            </motion.a>
          ))}
        </div>

        <p className="mt-4 text-xs text-white/50">
          Примечание: партнёрства и форматы могут меняться; здесь — ориентир по публичным упоминаниям.
        </p>
      </div>
    </section>
  )
}
