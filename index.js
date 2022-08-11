// #### 1. 2D Array

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
  ];

  for (const boardArr of board) {
      for (const value of boardArr) {
          console.log("Q1.", value);
      }
  }

  console.log("------------------------------------");

//   #### 2. Doggo

const doggo = {
    name: "Fido",
    breed: "Sharpei",
    favoriteFood: ["peanut butter", "steak", "ice cream"],

    
favFood: function () {
    for (const food of doggo.favoriteFood) {
        console.log("Q2.4", food)
    }
},
};



console.log("Q2.", doggo.favoriteFood[1]);
doggo.favFood()

console.log("------------------------------------");

// #### 3. 

const recipes = {
    ingredients: {
        butter: "1/2 cup",
        sugar: "1 cup",
        flour: "2 cups",
      
    },

    printRecipe: function () {
        console.log("Q3.5", Object.values(recipes.ingredients));
    }

} 




console.log("Q3.2.", recipes.ingredients);

console.log("------------------------------------");

recipes.ingredients = { ...recipes.ingredients, ginger: "2 tsp."};

console.log("Q3.3.", recipes.ingredients);

console.log("------------------------------------");
delete recipes.ingredients.sugar;
recipes.ingredients = { ...recipes.ingredients, brownSugar: "one cup"}

console.log("Q3.4", recipes.ingredients);

console.log("------------------------------------");

(recipes.printRecipe());
