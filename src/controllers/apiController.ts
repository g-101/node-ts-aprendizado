import { Request, Response } from 'express';
import { Phrase } from '../models/Phrase';

export const ping = (req: Request, res: Response) => {
  res.json({ pong: true });
};
export const username = (req: Request, res: Response) => {
  const { username } = req.params;
  res.status(200).json({ nome: username });
};
