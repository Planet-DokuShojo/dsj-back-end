const knex = require("knex")
import type { Request, Response } from "express";

interface Deck {
deck_id: number,
user_id: number,
deck_title: string,
created_at: Date,
updated_at: Date
}


//GET ALL
export const getAllDecks = (req: Request, res: Response) => {
    knex('deck_list').select('*')
    .then(allDecks => res.json(allDecks))
    .catch(error => res.status(500).json({error: 'error occured'}));
} 

//GET BY ID
export const getDeckById = (req: Request, res: Response) => {
    const { id }  = req.params;
    knex('deck_list').where({ deck_id:id }).first()
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
    knex('deck_list').insert(req.body).returning('*')
    .then(newDecks =>   res.status(201).json(newDecks))
    .catch(error => res.status(500).json({error: 'error create new deck'}));
}

//UPDATE DECKS
export const updateDeck = (req: Request, res: Response) => {
    const { id } = req.params;
    const { user_id, deck_title } = req.body;
    knex('deck_list').where({ deck_id:id }).update({ user_id, deck_title  })
    .then(updatedDecks => {
        if(updatedDecks) {
            return knex('deck_list').where({ deck_id:id }).first();
        } else {
            res.status(404).json({ error: 'Deck not found' });
        }
    })
    .then(updateDeck => res.status(200).json(updateDeck))
    .catch(error => res.status(500).json({error: 'Error update Deck'}));
}

// DELETE DECK
export const deleteDeck = (req: Request, res: Response) => {
    const { id } = req.params;
    knex('deck_list').where({ deck_id:id }).del()
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
    const { id }  = req.params;
    knex('deck_list').where({ user_id:id })
    .then(decks =>  {
        if(decks.length > 0) {
            res.json(decks);
        } else {
            res.status(404).json({error:'No decks found for this user'});  
        }
    })
    .catch(error => res.status(500).json({error: 'error occured'}));
}

