import { ExternalLink, MapPin } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { mapHref } from "./invitation-data"
import { BotanicalSprig, FloralSeal } from "./invitation-decorative-svgs"

export function LocationCard() {
  return (
    <Card
      data-animate="card"
      className="liquid-glass-panel relative overflow-hidden rounded-[2.1rem] py-0 text-card-foreground shadow-[0_32px_72px_-52px_rgba(58,34,118,0.34)]"
    >
      <BotanicalSprig
        data-animate="decor"
        data-float="soft"
        className="absolute -right-4 -top-2 w-20 rotate-[20deg] text-violet-400/22"
      />
      <FloralSeal
        data-animate="decor"
        data-float="spin"
        className="absolute bottom-4 right-4 w-14 text-violet-300/20"
      />
      <CardHeader className="px-5 pt-5 sm:px-6 sm:pt-6">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="font-heading text-3xl">Dónde es</CardTitle>
            <CardDescription className="text-sm leading-7 sm:text-base">
              Salón Rosedal, Bv. Batlle y Ordóñez 3018.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 px-5 pb-6 sm:px-6 sm:pb-7">
        <div className="px-1 pt-1">
          <p className="text-[0.68rem] uppercase tracking-[0.32em] text-primary/72">
            Dirección
          </p>
          <p className="mt-3 text-[1.02rem] leading-7 font-medium text-foreground">
            Bv. Batlle y Ordóñez 3018
          </p>
          <p className="mt-1 text-sm leading-7 text-muted-foreground">Salón Rosedal</p>
        </div>
        <a
          href={mapHref}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex w-fit items-center gap-2 px-1 py-1 text-sm font-semibold text-foreground transition-transform duration-300 hover:translate-x-1"
        >
          Abrir en Google Maps
          <ExternalLink className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
        </a>
      </CardContent>
    </Card>
  )
}
