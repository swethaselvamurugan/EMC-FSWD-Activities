var recipes = [
    {
        name: "Coffee",
        ingredients: ["coffee powder", "sugar", "milk"],
        instructions: ["turn on the stove", "boil the milk", "add sugar and coffee powder"]
    },
    {
        name: "Maggie",
        ingredients: ["maggie", "masala", "water"],
        instructions: ["turn on the stove", "pour water", "add masala", "add maggie"]
    },
    {
        name: "Dosa",
        ingredients: ["batter", "oil"],
        instructions: ["turn on the stove", "heat the pan", "pour the dosa batter", "add oil", "turn the dosa"]
    }
]

for(i=0; i<recipes.length; i++){
    console.log(recipes[i].name)
}