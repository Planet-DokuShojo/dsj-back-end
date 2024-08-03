import { Router } from "express";
import * as userController from "./controllers/userController";
import * as deckController from "./controllers/deckController";
import * as flashcardController from "./controllers/flashcardController";

const router = Router();

// User routes
router.get("", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

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
