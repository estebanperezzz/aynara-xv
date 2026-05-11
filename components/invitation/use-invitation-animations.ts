import { useLayoutEffect } from "react"
import type { RefObject } from "react"
import gsap from "gsap"

export function useInvitationAnimations(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-animate='detail-card']", {
        opacity: 0,
        y: 28,
      })

      const timeline = gsap.timeline({
        defaults: {
          duration: 0.9,
          ease: "power3.out",
        },
      })

      timeline
        .from("[data-animate='badge']", {
          opacity: 0,
          y: -16,
        })
        .from(
          "[data-animate='hero-frame']",
          {
            opacity: 0,
            scale: 0.97,
          },
          "-=0.35"
        )
        .from(
          "[data-animate='title']",
          {
            opacity: 0,
            y: 28,
            letterSpacing: "0.18em",
          },
          "-=0.45"
        )
        .from(
          "[data-animate='copy']",
          {
            opacity: 0,
            y: 22,
            stagger: 0.08,
          },
          "-=0.5"
        )
        .to(
          "[data-animate='detail-card']",
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "opacity,transform",
          },
          "-=0.28"
        )
        .from(
          "[data-animate='action']",
          {
            opacity: 0,
            y: 16,
            stagger: 0.1,
          },
          "-=0.35"
        )
        .from(
          "[data-animate='card']",
          {
            opacity: 0,
            y: 28,
            stagger: 0.08,
          },
          "-=0.35"
        )
        .from(
          "[data-animate='photo']",
          {
            opacity: 0,
            y: 22,
            scale: 0.985,
            stagger: 0.05,
          },
          "-=0.25"
        )
        .from(
          "[data-animate='decor']",
          {
            opacity: 0,
            y: 18,
            scale: 0.92,
            rotate: -5,
            stagger: 0.06,
          },
          "-=1.15"
        )

      gsap.to("[data-animate='orb']", {
        y: -18,
        x: 10,
        duration: 4.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.25,
      })

      gsap.to("[data-float='soft']", {
        y: -14,
        x: 8,
        rotation: 3,
        duration: 5.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.22,
      })

      gsap.to("[data-float='glide']", {
        y: 10,
        x: -6,
        duration: 7.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.28,
      })

      gsap.to("[data-float='spin']", {
        rotation: 8,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      })
    }, rootRef)

    return () => ctx.revert()
  }, [rootRef])
}
