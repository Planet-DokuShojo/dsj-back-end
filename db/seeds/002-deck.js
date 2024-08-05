/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("deck").insert([
    {
      title: "My day in Shinjuku",
    },
    {
      title: "Food",
    },
    {
      title: "Todays newsarticle about the weather from the Asahi shinbun",
    },
  ]);
};
