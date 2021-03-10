
exports.seed = async function(knex) {
  await knex("recipes").insert([
    { title: "Simple Fruit Salad" },
    { title: "Simple Salad" }
  ])
};
