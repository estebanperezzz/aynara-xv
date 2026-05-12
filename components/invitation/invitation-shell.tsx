"use client"

import { useRef } from "react"

import { GalleryGrid } from "./gallery-grid"
import { InvitationBackground } from "./invitation-background"
import { InvitationHeroContent } from "./invitation-hero-content"
import { InvitationHeroMedia } from "./invitation-hero-media"
import { LocationCard } from "./location-card"
import { MobileStickyActions } from "./mobile-sticky-actions"
import { useInvitationAnimations } from "./use-invitation-animations"

export function InvitationShell() {
  const rootRef = useRef<HTMLElement>(null)

  useInvitationAnimations(rootRef)

  return (
    <main ref={rootRef} className="relative isolate overflow-hidden bg-background">
      <InvitationBackground />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-28 pt-6 sm:px-8 sm:pt-8 lg:px-16 lg:py-14">
        <div className="grid items-center gap-6 lg:grid-cols-[0.98fr_1.02fr] lg:gap-8">
          <InvitationHeroMedia />
          <InvitationHeroContent />
        </div>

        <section className="mt-8 lg:mt-10">
          <LocationCard />
        </section>

        <GalleryGrid />
      </section>

      <MobileStickyActions />
    </main>
  )
}
