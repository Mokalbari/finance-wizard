export type ColorPalette =
  | "bg-beige-500"
  | "bg-beige-100"
  | "bg-grey-900"
  | "bg-grey-500"
  | "bg-grey-300"
  | "bg-grey-100"
  | "bg-green"
  | "bg-yellow"
  | "bg-cyan"
  | "bg-navy"
  | "bg-red"
  | "bg-purple"
  | "bg-lavender"
  | "bg-turquoise"
  | "bg-brown"
  | "bg-magenta"
  | "bg-blue"
  | "bg-navy-grey"
  | "bg-army-green"
  | "bg-gold"
  | "bg-orange"
  | "bg-white"

export const colorPaletteArray = [
  "bg-beige-500",
  "bg-beige-100",
  "bg-grey-900",
  "bg-grey-500",
  "bg-grey-300",
  "bg-grey-100",
  "bg-green",
  "bg-yellow",
  "bg-cyan",
  "bg-navy",
  "bg-red",
  "bg-purple",
  "bg-lavender",
  "bg-turquoise",
  "bg-brown",
  "bg-magenta",
  "bg-blue",
  "bg-navy-grey",
  "bg-army-green",
  "bg-gold",
  "bg-orange",
  "bg-white",
]

export type SVGProps = {
  sizes: string
  className?: string
  fill: string
}

export type SVGPropsWH = {
  width: string
  height: string
  className?: string
  fill: string
}
