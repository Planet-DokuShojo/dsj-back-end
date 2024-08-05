import type { Request, Response } from "express";

import knex from "../knex";

//GET ALL FLASHCARDS
export const getAllFlashcards = (req: Request, res: Response) => {
  knex("card")
    .select("*")
    .then((allflashcard) => res.json(allflashcard))
    .catch((error) => res.status(500).json({ error: "error occured" }));
};

//GET FLASHCARDS BY ID
export const getFlashcardById = (req: Request, res: Response) => {
  const { id } = req.params;
  knex("card")
    .where({ id })
    .first()
    .then((flashCardID) => {
      if (flashCardID) {
        res.json(flashCardID);
      } else {
        res.status(404).json({ error: "not found" });
      }
    })
    .catch((error) => res.status(404).json({ error: "error occured" }));
};

//CREATE NEW FLASHCARD
export const createFlashcard = (req: Request, res: Response) => {
  knex("card")
    .insert(req.body)
    .returning("*")
    .then((newFlashcard) => res.status(201).json(newFlashcard[0]))
    .catch((error) =>
      res.status(500).json({ error: "error create new Flashcard" })
    );
};

//UPDATE FLASHCARD
export const updateFlashcard = (req: Request, res: Response) => {
  const { id } = req.params;
  const { card_title, card_body, audio } = req.body;
  knex("card")
    .where({ id })
    .update({ card_title, card_body, audio })
    .then((updatedFlashcard) => {
      if (updatedFlashcard) {
        return knex("card").where({ id }).first();
      } else {
        res.status(404).json({ error: "FlashCard not found" });
      }
    })
    .then((updateFlashCard) => res.status(200).json(updateFlashCard))
    .catch((error) =>
      res.status(500).json({ error: "Error update FlashCard" })
    );
};

// DELETE FLASHCARD
export const deleteFlashcard = (req: Request, res: Response) => {
  const { id } = req.params;
  knex("card")
    .where({ id })
    .delete()
    .then((deletedFlashCard) => {
      if (deletedFlashCard) {
        res.status(200).json({ message: "FlashCard deleted successfully" });
      } else {
        res.status(404).json({ error: "FlashCard not found" });
      }
    })
    .catch((error) =>
      res.status(500).json({ error: "Error while deleting FlashCard" })
    );
};

//GET ALL CARDS FROM DECK_ID
export const getByDeckId = (req: Request, res: Response) => {
  const id = req.params.id
  knex("card")
    .where("deck_id", id)
    .then((flashCards) => {
      if (flashCards.length > 0) {
        res.json(flashCards);
      } else {
        res.status(404).json({ error: "No cards found for this deck" });
      }
    })
    .catch((error) => res.status(500).json({ error: "error occured" }));
};
