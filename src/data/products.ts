import { Product } from "../types";

/**

macros: {
  calories: 0,
  fat: 0,
  carbs: {
    sugars: 0,
    fiber: 0,
    total: 0
  },
  protein: 0
}

*/

const products: Product[] = [
  {
    id: "xylitol",
    name: "Xylitol",
    macros: {
      calories: 100,
      fat: 0,
      carbs: {
        sugars: 0,
        fiber: 0,
        total: 25
      },
      protein: 0
    }
  },
  {
    id: "coffee",
    name: "Café",
    macros: {
      calories: 1,
      fat: 0,
      carbs: {
        sugars: 0,
        fiber: 0,
        total: 0
      },
      protein: 0.1
    }
  }
]

export default products
