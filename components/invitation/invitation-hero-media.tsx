import Image from "next/image"

import {
  BotanicalSprig,
  FloralSeal,
  PaintStroke,
} from "./invitation-decorative-svgs"

export function InvitationHeroMedia() {
  return (
    <div data-animate="hero-frame" className="order-1 relative lg:order-2">
      <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(143,110,255,0.28),transparent_60%)] blur-2xl" />
      <PaintStroke
        data-animate="decor"
        data-float="soft"
        className="absolute -left-8 top-12 z-10 w-28 -rotate-[18deg] text-violet-300/45"
      />
      <BotanicalSprig
        data-animate="decor"
        data-float="glide"
        className="absolute -right-10 bottom-8 z-10 hidden w-24 rotate-[16deg] text-violet-400/30 sm:block"
      />
      <FloralSeal
        data-animate="decor"
        data-float="spin"
        className="absolute -right-6 top-16 z-10 w-16 text-white/30"
      />
      <div className="liquid-glass-strong relative overflow-hidden rounded-[1.9rem] p-3">
        <div className="relative h-[96svh] min-h-[40rem] overflow-hidden rounded-[1.45rem] sm:h-auto sm:min-h-0 sm:aspect-[5/6]">
          <Image
            src="/1.jpg"
            alt="Aynara retrato principal"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-[center_18%] sm:object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(37,18,72,0.02),rgba(37,18,72,0.48))]" />

          <div className="absolute inset-x-0 top-0 flex justify-between gap-2 p-4 sm:p-6">
            <div className="liquid-glass rounded-full px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.28em] text-white">
              20 Junio
            </div>
            <div className="liquid-glass rounded-full px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.28em] text-white">
              21 hs
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
            <div className="liquid-glass rounded-[1.35rem] p-4 text-white sm:p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/75">
                15 Años
              </p>
              <p className="mt-2.5 font-heading text-3xl leading-none sm:mt-3 sm:text-5xl">
                Una noche para recordar
              </p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/82 sm:mt-4 sm:leading-7">
                Te espero para compartir una celebracion inolvidable junto a quienes mas
                quiero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
