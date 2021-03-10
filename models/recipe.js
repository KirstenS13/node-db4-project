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
function getInstructions(recipe_id) {
    return db("steps as s")
        .join("recipes as r", "r.id", "s.recipe_id")
        .where("r.id", recipe_id)
        .select("r.id", "r.title", "s.step_number", "s.instruction")
        .orderBy("s.step_number")
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}