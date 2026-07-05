'use client'

import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

const projects = [
  {
    name: 'jupiter-web',
    description:
      'Landing page for the Jupiter Discord bot — polished, responsive, and built to convert.',
    stack: ['TypeScript', 'Web', 'Discord'],
    href: 'https://github.com/yup-console/jupiter-web',
  },
  {
    name: 'jupiter-music',
    description:
      'A feature-rich Discord music bot with high-quality playback and queue controls.',
    stack: ['Node.js', 'Discord', 'Lavalink'],
    href: 'https://github.com/yup-console/jupiter-music',
  },
  {
    name: 'Fault-V2',
    description:
      'Discord music bot rebuilt in Python — fast, reliable, and easy to self-host.',
    stack: ['Python', 'Discord', 'Music'],
    href: 'https://github.com/yup-console/Fault-V2',
  },
  {
    name: 'waterlink',
    description:
      'A Lavalink wrapper in Python for building Discord music bots with clean, simple APIs.',
    stack: ['Python', 'Lavalink', 'Library'],
    href: 'https://github.com/yup-console/waterlink',
  },
]

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <h2 className="mb-2 font-mono text-sm text-primary">
          <span aria-hidden="true">{'//'}</span> selected work
        </h2>
        <p className="mb-12 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          Things I&apos;ve built
        </p>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="card-glow group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card/80 p-6 backdrop-blur-sm hover:-translate-y-1"
            >
              <span
                aria-hidden="true"
                className="absolute right-4 bottom-2 font-mono text-5xl font-bold text-foreground/5 transition-colors duration-300 group-hover:text-primary/15"
              >
                0{i + 1}
              </span>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-mono text-lg font-medium text-foreground group-hover:text-primary">
                  <span className="text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {'> '}
                  </span>
                  {project.name}
                </h3>
                <ArrowUpRight
                  className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <p className="mb-6 flex-1 leading-relaxed text-pretty text-muted-foreground">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-sm bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
