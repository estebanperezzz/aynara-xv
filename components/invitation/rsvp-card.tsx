import { ExternalLink, MessageCircleHeart, Phone } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import { rsvpContacts } from "./invitation-data"
import { LotusBloom, PaintStroke } from "./invitation-decorative-svgs"

export function RsvpCard() {
  return (
    <Card
      id="confirmar"
      data-animate="card"
      className="liquid-glass-panel relative overflow-hidden rounded-[2.1rem] py-0 text-card-foreground shadow-[0_32px_72px_-52px_rgba(58,34,118,0.34)]"
    >
      <PaintStroke
        data-animate="decor"
        data-float="soft"
        className="absolute right-2 top-3 w-28 rotate-[12deg] text-violet-300/24"
      />
      <LotusBloom
        data-animate="decor"
        data-float="glide"
        className="absolute -left-5 bottom-3 w-20 -rotate-[16deg] text-violet-400/20"
      />
      <CardHeader className="px-5 pt-5 sm:px-6 sm:pt-6">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MessageCircleHeart className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="font-heading text-3xl">Confirmar asistencia</CardTitle>
            <CardDescription className="text-sm leading-7 sm:text-base">
              Escribiles a los padres por WhatsApp para confirmar tu lugar.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 px-5 pb-6 sm:px-6 sm:pb-7">
        {rsvpContacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-4 px-1 py-2 transition-transform duration-300 hover:translate-x-1"
          >
            <div className="flex items-center gap-4">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="font-medium tracking-[0.01em] text-foreground">
                  {contact.name}
                </p>
                <p className="text-sm text-muted-foreground">{contact.phone}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              WhatsApp
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        ))}

        <Separator className="bg-foreground/6" />

        <div className="px-1 pt-1">
          <p className="text-[0.68rem] uppercase tracking-[0.32em] text-primary/72">
            Importante
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
            La fiesta comienza a las 21 hs en Salón Rosedal. La vestimenta es formal.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
