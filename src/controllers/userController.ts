import knex from "knex";
import type {Knex}  from "knex";
import type { Request, Response } from "express";

import knexConfig from "../../knexfile";

const environment: string = process.env.NODE_ENV || 'development';
const config: Knex.Config = knexConfig[environment];
const knexdb = knex(config);

interface User {
    userId: number,
    email: string
}

//GET ALL USERS
export const getAllUsers = (req: Request, res: Response) => {
    knexdb<User>('user_list').select('*')
    .then(allUsers => res.json(allUsers))
    .catch(error => res.status(500).json({error: 'error occurred'}));
}

//GET USERS BY ID
export const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;
    knexdb('user_list').where({ user_id: id  }).first()
    .then(UserID =>  {
        if(UserID) {
            res.json(UserID);
        } else {
            res.status(404).json({error: 'not found'});  
        }
    })
    .catch(error => res.status(404).json({error: 'error occurred'}));
}

//CREATE NEW USER
export const createUser = (req: Request, res: Response) => {
    knexdb('user_list').insert(req.body).returning('*')
    .then(newUser => res.status(201).json(newUser))
    .catch(error => res.status(500).json({error: 'error creating new User'}));
}

//UPDATE USER
export const updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const { title } = req.body;
    knexdb('user_list').where({ user_id: id  }).update({ title })
    .then(updatedUser => {
        if(updatedUser) {
            return knexdb('user_list').where({ user_id: id }).first();
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    })
    .then(updatedUser => res.status(200).json(updatedUser))
    .catch(error => res.status(500).json({error: 'Error updating User'}));
}

//DELETE USER
export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    knexdb('user_list').where({ user_id: id }).del()
    .then(deletedUser => {
        if (deletedUser) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    })
    .catch(error => res.status(500).json({error: 'Error while deleting User'}));
}
