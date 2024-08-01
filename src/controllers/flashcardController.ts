import knex from '../knex';
import type { Request, Response } from "express";


//GET ALL FLASHCARDS
export const getAllFlashcards = (req: Request, res: Response) => {
    knex('card_deck').select('*')
    .then(allflashcard => res.json(allflashcard))
    .catch(error => res.status(500).json({error: 'error occured'}));
} 

//GET FLASHCARDS BY ID
export const getFlashcardById = (req: Request, res: Response) => {
    const { id }  = req.params;
    knex('card_deck').where({ card_id: id }).first()
    .then(flashCardID =>  {
        if(flashCardID) {
            res.json(flashCardID);
        } else {
            res.status(404).json({error:'not found'});  
        }
    })
    .catch(error => res.status(404).json({error: 'error occured'}));
}

//CREATE NEW FLASHCARD
export const createFlashcard = (req: Request, res: Response) => {
    knex('card_deck').insert(req.body).returning('*')
    .then(newFlashcard =>   res.status(201).json(newFlashcard))
    .catch(error => res.status(500).json({error: 'error create new Flashcard'}));
}

//UPDATE FLASHCARD
export  const updateFlashcard = (req: Request, res: Response) => {
    const { id } = req.params;
    const { deck_id, card_front, card_back} = req.body;
    knex('card_deck').where({ card_id:id }).update({ deck_id, card_front, card_back })
    .then(updatedFlashcard => {
        if(updatedFlashcard) {
            return knex('card_deck').where({ card_id:id }).first();
        } else {
            res.status(404).json({ error: 'FlashCard not found' });
        }
    })
    .then(updateFlashCard => res.status(200).json(updateFlashCard))
    .catch(error => res.status(500).json({error: 'Error update FlashCard'}));
}

// DELETE FLASHCARD
export const deleteFlashcard = (req: Request, res: Response) => {
    const { id } = req.params;
    knex('card_deck').where({ card_id:id }).del()
    .then(deletedFlashCard => {
        if (deletedFlashCard) {
            res.status(200).json({ message: 'FlashCard deleted successfully' });
        } else {
            res.status(404).json({ error: 'FlashCard not found' });
        }
    })
    .catch(error => res.status(500).json({error: 'Error while deleting FlashCard'}));
}

