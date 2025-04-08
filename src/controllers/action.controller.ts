import { FastifyRequest, FastifyReply } from 'fastify';
import { Action } from '../models/index.js';

export async function createAction(request: FastifyRequest, reply: FastifyReply) {
  const { type, payload } = request.body as { type: string; payload: object };
  const action = await Action.create({ type, payload });
  return reply.code(201).send(action);
}

export async function listActions(request: FastifyRequest, reply: FastifyReply) {
  const actions = await Action.findAll();
  return reply.send(actions);
}