/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("table_name").del();
  await knex("table_name").insert([
    { id: 1, email_address: "jesse_is_amazing@cc35.com" },
    { id: 2, email_address: "james123@cc35.com" },
    { id: 3, email_address: "meowthnyannyan@cc35.com" },
  ]);
};
