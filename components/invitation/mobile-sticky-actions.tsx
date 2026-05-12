import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { mapHref } from "./invitation-data"

export function MobileStickyActions() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-20 px-4 lg:hidden">
      <div className="liquid-glass pointer-events-auto mx-auto flex max-w-md items-center rounded-full p-2">
        <a
          href={mapHref}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "lg",
              className: "min-h-11 w-full text-foreground hover:bg-foreground/6",
            })
          )}
        >
          Cómo llegar
        </a>
      </div>
    </div>
  )
}
