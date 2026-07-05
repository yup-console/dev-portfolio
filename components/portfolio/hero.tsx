'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

const PHRASES = [
  'full stack developer',
  'ui/ux developer',
  'discord bot builder',
  'fluent in 10+ languages',
]

function CyclingType() {
  const reduceMotion = useReducedMotion()
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [count, setCount] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const phrase = PHRASES[phraseIdx]

  useEffect(() => {
    if (reduceMotion) return
    let delay = deleting ? 22 : 45
    if (!deleting && count === phrase.length) delay = 1800
    if (deleting && count === 0) delay = 300

    const t = setTimeout(() => {
      if (!deleting && count === phrase.length) {
        setDeleting(true)
      } else if (deleting && count === 0) {
        setDeleting(false)
        setPhraseIdx((i) => (i + 1) % PHRASES.length)
      } else {
        setCount((c) => c + (deleting ? -1 : 1))
      }
    }, delay)
    return () => clearTimeout(t)
  }, [count, deleting, phrase, reduceMotion])

  if (reduceMotion) {
    return (
      <p className="font-mono text-base text-muted-foreground md:text-lg">
        <span className="text-primary">{'>'}</span> {PHRASES.join(' · ')}
      </p>
    )
  }

  return (
    <p className="font-mono text-base text-muted-foreground md:text-lg">
      <span className="text-primary">{'>'}</span> {phrase.slice(0, count)}
      <span className="animate-blink text-primary">▍</span>
    </p>
  )
}

const stats = [
  { value: '10+', label: 'languages' },
  { value: '4', label: 'discord bots shipped' },
  { value: '∞', label: 'uptime mindset' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-5xl px-6 pt-40 pb-24 md:pt-52 md:pb-32"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-xs text-primary"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          open to collabs
        </motion.p>
        <motion.h1
          variants={item}
          data-text="Console."
          className="glitch mb-6 text-6xl font-semibold tracking-tight text-balance md:text-8xl"
        >
          Console<span className="text-primary text-glow">.</span>
        </motion.h1>
        <motion.div variants={item} className="mb-8">
          <CyclingType />
        </motion.div>
        <motion.p
          variants={item}
          className="mb-10 max-w-xl leading-relaxed text-pretty text-muted-foreground"
        >
          I build Discord bots and polished web interfaces — clean code, clean
          UI, no compromise. Currently leveling up in advanced cloud
          technologies and picking up new languages just to see how they think.
        </motion.p>
        <motion.div
          variants={item}
          className="mb-16 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground shadow-[0_0_24px_-4px] shadow-primary/50 transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_36px_-4px] hover:shadow-primary/60 active:scale-[0.98]"
          >
            view work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
          >
            get in touch
          </a>
        </motion.div>
        <motion.dl
          variants={item}
          className="flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-mono text-2xl font-semibold text-primary text-glow">
                {stat.value}
              </dd>
              <dd className="font-mono text-xs text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  )
}
