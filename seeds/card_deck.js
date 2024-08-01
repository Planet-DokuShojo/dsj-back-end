/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("card_deck").del();
  await knex("card_deck").insert([
    {
      card_id: 1,
      card_front: "Text",
      card_back: "こんにちは",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      card_id: 2,
      card_front: "Text",
      card_back: "東京医科大学病院",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      card_id: 3,
      card_front: "Text",
      card_back: "西新宿",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
