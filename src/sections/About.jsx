import { motion } from 'framer-motion'


export default function About() {
return (
<section className="section">
<div className="container grid md:grid-cols-2 gap-16">
<motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>
<p className="kicker">О центре</p>
<h2 className="h2">Зачем IT-центр МАИ?</h2>
<p className="lead">
IT‑центр МАИ — это витрина и точка входа в ИТ‑жизнь Института №8:
новости, проекты, лекции и активности, которые помогают студентам
быстрее перейти от теории к практике.
</p>
</motion.div>

<motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}>
  <div className="card p-6 md:p-8">
    <div className="text-lg font-semibold tracking-tight">Что внутри</div>
    <div className="mt-4 grid gap-3">
      <div className="tag">Командные проекты и портфолио</div>
      <div className="tag">IT‑кейсы от партнёров</div>
      <div className="tag">События: дни открытых дверей, лекции</div>
      <div className="tag">Новости и лента Telegram</div>
    </div>
  </div>
</motion.div>
</div>
</section>
)
}