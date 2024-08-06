import type { Request, Response } from "express";
import decksModel from "../models/decks.model";

const deckController = {
    getAllDecks: async(req:Request, res:Response) => {
        try{
            const result = await decksModel.select();
            res.status(200);
            res.json(result);
        }catch{
            res.status(500);
        }
    },
    getDeckById: async(req:Request, res:Response) => {
        try{
            const id = Number(req.params.id);
            const result = await decksModel.selectById(id);
            res.status(200);
            res.json(result);
        }catch {
            res.status(500);
        }
    },
    createDeck: async(req:Request, res:Response) => {
        try{
            const deck = req.body;
            const result = await decksModel.create(deck);
            res.status(200);
            res.json(result[0]);
        }catch {
            res.status(500);
        }
    },
    updateDeck: async(req:Request, res:Response) => {
       try{
            const id = Number(req.params.id);
            const deck = req.body;
            deck.updated_at = new Date().toISOString();
            const result = await decksModel.update(id, deck);
            res.status(200);
            res.json(result[0]);
        }catch {
            res.status(500);
        }
    },
    deleteDeck: async(req:Request, res:Response) => {
       try{ 
            const id = Number(req.params.id);
            const result = await decksModel.delete(id);
            res.status(200);
            res.json();
        }catch {
            res.status(500);
        }
    },
    getByUserId: async(req:Request, res:Response) => {
        try{
            const id = Number(req.params.id);
            const result = await decksModel.getByUserId(id);
            res.status(200);
            res.json(result);
        } catch{
            res.status(500);
        }
    },
}

export default deckController;