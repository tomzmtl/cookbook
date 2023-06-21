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
    id: "1",
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
    id: "2",
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
  },
  {
    id: "4",
    name: "Champignons",
    color: "Blanc",
    macros: {
      calories: 21,
      fat: 0.3,
      carbs: {
        sugars: 1.7,
        fiber: 1,
        total: 3.3
      },
      protein: 3.1
    }
  },
  {
    id: "5",
    name: "Courgettes",
    macros: {
      calories: 16,
      fat: 0.2,
      carbs: {
        total: 3.4,
        fiber: 1.1,
        sugars: 1.7,
      },
      protein: 1.2
    }
  },
  {
    id: "6",
    name: "Oignons",
    color: "Rouge",
    macros: {
      calories: 40,
      fat: 0.1,
      carbs: {
        total: 9.3,
        fiber: 2.1,
        sugars: 4.2,
      },
      protein: 1.1
    }
  },
  {
    id: "7",
    name: "Thon",
    color: "Pâle",
    brand: "Clover Leaf",
    format: "En morceaux",
    macros: {
      calories: 109,
      fat: 0.3,
      carbs: {
        total: 0,
        fiber: 0,
        sugars: 0,
      },
      protein: 23.6
    }
  },
  {
    id: "8",
    name: "Tomates",
    brand: "Primo",
    format: "Broyées",
    extra: "Sans sel ajouté",
    macros: {
      calories: 38,
      fat: 0.2,
      carbs: {
        total: 8.3,
        fiber: 2.2,
        sugars: 4.5,
      },
      protein: 1.5
    }
  },
  {
    id: "9",
    name: "Pâtes",
    brand: "Primo",
    format: "Rigatoni",
    macros: {
      calories: 365,
      fat: 1.8,
      carbs: {
        total: 75.3,
        fiber: 4.7,
        sugars: 2.4,
      },
      protein: 12.9
    }
  },
  {
    id: "10",
    name: "Gras de bacon",
    macros: {
      calories: 541,
      fat: 41.8,
      carbs: {
        total: 1.4,
        fiber: 0,
        sugars: 0,
      },
      protein: 37
    }
  },
  {
    id: "11",
    name: "Pop-corn",
    brand: "Compliments",
    macros: {
      calories: 380,
      fat: 5,
      carbs: {
        total: 78,
        fiber: 14,
        sugars: 0,
      },
      protein: 12
    }
  },
  {
    id: "12",
    name: "Blanc d'oeuf",
    brand: "Burnbrae",
    format: "En brique",
    macros: {
      calories: 45,
      fat: 5,
      carbs: {
        total: 1,
        fiber: 0,
        sugars: 0,
      },
      protein: 10
    }
  },
  {
    id: "13",
    name: "Cannelle",
    macros: {
      calories: 247,
      fat: 1.2,
      carbs: {
        total: 80.6,
        fiber: 53.1,
        sugars: 2.2,
      },
      protein: 4
    }
  },
  {
    id: "14",
    name: "Pain",
    format: "Tranché",
    brand: "Bon Matin",
    color: "Blanc",
    flavour: "Avec grains entiers",
    extra: "Sans sucre/gras ajouté",
    macros: {
      calories: 221,
      fat: 1.6,
      carbs: {
        total: 45.3,
        fiber: 2.3,
        sugars: 1.7,
      },
      protein: 8.1
    }
  },
  {
    id: "15",
    name: "Extrait de vanille",
    macros: {
      calories: 288,
      fat: 0.1,
      carbs: {
        total: 12.7,
        fiber: 0,
        sugars: 12.7,
      },
      protein: 0.1
    }
  },
  {
    id: "16",
    name: "Lait 2%",
    brand: "Beatrice",
    macros: {
      calories: 50,
      fat: 1.9,
      carbs: {
        total: 4.6,
        fiber: 0,
        sugars: 4.6,
      },
      protein: 3.4
    }
  },
]

export default products
