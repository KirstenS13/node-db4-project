const db = require("../data/config")

// getRecipes()
function getRecipes() {
    return db("recipes")
}

// getShoppingList(recipe_id)

// getInstructions(recipe_id)

module.exports = {
    getRecipes,
}