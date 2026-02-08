import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import * as THREE from 'three'

export default function Hero() {
  const ringRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    // GSAP: вращение текста
    const ringTween = gsap.to(ringRef.current, {
      rotate: 360,
      duration: 30,
      repeat: -1,
      ease: 'linear'
    })

    const canvas = canvasRef.current
    if (!canvas) return () => ringTween.kill()

    // THREE/WebGL: лёгкий wireframe-объект на фоне + параллакс
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    const geometry = new THREE.IcosahedronGeometry(2, 2)
    const material = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      wireframe: true
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const light = new THREE.PointLight(0x0ea5e9, 1)
    light.position.set(5, 5, 5)
    scene.add(light)

    camera.position.z = 5

    let rafId = 0
    let targetX = 0
    let targetY = 0

    const onPointer = (e) => {
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX
      const y = 'touches' in e ? e.touches[0].clientY : e.clientY
      const nx = (x / window.innerWidth) * 2 - 1
      const ny = (y / window.innerHeight) * 2 - 1
      targetX = nx
      targetY = ny
    }
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      mesh.rotation.x += 0.002 + targetY * 0.002
      mesh.rotation.y += 0.003 + targetX * 0.002

      camera.position.x += (targetX * 0.4 - camera.position.x) * 0.05
      camera.position.y += (-targetY * 0.3 - camera.position.y) * 0.05
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onPointer, { passive: true })
    window.addEventListener('touchmove', onPointer, { passive: true })

    return () => {
      ringTween.kill()
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onPointer)
      window.removeEventListener('touchmove', onPointer)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-cyan-900 to-emerald-900">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Фоновые изображения (лёгкий шум + техно) */}
      <div
        className="absolute inset-0 z-[1] opacity-25 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=2400&q=60)'
        }}
      />
      <div
        className="absolute inset-0 z-[2] mix-blend-screen opacity-25 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1759410123230-989bdc6f0c2c?auto=format&fit=crop&w=2400&q=60)'
        }}
      />

      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      <svg
        ref={ringRef}
        className="absolute w-[520px] h-[520px] opacity-30 z-10 pointer-events-none"
        viewBox="0 0 500 500"
      >
        <defs>
          <path
            id="circlePath"
            d="M250,250 m-200,0 a200,200 0 1,1 400,0 a200,200 0 1,1 -400,0"
          />
        </defs>
        <text fill="white" fontSize="28" letterSpacing="6">
          <textPath href="#circlePath">
            МАИ — IT — ФИиТ — ПМИ — МАИ — IT — ФИиТ — ПМИ —
          </textPath>
        </text>
      </svg>

      <div className="relative z-20 text-center max-w-5xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight gradient-text"
        >
          IT-центр МАИ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl md:text-2xl text-blue-100"
        >
          Компьютерные науки и прикладная математика
        </motion.p>

        {/* Mobile swipe chips */}
        <div className="mt-10 hidden md:flex justify-center gap-6 flex-wrap">
          <span className="px-6 py-3 rounded-full border border-white/20 backdrop-blur">
            МАИ
          </span>
          <span className="px-6 py-3 rounded-full border border-white/20 backdrop-blur">
            IT
          </span>
          <span className="px-6 py-3 rounded-full border border-white/20 backdrop-blur">
            ФИиТ
          </span>
          <span className="px-6 py-3 rounded-full border border-white/20 backdrop-blur">
            ПМИ
          </span>
        </div>

        <div className="mt-10 md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory px-2 -mx-2">
          {['МАИ', 'IT', 'ФИиТ', 'ПМИ'].map((t) => (
            <div
              key={t}
              className="snap-center shrink-0 px-6 py-3 rounded-full border border-white/20 backdrop-blur bg-white/5"
            >
              {t}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          <a className="btn btn-primary" href="#news">Смотреть новости</a>
          <a className="btn btn-ghost" href="#admission">Поступление →</a>
        </div>
      </div>
    </section>
  )
}
