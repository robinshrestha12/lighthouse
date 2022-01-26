const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!
  let receipeMatch1 = [];
  let receipeMatch2 = [];
  let finalMatch = "";

  for (let i = 0; i < bakeryA.length; i++) {
    for (let j = 0; j < recipes.length; j++) {
      for (let k = 0; k < recipes[j].ingredients.length; k++) {
        if (bakeryA[i] === recipes[j].ingredients[k]) {
          receipeMatch1.push(recipes[j].name);
        }
      }
    }
  }
  for (let i = 0; i < bakeryB.length; i++) {
    for (let j = 0; j < recipes.length; j++) {
      for (let k = 0; k < recipes[j].ingredients.length; k++) {
        if (bakeryB[i] === recipes[j].ingredients[k]) {
          receipeMatch2.push(recipes[j].name);
        }
      }
    }
  }
  for (let i = 0; i < receipeMatch1.length; i++) {
    for (let j = 0; j < receipeMatch2.length; j++) {
      if (receipeMatch1[i] === receipeMatch2[j]) {
        finalMatch = receipeMatch2[j];
      }
    }
  }
  return finalMatch;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
