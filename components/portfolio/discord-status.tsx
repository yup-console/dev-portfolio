'use client'

import useSWR from 'swr'

const DISCORD_ID = '901487880067776524'

type LanyardData = {
  discord_user: {
    username: string
    global_name: string | null
    avatar: string | null
    id: string
  }
  discord_status: 'online' | 'idle' | 'dnd' | 'offline'
  activities: Array<{
    type: number
    name: string
    state?: string
    details?: string
  }>
  listening_to_spotify: boolean
  spotify: {
    song: string
    artist: string
  } | null
}

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json()) as Promise<{
    success: boolean
    data: LanyardData
  }>

const STATUS_META: Record<
  LanyardData['discord_status'],
  { label: string; dot: string }
> = {
  online: { label: 'online', dot: 'bg-primary' },
  idle: { label: 'idle', dot: 'bg-yellow-500' },
  dnd: { label: 'do not disturb', dot: 'bg-red-500' },
  offline: { label: 'offline', dot: 'bg-muted-foreground' },
}

export function DiscordStatus() {
  const { data, isLoading } = useSWR(
    `https://api.lanyard.rest/v1/users/${DISCORD_ID}`,
    fetcher,
    { refreshInterval: 30_000 },
  )

  const presence = data?.success ? data.data : null
  const status = presence?.discord_status ?? 'offline'
  const meta = STATUS_META[status]

  const activity = presence?.activities.find((a) => a.type === 0)
  let activityLine: string | null = null
  if (presence?.listening_to_spotify && presence.spotify) {
    activityLine = `listening to ${presence.spotify.song} — ${presence.spotify.artist}`
  } else if (activity) {
    activityLine = `playing ${activity.name}${activity.details ? ` · ${activity.details}` : ''}`
  }

  const avatarUrl = presence?.discord_user.avatar
    ? `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${presence.discord_user.avatar}.png?size=64`
    : null

  return (
    <a
      href={`https://discord.com/users/${DISCORD_ID}`}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex max-w-full items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 font-mono text-sm transition-colors duration-300 hover:border-primary/50"
    >
      <span className="relative flex shrink-0">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatarUrl || "/placeholder.svg"}
            alt=""
            className="size-9 rounded-full border border-border"
          />
        ) : (
          <span className="flex size-9 items-center justify-center rounded-full border border-border bg-secondary text-xs text-muted-foreground">
            {'>_'}
          </span>
        )}
        <span
          className={`absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-card ${meta.dot} ${
            status !== 'offline' ? 'animate-pulse' : ''
          }`}
          aria-hidden="true"
        />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-foreground">
          <span className="text-primary">$</span> discord --status{' '}
          <span className="text-muted-foreground group-hover:text-primary">
            9pbz
          </span>
        </span>
        <span className="truncate text-xs text-muted-foreground">
          {isLoading
            ? 'fetching presence...'
            : activityLine ?? `currently ${meta.label}`}
        </span>
      </span>
    </a>
  )
}
