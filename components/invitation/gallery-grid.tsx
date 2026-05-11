import Image from "next/image"

import { cn } from "@/lib/utils"

import { galleryImages } from "./invitation-data"
import {
  BotanicalSprig,
  FloralSeal,
  PaintStroke,
} from "./invitation-decorative-svgs"

export function GalleryGrid() {
  return (
    <section className="mt-8 sm:mt-10">
      <div className="relative">
        <PaintStroke
          data-animate="decor"
          data-float="glide"
          className="absolute -left-4 -top-6 hidden w-32 -rotate-[18deg] text-violet-300/24 md:block"
        />
        <BotanicalSprig
          data-animate="decor"
          data-float="soft"
          className="absolute -right-5 -top-14 hidden w-20 rotate-[14deg] text-violet-400/20 md:block"
        />
        <FloralSeal
          data-animate="decor"
          data-float="spin"
          className="absolute left-1/2 top-full hidden w-16 -translate-x-1/2 -translate-y-6 text-violet-300/24 md:block"
        />
        <div className="grid grid-cols-2 auto-rows-[150px] gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-4">
          {galleryImages.map((image) => (
            <article
              key={image.src}
              data-animate="photo"
              className={cn(
                "overflow-hidden rounded-[1.5rem] bg-white/42 p-1.5 shadow-[0_20px_42px_-34px_rgba(58,34,118,0.22)] sm:rounded-[1.6rem]",
                image.className
              )}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[1rem] sm:rounded-[1.1rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={image.sizes}
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
