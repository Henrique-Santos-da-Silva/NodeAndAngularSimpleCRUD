import { Router } from "express";
import { index, show, create, update, deleteTelephone } from './controllers/TelephoneBookController';

const routes = Router();

routes.get('/api', index);
routes.get('/api/:id', show);

routes.post('/api', create);
routes.put('/api/:id', update);
routes.delete('/api/:id', deleteTelephone);


export default routes;