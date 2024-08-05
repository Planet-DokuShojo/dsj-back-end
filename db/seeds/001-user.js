/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").insert([
    { email_address: "jesse_is_amazing@cc35.com" },
    { email_address: "james123@cc35.com" },
    { email_address: "meowthnyannyan@cc35.com" },
  ]);
};
