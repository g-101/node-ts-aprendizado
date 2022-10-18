import { Router } from 'express';
import * as apiController from './controllers/apiController';

const router = Router();

router.get('/frases', apiController.getPhrases);
router.get('/frases/author', apiController.getPhrasesByAuthor);
router.get('/frase/:id', apiController.getPhraseById);

router.post('/frases', apiController.createPhrase);

export default router;
