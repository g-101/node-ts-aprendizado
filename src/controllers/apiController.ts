import { Request, Response } from 'express';
import { Phrase, PhraseModel } from '../models/Phrase';

export const createPhrase = async (req: Request, res: Response) => {
  const { author, text }: PhraseModel = req.body;

  const newPhrase = await Phrase.create({ author, text });
  res.status(201).json({ msg: newPhrase });
};

export const getPhrases = async (req: Request, res: Response) => {
  const phrases = await Phrase.findAll();
  res.status(200).json({ phrases });
};
export const getPhrasesByAuthor = async (req: Request, res: Response) => {
  const { name } = req.query;

  const phrasesByAuthor = await Phrase.findAll({ where: { author: name }, attributes: ['text'] });
  res.status(200).json({ phrasesByAuthor });
};

export const getPhraseById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const phrase = await Phrase.findByPk(id);
  if (!phrase) {
    res.status(404).json({ error: 'frase não encontrada' });
  }
  res.status(200).json({ phrase });
};

export const updatePhrase = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { author, text } = req.body;
  const phrase = await Phrase.findByPk(id);
  if (!phrase) {
    res.status(404).json({ error: 'frase não encontrada' });
  }
  phrase!.author = author;
  phrase!.text = text;

  await phrase?.save();
  res.status(200).json({ msg: 'updated', phrase });
};

export const deletePhrase = async (req: Request, res: Response) => {
  const { id } = req.params;

  const phrase = await Phrase.findByPk(id);
  if (!phrase) {
    res.status(404).json({ error: 'frase não encontrada' });
  }
  await Phrase.destroy({ where: { id: id } });

  res.json({});
};
