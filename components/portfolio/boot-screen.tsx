'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

const BOOT_LINES = [
  '[ OK ] mounting /dev/console',
  '[ OK ] loading modules: react, next, motion',
  '[ OK ] compiling personality... done',
  '[ OK ] establishing discord uplink',
  '[ > ] launching portfolio v1.0',
]

export function BootScreen() {
  const reduceMotion = useReducedMotion()
  const [lineCount, setLineCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (reduceMotion) {
      setDone(true)
      return
    }
    if (lineCount < BOOT_LINES.length) {
      const t = setTimeout(() => setLineCount((c) => c + 1), 170)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setDone(true), 420)
    return () => clearTimeout(t)
  }, [lineCount, reduceMotion])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          aria-hidden="true"
        >
          <div className="w-full max-w-md px-6 font-mono text-sm">
            <p className="mb-4 text-primary text-glow">console — boot</p>
            <div className="flex flex-col gap-1.5">
              {BOOT_LINES.slice(0, lineCount).map((line) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className={
                    line.startsWith('>')
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }
                >
                  {line}
                </motion.p>
              ))}
              <span className="animate-blink text-primary">▍</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
