import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type DecorativeSvgProps = ComponentProps<"svg">

export function PaintStroke({ className, ...props }: DecorativeSvgProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 136"
      className={cn("overflow-visible text-primary/30", className)}
      fill="none"
      {...props}
    >
      <path
        d="M21 91c32-35 82-58 136-62 39-3 88 3 122 22 17 10 26 22 20 32-9 16-45 22-81 21-55-1-91-18-136-15-24 2-48 10-69 17-11 4-19-4-13-15 1-2 1-3 1-5Z"
        fill="currentColor"
      />
      <path
        d="M33 84c26-23 64-40 100-47 54-10 140-1 144 25 3 19-58 17-91 14-47-5-75-10-111-4-18 3-35 8-49 13-10 3-15-3-9-11 5-7 10-13 16-18Z"
        fill="white"
        fillOpacity="0.4"
      />
    </svg>
  )
}

export function BotanicalSprig({ className, ...props }: DecorativeSvgProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 320"
      className={cn("overflow-visible text-primary/28", className)}
      fill="none"
      {...props}
    >
      <path
        d="M105 300c-4-63 8-110 20-149 13-43 34-88 61-126"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M110 248c-31-9-56-26-70-49 30-8 60 5 81 29"
        fill="currentColor"
        fillOpacity="0.45"
      />
      <path
        d="M130 212c29-4 56-18 76-39-25-15-57-10-80 11"
        fill="currentColor"
        fillOpacity="0.38"
      />
      <path
        d="M120 168c-27-7-49-22-63-42 26-8 53 3 72 24"
        fill="currentColor"
        fillOpacity="0.35"
      />
      <path
        d="M142 135c27-5 49-18 65-38-23-12-50-7-68 11"
        fill="currentColor"
        fillOpacity="0.32"
      />
      <path
        d="M141 95c20-4 37-15 50-31-17-10-38-6-53 8"
        fill="currentColor"
        fillOpacity="0.28"
      />
      <circle cx="102" cy="301" r="8" fill="white" fillOpacity="0.45" />
    </svg>
  )
}

export function LotusBloom({ className, ...props }: DecorativeSvgProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 180"
      className={cn("overflow-visible text-primary/34", className)}
      fill="none"
      {...props}
    >
      <path
        d="M110 144c-10-26-8-54 0-84 8 30 10 58 0 84Z"
        fill="currentColor"
        fillOpacity="0.85"
      />
      <path
        d="M72 136c-5-23 1-48 18-70 13 21 16 47 9 70-8 7-19 7-27 0Z"
        fill="currentColor"
        fillOpacity="0.56"
      />
      <path
        d="M148 136c-7-23-4-49 9-70 17 22 23 47 18 70-8 7-19 7-27 0Z"
        fill="currentColor"
        fillOpacity="0.56"
      />
      <path
        d="M34 135c1-21 12-40 31-55 11 20 13 42 5 62-13 5-26 3-36-7Z"
        fill="currentColor"
        fillOpacity="0.34"
      />
      <path
        d="M186 135c-10 10-23 12-36 7-8-20-6-42 5-62 19 15 30 34 31 55Z"
        fill="currentColor"
        fillOpacity="0.34"
      />
      <path
        d="M58 150h104"
        stroke="white"
        strokeOpacity="0.45"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function FloralSeal({ className, ...props }: DecorativeSvgProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 180"
      className={cn("overflow-visible text-primary/26", className)}
      fill="none"
      {...props}
    >
      <circle cx="90" cy="90" r="34" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="90" cy="26" r="14" fill="currentColor" fillOpacity="0.35" />
      <circle cx="154" cy="90" r="14" fill="currentColor" fillOpacity="0.35" />
      <circle cx="90" cy="154" r="14" fill="currentColor" fillOpacity="0.35" />
      <circle cx="26" cy="90" r="14" fill="currentColor" fillOpacity="0.35" />
      <circle cx="45" cy="45" r="12" fill="currentColor" fillOpacity="0.25" />
      <circle cx="135" cy="45" r="12" fill="currentColor" fillOpacity="0.25" />
      <circle cx="135" cy="135" r="12" fill="currentColor" fillOpacity="0.25" />
      <circle cx="45" cy="135" r="12" fill="currentColor" fillOpacity="0.25" />
      <circle cx="90" cy="90" r="11" fill="white" fillOpacity="0.5" />
    </svg>
  )
}
