/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("deck_list", function (table) {
    table.increments("deck_id").primary().notNullable();
    table.integer("user_id").references("user_id").inTable("user_list").onDelete("CASCADE");
    table.string("deck_title", 255).notNullable();
    table.dateTime("created_at").defaultTo(knex.fn.now());
    table.dateTime("updated_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("deck_list");
};
