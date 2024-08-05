/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("card", function (table) {
    table
      .integer("deck_id")
      .references("deck_id")
      .inTable("deck_list")
      .onDelete("CASCADE");
    table.increments("card_id").primary().notNullable();
    table.string("card_title", 255).notNullable();
    table.string("card_body", 255).notNullable();
    table.dateTime("created_at").defaultTo(knex.fn.now());
    table.dateTime("updated_at").defaultTo(knex.fn.now());
    table.string("audio_url", 400);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("card");
};
