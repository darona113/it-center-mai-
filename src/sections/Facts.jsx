import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Кафедра 806 — «Вычислительная математика и программирование»',
    text:
      'Кафедра входит в Институт №8 «Компьютерные науки и прикладная математика». Здесь сочетают сильную математику и современную разработку ПО.'
  },
  {
    title: 'Контакты и руководство',
    text:
      'Заведующий кафедрой — Сергей Сергеевич Крылов. На официальной странице есть кабинет и почта кафедры.'
  },
  {
    title: 'Чем отличаются треки ФИиТ и ПМИ',
    text:
      'ФИиТ — про фундаментальную информатику и технологии: алгоритмы, структуры данных, разработку приложений, базы данных и ИИ. ПМИ — про прикладную математику и информатику: моделирование, оптимизацию, ML/AI, вычисления и матаппарат для инженерных задач.'
  },
  {
    title: 'Проектная культура',
    text:
      'Много задач — проектные: командная разработка, портфолио, кейсы от индустрии. Это заметно усиливает резюме уже на 2–3 курсе.'
  }
]

const links = [
  {
    label: 'Официальная страница кафедры 806',
    href: 'https://institutes.mai.ru/computing/806/'
  },
  {
    label: 'Преподаватели кафедры 806',
    href: 'https://institutes.mai.ru/computing/staff-806/'
  },
  {
    label: 'Институт №8 (Компьютерные науки и прикладная математика)',
    href: 'https://institutes.mai.ru/computing/'
  }
]

export default function Facts() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="kicker">Кафедра</p>
            <h2 className="h2">806: факты и навигация</h2>
            <p className="lead max-w-2xl">
              Собрали короткими блоками то, что чаще всего хотят понять абитуриенты и студенты.
            </p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              className="card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-lg font-semibold tracking-tight">{c.title}</div>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              className="btn btn-ghost"
              href={l.href}
              target="_blank"
              rel="noreferrer"
            >
              {l.label} →
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
