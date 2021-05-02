import cors from "cors";
import express from "express";
import routes from './routes';

import './database/connection';
import 'reflect-metadata';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('Server started');
});