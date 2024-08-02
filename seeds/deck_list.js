/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("deck_list").del();
  await knex("deck_list").insert([
    {
      deck_title: "My day in Shinjuku",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      deck_title: "Food",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      deck_title: "Todays newsarticle about the weather from the Asahi shinbun",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
