import { size } from "lodash-es";
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
  {
    id: "17",
    name: "Tomates cerise",
    macros: {
      calories: 18,
      fat: 0.2,
      carbs: {
        total: 3.9,
        fiber: 1.2,
        sugars: 2.6,
      },
      protein: 0.9
    }
  },
  {
    id: "18",
    name: "Laitue",
    variety: "Coeurs de Romaine",
    brand: "Gifar",
    macros: {
      calories: 16,
      fat: 0.3,
      carbs: {
        total: 3,
        fiber: 1.5,
        sugars: 1.5,
      },
      protein: 1.5
    }
  },
  {
    id: "19",
    name: "Dinde fumée",
    flavour: "Hickory",
    brand: "Maple Leaf, Natural Selections",
    format: "Émincée",
    macros: {
      calories: 87,
      fat: 0.8,
      carbs: {
        total: 3,
        fiber: 1.5,
        sugars: 1.5,
      },
      protein: 20.7
    }
  },
  {
    id: "20",
    name: "Chou",
    color: "Rouge",
    macros: {
      calories: 25,
      fat: 0.1,
      carbs: {
        total: 5.8,
        fiber: 2.5,
        sugars: 3.2,
      },
      protein: 1.3
    }
  },
  {
    id: "21",
    name: "Tortilla",
    brand: "Saveurs du four",
    flavour: "Originales",
    macros: {
      calories: 295,
      fat: 7.4,
      carbs: {
        total: 49.2,
        fiber: 1.6,
        sugars: 4.9,
      },
      protein: 8.2
    }
  },
  {
    id: "22",
    name: "Tortilla",
    brand: "Saveurs du four",
    flavour: "Originales",
    macros: {
      calories: 295,
      fat: 7.4,
      carbs: {
        total: 49.2,
        fiber: 1.6,
        sugars: 4.9,
      },
      protein: 8.2
    }
  },
  {
    id: "23",
    name: "Kombucha",
    brand: "Rise",
    flavour: "Bleuet / Érable",
    macros: {
      calories: 10,
      fat: 0,
      carbs: {
        total: 2.4,
        fiber: 0,
        sugars: 2.1,
      },
      protein: 0
    }
  },
  {
    id: "24",
    name: "Carottes",
    variety: "Mini",
    brand: "Compliments",
    macros: {
      calories: 36,
      fat: 0,
      carbs: {
        total: 8.2,
        fiber: 2.3,
        sugars: 4.7,
      },
      protein: 1.1
    }
  },
  {
    id: "25",
    name: "Concombre",
    variety: "Anglais",
    macros: {
      calories: 15,
      fat: 0.1,
      carbs: {
        total: 3.6,
        fiber: 0.5,
        sugars: 1.7,
      },
      protein: 0.7
    }
  },
  {
    id: "26",
    name: "Saumon Fumé",
    brand: "Vasco",
    macros: {
      calories: 228,
      fat: 15.8,
      carbs: {
        total: 0,
        fiber: 0,
        sugars: 0,
      },
      protein: 12
    }
  },
  {
    id: "27",
    name: "Avocat",
    variety: "Hass",
    macros: {
      calories: 127,
      fat: 15,
      carbs: {
        total: 10,
        fiber: 6.7,
        sugars: 0,
      },
      protein: 0
    }
  },
  {
    id: "28",
    name: "Jus de citron",
    macros: {
      calories: 24,
      fat: 0.8,
      carbs: {
        total: 2.1,
        fiber: 0.4,
        sugars: 2.1,
      },
      protein: 0.8
    }
  },
  {
    id: "29",
    name: "Chips de tortilla",
    brand: "Montréal Nachos",
    flavour: "Multigrain",
    macros: {
      calories: 500,
      fat: 25,
      carbs: {
        total: 64.3,
        fiber: 7.1,
        sugars: 0,
      },
      protein: 7.1
    }
  },
]

export default products
