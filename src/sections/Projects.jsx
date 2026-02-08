import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI‑прогнозирование паводков',
    text:
      'Над системой прогноза наводнений работали 806 кафедра и IT‑центр; в публичных новостях МАИ упоминалась лаборатория Sber AI.',
    tags: ['AI', 'Моделирование', 'Данные'],
    href: 'https://t.me/s/maiuniversity?before=3064'
  },
  {
    title: 'Встречи и кейсы с индустрией',
    text:
      'Гостевые лекции, разборы реальных задач, формат «from classroom to production». Быстрое погружение в продукты и инженерные компромиссы.',
    tags: ['Product', 'Engineering', 'Career'],
    href: 'https://www.instagram.com/itcmai/'
  },
  {
    title: 'Учебные и исследовательские проекты студентов',
    text:
      'Проектные дисциплины и командная работа дают портфолио: от web‑сервисов и ML‑моделей до симуляторов и аналитики.',
    tags: ['Portfolio', 'Team', 'Research'],
    href: 'https://institutes.mai.ru/computing/program/'
  }
]

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="kicker">Проекты</p>
            <h2 className="h2">То, что делает кафедра + IT‑центр</h2>
            <p className="lead max-w-2xl">
              Смысл не только в предметах — а в том, как знания применяются: от данных и моделей до реальных
              инженерных решений.
            </p>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="card card-hover"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-xl font-semibold tracking-tight">{p.title}</div>
                <span className="pill">↗</span>
              </div>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">{p.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
