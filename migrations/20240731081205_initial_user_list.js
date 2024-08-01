/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return (
    knex.schema,
    createTable("user_list", function (table) {
      table.increments("user_id").primary().notNullable().onDelete("CASCADE");
      table.string("email_address", 255).unique().notNullable();
    })
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user_list");
};
