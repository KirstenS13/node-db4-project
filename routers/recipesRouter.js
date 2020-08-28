const express = require("express")
const Recipe = require("../models/recipe")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const recipes = await Recipe.getRecipes()
        res.json(recipes)
    } catch (err) {
        next(err)
    }
})

router.get("/:id/shoppingList", async (req, res, next) => {
    try {
        const ingredients = await Recipe.getShoppingList(req.params.id)
        res.json(ingredients)
    } catch (err) {
        next(err)
    }
})

module.exports = router