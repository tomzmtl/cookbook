import { Product } from "../types";

const products: Product[] = [
  {
    id: "1",
    name: "Xylitol",
    macros: {
      calories: 100,
      protein: 0
    }
  },
  {
    id: "2",
    name: "Café",
    macros: {
      calories: 1,
      protein: 0.1
    }
  },
  {
    id: "4",
    name: "Champignons",
    color: "Blanc",
    macros: {
      calories: 21,
      protein: 3.1
    }
  },
  {
    id: "5",
    name: "Courgettes",
    macros: {
      calories: 16,
      protein: 1.2
    }
  },
  {
    id: "6",
    name: "Oignons",
    color: "Rouge/Blanc",
    macros: {
      calories: 40,
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
      protein: 12.9
    }
  },
  {
    id: "10",
    name: "Gras de bacon",
    macros: {
      calories: 541,
      protein: 37
    }
  },
  {
    id: "11",
    name: "Pop-corn",
    brand: "Compliments",
    macros: {
      calories: 380,
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
      protein: 10
    }
  },
  {
    id: "13",
    name: "Cannelle",
    macros: {
      calories: 247,
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
      protein: 8.1
    }
  },
  {
    id: "15",
    name: "Extrait de vanille",
    macros: {
      calories: 288,
      protein: 0.1
    }
  },
  {
    id: "16",
    name: "Lait 2%",
    brand: "Beatrice",
    macros: {
      calories: 50,
      protein: 3.4
    }
  },
  {
    id: "17",
    name: "Tomates cerise",
    macros: {
      calories: 18,
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
      protein: 20.7
    }
  },
  {
    id: "20",
    name: "Chou",
    color: "Rouge",
    macros: {
      calories: 25,
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
      protein: 1.1
    }
  },
  {
    id: "25",
    name: "Concombre",
    variety: "Anglais",
    macros: {
      calories: 15,
      protein: 0.7
    }
  },
  {
    id: "26",
    name: "Saumon Fumé",
    brand: "Vasco",
    macros: {
      calories: 228,
      protein: 12
    }
  },
  {
    id: "27",
    name: "Avocat",
    variety: "Hass",
    macros: {
      calories: 127,
      protein: 0
    }
  },
  {
    id: "28",
    name: "Jus de citron",
    macros: {
      calories: 24,
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
      protein: 7.1
    }
  },
  {
    id: "30",
    name: "Pamplemousse",
    color: "Rose",
    macros: {
      calories: 45,
      protein: 0
    }
  },
  {
    id: "31",
    name: "Poire",
    macros: {
      calories: 58,
      protein: 0.4
    }
  },
  {
    id: "32",
    name: "Yogourt Grec 0%",
    brand: "Skotidakis",
    macros: {
      calories: 63,
      protein: 10.3
    }
  },
  {
    id: "33",
    name: "Banane",
    macros: {
      calories: 89,
      protein: 1.1
    }
  },
  {
    id: "34",
    name: "Kiwi",
    macros: {
      calories: 61,
      protein: 1.1
    }
  },
  {
    id: "35",
    name: "Fromage",
    brand: "Compliments",
    variety: "Cheddar fort",
    macros: {
      calories: 400,
      protein: 23.3
    }
  },
  {
    id: "36",
    name: "Poitrine de poulet",
    brand: "Maple Leaf / Natural selections",
    flavour: "Rôtie au four",
    format: "Émincée",
    macros: {
      calories: 100,
      protein: 21.6
    }
  },
  {
    id: "37",
    name: "Goberge d'Alaska",
    brand: "Compliments",
    flavour: "Crabe",
    format: "En bâtonnets",
    macros: {
      calories: 90,
      protein: 7
    }
  },
  {
    id: "38",
    name: "Cantaloup",
    macros: {
      calories: 34,
      protein: 0.8
    }
  },
  {
    id: "39",
    name: "Lait d'amande",
    brand: "Natura",
    flavour: "Original",
    macros: {
      calories: 24,
      protein: 0.7
    }
  },
  {
    id: "40",
    name: "Huile de sésame",
    brand: "Pearl River Bridge",
    macros: {
      calories: 929,
      protein: 0
    }
  },
  {
    id: "41",
    name: "Sauce soya",
    brand: "Kimlan",
    type: "Foncée",
    macros: {
      calories: 89,
      protein: 5.8
    }
  },
  {
    id: "42",
    name: "Mirin",
    brand: "Angel",
    macros: {
      calories: 174,
      protein: 0.1
    }
  },
  {
    id: "43",
    name: "Tofu",
    brand: "Soyarie",
    type: "Extra ferme",
    macros: {
      calories: 130,
      protein: 16
    }
  },
  {
    id: "44",
    name: "Fraises",
    macros: {
      calories: 32,
      protein: 0.7
    }
  },
  {
    id: "45",
    name: "Sirop d'érable",
    brand: "Panache",
    macros: {
      calories: 306,
      protein: 0
    }
  },
  {
    id: "46",
    name: "Pop Corn",
    brand: "Smart Pop",
    macros: {
      calories: 343,
      protein: 10
    }
  },
  {
    id: "47",
    name: "Moutarde",
    brand: "Maille",
    variety: "Dijon",
    macros: {
      calories: 159,
      protein: 6.3
    }
  },
  {
    id: "48",
    name: "Filets de porc",
    macros: {
      calories: 143,
      protein: 26.2
    }
  },
  {
    id: "49",
    name: "Chou-fleur",
    macros: {
      calories: 25,
      protein: 2
    }
  },
  {
    id: "50",
    name: "Petates",
    extra: "Épluchées",
    macros: {
      calories: 86,
      protein: 1.7
    }
  },
  {
    id: "51",
    name: "Crème sûre 1%",
    brand: "Sealtest",
    macros: {
      calories: 42,
      protein: 5.5
    }
  },
  {
    id: "52",
    name: "Paprika",
    macros: {
      calories: 289,
      protein: 14.8
    }
  },
  {
    id: "53",
    name: "Poires",
    macros: {
      calories: 58,
      protein: 0.4
    }
  },
  {
    id: "54",
    name: "Yogourt grec 0%",
    brand: "Compliments",
    macros: {
      calories: 46,
      protein: 9.7
    }
  },
]

export default products
