import { ArrowUpRight, Mail } from 'lucide-react'
import { DiscordStatus } from './discord-status'
import { Reveal } from './reveal'

const socials = [
  { label: 'github', href: 'https://github.com/yup-console' },
  { label: 'instagram', href: 'https://instagram.com/unkwn.fy' },
  { label: 'discord', href: 'https://discord.com/users/901487880067776524' },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <div className="rounded-lg border border-border bg-card p-8 text-center md:p-16">
          <h2 className="mb-2 font-mono text-sm text-primary">
            <span aria-hidden="true">{'//'}</span> contact
          </h2>
          <p className="mb-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Let&apos;s build something
          </p>
          <p className="mx-auto mb-8 max-w-md leading-relaxed text-pretty text-muted-foreground">
            Open to freelance projects, collaborations, and interesting
            conversations. My inbox is always compiling.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:consolepvt@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Mail className="size-4" aria-hidden="true" />
              consolepvt@gmail.com
            </a>
            <DiscordStatus />
          </div>
          <div className="mt-8 flex items-center justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {social.label}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
      <footer className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-border pt-8 font-mono text-xs text-muted-foreground md:flex-row">
        <p>
          <span className="text-primary">~/</span>console — © 2026
        </p>
        <p>exit code 0</p>
      </footer>
    </section>
  )
}
