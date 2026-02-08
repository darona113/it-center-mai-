import { motion } from 'framer-motion'

// Небольшая витрина: полный список — на официальной странице кафедры.
// Имена взяты из публичной таблицы «Преподаватели кафедры 806».
const teachers = [
  {
    name: 'Карташов Эдуард Михайлович',
    role: 'профессор',
    degree: 'д. ф.-м. н., профессор',
    href: 'https://mai.ru'
  },
  {
    name: 'Ревизников Дмитрий Леонидович',
    role: 'профессор',
    degree: 'д. ф.-м. н., профессор',
    href: 'https://mai.ru'
  },
  {
    name: 'Тишкин Владимир Федорович',
    role: 'профессор',
    degree: 'д. ф.-м. н., профессор',
    href: 'https://mai.ru'
  },
  {
    name: 'Формалев Владимир Федорович',
    role: 'профессор',
    degree: 'д. ф.-м. н., профессор',
    href: 'https://mai.ru'
  },
  {
    name: 'Демидова Ольга Львовна',
    role: 'доцент',
    degree: 'к. ф.-м. н., доцент',
    href: 'https://mai.ru'
  },
  {
    name: 'Зайцев Валентин Евгеньевич',
    role: 'доцент',
    degree: 'к. ф.-м. н., доцент',
    href: 'https://mai.ru'
  },
  {
    name: 'Сошников Дмитрий Валерьевич',
    role: 'доцент',
    degree: 'к. ф.-м. н., доцент',
    href: 'https://mai.ru'
  },
  {
    name: 'Крылов Сергей Сергеевич',
    role: 'руководство',
    degree: 'заведующий кафедрой',
    href: 'https://institutes.mai.ru/computing/806/'
  }
]

export default function Teachers() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="kicker">Люди</p>
            <h2 className="h2">Преподаватели кафедры 806</h2>
            <p className="lead max-w-2xl">
              На кафедре — более 60 преподавателей (доктора и кандидаты наук). Здесь — небольшая витрина.
            </p>
          </div>

          <a
            className="btn btn-ghost"
            href="https://institutes.mai.ru/computing/staff-806/"
            target="_blank"
            rel="noreferrer"
          >
            Полный список →
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teachers.map((t) => (
            <motion.a
              key={t.name}
              href={t.href}
              target="_blank"
              rel="noreferrer"
              className="card card-hover"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="text-sm text-white/60">{t.role}</div>
              <div className="mt-2 text-lg font-semibold tracking-tight">{t.name}</div>
              <div className="mt-2 text-sm text-white/70">{t.degree}</div>
              <div className="mt-4 flex items-center justify-between">
                <span className="pill">МАИ</span>
                <span className="text-white/70">↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
