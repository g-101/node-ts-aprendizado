import { Router } from 'express';
import * as apiController from './controllers/apiController';

const router = Router();

router.post('/frases', apiController.createPhrase);

router.get('/frases', apiController.getPhrases);
router.get('/frases/author', apiController.getPhrasesByAuthor);
router.get('/frases/:id', apiController.getPhraseById);

router.put('/frases/:id', apiController.updatePhrase);
router.delete('/frases/:id', apiController.deletePhrase);

export default router;
