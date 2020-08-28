
exports.up = async function(knex) {
    // recipe table
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("title").notNull()
    })
    // steps table
    await knex.schema.createTable("steps", (table) => {
        table.increments("id")
        table
            .integer("recipe_id")
            .notNull()
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.text("instruction").notNull()
        table.integer("step_number").notNull()
    })
    // ingredients table
    // recipes_ingredients table
};

exports.down = async function(knex) {
    // drop tables in reverse order of creation
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("recipes")
};
