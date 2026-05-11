import { Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { EventDetailsPanel } from "./event-details-panel"
import { LotusBloom, PaintStroke } from "./invitation-decorative-svgs"

export function InvitationHeroContent() {
  return (
    <div className="order-2 relative max-w-2xl lg:order-1 lg:max-w-none">
      <LotusBloom
        data-animate="decor"
        data-float="soft"
        className="pointer-events-none absolute left-[-1.75rem] top-[8.75rem] hidden w-24 -rotate-[10deg] text-violet-400/26 lg:block"
      />

      <Badge
        data-animate="badge"
        variant="outline"
        className="liquid-glass-panel mb-4 rounded-full px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.32em] text-primary shadow-none"
      >
        Invitacion de quince
      </Badge>

      <PaintStroke
        data-animate="decor"
        data-float="glide"
        className="absolute left-24 top-1 w-32 -rotate-[7deg] text-violet-300/34"
      />

      <p
        data-animate="copy"
        className="mb-4 text-xs uppercase tracking-[0.38em] text-primary/70 sm:text-sm"
      >
        Salon Rosedal · Vestimenta formal
      </p>

      <h1
        data-animate="title"
        className="text-balance font-heading text-5xl leading-none font-semibold text-foreground sm:text-7xl lg:text-[6.15rem]"
      >
        Aynara <span className="text-primary">XV</span>
      </h1>

      <div
        data-animate="decor"
        data-float="spin"
        className="pointer-events-none absolute right-6 top-[7.6rem] hidden text-violet-400/42 md:block"
      >
        <Sparkles className="h-8 w-8" />
      </div>

      <p
        data-animate="copy"
        className="text-balance mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg"
      >
        Te invito a celebrar conmigo una noche muy especial, llena de emociones,
        musica y recuerdos para siempre.
      </p>

      <EventDetailsPanel />
    </div>
  )
}
