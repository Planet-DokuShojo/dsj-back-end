import knex from "../knex";
import Customer from "src/interfaces/Customer";

const customersModel = {
    select: async() => {
        return knex('customer').select('*');
    },
    selectById: async(id:number) => {
        return knex('customer').where({id}).first();
    },
    create: async(customer:Customer) => {
        return knex('customer').insert(customer).returning("*");
    },
    update: async(id:number, customer:Customer) => {
        return knex('customer').update(customer).where({id}).returning('*');
    },
    delete: async(id:number) => {
        return knex('customer').where({id}).del();
    },
}

export default customersModel;