import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

import apiRoutes from './routes';

dotenv.config();
const server = express();
const port = process.env.API_PORT;

// MIDDLEWARES
server.use(cors());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

// ROUTES
server.use('/api', apiRoutes);
server.use((req: Request, res: Response) => {
  res.status(404).json({ error: '404 - not found' });
});
// SERVER LISTENING
server.listen(port, () => console.log('server ON: http://localhost:3333'));
