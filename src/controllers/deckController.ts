import type { Request, Response } from "express";
import Deck from "../interfaces/Deck"

import knex from "../knex";

//GET ALL
export const getAllDecks = (req: Request, res: Response) => {
    knex<Deck>('deck').select('*')
    .then(allDecks => res.json(allDecks))
    .catch(error => res.status(500).json({error: 'error occured'}));
} 

//GET BY ID
export const getDeckById = (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    knex<Deck>('deck').where({ id }).first()
    .then(decksID =>  {
        if(decksID) {
            res.json(decksID);
        } else {
            res.status(404).json({error:'not found'});  
        }
    })
    .catch(error => res.status(404).json({error: 'error occured'}));
}

//CREATE NEW DECK
export const createDeck = (req: Request, res: Response) => {
    knex<Deck>('deck').insert(req.body).returning('*')
    .then(newDecks =>   res.status(201).json(newDecks))
    .catch(error => res.status(500).json({error: 'error create new deck'}));
}

//UPDATE DECKS
export const updateDeck = (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const { title } = req.body;
    knex<Deck>('deck').where({ id }).update({ title })
    .then(updatedDecks => {
        if(updatedDecks) {
            return knex('deck').where({ id:id }).first();
        } else {
            res.status(404).json({ error: 'Deck not found' });
        }
    })
    .then(updateDeck => res.status(200).json(updateDeck))
    .catch(error => res.status(500).json({error: 'Error update Deck'}));
}

// DELETE DECK
export const deleteDeck = (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    knex<Deck>('deck').where({ id }).del()
    .then(deletedDecks => {
        if (deletedDecks ) {
            res.status(200).json({ message: 'Deck deleted successfully' });
        } else {
            res.status(404).json({ error: 'Deck not found' });
        }
    })
    .catch(error => res.status(500).json({error: 'Error while deleting Deck'}));
}

// GET DECKS FROM USER_ID
export const getByUserId = (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    knex<Deck>('deck').where({ user_id:id })
    .then(decks =>  {
        if(decks.length > 0) {
            res.json(decks);
        } else {
            res.status(404).json({error:'No decks found for this user'});  
        }
    })
    .catch(error => res.status(500).json({error: 'error occured'}));
}

