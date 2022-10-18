import { Router } from 'express';
import * as apiController from './controllers/apiController';

const router = Router();

router.get('/frases', apiController.readPhrases);
router.get('/username/:username', apiController.username);
router.post('/frases', apiController.createPhrase);

export default router;
