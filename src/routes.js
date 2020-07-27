import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import BookController from './app/controllers/BookController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

// require authentication from here
routes.use(authMiddleware);

routes.get('/books', BookController.index);

routes.post('/books', BookController.store);

routes.put('/books/:id', BookController.update);

routes.delete('/books/:id', BookController.delete);

export default routes;
