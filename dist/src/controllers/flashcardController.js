"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByDeckId = exports.deleteFlashcard = exports.updateFlashcard = exports.createFlashcard = exports.getFlashcardById = exports.getAllFlashcards = void 0;
const knex_1 = __importDefault(require("../knex"));
//GET ALL FLASHCARDS
const getAllFlashcards = (req, res) => {
    (0, knex_1.default)('card_deck').select('*')
        .then(allflashcard => res.json(allflashcard))
        .catch(error => res.status(500).json({ error: 'error occured' }));
};
exports.getAllFlashcards = getAllFlashcards;
//GET FLASHCARDS BY ID
const getFlashcardById = (req, res) => {
    const { id } = req.params;
    (0, knex_1.default)('card_deck').where({ card_id: id }).first()
        .then(flashCardID => {
        if (flashCardID) {
            res.json(flashCardID);
        }
        else {
            res.status(404).json({ error: 'not found' });
        }
    })
        .catch(error => res.status(404).json({ error: 'error occured' }));
};
exports.getFlashcardById = getFlashcardById;
//CREATE NEW FLASHCARD
const createFlashcard = (req, res) => {
    (0, knex_1.default)('card_deck').insert(req.body).returning('*')
        .then(newFlashcard => res.status(201).json(newFlashcard))
        .catch(error => res.status(500).json({ error: 'error create new Flashcard' }));
};
exports.createFlashcard = createFlashcard;
//UPDATE FLASHCARD
const updateFlashcard = (req, res) => {
    const { id } = req.params;
    const { deck_id, card_front, card_back } = req.body;
    (0, knex_1.default)('card_deck').where({ card_id: id }).update({ deck_id, card_front, card_back })
        .then(updatedFlashcard => {
        if (updatedFlashcard) {
            return (0, knex_1.default)('card_deck').where({ card_id: id }).first();
        }
        else {
            res.status(404).json({ error: 'FlashCard not found' });
        }
    })
        .then(updateFlashCard => res.status(200).json(updateFlashCard))
        .catch(error => res.status(500).json({ error: 'Error update FlashCard' }));
};
exports.updateFlashcard = updateFlashcard;
// DELETE FLASHCARD
const deleteFlashcard = (req, res) => {
    const { id } = req.params;
    (0, knex_1.default)('card_deck').where({ card_id: id }).del()
        .then(deletedFlashCard => {
        if (deletedFlashCard) {
            res.status(200).json({ message: 'FlashCard deleted successfully' });
        }
        else {
            res.status(404).json({ error: 'FlashCard not found' });
        }
    })
        .catch(error => res.status(500).json({ error: 'Error while deleting FlashCard' }));
};
exports.deleteFlashcard = deleteFlashcard;
//GET ALL CARDS FROM DECK_ID
const getByDeckId = (req, res) => {
    const { id } = req.params;
    (0, knex_1.default)('card_deck').where({ deck_id: id })
        .then(flashCards => {
        if (flashCards.length > 0) {
            res.json(flashCards);
        }
        else {
            res.status(404).json({ error: 'No cards found for this deck' });
        }
    })
        .catch(error => res.status(500).json({ error: 'error occured' }));
};
exports.getByDeckId = getByDeckId;
