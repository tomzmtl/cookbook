export type LegacyProduct = {
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
  origin?: string,
  // Macros unit: g/100g
  macros: {
    calories: number,
    protein: number
  }
}

export type Product = {
  id: string
  name: string
  calories: number, // /100g
  protein: number, // g/100g
  brand?: string
  flavour?: string
  size?: string
  color?: string
  format?: string
  extra?: string
  type?: string
  variety?: string
  origin?: string
}

export type Ingredient = {
  product: Product,
  weight: number
}

export type IntakeReport = {
  date: string,
  intake: Ingredient[]
}
