/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("deck").insert([
    {
      customer_id: 1,
      title: "My day in Shinjuku",
    },
    {
      customer_id: 1,
      title: "Food",
    },
    {
      customer_id: 2,
      title: "Todays newsarticle about the weather from the Asahi shinbun",
    },
    {
      customer_id: 3,
      title: "Notes taken in the bus yesterday",
    },
  ]);
};
