import { Request, Response } from "express";
import cardsModel from "../models/cards.model";

const cardController = {

  getAllCards: async(req:Request, res:Response) => {
    try{
      const results = await cardsModel.select();
      res.status(200);
      res.json(results);
    } catch{
      res.status(500);
    }
  },
  getById: async(req:Request, res:Response) => {
    try{
      const id:number = Number(req.params.id);
      const results = await cardsModel.selectById(id);
      res.status(200);
      res.json(results);
    } catch{
      res.status(500);
    }
  },
  create: async(req:Request, res:Response) => {
    try{
      const card = req.body;
      const results = await cardsModel.create(card);
      res.status(200);
      res.json(results[0]);
    } catch{
      res.status(500);
    }
  },
  update: async(req:Request, res:Response) => {
    try{
      const id = Number(req.params.id);
      const card = req.body;
      card.updated_at = new Date().toISOString();
      const results = await cardsModel.update(id, card);
      res.status(200);
      res.json(results[0]);
    }catch {
      res.status(500);
    }
  },
  delete: async(req:Request, res:Response) => {
    try{
      const id = Number(req.params.id);
      const results = await cardsModel.delete(id);
      res.status(200);
      res.json(results);
    }catch {
      res.status(500);
    }
  },
  getByDeckId: async(req:Request, res:Response) => {
    try{
      const id = Number(req.params.id);
      const results = await cardsModel.getAllByDeckId(id);
      res.status(200);
      res.json(results);
    }catch {
      res.status(500);
    }
  },
}

export default cardController;