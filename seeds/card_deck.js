/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("card_deck").del();
  await knex("card_deck").insert([
    {
      deck_id: 1,
      card_id: 1,
      card_front: "こんにちは",
      card_back: "",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      deck_id: 1,
      card_id: 2,
      card_front: "東京医科大学病院",
      card_back: "",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      deck_id: 1,
      card_id: 3,
      card_front: "西新宿",
      card_back: "",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
