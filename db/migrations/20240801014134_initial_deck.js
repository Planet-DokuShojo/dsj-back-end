/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("deck", function (table) {
    table.increments().primary().notNullable();
    table.integer("customer_id").references("id").inTable("customer").onDelete("CASCADE");
    table.string("title", 255).notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("deck");
};
