'use client'

import { motion, useScroll, useSpring } from 'motion/react'

const links = [
  { href: '#work', label: 'work' },
  { href: '#about', label: 'about' },
  { href: '#contact', label: 'contact' },
]

export function Nav() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  })

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <motion.div
        className="absolute inset-x-0 top-0 h-px origin-left bg-primary"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          <span className="text-primary">~/</span>console
          <span className="animate-blink text-primary">_</span>
        </a>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="text-primary">./</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
