
exports.seed = async function(knex) {
  await knex("steps").insert([
    { recipe_id: 1, instruction: "Chop up all fruit", step_number: 1 },
    { recipe_id: 1, instruction: "Put chopped fruit and yogurt in a bowl", step_number: 2 },
    { recipe_id: 1, instruction: "Mix well", step_number: 3 },
    { recipe_id: 1, instruction: "Serve chilled", step_number: 4 },
    { recipe_id: 2, instruction: "Wash all vegetables", step_number: 1 },
    { recipe_id: 2, instruction: "Chop all vegetables to desired size", step_number: 2 },
    { recipe_id: 2, instruction: "Put all vegetables in a bowl", step_number: 3 },
    { recipe_id: 2, instruction: "Serve", step_number: 4 },
  ])
};
