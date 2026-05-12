import { CalendarDays, MapPin, Shirt } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type EventDetail = {
  icon: LucideIcon
  label: string
  value: string
  note?: string
  className?: string
}

export type RsvpContact = {
  name: string
  phone: string
  href: string
}

export type GalleryImage = {
  src: string
  alt: string
  className: string
  sizes: string
}

export const eventDetails: EventDetail[] = [
  {
    icon: CalendarDays,
    label: "Fecha",
    value: "20 de junio",
    note: "21 hs",
    className: "",
  },
  {
    icon: MapPin,
    label: "Lugar",
    value: "Salón Rosedal",
    note: "Bv. Batlle y Ordóñez 3018",
    className: "",
  },
  {
    icon: Shirt,
    label: "Vestimenta",
    value: "Formal",
    className: "col-span-2 sm:col-span-1",
  },
]

export const rsvpContacts: RsvpContact[] = [
  {
    name: "Mónica",
    phone: "091 359 881",
    href: "https://wa.me/59891359881",
  },
  {
    name: "Rodolfo",
    phone: "091 938 144",
    href: "https://wa.me/59891938144",
  },
]

export const galleryImages: GalleryImage[] = [
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

export const mapHref =
  "https://www.google.com/maps/search/?api=1&query=Salón+Rosedal,+Bv.+Batlle+y+Ordóñez+3018"
