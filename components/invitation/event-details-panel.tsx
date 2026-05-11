import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { eventDetails, mapHref } from "./invitation-data"
import { PaintStroke } from "./invitation-decorative-svgs"

function EventDetailCard({
  icon: Icon,
  label,
  value,
  note,
  className,
}: (typeof eventDetails)[number]) {
  return (
    <div
      data-animate="detail-card"
      className={cn(
        "rounded-[1.65rem] bg-white/56 p-4 shadow-[0_20px_44px_-34px_rgba(58,34,118,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/68 hover:shadow-[0_28px_52px_-34px_rgba(58,34,118,0.3)] sm:p-5",
        className
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-[0.68rem] uppercase tracking-[0.3em] text-primary/78">
        {label}
      </p>
      <p className="mt-2 text-[0.98rem] font-semibold tracking-[0.01em] text-foreground">
        {value}
      </p>
      {note ? <p className="mt-1 text-sm text-muted-foreground">{note}</p> : null}
    </div>
  )
}

export function EventDetailsPanel() {
  return (
    <div
      data-animate="card"
      className="liquid-glass-panel relative mt-7 overflow-hidden rounded-[2rem] p-4 sm:p-5"
    >
      <PaintStroke
        data-animate="decor"
        data-float="soft"
        className="absolute right-0 top-0 w-32 rotate-[16deg] text-violet-300/22"
      />

      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.32em] text-primary/74">
            Datos de la noche
          </p>
          <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
            20 junio · 21 hs · Salon Rosedal
          </p>
        </div>
        <p className="max-w-sm text-sm leading-7 text-muted-foreground">
          Una invitacion pensada para compartir una noche elegante, calida y llena de
          momentos especiales.
        </p>
      </div>

      <div className="relative mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {eventDetails.map((item) => (
          <EventDetailCard key={item.label} {...item} />
        ))}
      </div>

      <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
        <a
          data-animate="action"
          href="#confirmar"
          className={cn(
            buttonVariants({
              size: "lg",
              className:
                "min-h-12 px-7 text-white shadow-[0_24px_44px_-24px_rgba(43,27,88,0.4)]",
            })
          )}
        >
          Confirmar asistencia
        </a>
        <a
          data-animate="action"
          href={mapHref}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "lg",
              className: "min-h-12 px-7 text-foreground hover:bg-foreground/6",
            })
          )}
        >
          Ver ubicacion
        </a>
      </div>
    </div>
  )
}
