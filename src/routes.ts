import { Router } from 'express';
import * as apiController from './controllers/apiController';

const router = Router();

router.get('/ping', apiController.ping);
router.get('/username/:username', apiController.username);
export default router;
