
exports.seed = async function(knex) {
  await knex("recipes_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 3},
    { recipe_id: 1, ingredient_id: 2, quantity: 2},
    { recipe_id: 1, ingredient_id: 3, quantity: 2},
    { recipe_id: 1, ingredient_id: 4, quantity: 2},
    { recipe_id: 2, ingredient_id: 5, quantity: 1},
    { recipe_id: 2, ingredient_id: 6, quantity: 0.5},
    { recipe_id: 2, ingredient_id: 7, quantity: 3},
    { recipe_id: 2, ingredient_id: 8, quantity: 1.5},
    { recipe_id: 2, ingredient_id: 9, quantity: 1},
    { recipe_id: 2, ingredient_id: 10, quantity: 2},
  ])
};
