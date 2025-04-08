import { FastifyInstance } from 'fastify';
import { createAction, listActions } from '../controllers/action.controller.js';

export async function actionRoutes(server: FastifyInstance) {
  server.get('/actions', listActions);
  server.post('/actions', createAction);
}