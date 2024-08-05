import { Router } from "express";
import * as customerController from "./controllers/customerController";
import * as deckController from "./controllers/deckController";
import * as flashcardController from "./controllers/cardController";

const router = Router();

// User routes
router.get("/", customerController.getAllUsers);
router.get("/customers/:id", customerController.getUserById);
router.post("/customers", customerController.createUser);
router.put("/customers/:id", customerController.updateUser);
router.delete("/customers/:id", customerController.deleteUser);

// Deck routes
router.get("/decks", deckController.getAllDecks);
router.get("/decks/:id", deckController.getDeckById);
router.post("/decks", deckController.createDeck);
router.put("/decks/:id", deckController.updateDeck);
router.delete("/decks/:id", deckController.deleteDeck);
router.get("/decks/users/:id", deckController.getByUserId);

// Flashcard routes
router.get("/flashcards", flashcardController.getAllFlashcards);
router.get("/flashcards/:id", flashcardController.getFlashcardById);
router.post("/flashcards", flashcardController.createFlashcard);
router.put("/flashcards/:id", flashcardController.updateFlashcard);
router.delete("/flashcards/:id", flashcardController.deleteFlashcard);
router.get("/flashcards/decks/:id", flashcardController.getByDeckId);

export default router;
