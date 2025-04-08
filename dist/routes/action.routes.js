import { createAction, listActions } from '../controllers/action.controller.js';
export async function actionRoutes(server) {
    server.get('/actions', listActions);
    server.post('/actions', createAction);
}
