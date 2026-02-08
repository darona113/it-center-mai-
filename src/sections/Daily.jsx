import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

// Фича, ради которой можно заходить ежедневно: задача дня + серия.
// Детерминированная (от даты) — без бэкенда.

function getDayKey() {
  const d = new Date()
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

const bank = [
  {
    id: 'fib',
    title: 'Алгоритмы: Фибоначчи',
    prompt:
      'Сколько будет F(10), если F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)?',
    answer: '55',
    hint: 'Попробуй выписать первые значения до 10.'
  },
  {
    id: 'bigO',
    title: 'Сложность: бинарный поиск',
    prompt: 'Какой асимптотике соответствует бинарный поиск?',
    answer: 'O(log n)',
    hint: 'Каждый шаг делит диапазон пополам.'
  },
  {
    id: 'prob',
    title: 'Вероятность: честная монета',
    prompt:
      'Монету подбросили 3 раза. Какова вероятность ровно двух орлов?',
    answer: '3/8',
    hint: 'Сочетания C(3,2) / 2^3.'
  },
  {
    id: 'lin',
    title: 'Линал: ранг',
    prompt:
      'Матрица 2×2 имеет две линейно независимые строки. Какой её ранг?',
    answer: '2',
    hint: 'Ранг — число линейно независимых строк/столбцов.'
  }
]

function pickQuestion(dayKey) {
  // простой хеш строки -> индекс
  let h = 0
  for (let i = 0; i < dayKey.length; i++) h = (h * 31 + dayKey.charCodeAt(i)) >>> 0
  return bank[h % bank.length]
}

export default function Daily() {
  const dayKey = useMemo(() => getDayKey(), [])
  const q = useMemo(() => pickQuestion(dayKey), [dayKey])

  const [value, setValue] = useState('')
  const [status, setStatus] = useState('idle') // idle | ok | bad
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    const raw = localStorage.getItem('daily_streak')
    const parsed = raw ? JSON.parse(raw) : null
    if (parsed && typeof parsed.streak === 'number') setStreak(parsed.streak)
  }, [])

  const submit = () => {
    const norm = value.trim().replace(/\s+/g, '')
    const ans = q.answer.trim().replace(/\s+/g, '')

    if (!norm) return

    if (norm.toLowerCase() === ans.toLowerCase()) {
      setStatus('ok')
      // обновим серию, но только 1 раз в день
      const raw = localStorage.getItem('daily_streak')
      const parsed = raw ? JSON.parse(raw) : { streak: 0, last: null }
      if (parsed.last !== dayKey) {
        const next = { streak: (parsed.streak || 0) + 1, last: dayKey }
        localStorage.setItem('daily_streak', JSON.stringify(next))
        setStreak(next.streak)
      }
    } else {
      setStatus('bad')
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="kicker">Ежедневно</p>
            <h2 className="h2">Задача дня</h2>
            <p className="lead max-w-2xl">
              Мини‑вызов на 30–60 секунд: алгоритмы, математика, логика. Решай, собирай серию и прокачивай мозг.
            </p>
          </div>

          <div className="card px-4 py-3 flex items-center gap-3">
            <div className="text-sm text-white/60">Серия</div>
            <div className="text-lg font-semibold">🔥 {streak}</div>
          </div>
        </div>

        <motion.div
          className="mt-10 card overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="text-sm text-white/60">{dayKey}</div>
                <div className="mt-2 text-2xl font-semibold tracking-tight">{q.title}</div>
              </div>
              <span className="pill">IT‑центр МАИ</span>
            </div>

            <p className="mt-4 text-white/80 leading-relaxed">{q.prompt}</p>

            <div className="mt-6 flex gap-3 flex-wrap items-center">
              <input
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                  setStatus('idle')
                }}
                onKeyDown={(e) => e.key === 'Enter' && submit()}
                className="w-full md:w-[320px] px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-emerald-400/50"
                placeholder="Твой ответ…"
              />
              <button onClick={submit} className="btn btn-primary">
                Проверить
              </button>
              <button
                onClick={() => alert(q.hint)}
                className="btn btn-ghost"
                type="button"
              >
                Подсказка
              </button>
            </div>

            {status === 'ok' && (
              <div className="mt-5 text-emerald-300">
                ✅ Верно! Серия обновлена (если ты ещё не решала сегодня).
              </div>
            )}
            {status === 'bad' && (
              <div className="mt-5 text-red-300">
                ❌ Пока не совпало. Попробуй ещё раз или нажми «Подсказка».
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
