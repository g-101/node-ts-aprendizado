import { Request, Response } from 'express';
import { Phrase } from '../models/Phrase';

export const readPhrases = (req: Request, res: Response) => {
  res.status(200).json({ msg: 'ok' });
};
export const username = (req: Request, res: Response) => {
  const { username } = req.params;
  res.status(200).json({ nome: username });
};

export const createPhrase = async (req: Request, res: Response) => {
  const { author, text }: { author: string; text: string } = req.body;
  console.log(author, text);
  const newPhrase = await Phrase.create({ author, text });
  res.status(201).json({ msg: newPhrase });
};
