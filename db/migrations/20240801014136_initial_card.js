/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("card", function (table) {
    table.increments().primary().notNullable();
    table
      .integer("deck_id")
      .references("id")
      .inTable("deck")
      .onDelete("CASCADE");
    table.string("front", 255).notNullable();
    table.string("back", 255).notNullable();
    table.timestamps(true, true);
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
