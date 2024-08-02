"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUserId = exports.deleteDeck = exports.updateDeck = exports.createDeck = exports.getDeckById = exports.getAllDecks = void 0;
const knex_1 = __importDefault(require("../knex"));
//GET ALL
const getAllDecks = (req, res) => {
    (0, knex_1.default)('deck_list').select('*')
        .then(allDecks => res.json(allDecks))
        .catch(error => res.status(500).json({ error: 'error occured' }));
};
exports.getAllDecks = getAllDecks;
//GET BY ID
const getDeckById = (req, res) => {
    const { id } = req.params;
    (0, knex_1.default)('deck_list').where({ deck_id: id }).first()
        .then(decksID => {
        if (decksID) {
            res.json(decksID);
        }
        else {
            res.status(404).json({ error: 'not found' });
        }
    })
        .catch(error => res.status(404).json({ error: 'error occured' }));
};
exports.getDeckById = getDeckById;
//CREATE NEW DECK
const createDeck = (req, res) => {
    (0, knex_1.default)('deck_list').insert(req.body).returning('*')
        .then(newDecks => res.status(201).json(newDecks))
        .catch(error => res.status(500).json({ error: 'error create new deck' }));
};
exports.createDeck = createDeck;
//UPDATE DECKS
const updateDeck = (req, res) => {
    const { id } = req.params;
    const { user_id, deck_title } = req.body;
    (0, knex_1.default)('deck_list').where({ deck_id: id }).update({ user_id, deck_title })
        .then(updatedDecks => {
        if (updatedDecks) {
            return (0, knex_1.default)('deck_list').where({ deck_id: id }).first();
        }
        else {
            res.status(404).json({ error: 'Deck not found' });
        }
    })
        .then(updateDeck => res.status(200).json(updateDeck))
        .catch(error => res.status(500).json({ error: 'Error update Deck' }));
};
exports.updateDeck = updateDeck;
// DELETE DECK
const deleteDeck = (req, res) => {
    const { id } = req.params;
    (0, knex_1.default)('deck_list').where({ deck_id: id }).del()
        .then(deletedDecks => {
        if (deletedDecks) {
            res.status(200).json({ message: 'Deck deleted successfully' });
        }
        else {
            res.status(404).json({ error: 'Deck not found' });
        }
    })
        .catch(error => res.status(500).json({ error: 'Error while deleting Deck' }));
};
exports.deleteDeck = deleteDeck;
// GET DECKS FROM USER_ID
const getByUserId = (req, res) => {
    const { id } = req.params;
    (0, knex_1.default)('deck_list').where({ user_id: id })
        .then(decks => {
        if (decks.length > 0) {
            res.json(decks);
        }
        else {
            res.status(404).json({ error: 'No decks found for this user' });
        }
    })
        .catch(error => res.status(500).json({ error: 'error occured' }));
};
exports.getByUserId = getByUserId;
