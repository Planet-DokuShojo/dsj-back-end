/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_list").del();
  await knex("user_list").insert([
    { user_id: 1, email_address: "jesse_is_amazing@cc35.com" },
    { user_id: 2, email_address: "james123@cc35.com" },
    { user_id: 3, email_address: "meowthnyannyan@cc35.com" },
  ]);
};
