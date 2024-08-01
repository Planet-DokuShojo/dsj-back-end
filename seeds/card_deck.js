/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("table_name").del();
  await knex("table_name").insert([
    {
      deck_id: 1,
      card_id: 1,
      card_front: "こんにちは",
      card_back: "Text",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      deck_id: 1,
      card_id: 2,
      card_front: "東京医科大学病院",
      card_back: "Text",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      deck_id: 1,
      card_id: 3,
      card_front: "西新宿",
      card_back: "Text",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
