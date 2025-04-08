import { Action } from '../models/index.js';
export async function createAction(request, reply) {
    const { type, payload } = request.body;
    const action = await Action.create({ type, payload });
    return reply.code(201).send(action);
}
export async function listActions(request, reply) {
    const actions = await Action.findAll();
    return reply.send(actions);
}
