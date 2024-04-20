import app from './src/app';
import { startServer } from './src/server/server';
import dotenv from 'dotenv';

dotenv.config();

startServer(app);
