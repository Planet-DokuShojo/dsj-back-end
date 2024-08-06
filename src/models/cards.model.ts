import Card from "src/interfaces/Card";
import knex from "../knex"


const cardsModel = {
    select: async () => {
        return knex('card').select("*");
    },
    selectById: async (id:number) => {
        return knex('card').select("*").where({id}).first();
    },
    create: async (card: Card) => {
        return knex('card').insert(card).returning("*");
    },
    update: async(id: number, card: Card) => {
        return knex('card').update(card).where({id}).returning('*');
    },
    delete: async(id: number) => {
        return knex('card').where({id}).del();
    },
    getAllByDeckId: async(id: number) => {
        return knex('card').where("deck_id", id);
    }
};

export default cardsModel;