import Deck from "../interfaces/Deck";
import knex from "../knex";

const decksModel = {
  select: async () => {
    return knex("deck").select("*");
  },
  selectById: async (id: number) => {
    return knex("deck").where({ id }).first();
  },
  create: async (deck: Deck) => {
    return knex("deck").insert(deck).returning("*");
  },
  update: async (id: number, deck: Deck) => {
    return knex("deck").update(deck).where({ id }).returning("*");
  },
  delete: async (id: number) => {
    return knex("deck").where({ id }).del();
  },
  getByUserId: async (id: number) => {
    return knex("deck").where("customer_id", id);
  },
};

export default decksModel;
