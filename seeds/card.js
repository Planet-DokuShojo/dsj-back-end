/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("card").del();
  await knex("card").insert([
    {
      deck_id: 1,
      card_id: 1,
      card_title: "こんにちは",
      card_body: "1",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      deck_id: 1,
      card_id: 2,
      card_title: "東京医科大学病院",
      card_body: "2",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      deck_id: 1,
      card_id: 3,
      card_front: "西新宿",
      card_body: "3",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
