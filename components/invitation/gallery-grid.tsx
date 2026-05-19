import Image from "next/image"
import {
  BotanicalSprig,
  FloralSeal,
  PaintStroke,
} from "./invitation-decorative-svgs"

const galleryImages = [
  { src: "/1.jpg", alt: "Aynara retrato 1", width: 4160, height: 6240 },
  { src: "/2.jpg", alt: "Aynara retrato 2", width: 3891, height: 5836 },
  { src: "/3.jpg", alt: "Aynara retrato 3", width: 6240, height: 4160 },
  { src: "/4.jpg", alt: "Aynara retrato 4", width: 4160, height: 6240 },
  { src: "/5.jpg", alt: "Aynara retrato 5", width: 4160, height: 6240 },
  { src: "/6.jpg", alt: "Aynara retrato 6", width: 4160, height: 6240 },
  { src: "/7.jpg", alt: "Aynara retrato 7", width: 4160, height: 6240 },
  { src: "/8.jpg", alt: "Aynara retrato 8", width: 4160, height: 6240 },
  { src: "/9.jpg", alt: "Aynara retrato 9", width: 4160, height: 6240 },
  { src: "/10.jpg", alt: "Aynara retrato 10", width: 4160, height: 6240 },
  { src: "/11.jpg", alt: "Aynara retrato 11", width: 6240, height: 4160 },
] as const

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
        <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3">
          {galleryImages.map((image) => (
            <article
              key={image.src}
              data-animate="photo"
              className="mb-3 break-inside-avoid overflow-hidden rounded-[1.5rem] bg-white/42 p-1.5 shadow-[0_20px_42px_-34px_rgba(58,34,118,0.22)] sm:mb-4 sm:rounded-[1.6rem]"
            >
              <div className="overflow-hidden rounded-[1rem] sm:rounded-[1.1rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="h-auto w-full transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
