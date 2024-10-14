import { Recipe } from "../types"

const recipes: Recipe[] = [
  {
    id: "recipe-1",
    title: "Poitrine de dinde au four",
    ingredients: [
      {
        name: "Poitrine de dinde",
        quantity: [500, "g"],
        prep: ["fraîche", "désossée", "sans peau"],
      },
      {
        name: "Ail",
        quantity: [3, "gousses"],
        prep: ["épluché", "coupé en allumettes"],
      },
      { name: "Sel" },
      { name: "Poivre" },
      { name: "Herbes de provence" },
      { name: "Huile d'olive" },
    ],
    oven: { preHeatTempF: 450 },
    instructions: [
      "Sécher la poitrine en tapotant avec un essuie-tout",
      "Placer dans un plat allant au four avec couvercle",
      "Faire de petites incisions au couteau et insérer l'ail dans la viande",
      "Badigeonner d'huile d'olive et assaisonner avec sel, poivre et herbes de Provence (2 cotés)",
      "Rôtir à découvert pendant 15min",
      "Placer le couvercle puis cuire 45min",
      "Sortir et laisser reposer 15min avant de sortir la viande du plat",
    ],
    meatGuide: "Turkey",
  },
  {
    id: "recipe-2",
    title: "Poulet Masal à la mijoteuse",
    ingredients: [
      {
        name: "cuisse de poulet",
        quantity: [2, "lbs"],
        prep: ["désossée", "sans peau"],
      },
      { name: "Oignon jaune", quantity: [1], prep: ["en dés"] },
      { name: "Ail", quantity: [3, "gousses"], prep: ["émincé"] },
      {
        name: "Gingembre",
        quantity: [1, "tbsp"],
        prep: ["frais", "haché ou râpé"],
      },
      {
        name: "Garam masala",
        quantity: [1.5, "tbsp"],
      },
      { name: "Cumin", quantity: ["1/2", "tsp"] },
      { name: "Curcuma", quantity: ["1/2", "tsp"] },
      { name: "Paprika fumé", quantity: ["1/2", "tsp"] },
      { name: "Sel", quantity: ["1/2", "tsp"] },
      { name: "Piment de Cayenne", quantity: ["1/4", "tsp"] },
      {
        name: "Crême sûre",
        quantity: ["1/3", "cup"],
      },
      { name: "Sauce tomate", quantity: [450, "ml"] },
      { name: "Poivre" },
      { name: "Huile d'olive" },
    ],
    instructions: [
      "Combiner tous les épices dans un petit bol",
      "Recouvrir le poulet avec le mélange d'épices",
      "Dans une poêle, chauffer l'huile (force: 7)",
      "Saisir le poulet (3min de chaque coté) puis réserver",
      "Faire ramollir l'oignon dans la poêle et placer dans le fond de la mijoteuse",
      "Mettre le poulet dans la mijoteuse",
      "Déglacer la poêle et verser le liquide dans la mijoteuse",
      "Ajouter ail, gingembre, sauce tomate",
      "Mélanger le tout et lancer la cuisson",
      "Une fois le temps de cuisson écoulé, ajouter la crème sûre",
    ],
    slowCooker: {
      low: 6,
      high: 3,
    },
    serveWith: ["Riz basmati", "Coriandre fraîche"],
  },
]

export default recipes
