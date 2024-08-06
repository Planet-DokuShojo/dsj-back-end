import { Router } from "express";
import * as customerController from "./controllers/customerController";
import cardController from "./controllers/cardController";
import deckController from "./controllers/deckController";

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
router.get("/decks/customers/:id", deckController.getByUserId);

// Flashcard routes
router.get("/cards", cardController.getAllCards);
router.get("/cards/:id", cardController.getById);
router.post("/cards", cardController.create);
router.put("/cards/:id", cardController.update);
router.delete("/cards/:id", cardController.delete);
router.get("/cards/decks/:id", cardController.getByDeckId);

export default router;
