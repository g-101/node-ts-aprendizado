import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const server = express();
const port = process.env.PORT;

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.use((req: Request, res: Response) => {
  res.status(404).json({ error: '404 - not found' });
});
server.listen(3333, () => console.log('server ON: http://localhost:3333'));
