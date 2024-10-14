export type MeatType = "Turkey" | "Chicken" | "Beef" | "Pork"

export type RecipeIngredient = {
  name: string
  quantity?: [amount: number | string, unit?: string]

  /**
   * Additional states in which the ingredient must be.
   */
  prep?: string[]
}

export type Recipe = {
  title: string
  ingredients: RecipeIngredient[]
  instructions: string[]

  /**
   * Suggestions to serve recipe with.
   */
  serveWith?: string[]

  /**
   * If oven recipe, indicate pre-heat temperature.
   */
  oven?: {
    /**
     * Farenheit temperature.
     */
    preHeatTempF: number
  }

  /**
   * Temprature directions for slow cooker.
   */
  slowCooker?: {
    low: number
    high: number
  }

  /**
   * Additional information about the meat used (cook temperature).
   */
  meatGuide?: MeatType
}
