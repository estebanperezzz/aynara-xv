import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { mapHref } from "./invitation-data"

export function MobileStickyActions() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-20 px-4 lg:hidden">
      <div className="liquid-glass pointer-events-auto mx-auto grid max-w-md grid-cols-2 gap-2 rounded-[1.75rem] p-2">
        <a
          href="#confirmar"
          className={cn(
            buttonVariants({
              size: "lg",
              className:
                "min-h-13 basis-0 px-3 text-center text-[0.82rem] leading-tight whitespace-normal text-white shadow-[0_22px_42px_-24px_rgba(43,27,88,0.42)] sm:min-h-11 sm:text-sm sm:whitespace-nowrap",
            })
          )}
        >
          Confirmar asistencia
        </a>
        <a
          href={mapHref}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "min-h-13 basis-0 px-3 text-center text-[0.82rem] leading-tight whitespace-normal text-foreground hover:bg-foreground/6 sm:min-h-11 sm:text-sm sm:whitespace-nowrap",
            })
          )}
        >
          Cómo llegar
        </a>
      </div>
    </div>
  )
}
