/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("card_deck", function (table) {
    table.integer("deck_id").references("deck_id").inTable("deck_list");
    table.increments("card_id").primary().notNullable();
    table.string("card_front", 255).notNullable();
    table.string("card_back", 255).notNullable();
    table.dateTime("created_at").defaultTo(knex.fn.now());
    table.dateTime("updated_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("card_deck");
};
