import { ImageResponse } from "next/og"

const logoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220">
  <g fill="none" stroke="#B666D2" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 30 180 C 70 175, 110 100, 150 50 C 170 35, 220 30, 270 60 C 300 80, 280 115, 230 115 C 210 115, 190 110, 205 130 C 235 165, 180 200, 140 175 C 110 155, 115 115, 145 85" />
    <path d="M 145 55 C 110 105, 85 145, 70 165" />
    <path d="M 190 65 C 165 115, 145 165, 135 195" />
    <path d="M 75 135 C 150 130, 230 125, 310 125" />
  </g>
</svg>
`

const logoDataUri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(logoSvg)}`

export const alt = "Aynara XV"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #fffafc 0%, #f7efff 45%, #fff4fb 100%)",
        }}
      >
        <img
          src={logoDataUri}
          alt="Aynara XV"
          style={{ width: 720, height: 495 }}
        />
      </div>
    ),
    size
  )
}
