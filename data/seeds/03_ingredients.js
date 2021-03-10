
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { name: "large apple" },
    { name: "orange" },
    { name: "large pear" },
    { name: "lb of strawberries" },
    { name: "head of lettuce" },
    { name: "head of celery" },
    { name: "tomato" },
    { name: "head of broccoli" },
    { name: "can of black olives" },
    { name: "bell pepper (any color)" }
  ])
};
