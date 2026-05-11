import {
  BotanicalSprig,
  FloralSeal,
  LotusBloom,
  PaintStroke,
} from "./invitation-decorative-svgs"

export function InvitationBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        data-animate="orb"
        className="absolute left-[4%] top-12 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl"
      />
      <div
        data-animate="orb"
        className="absolute right-[8%] top-28 h-56 w-56 rounded-full bg-indigo-300/18 blur-3xl"
      />
      <div
        data-animate="orb"
        className="absolute bottom-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-purple-300/16 blur-3xl"
      />

      <PaintStroke
        data-animate="decor"
        data-float="soft"
        className="absolute left-[-3.5rem] top-8 hidden w-44 -rotate-12 blur-[0.4px] md:block"
      />
      <BotanicalSprig
        data-animate="decor"
        data-float="glide"
        className="absolute left-[-1.5rem] top-48 hidden w-28 -rotate-[15deg] md:block"
      />
      <FloralSeal
        data-animate="decor"
        data-float="spin"
        className="absolute right-[6%] top-[7rem] hidden w-20 md:block"
      />
      <LotusBloom
        data-animate="decor"
        data-float="soft"
        className="absolute bottom-14 right-[-1.25rem] hidden w-28 rotate-[10deg] lg:block"
      />
    </div>
  )
}
