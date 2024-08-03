/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("deck_list").del();
  await knex("deck_list").insert([
    {
      deck_id: 1,
      deck_title: "My day in Shinjuku",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      deck_id: 2,
      deck_title: "Food",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      deck_id: 3,
      deck_title: "Todays newsarticle about the weather from the Asahi shinbun",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
