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
  // Macros unit: g/100g
  macros: {
    calories: number,
    fat: number
    carbs: {
      fiber: number
      sugars: number
      total: number
    }
    protein: number
  }
}
