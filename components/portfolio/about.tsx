import { Reveal } from './reveal'

const skillGroups = [
  {
    label: 'languages',
    items: [
      'Python',
      'JavaScript',
      'TypeScript',
      'Java',
      'C++',
      'C#',
      'Rust',
      'Ruby',
      'Swift',
      'Kotlin',
    ],
  },
  {
    label: 'frameworks & runtime',
    items: ['React', 'Next.js', 'Node.js', 'HTML5', 'CSS3'],
  },
  {
    label: 'databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite'],
  },
]

const currently = [
  {
    prompt: 'now',
    detail:
      'Building Discord bots and polishing UI/UX for fun & real projects.',
  },
  {
    prompt: 'learning',
    detail: 'Leveling up in advanced cloud technologies.',
  },
  {
    prompt: 'range',
    detail:
      'Comfortable across 10+ languages — from systems-level (Rust, C++) to app-level (Kotlin, Swift).',
  },
  {
    prompt: 'philosophy',
    detail: 'Clean interfaces matter as much as clean code.',
  },
  {
    prompt: 'fun fact',
    detail: "I'll pick up a new language just to see how it thinks.",
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="mb-2 font-mono text-sm text-primary">
              <span aria-hidden="true">{'//'}</span> about
            </h2>
            <p className="mb-6 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Behind the terminal
            </p>
            <p className="mb-8 leading-relaxed text-pretty text-muted-foreground">
              Full stack developer, UI/UX developer, and Discord bot builder. I
              care about clean interfaces as much as clean code — smooth
              interactions, tight feedback loops, and software that feels
              effortless to use.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mb-6 font-mono text-sm text-muted-foreground">
              $ whoami --verbose
            </h3>
            <ol className="relative flex flex-col gap-6 border-l border-border pl-6">
              {currently.map((entry) => (
                <li key={entry.prompt} className="relative">
                  <span
                    className="absolute top-1.5 -left-[1.85rem] size-2.5 rounded-full border-2 border-primary bg-background"
                    aria-hidden="true"
                  />
                  <p className="mb-1 font-mono text-xs text-primary">
                    {entry.prompt}
                  </p>
                  <p className="leading-relaxed text-pretty text-sm text-muted-foreground">
                    {entry.detail}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
        <div>
          <Reveal delay={0.15}>
            <h3 className="mb-6 font-mono text-sm text-muted-foreground">
              $ cat tech-arsenal.txt
            </h3>
            <div className="flex flex-col gap-6">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-3 font-mono text-xs text-primary">
                    <span aria-hidden="true">{'//'}</span> {group.label}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
