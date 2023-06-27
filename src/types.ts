export type Product = {
  id: string
  name: string
  brand?: string
  flavour?: string
  size?: string
  color?: string
  format?: string
  extra?: string
  type?: string
  variety?: string
  // Macros unit: g/100g
  macros: {
    calories: number,
    protein: number
  }
}
