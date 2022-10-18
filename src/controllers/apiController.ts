import { Request, Response } from 'express';
import { Phrase } from '../models/Phrase';

export const getPhrases = async (req: Request, res: Response) => {
  const phrases = await Phrase.findAll();
  res.status(200).json({ phrases });
};
export const getPhrasesByAuthor = async (req: Request, res: Response) => {
  const { name } = req.query;
  console.log(req.query);
  const phrasesByAuthor = await Phrase.findAll({ where: { author: name }, attributes: ['text'] });
  res.status(200).json({ phrasesByAuthor });
};

export const getPhraseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  const phrase = await Phrase.findByPk(id, { attributes: ['id', 'text'] });
  if (!phrase) {
    res.status(404).json({ error: 'frase não encontrada' });
  }
  res.status(200).json({ phrase });
};

export const createPhrase = async (req: Request, res: Response) => {
  const { author, text }: { author: string; text: string } = req.body;

  const newPhrase = await Phrase.create({ author, text });
  res.status(201).json({ msg: newPhrase });
};
