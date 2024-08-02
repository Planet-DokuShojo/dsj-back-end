"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const knex_1 = __importDefault(require("../knex"));
//GET ALL USERS
const getAllUsers = (req, res) => {
    (0, knex_1.default)('user_list').select('*')
        .then(allUsers => res.json(allUsers))
        .catch(error => res.status(500).json({ error: 'error occurred' }));
};
exports.getAllUsers = getAllUsers;
//GET USERS BY ID
const getUserById = (req, res) => {
    const { id } = req.params;
    (0, knex_1.default)('user_list').where({ user_id: id }).first()
        .then(UserID => {
        if (UserID) {
            res.json(UserID);
        }
        else {
            res.status(404).json({ error: 'not found' });
        }
    })
        .catch(error => res.status(404).json({ error: 'error occurred' }));
};
exports.getUserById = getUserById;
//CREATE NEW USER
const createUser = (req, res) => {
    (0, knex_1.default)('user_list').insert(req.body).returning('*')
        .then(newUser => res.status(201).json(newUser))
        .catch(error => res.status(500).json({ error: 'error creating new User' }));
};
exports.createUser = createUser;
//UPDATE USER
const updateUser = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    (0, knex_1.default)('user_list').where({ user_id: id }).update({ title })
        .then(updatedUser => {
        if (updatedUser) {
            return (0, knex_1.default)('user_list').where({ user_id: id }).first();
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    })
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(error => res.status(500).json({ error: 'Error updating User' }));
};
exports.updateUser = updateUser;
//DELETE USER
const deleteUser = (req, res) => {
    const { id } = req.params;
    (0, knex_1.default)('user_list').where({ user_id: id }).del()
        .then(deletedUser => {
        if (deletedUser) {
            res.status(200).json({ message: 'User deleted successfully' });
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    })
        .catch(error => res.status(500).json({ error: 'Error while deleting User' }));
};
exports.deleteUser = deleteUser;
