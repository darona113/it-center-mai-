import { motion } from 'framer-motion'

const directions = [
  {
    short: 'ФИиТ',
    code: '02.03.02',
    title: 'Фундаментальная информатика и информационные технологии',
    bullets: [
      'Алгоритмы и структуры данных',
      'Разработка приложений и систем',
      'Базы данных и облака',
      'Искусственный интеллект и ML‑база'
    ],
    who: 'Для тех, кто хочет «широкий CS»: инженерный стек + теория.',
    href: 'https://priem.mai.ru/base/programs/'
  },
  {
    short: 'ПМИ',
    code: '01.03.02',
    title: 'Прикладная математика и информатика',
    bullets: [
      'Матемоделирование и оптимизация',
      'Машинное обучение и анализ данных',
      'Численные методы и вычисления',
      'Инженерная разработка ПО'
    ],
    who: 'Для тех, кто любит математику и хочет делать AI/модели «по-взрослому».',
    href: 'https://priem.mai.ru/base/programs/'
  }
]

export default function Directions() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="kicker">Образование</p>
            <h2 className="h2">Направления подготовки</h2>
            <p className="lead max-w-2xl">
              Институт №8 ведёт подготовку по направлениям Computer Science и прикладной математики.
              Ниже — два самых популярных трека для будущих разработчиков, аналитиков и исследователей.
            </p>
          </div>

          <a
            className="btn btn-ghost"
            href="https://institutes.mai.ru/computing/program/"
            target="_blank"
            rel="noreferrer"
          >
            Описание программ →
          </a>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-4">
          {directions.map((d) => (
            <motion.a
              key={d.short}
              href={d.href}
              target="_blank"
              rel="noreferrer"
              className="card card-hover"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="pill">{d.short}</span>
                    <span className="text-sm text-white/60">{d.code}</span>
                  </div>
                  <div className="mt-3 text-2xl font-semibold tracking-tight">{d.title}</div>
                  <div className="mt-2 text-sm text-white/70">{d.who}</div>
                </div>
                <span className="pill">↗</span>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-2">
                {d.bullets.map((b) => (
                  <div key={b} className="tag">
                    {b}
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-6 card">
          <div className="text-lg font-semibold tracking-tight">Расшифровка</div>
          <p className="mt-2 text-sm text-white/75 leading-relaxed">
            <b>ФИиТ</b> — «Фундаментальная информатика и информационные технологии» (по сути: computer science с
            сильной инженерной частью). <b>ПМИ</b> — «Прикладная математика и информатика» (упор на матаппарат,
            моделирование, оптимизацию и data/ML).
          </p>
        </div>
      </div>
    </section>
  )
}
