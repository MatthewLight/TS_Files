import express from 'express';
import routes from './routes/routes';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);
