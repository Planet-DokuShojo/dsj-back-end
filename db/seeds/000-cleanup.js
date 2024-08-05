/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex.raw("ALTER SEQUENCE public. card_id_seq RESTART WITH 1");
    await knex.raw("ALTER SEQUENCE public. deck_id_seq RESTART WITH 1");
    await knex.raw("ALTER SEQUENCE public. customer_id_seq RESTART WITH 1");
    
    await knex("card").del();
    await knex("deck").del();
    await knex("customer").del();
  };