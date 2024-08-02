"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController = __importStar(require("./controllers/userController"));
const deckController = __importStar(require("./controllers/deckController"));
const flashcardController = __importStar(require("./controllers/flashcardController"));
const router = (0, express_1.Router)();
// User routes
router.get("/users", userController.getAllUsers);
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
exports.default = router;
