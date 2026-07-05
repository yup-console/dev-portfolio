# ~/console

A terminal-inspired developer portfolio built with Next.js 16, React 19, and Motion. Boots up like a system startup sequence, then unfolds into a clean, animated single-page site.

**Live:** [yup-console.vercel.app](https://yup-console.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)

## Features

- **Boot sequence intro** — a fake terminal boot animation plays on load before revealing the site
- **Animated hero** — typewriter effect cycling through roles/skills
- **Live Discord presence** — real-time status, activity, and Spotify playback via the Lanyard API
- **Selected work** — project cards pulling from GitHub, with stack tags and hover interactions
- **Scroll reveal animations** — sections fade/slide into view as you scroll, powered by Motion
- **Reduced motion support** — animations gracefully degrade for users with `prefers-reduced-motion`
- **Dark, glowing terminal aesthetic** — monospace accents, subtle glow effects, and an ambient background layer
- **Fully responsive** — optimized for mobile, tablet, and desktop

## Tech Stack

| Category | Tech |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI Library | [React 19](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Motion](https://motion.dev/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Data Fetching | [SWR](https://swr.vercel.app/) |
| Discord Presence | [Lanyard API](https://github.com/Phineas/lanyard) |
| Deployment | [Vercel](https://vercel.com/) |

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout & metadata
│   ├── page.tsx            # Page composition
│   └── globals.css         # Global styles & theme tokens
├── components/
│   ├── portfolio/
│   │   ├── boot-screen.tsx     # Terminal boot animation
│   │   ├── atmosphere.tsx      # Ambient background layer
│   │   ├── nav.tsx             # Navigation bar
│   │   ├── hero.tsx             # Hero section with typewriter effect
│   │   ├── projects.tsx        # Selected work grid
│   │   ├── about.tsx            # Skills & currently-doing section
│   │   ├── contact.tsx          # Contact + socials
│   │   ├── discord-status.tsx  # Live Discord presence widget
│   │   └── reveal.tsx           # Scroll-triggered reveal wrapper
│   └── ui/
│       └── button.tsx
├── lib/
│   └── utils.ts
└── public/                  # Icons & static assets
```

## Getting Started

### Prerequisites

- Node.js 18.18+
- [pnpm](https://pnpm.io/) (recommended, lockfile included)

### Installation

```bash
git clone https://github.com/yup-console/dev-portfolio.git
cd dev-portfolio
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

### Build

```bash
pnpm build
pnpm start
```

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build for production |
| `pnpm start` | Run the production build |
| `pnpm lint` | Lint the codebase with ESLint |

## Configuration

To personalize this portfolio for your own use:

- **Discord presence** — update `DISCORD_ID` in `components/portfolio/discord-status.tsx`
- **Projects** — edit the `projects` array in `components/portfolio/projects.tsx`
- **Skills & bio** — edit `skillGroups` and `currently` in `components/portfolio/about.tsx`
- **Hero phrases** — edit the `PHRASES` array in `components/portfolio/hero.tsx`
- **Contact & socials** — update the `socials` array and email in `components/portfolio/contact.tsx`
- **Theme colors** — adjust CSS custom properties in `app/globals.css`

## Deployment

This project is deployed on [Vercel](https://vercel.com/). Any push to the main branch triggers an automatic deployment.

To deploy your own copy:

1. Push this repo to GitHub
2. Import it into [Vercel](https://vercel.com/new)
3. Deploy — no environment variables required

## License

This project is open source and available for personal use and reference. Please don't copy the content verbatim if you fork it for your own portfolio.

## Contact

Built by [yup-console](https://github.com/yup-console) — reach out via [email](mailto:consolepvt@gmail.com) or [Discord](https://discord.com/users/901487880067776524).

