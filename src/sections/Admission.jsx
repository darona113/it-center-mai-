import { motion } from 'framer-motion'

const rows = [
  {
    track: 'ПМИ',
    code: '01.03.02',
    places: '125 / 50',
    score: '275 / 220'
  },
  {
    track: 'ФИиТ',
    code: '02.03.02',
    places: '100 / 85',
    score: '269 / 200'
  }
]

export default function Admission() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="kicker">Абитуриентам</p>
            <h2 className="h2">Поступление в Институт №8</h2>
            <p className="lead max-w-2xl">
              Быстрый ориентир по направлениям 806 кафедры. Цифры ниже — со страницы программ МАИ и могут
              обновляться от года к году.
            </p>
          </div>

          <a
            className="btn btn-primary"
            href="https://priem.mai.ru/base/programs/"
            target="_blank"
            rel="noreferrer"
          >
            Официальные данные →
          </a>
        </div>

        <motion.div
          className="mt-10 card overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-lg font-semibold tracking-tight">Баллы и места (ориентир)</div>
                <p className="mt-2 text-sm text-white/70">
                  Формат: <b>места</b> (бюджет / контракт) и <b>баллы</b> (ориентир бюджет / контракт).
                </p>
              </div>
              <div className="text-sm text-white/70">
                Типичный набор ЕГЭ для CS‑направлений: профильная математика + информатика/физика + русский.
              </div>
            </div>

            <div className="mt-6 grid lg:grid-cols-2 gap-4">
              {rows.map((r) => (
                <a
                  key={r.track}
                  className="card card-hover"
                  href="https://priem.mai.ru/base/programs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="pill">{r.track}</span>
                        <span className="text-sm text-white/60">{r.code}</span>
                      </div>
                      <div className="mt-3 text-2xl font-semibold tracking-tight">{r.places}</div>
                      <div className="text-sm text-white/70">места (бюджет / контракт)</div>
                    </div>
                    <span className="pill">↗</span>
                  </div>

                  <div className="mt-5">
                    <div className="text-sm text-white/60">ориентир баллов</div>
                    <div className="mt-1 text-lg font-semibold">{r.score}</div>
                    <div className="text-xs text-white/50 mt-1">(бюджет / контракт)</div>
                  </div>
                </a>
              ))}
            </div>

            <p className="mt-4 text-xs text-white/50">
              Важно: конкурсная ситуация меняется ежегодно. Всегда сверяйся с официальным сайтом приёмной
              комиссии.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
