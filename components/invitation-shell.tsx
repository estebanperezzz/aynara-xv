"use client"

import Image from "next/image"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import {
  CalendarDays,
  ExternalLink,
  MapPin,
  MessageCircleHeart,
  Phone,
  Shirt,
  Sparkles,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const eventDetails = [
  {
    icon: CalendarDays,
    label: "Fecha",
    value: "20 de junio",
    note: "21 hs",
  },
  {
    icon: MapPin,
    label: "Lugar",
    value: "Salon Rosedal",
    note: "Bv. Batlle y Ordonez 3018",
  },
  {
    icon: Shirt,
    label: "Vestimenta",
    value: "Formal",
  },
]

const rsvpContacts = [
  {
    name: "Monica",
    phone: "091 359 881",
    href: "https://wa.me/59891359881",
  },
  {
    name: "Rodolfo",
    phone: "091 938 144",
    href: "https://wa.me/59891938144",
  },
]

const galleryImages = [
  {
    src: "/1.jpg",
    alt: "Aynara retrato 1",
    className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    src: "/2.jpg",
    alt: "Aynara retrato 2",
    className: "col-span-1 row-span-1",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/3.jpg",
    alt: "Aynara retrato 3",
    className: "col-span-1 row-span-2",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/4.jpg",
    alt: "Aynara retrato 4",
    className: "col-span-1 row-span-1",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/5.jpg",
    alt: "Aynara retrato 5",
    className: "col-span-2 row-span-1 md:col-span-2",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    src: "/6.jpg",
    alt: "Aynara retrato 6",
    className: "col-span-1 row-span-1",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/7.jpg",
    alt: "Aynara retrato 7",
    className: "col-span-1 row-span-1",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/8.jpg",
    alt: "Aynara retrato 8",
    className: "col-span-1 row-span-1",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/9.jpg",
    alt: "Aynara retrato 9",
    className: "col-span-2 row-span-1 md:col-span-2",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
]

const mapHref =
  "https://www.google.com/maps/search/?api=1&query=Salon+Rosedal,+Bv.+Batlle+y+Ordonez+3018"

export function InvitationShell() {
  const rootRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.to("[data-animate='orb']", {
        y: -18,
        x: 10,
        duration: 4.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.25,
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <main
      ref={rootRef}
      className="relative isolate overflow-hidden bg-background"
    >
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
      </div>

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-28 pt-6 sm:px-8 sm:pt-8 lg:px-16 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-10">
          <div data-animate="hero-frame" className="order-1 relative lg:order-2">
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(143,110,255,0.28),transparent_60%)] blur-2xl" />
            <div className="liquid-glass-strong relative overflow-hidden rounded-[1.9rem] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] sm:aspect-[5/6]">
                <Image
                  src="/1.jpg"
                  alt="Aynara retrato principal"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
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
                  <div className="liquid-glass rounded-[1.35rem] p-5 text-white sm:p-6">
                    <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/75">
                      15 Años
                    </p>
                    <p className="mt-3 font-heading text-4xl leading-none sm:text-5xl">
                      Una noche para recordar
                    </p>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/82">
                      Te espero para compartir una celebracion inolvidable junto a
                      quienes mas quiero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 max-w-2xl lg:order-1">
            <Badge
              data-animate="badge"
              variant="outline"
              className="liquid-glass-panel mb-4 rounded-full px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.32em] text-primary shadow-none"
            >
              Invitacion de quince
            </Badge>

            <p
              data-animate="copy"
              className="mb-4 text-xs uppercase tracking-[0.38em] text-primary/70 sm:text-sm"
            >
              Salon Rosedal · Vestimenta formal
            </p>

            <h1
              data-animate="title"
              className="text-balance font-heading text-5xl leading-none font-semibold text-foreground sm:text-7xl lg:text-[6.15rem]"
            >
              Aynara <span className="text-primary">XV</span>
            </h1>

            <p
              data-animate="copy"
              className="text-balance mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              Te invito a celebrar conmigo una noche muy especial, llena de emociones,
              musica y recuerdos para siempre.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {eventDetails.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    data-animate="card"
                    className="rounded-[1.65rem] bg-white/54 p-5 shadow-[0_20px_44px_-34px_rgba(58,34,118,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/66 hover:shadow-[0_28px_52px_-34px_rgba(58,34,118,0.3)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-[0.68rem] uppercase tracking-[0.3em] text-primary/78">
                      {item.label}
                    </p>
                    <p className="mt-2 text-[0.98rem] font-semibold tracking-[0.01em] text-foreground">
                      {item.value}
                    </p>
                    {item.note ? (
                      <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
                    ) : null}
                  </div>
                )
              })}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
                    className:
                      "min-h-12 px-7 text-foreground hover:bg-foreground/6",
                  })
                )}
              >
                Ver ubicacion
              </a>
            </div>
          </div>
        </div>

        <section className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-[0.92fr_1.08fr]">
          <Card
            id="confirmar"
            data-animate="card"
            className="liquid-glass-panel rounded-[2.1rem] py-0 text-card-foreground shadow-[0_32px_72px_-52px_rgba(58,34,118,0.34)]"
          >
            <CardHeader className="px-5 pt-5 sm:px-6 sm:pt-6">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageCircleHeart className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="font-heading text-3xl">
                    Confirmar asistencia
                  </CardTitle>
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
                  La fiesta comienza a las 21 hs en Salon Rosedal. La vestimenta es
                  formal.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            data-animate="card"
            className="liquid-glass-panel rounded-[2.1rem] py-0 text-card-foreground shadow-[0_32px_72px_-52px_rgba(58,34,118,0.34)]"
          >
            <CardHeader className="px-5 pt-5 sm:px-6 sm:pt-6">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="font-heading text-3xl">Donde es</CardTitle>
                  <CardDescription className="text-sm leading-7 sm:text-base">
                    Salon Rosedal, Bv. Batlle y Ordonez 3018.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-5 px-5 pb-6 sm:px-6 sm:pb-7">
              <div className="px-1 pt-1">
                <p className="text-[0.68rem] uppercase tracking-[0.32em] text-primary/72">
                  Direccion
                </p>
                <p className="mt-3 text-[1.02rem] leading-7 font-medium text-foreground">
                  Bv. Batlle y Ordonez 3018
                </p>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">Salon Rosedal</p>
              </div>
              <a
                href={mapHref}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit items-center gap-2 px-1 py-1 text-sm font-semibold text-foreground transition-transform duration-300 hover:translate-x-1"
              >
                Abrir en Google Maps
                <ExternalLink className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
              </a>
            </CardContent>
          </Card>
        </section>

        <section className="mt-10 sm:mt-14">
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
        </section>

        <div
          data-animate="card"
          className="mt-10 self-center rounded-full bg-white/60 px-5 py-3 text-center text-sm text-muted-foreground shadow-[0_22px_46px_-36px_rgba(58,34,118,0.22)]"
        >
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            Te esperamos para celebrar esta noche especial.
          </span>
        </div>
      </section>

      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-20 px-4 lg:hidden">
        <div className="liquid-glass pointer-events-auto mx-auto flex max-w-md items-center gap-2 rounded-full p-2">
          <a
            href="#confirmar"
            className={cn(
              buttonVariants({
                size: "lg",
                className:
                  "min-h-11 flex-1 text-white shadow-[0_22px_42px_-24px_rgba(43,27,88,0.42)]",
              })
            )}
          >
            Confirmar
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
                  "min-h-11 flex-1 text-foreground hover:bg-foreground/6",
              })
            )}
          >
            Como llegar
          </a>
        </div>
      </div>
    </main>
  )
}
