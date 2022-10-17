import { Router } from 'express';
const router = Router();

router.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});
router.get('/username/:username', (req, res) => {
  const { username }: { username: string } = req.params;
  res.status(200).json({ username });
});
export default router;
