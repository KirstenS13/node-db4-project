const db = require("../data/config")

// getRecipes()
function getRecipes() {
    return db("recipes")
}

// getShoppingList(recipe_id)
function getShoppingList(recipe_id) {
    return db("recipes_ingredients as ri")
        .join("recipes as r", "r.id", "ri.recipe_id")
        .join("ingredients as i", "i.id", "ri.ingredient_id")
        .where("ri.recipe_id", recipe_id)
        .select("i.id", "ri.quantity", "i.name", "r.title")
}

// getInstructions(recipe_id)

module.exports = {
    getRecipes,
    getShoppingList,
}