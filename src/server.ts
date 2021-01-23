import { app } from './app';
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env || 5000;
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT, () => console.log('Started...'));
